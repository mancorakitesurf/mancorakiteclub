import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const REVEAL_TRANSITION = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

const LOAD_DELAY_MS = 300

function LoadMorePosts({
  posts,
  renderPost,
  initialCount = 4,
  increment = 3,
  buttonLabel = "Load More Articles",
  className = "grid grid-cols-1 gap-8",
  getKey,
}) {
  const [visibleCount, setVisibleCount] = useState(() => Math.min(initialCount, posts.length))
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const clampedVisibleCount = Math.min(Math.max(visibleCount, initialCount), posts.length)
  const visiblePosts = posts.slice(0, clampedVisibleCount)
  const hasMorePosts = clampedVisibleCount < posts.length

  const handleLoadMore = () => {
    if (loading || !hasMorePosts) {
      return
    }

    setLoading(true)

    timeoutRef.current = setTimeout(() => {
      setVisibleCount((current) => Math.min(Math.max(current, initialCount) + increment, posts.length))
      setLoading(false)
      timeoutRef.current = null
    }, LOAD_DELAY_MS)
  }

  return (
    <div className="space-y-10">
      <div className={className}>
        {visiblePosts.map((post, index) => (
          <motion.div
            key={getKey ? getKey(post, index) : post.slug ?? post.id ?? index}
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...REVEAL_TRANSITION,
              delay: (index % increment) * 0.05,
            }}
          >
            {renderPost(post, index)}
          </motion.div>
        ))}
      </div>

      {hasMorePosts ? (
        <motion.div layout className="flex justify-center">
          <motion.button
            type="button"
            onClick={handleLoadMore}
            disabled={loading}
            className="group relative inline-flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(42,157,143,0.24)] disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-8"
            whileHover={loading ? undefined : { y: -2, scale: 1.01 }}
            whileTap={loading ? undefined : { scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">{loading ? "Loading..." : buttonLabel}</span>
          </motion.button>
        </motion.div>
      ) : null}
    </div>
  )
}

export default LoadMorePosts
