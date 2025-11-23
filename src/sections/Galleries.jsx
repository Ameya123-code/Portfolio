import React, { useState } from 'react'
import { motion } from 'motion/react'

const defaultImages = [
  '/assets/projects/accessories.jpg',
  '/assets/projects/auth-system.jpg',
  '/assets/projects/blazor-app.jpg',
  '/assets/projects/elearning.jpg',
  '/assets/projects/game-engine.jpg',
  '/assets/projects/wordpress-theme.jpg',
  '/assets/coding-pov.png'
]

export default function Galleries({ images = defaultImages }) {
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">Galleries</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 h-[1px] w-full" />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-lg shadow-lg bg-neutral-900"
          >
            <button
              onClick={() => setSelected(src)}
              className="block w-full h-full focus:outline-none"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-56 object-cover md:h-64"
                loading="lazy"
              />
            </button>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-2xl"
            aria-label="Close gallery preview"
          >
            ✕
          </button>
          <motion.img
            src={selected}
            alt="preview"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="max-w-full max-h-full rounded-md shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
