import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import NotFound from './NotFound.jsx'

// Map each slug to its page component (lazy loaded)
const blogComponents = {
  'top-20-kitesurf-destinations-part-1': lazy(() =>
    import('./blog/top-20-kitesurf-destinations-part-1.jsx')
  ),
  '7-different-plans-of-a-kitesurf-trip-to-peru': lazy(() =>
    import('./blog/7-different-plans-of-a-kitesurf-trip-to-peru.jsx')
  ),
  '7-Nights-in-Mancora-Progression-Plan': lazy(() =>
    import('./blog/7-Nights-in-Mancora-Progression-Plan7-Nights-in-Mancora-Progression-Plan.jsx')
  ),
  'Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level)': lazy(() =>
    import('./blog/Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level).jsx')
  ),
  'Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching)': lazy(() =>
    import('./blog/Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching).jsx')
  ),
  'Kite-Safari-Northern-Peru': lazy(() =>
    import('./blog/Kite-Safari-Northern-Peru.jsx')
  ),
  'Whale-Season-in-Northern-Peru': lazy(() =>
    import('./blog/Whale-season-in-northern-Peru-what-its-like-to-sail-with-whales-and-when-it-happens.jsx')
  ),
  'Mancora-Whale-Season': lazy(() =>
    import('./blog/Mancora-Whale-Season.jsx')
  ),
  'Wingfoil-vs-Kitesurf-Choosing-Your-Weapon': lazy(() =>
    import('./blog/Wingfoil-vs-Kitesurf-Choosing-Your-Weapon.jsx')
  ),
  'Safety-and-Progression-The-Technical-Edge': lazy(() =>
    import('./blog/Data-Strip-Safety.jsx')
  ),
}

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#031015] text-white">
      Loading...
    </div>
  )
}

function BlogPostRouter() {
  const { slug } = useParams()
  const PostComponent = blogComponents[slug]

  if (!PostComponent) {
    return <NotFound />
  }

  return (
    <Suspense fallback={<Loading />}>
      <PostComponent />
    </Suspense>
  )
}

export default BlogPostRouter
