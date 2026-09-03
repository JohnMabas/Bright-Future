

export default function Footer() {
  return (
    <div>
       <footer className="bg-[#0b1f3a] text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0b1f3a]" fill="currentColor">
                  <path d="M12 2 2 7l10 5 8-4.1V17h2V7L12 2Z" />
                  <path d="M6 10.5V16c0 2 3 4 6 4s6-2 6-4v-5.5l-6 3-6-3Z" opacity="0.6" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold leading-tight"> BrightFuture</p>
                <p className="text-white font-semibold leading-tight">Secondary School</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Quick links, contact information and social media.
            </p>
          </div>
 
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
 

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                {/* <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" /> */}
                <span>123 Education Street, Cityville</span>
              </li>
              <li className="flex items-center gap-2">
                {/* <Phone className="w-4 h-4 shrink-0 text-slate-400" /> */}
                <span>+234 809 234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                {/* <Mail className="w-4 h-4 shrink-0 text-slate-400" /> */}
                <span>info@brightview.edu.ng</span>
              </li>
            </ul>
 
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                {/* <Facebook className="w-4 h-4" /> */}
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                {/* <Twitter className="w-4 h-4" /> */}
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                {/* <Instagram className="w-4 h-4" /> */}
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                {/* <Youtube className="w-4 h-4" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Brightview Secondary School. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
