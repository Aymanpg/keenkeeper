import { useEffect } from 'react'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-6 right-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-50">
      <span className="text-2xl">✅</span>
      <p className="font-medium">{message}</p>
    </div>
  )
}