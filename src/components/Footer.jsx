export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <img src="/assets/logo-xl.png" alt="KeenKeeper" className="h-12 mb-4" />
          <p className="max-w-md text-white/80 mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <div>
            <p className="text-sm uppercase tracking-widest mb-3">Social Links</p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all">
                <img src="/assets/facebook.png" alt="Facebook" className="w-full h-full" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all">
                <img src="/assets/instagram.png" alt="Instagram" className="w-full h-full" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all">
                <img src="/assets/twitter.png" alt="Twitter" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-6 text-center text-sm text-white/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}