import Link from "next/link";

const footerSections = [
  {
    title: "Collections",
    links: [
      { label: "All Products", href: "/collections" },
      { label: "Amethyst Client", href: "/collections/asdwaftg" },
      { label: "Product Status", href: "/download" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "Discord", href: "https://discord.gg/WAFac8MxMx" },
      { label: "GitHub", href: "https://github.com/amethyst-studios" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-30 mt-24 border-t border-[#3e2a63] bg-[#0d0718]/95">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 pt-12 pb-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#a78bfa]">Amethyst Studios</p>
            <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#e9e7ff] leading-[0.95]">
              Indie Tools For Real Use
            </h2>
            <p className="max-w-sm text-xs uppercase tracking-[0.03em] text-[#a29ada]/75">
              Building client and server products with practical features, stable updates, and clear release notes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.22em] text-[#c4b5fd]">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs uppercase tracking-[0.06em] text-[#a29ada]/85 transition-colors hover:text-[#e9e7ff]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#a29ada]/70">
            {new Date().getFullYear()} Amethyst Studios. All rights reserved.
          </p>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden pb-3">
        <p className="font-heading text-center uppercase leading-none tracking-tight text-[clamp(2.2rem,10vw,7rem)] text-[#2a1453]/75">
          AMETHYST STUDIOS
        </p>
      </div>
    </footer>
  );
}
