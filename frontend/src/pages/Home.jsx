import React from 'react'

function Home() {
  return (
    <main className="flex justify-between items-center p-12">
        <section className="max-w-lg">
          <h1 className="text-3xl font-bold mb-5">
            Learn More About Us | ZKHealthCare Medical Institute
          </h1>
          <p className="text-lg leading-relaxed">
            ZKHealthCare Medical Institute is a state-of-the-art facility dedicated to providing comprehensive healthcare
            services with compassion and expertise. Our team of skilled professionals is committed to delivering
            personalized care tailored to each patients needs. At ZKHealthCare, we prioritize your well-being, ensuring a
            harmonious journey towards optimal health and wellness.
          </p>
        </section>
        <section className="w-1/3">
          <img src="banner.jpeg" alt="ZKHealthCare Illustration" className="w-full h-auto" />
        </section>
      </main>
  )
}

export default Home