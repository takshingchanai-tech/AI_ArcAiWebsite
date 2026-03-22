import HeroSection from '@/components/home/HeroSection'
import ProductSection from '@/components/home/ProductSection'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Products section */}
      <section id="products" className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-arc-text mb-4">
            Our Products
          </h2>
          <p className="text-arc-muted text-lg max-w-xl mx-auto">
            Purpose-built AI tools that slot into your existing workflows —
            no AI expertise required.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {products.map((product, i) => (
            <ProductSection key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl border border-arc-border overflow-hidden p-12 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <h2 className="relative text-3xl sm:text-4xl font-bold text-arc-text mb-4">
            Ready to build your AI?
          </h2>
          <p className="relative text-arc-muted text-lg max-w-lg mx-auto mb-8">
            Get in touch and we will design a custom AI solution tailored to
            your business in days, not months.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </>
  )
}
