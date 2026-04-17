import { Link } from "react-router-dom"

function SidebarPostItem({ title, image, slug }) {
  return (
    <Link to={`/blog/${slug}`} className="flex gap-4 group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="h-16 w-16 rounded-lg object-cover"
      />
      <p className="text-sm text-slate-700 transition group-hover:text-primary">
        {title}
      </p>
    </Link>
  )
}