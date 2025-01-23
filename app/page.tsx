import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50">
          <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 gap-8 px-4 py-20 md:grid-cols-2 md:py-32">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Transform Your Money Transfers <span className="text-orange-600">Across Africa</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Experience seamless, secure, and instant money transfers with Cashora. Send money to family, friends,
                and businesses across Africa with just a few clicks.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/signup">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80"
                alt="Happy people using mobile banking"
                className="rounded-2xl object-cover shadow-2xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience the future of money transfers with our comprehensive suite of services.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Instant Transfers"
                description="Send money instantly to any bank account or mobile wallet in Africa"
                icon="💸"
              />
              <ServiceCard
                title="Secure Payments"
                description="Bank-grade security ensuring your money is always safe"
                icon="🔒"
              />
              <ServiceCard title="Low Fees" description="Competitive rates and transparent fee structure" icon="💰" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-600 py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-6 text-lg leading-8">
                Join thousands of satisfied users who trust Cashora for their money transfer needs. Sign up now and
                experience the future of African finance.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Link href="/signup">Create Your Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-lg font-semibold">Cashora</h3>
                <p className="mt-4 text-sm text-gray-600">
                  Transforming money transfers across Africa with innovative technology and exceptional service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/about" className="hover:text-orange-600">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-orange-600">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-orange-600">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Legal</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/privacy" className="hover:text-orange-600">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-orange-600">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Connect</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>info@cashora.com</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Cashora. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

