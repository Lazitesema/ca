import { NavMenu } from "@/components/nav-menu"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <>
      <NavMenu />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover our comprehensive suite of financial services designed to make money transfers simple, secure,
                and affordable.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Instant Transfers"
                description="Send money instantly to any bank account or mobile wallet in Africa. Our advanced technology ensures your transfers are processed within seconds."
                icon="💸"
              />
              <ServiceCard
                title="Secure Payments"
                description="Bank-grade security protecting every transaction. We use the latest encryption technology to keep your money and data safe."
                icon="🔒"
              />
              <ServiceCard
                title="Low Fees"
                description="Competitive rates and transparent fee structure. No hidden charges, just honest pricing for all your transfers."
                icon="💰"
              />
              <ServiceCard
                title="Mobile Wallet"
                description="Store and manage your money digitally. Our mobile wallet makes it easy to keep track of your finances on the go."
                icon="📱"
              />
              <ServiceCard
                title="Business Solutions"
                description="Tailored solutions for businesses of all sizes. Streamline your payment processes and manage multiple transactions efficiently."
                icon="💼"
              />
              <ServiceCard
                title="24/7 Support"
                description="Round-the-clock customer support. Our dedicated team is always ready to help you with any questions or concerns."
                icon="🌟"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold">Why Choose Cashora?</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Fast Processing",
                  description: "Instant transfers within seconds",
                },
                {
                  title: "Secure Platform",
                  description: "Bank-level security protocols",
                },
                {
                  title: "Wide Coverage",
                  description: "Available in 30+ African countries",
                },
                {
                  title: "Great Support",
                  description: "24/7 customer assistance",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

