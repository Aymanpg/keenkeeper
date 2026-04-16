import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text-dark mb-6">Page Not Found</h2>
        <p className="text-text-body max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-semibold hover:bg-accent transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}