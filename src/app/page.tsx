import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Network
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          The Multi-Chain Future
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          A scalable, interoperable blockchain network built for the next generation of decentralized applications.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi-Chain Architecture</h2>
          <p className="text-lg text-gray-400">Six specialized chains working together: A, B, C, D, Y, and Z chains.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Post-Quantum Security</h2>
          <p className="text-lg text-gray-400">Future-proof cryptography protects your assets against quantum threats.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sub-Second Finality</h2>
          <p className="text-lg text-gray-400">Quasar consensus delivers near-instant transaction finality.</p>
        </div>
      </section>

    </main>
  )
}
