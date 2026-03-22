import { ProductData } from '@/types'

export const products: ProductData[] = [
  {
    id: 'arcbot',
    name: 'ArcBot',
    tagline: 'Your AI-powered frontline.',
    shortDescription: 'A robust, reliable, and accurate AI chatbot built for your business — deployable in minutes.',
    tags: ['Reliable', 'Safe', 'Accurate', 'Customizable'],
    href: '/products/arcbot',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-violet-600',
    accentColor: '#6366F1',
    bgGradient: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)',
    description:
      'ArcBot is a customized AI assistant designed for small and medium-sized enterprises. It handles customer inquiries, internal support tickets, and knowledge retrieval with the precision and safety your business demands. Powered by the latest large language models and fine-tuned to your company data, ArcBot responds accurately — every time.',
    features: [
      {
        icon: 'Shield',
        title: 'Enterprise Safety',
        description:
          'Built-in guardrails, content moderation, and hallucination reduction keep every response on-brand and factually grounded.',
      },
      {
        icon: 'Zap',
        title: 'Instant Responses',
        description:
          'Sub-second response times powered by optimized inference pipelines — your customers never wait.',
      },
      {
        icon: 'Brain',
        title: 'Contextual Memory',
        description:
          'ArcBot remembers the full conversation context, delivering coherent multi-turn dialogues that feel natural.',
      },
      {
        icon: 'FileText',
        title: 'Knowledge Integration',
        description:
          'Upload your FAQs, product manuals, or internal wikis. ArcBot retrieves and cites the right information every time.',
      },
      {
        icon: 'Globe',
        title: 'Multilingual',
        description:
          'Communicate with customers in over 50 languages without any additional setup or configuration.',
      },
      {
        icon: 'BarChart2',
        title: 'Analytics Dashboard',
        description:
          'Track conversation volumes, resolution rates, and customer satisfaction scores from a unified dashboard.',
      },
    ],
    useCases: [
      {
        title: 'Customer Service',
        description:
          'Replace tier-1 support tickets with an AI that resolves 80% of common queries instantly, 24/7.',
      },
      {
        title: 'Internal Help Desk',
        description:
          'Let employees query HR policies, IT procedures, and company guidelines without waiting for a response.',
      },
      {
        title: 'Sales Assistant',
        description:
          'Qualify leads, answer product questions, and book demo calls — all without human intervention.',
      },
    ],
  },
  {
    id: 'arcflow',
    name: 'ArcFlow',
    tagline: 'Automate the work. Amplify the team.',
    shortDescription: 'An AI workflow orchestrator that connects your existing tools and automates multi-step business processes.',
    tags: ['Automated', 'Integrated', 'Scalable'],
    href: '/products/arcflow',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-teal-600',
    accentColor: '#22D3EE',
    bgGradient: 'radial-gradient(ellipse at 80% 50%, rgba(34,211,238,0.08) 0%, transparent 60%)',
    description:
      'ArcFlow is an intelligent workflow automation platform built for the way SMEs actually operate. It connects your CRM, email, Slack, ERP, and any other tool your team relies on — then orchestrates multi-step automated processes triggered by real business events. Stop doing the same thing twice.',
    features: [
      {
        icon: 'GitBranch',
        title: 'Workflow Orchestration',
        description:
          'Design branching, conditional workflows with a visual builder. AI fills in the logic gaps you did not anticipate.',
      },
      {
        icon: 'Plug',
        title: 'Native Integrations',
        description:
          'Pre-built connectors for Salesforce, HubSpot, Gmail, Slack, Notion, Jira, and 100+ other tools.',
      },
      {
        icon: 'BarChart2',
        title: 'Live Analytics',
        description:
          'Monitor automation performance, catch bottlenecks, and measure time saved in real time.',
      },
      {
        icon: 'Bell',
        title: 'Smart Triggers',
        description:
          'Start workflows on schedules, webhooks, email events, form submissions, or AI-detected business signals.',
      },
      {
        icon: 'Lock',
        title: 'Role-based Access',
        description:
          'Control who can build, run, or view each workflow with granular permission settings.',
      },
      {
        icon: 'RefreshCw',
        title: 'Error Recovery',
        description:
          'Automatic retries, fallback paths, and human-in-the-loop escalation keep workflows running even when things go wrong.',
      },
    ],
    useCases: [
      {
        title: 'Lead Nurturing',
        description:
          'Automatically enrich new leads, assign them to sales reps, and trigger personalized email sequences — all without lifting a finger.',
      },
      {
        title: 'Invoice Processing',
        description:
          'Extract data from incoming invoices, match them to purchase orders, and route them for approval automatically.',
      },
      {
        title: 'Employee Onboarding',
        description:
          'Trigger account provisioning, welcome emails, and training assignments the moment HR marks a hire as confirmed.',
      },
    ],
  },
]

export function getProductById(id: string): ProductData | undefined {
  return products.find((p) => p.id === id)
}
