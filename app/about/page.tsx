import { NavMenu } from "@/components/nav-menu"

export default function AboutPage() {
  return (
    <>
      <NavMenu />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Cashora</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're on a mission to revolutionize money transfers across Africa, making it easier for people to
                connect and transact.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                  At Cashora, we believe that sending money should be as easy as sending a message. Our platform is
                  built on the foundation of security, speed, and simplicity, ensuring that your money reaches its
                  destination safely and quickly.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="mt-4 text-gray-600">
                  We envision a future where financial barriers are eliminated, enabling seamless transactions across
                  borders. Our goal is to connect Africa through innovative financial technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold">Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Meet the passionate individuals behind Cashora who are working tirelessly to transform the financial
              landscape of Africa.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Smith",
                  role: "CEO & Founder",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Michael Brown",
                  role: "Head of Operations",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

