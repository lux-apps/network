'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const features = [
  "Sovereign and unstoppable",
  "Lightning-fast transactions",
  "Future-proof quantum security",
  "Privacy built for the modern age",
  "Effortless high-yield staking",
]

const chains = [
  { name: 'A-Chain', description: 'Asset Chain - Multi-asset transfers and management', color: 'from-blue-500 to-blue-700' },
  { name: 'B-Chain', description: 'Bridge Chain - Cross-chain interoperability', color: 'from-purple-500 to-purple-700' },
  { name: 'C-Chain', description: 'Contract Chain - EVM-compatible smart contracts', color: 'from-green-500 to-green-700' },
  { name: 'D-Chain', description: 'Data Chain - Decentralized storage and data', color: 'from-orange-500 to-orange-700' },
  { name: 'Y-Chain', description: 'Yield Chain - DeFi and staking protocols', color: 'from-pink-500 to-pink-700' },
  { name: 'Z-Chain', description: 'Zero-Knowledge Chain - Privacy-preserving transactions', color: 'from-cyan-500 to-cyan-700' },
]

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="https://bridge.lux.network" className="hover:text-gray-300 transition-colors">Bridge</Link>
            <Link href="https://explore.lux.network" className="hover:text-gray-300 transition-colors">Explorer</Link>
            <Link href="https://docs.lux.network" className="hover:text-gray-300 transition-colors">Docs</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20">
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          <p className="text-base text-gray-400 mb-2">
            Access to over $3.1 trillion hyper liquid assets and growing
          </p>
          <p className="text-2xl text-gray-200 mb-4">
            Private, Post-Quantum, <span className="font-bold">Sovereign DeFi</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            LUX NETWORK
          </h1>
          <ul className="space-y-3 mb-8 text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="#run-the-network"
              className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Run Chain
            </Link>
            <Link
              href="https://bridge.lux.network"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Bridge Assets
            </Link>
            <Link
              href="https://explore.lux.network"
              className="px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              Explore Network
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center">
          {mounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg"
              className="w-full max-w-lg rounded-lg"
            >
              <source src="https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </section>

      {/* Multi-Chain Architecture */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Six Chains, One Network
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            The Lux Network consists of six specialized chains, each optimized for specific use cases while maintaining seamless interoperability.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chains.map((chain) => (
              <div
                key={chain.name}
                className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${chain.color} flex items-center justify-center mb-4`}>
                  <span className="text-xl font-bold">{chain.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{chain.name}</h3>
                <p className="text-gray-400 text-sm">{chain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Quantum Security */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Post-Quantum Security</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Lux Network implements NIST-approved post-quantum cryptographic algorithms to protect against future quantum computing threats.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'ML-KEM', description: 'Key encapsulation mechanism for secure key exchange' },
              { name: 'ML-DSA', description: 'Digital signature algorithm for transaction signing' },
              { name: 'SLH-DSA', description: 'Hash-based signatures for long-term security' },
            ].map((algo) => (
              <div key={algo.name} className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{algo.name}</h3>
                <p className="text-gray-400 text-sm">{algo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quasar Consensus */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Quasar Consensus</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Sub-second finality with our novel quantum-inspired consensus protocol. Experience blockchain transactions that feel instant.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: '<1s', label: 'Finality' },
              { value: '15K+', label: 'TPS' },
              { value: '99.99%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run the Network */}
      <section id="run-the-network" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Run the Network</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Become a validator and earn rewards while securing the network. Join thousands of validators powering the Lux ecosystem.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://docs.lux.network/validators"
              className="px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Become a Validator
            </Link>
            <Link
              href="https://stake.lux.network"
              className="px-8 py-4 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              Stake LUX
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">LUX</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="https://docs.lux.network" className="hover:text-white transition-colors">Docs</Link>
            <Link href="https://github.com/luxfi" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="https://discord.gg/lux" className="hover:text-white transition-colors">Discord</Link>
          </div>
          <p className="text-sm text-gray-500">© 2025 Lux Partners Limited</p>
        </div>
      </footer>
    </main>
  )
}
