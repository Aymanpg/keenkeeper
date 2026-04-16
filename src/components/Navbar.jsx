import { NavLink } from 'react-router-dom'
import { Home, Clock, BarChart3 } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="KeenKeeper" className="h-9 w-auto" />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 rounded-xl text-lg font-medium transition-all ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-black hover:bg-[#f0f7f4] hover:text-primary'
              }`
            }
          >
            <Home size={22} />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 rounded-xl text-lg font-medium transition-all ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-black hover:bg-[#f0f7f4] hover:text-primary'
              }`
            }
          >
            <Clock size={22} />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 rounded-xl text-lg font-medium transition-all ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-black hover:bg-[#f0f7f4] hover:text-primary'
              }`
            }
          >
            <BarChart3 size={22} />
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  )
}