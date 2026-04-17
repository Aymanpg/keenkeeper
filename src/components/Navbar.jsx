import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-4 text-lg font-medium transition-all rounded-2xl w-full ${
      isActive
        ? 'bg-primary text-white'
        : 'text-black hover:bg-[#f0f7f4] hover:text-primary'
    }`

  return (
    <nav className="bg-white border-b border-accent shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="KeenKeeper" className="h-9 w-auto" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={closeMobileMenu}
          >
            <Home size={22} />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={navLinkClass}
            onClick={closeMobileMenu}
          >
            <Clock size={22} />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={navLinkClass}
            onClick={closeMobileMenu}
          >
            <BarChart3 size={22} />
            Stats
          </NavLink>
        </div>

        {/* Mobile Hamburger Button - Visible only on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-xl hover:bg-[#f0f7f4] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Slides down when open */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 sm:px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              <Home size={24} />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              <Clock size={24} />
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              <BarChart3 size={24} />
              Stats
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}