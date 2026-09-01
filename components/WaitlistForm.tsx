'use client'

import { useState } from 'react'
import { GoldButton } from './GoldButton'

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    assetClass: '',
    ticketSize: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Waitlist submission:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', contact: '', assetClass: '', ticketSize: '' })
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-surface-light rounded-lg p-8 border border-gold-600/30 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-gold-400 mb-2">Request Received</h3>
        <p className="text-dim">
          Thank you for your interest. We&apos;ll notify you when assets matching your criteria become available.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-cream mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-cream placeholder-dim focus:outline-none focus:border-gold-600 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-cream mb-2">Contact Email</label>
        <input
          type="email"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-cream placeholder-dim focus:outline-none focus:border-gold-600 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-cream mb-2">Preferred Asset Class</label>
        <select
          name="assetClass"
          value={formData.assetClass}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold-600 transition-colors"
        >
          <option value="">Select a class</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Aviation">Aviation</option>
          <option value="Watches">Watches</option>
          <option value="Carbon">Carbon</option>
          <option value="Collectibles">Collectibles</option>
          <option value="Private Credit">Private Credit</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-cream mb-2">Ticket Size Range</label>
        <select
          name="ticketSize"
          value={formData.ticketSize}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold-600 transition-colors"
        >
          <option value="">Select range</option>
          <option value="under-25k">Under $25k</option>
          <option value="25k-100k">$25k - $100k</option>
          <option value="100k-500k">$100k - $500k</option>
          <option value="above-500k">Above $500k</option>
        </select>
      </div>

      <GoldButton type="submit" size="lg" className="w-full mt-6">
        Request Participation Access
      </GoldButton>
    </form>
  )
}
