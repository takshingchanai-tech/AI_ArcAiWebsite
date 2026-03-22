export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface UseCase {
  title: string
  description: string
}

export interface ProductData {
  id: string
  name: string
  tagline: string
  shortDescription: string
  tags: string[]
  href: string
  gradientFrom: string
  gradientTo: string
  accentColor: string
  bgGradient: string
  description: string
  features: FeatureItem[]
  useCases: UseCase[]
}
