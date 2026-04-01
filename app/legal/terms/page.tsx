import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const sections = [
  {
    title: "Use Of Service",
    text: "By using Amethyst Studios products and website, you agree to use them responsibly and within applicable platform and server rules.",
  },
  {
    title: "Product Availability",
    text: "Products are in active development. Features, release timing, and access can change as testing progresses.",
  },
  {
    title: "Community Conduct",
    text: "Users are expected to keep interactions respectful in all official channels including Discord and issue trackers.",
  },
  {
    title: "Liability",
    text: "Software is provided as is during development stages. We work to keep builds stable but cannot guarantee uninterrupted operation.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff] overflow-x-hidden">
      <Header />

      <main className="relative mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-24">
        <div className="brutal-shell p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#a78bfa]">Legal</p>
            <h1 className="font-heading uppercase leading-[0.9] text-[clamp(2.2rem,6vw,3.6rem)]">Terms</h1>
            <p className="max-w-3xl text-sm uppercase tracking-[0.03em] text-[#a29ada]/80">
              These terms outline basic use expectations for the Amethyst Studios website and products.
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
