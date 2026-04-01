import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const sections = [
  {
    title: "Data We Keep",
    text: "This website is informational. We do not request sensitive personal data through the product pages.",
  },
  {
    title: "Analytics",
    text: "If analytics are enabled in the future, usage data will be limited to improving product quality and site reliability.",
  },
  {
    title: "Third Party Links",
    text: "Links to Discord and GitHub are provided for community and development updates. Their own privacy policies apply.",
  },
  {
    title: "Policy Updates",
    text: "This privacy page may be updated as products move from testing to release.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff] overflow-x-hidden">
      <Header />

      <main className="relative mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-24">
        <div className="brutal-shell p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#a78bfa]">Legal</p>
            <h1 className="font-heading uppercase leading-[0.9] text-[clamp(2.2rem,6vw,3.6rem)]">Privacy</h1>
            <p className="max-w-3xl text-sm uppercase tracking-[0.03em] text-[#a29ada]/80">
              This page explains the current privacy approach for Amethyst Studios website and product channels.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5">
          {sections.map((section) => (
            <section key={section.title} className="brutal-card p-6">
              <h2 className="font-heading uppercase text-2xl text-[#e9e7ff]">{section.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.03em] text-[#a29ada]/80 leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
