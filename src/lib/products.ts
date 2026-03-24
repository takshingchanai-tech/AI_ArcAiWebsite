export interface ProductMeta {
  id: string
  href: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  bgGradient: string
  featureIcons: string[]
}

export const productsMeta: ProductMeta[] = [
  {
    id: 'arcbot',
    href: '/products/arcbot',
    accentColor: '#6366F1',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-violet-600',
    bgGradient: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)',
    featureIcons: ['Layers', 'Filter', 'Network', 'Shield', 'Lock', 'Target'],
  },
  {
    id: 'arcflow',
    href: '/products/arcflow',
    accentColor: '#22D3EE',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-teal-600',
    bgGradient: 'radial-gradient(ellipse at 80% 50%, rgba(34,211,238,0.08) 0%, transparent 60%)',
    featureIcons: ['GitBranch', 'Plug', 'BarChart2', 'Bell', 'Lock', 'RefreshCw'],
  },
]

export function getProductMetaById(id: string): ProductMeta | undefined {
  return productsMeta.find((p) => p.id === id)
}
