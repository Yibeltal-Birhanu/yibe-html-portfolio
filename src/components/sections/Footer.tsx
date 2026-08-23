"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-white text-sm font-bold">
              Y
            </div>
            <div>
              <span className="text-white font-semibold text-sm">
                Yibeltal Birhanu
              </span>
              <span className="block text-[#6b6b8a] text-xs">
                Software Developer • AI Builder
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: "Work", href: "#projects" },
              { label: "About", href: "#about" },
              { label: "Tech", href: "#tech" },
              { label: "GitHub", href: "https://github.com/yibeltal-birhanu", external: true },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[#6b6b8a] text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[#6b6b8a] text-xs">
            © {new Date().getFullYear()} Yibeltal Birhanu. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
