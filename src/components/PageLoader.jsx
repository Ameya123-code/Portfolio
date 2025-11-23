import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'motion/react'

// Local/static loader image path. Please put the provided GIF at this path:
// `public/assets/minecraft-loader.gif`
const LOADER_SRC = '/assets/minecraft-loader.gif'

// How long the loader should stay visible (ms). Adjust as desired.
const DEFAULT_DURATION = 5500

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    // animate progress from 0 -> 100 over DEFAULT_DURATION
    startRef.current = performance.now()

    function step(now) {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      const pct = Math.min(100, Math.floor((elapsed / DEFAULT_DURATION) * 100))
      setProgress(pct)
      if (elapsed >= DEFAULT_DURATION) {
        setExiting(true)
        return
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    if (!exiting) return
    const t = setTimeout(() => setVisible(false), 700)
    return () => clearTimeout(t)
  }, [exiting])

  if (!visible) return null

  const segments = 20
  const filled = Math.round((progress / 100) * segments)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Centered Minecraft-style loader frame */}
      <div
        className="relative z-50 flex flex-col items-center"
        style={{
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        {/* Pixel/dirt frame using bgimage tile if available */}
        <div className="p-4">
          <div className="bg-black w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex flex-col items-center justify-center">
            <div className="text-white font-mono text-[20px] md:text-[28px] drop-shadow-md mb-6">{progress}%</div>

            {/* Minecraft-like segmented bar */}
            <div className="w-[260px] md:w-[360px] h-10 bg-[#0f0f0f] border-4 border-[#2b2b2b] p-1">
              <div className="w-full h-full bg-[#1a1a1a] flex">
                {Array.from({ length: segments }).map((_, i) => (
                  <div
                    key={i}
                    style={{ width: `${100 / segments}%` }}
                    className={
                      'h-full ' +
                      (i < filled
                        ? 'bg-emerald-500 shadow-[inset_0_-4px_0_rgba(0,0,0,0.35)]'
                        : 'bg-gray-800')
                    }
                  />
                ))}
              </div>
            </div>

            <div className="text-xs text-gray-300 mt-4">Loading assets...</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
