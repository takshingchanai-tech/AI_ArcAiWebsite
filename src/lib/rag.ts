import OpenAI from 'openai'
import { KNOWLEDGE_CHUNKS, type KnowledgeChunk } from './knowledge'

interface EmbeddedChunk extends KnowledgeChunk {
  embedding: number[]
}

// Module-level cache — embeddings are computed once per server process lifetime.
// On cold start the first request embeds all chunks; subsequent requests use the cache.
let embeddedChunksCache: EmbeddedChunk[] | null = null

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

async function embedText(text: string, openai: OpenAI): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  })
  return response.data[0].embedding
}

async function initEmbeddings(openai: OpenAI): Promise<EmbeddedChunk[]> {
  console.log(`[RAG] Embedding ${KNOWLEDGE_CHUNKS.length} knowledge chunks...`)
  const embedded = await Promise.all(
    KNOWLEDGE_CHUNKS.map(async (chunk) => ({
      ...chunk,
      embedding: await embedText(chunk.content, openai),
    }))
  )
  console.log('[RAG] Knowledge base ready.')
  return embedded
}

/**
 * Retrieve the top-k most relevant knowledge chunks for a given query.
 * Returns them as a formatted string ready to inject into the prompt.
 */
export async function retrieveContext(
  query: string,
  openai: OpenAI,
  topK = 5
): Promise<string> {
  if (!embeddedChunksCache) {
    embeddedChunksCache = await initEmbeddings(openai)
  }

  const queryEmbedding = await embedText(query, openai)

  const ranked = embeddedChunksCache
    .map((chunk) => ({
      content: chunk.content,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)

  return ranked.map((c, i) => `[${i + 1}] ${c.content}`).join('\n\n')
}
