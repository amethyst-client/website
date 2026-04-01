"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeatureGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      const q = self.selector!;

      gsap.fromTo(q("[data-left]"),
        { x: -40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );

      gsap.fromTo(q("[data-card]"),
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 pt-24 pb-24" id="features">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">

        <div className="brutal-shell flex flex-col lg:flex-row gap-10 lg:items-end mb-12 p-6 sm:p-8" data-left>
          <div className="space-y-6 flex-1">
            <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.3em] font-medium text-[#c4b5fd]">
              <span className="h-px w-10 bg-[#c4b5fd]/40" />
              Process
            </div>

            <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,7vw,3.8rem)]">
              Plan. <span className="text-[#c4b5fd] border-b border-[#8b5cf6]/60">Build. Release.</span>
            </h2>
          </div>

          <p className="flex-1 max-w-xl text-sm sm:text-base text-[#a29ada]/80 leading-relaxed font-light">
            Our process stays simple. We validate ideas in real usage and release updates that add practical value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {[
            { num: "01", title: "Plan", desc: "Define the core feature and keep the scope focused." },
            { num: "02", title: "Test", desc: "Validate behavior in real sessions and server scenarios." },
            { num: "03", title: "Optimize", desc: "Tighten performance and remove unnecessary complexity." },
            { num: "04", title: "Release", desc: "Publish updates with clear notes and stable defaults." }
          ].map((item, i) => (
            <div
              key={i}
              data-card
                className="brutal-card brutal-shadow-hover group relative p-6 transition-all duration-300 overflow-hidden"
            >
                <span className="block font-heading text-4xl mb-7 opacity-30 transition-all duration-300 group-hover:opacity-100 text-white">
                {item.num}
              </span>

              <h3 className="text-[#e9e7ff] font-bold tracking-widest uppercase text-sm mb-4 group-hover:text-[#8b5cf6] transition-colors">
                {item.title}
              </h3>

              <p className="text-[11px] text-[#a78bfa]/70 leading-relaxed uppercase font-medium">
                {item.desc}
              </p>

                <div className="absolute bottom-0 right-0 h-2 w-16 bg-[#8b5cf6]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
