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

        <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16" data-left>
          <div className="space-y-6 flex-1">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium text-[#c4b5fd]">
              <span className="h-px w-10 bg-[#c4b5fd]/40" />
              Core
            </div>

            <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,7vw,3.8rem)]">
              Lightweight client.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b5cf6] to-[#c4b5fd]">
                Better frames.
              </span>
            </h2>
          </div>

          <p className="flex-1 max-w-xl text-lg text-[#a78bfa]/80 leading-relaxed font-light">
            Lower memory use. Stable frame times. No background junk eating performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { num: "01", title: "Rendering", desc: "Faster draw pipeline for smoother gameplay." },
            { num: "02", title: "Memory", desc: "Lower usage and fewer spikes." },
            { num: "03", title: "UI", desc: "Clean HUD. Nothing distracting." },
            { num: "04", title: "Privacy", desc: "No tracking. No telemetry." }
          ].map((item, i) => (
            <div
              key={i}
              data-card
              className="group relative p-10 rounded-md bg-white/2 border border-white/5 hover:border-[#8b5cf6]/30 hover:bg-white/4 transition-all duration-500 overflow-hidden"
            >
              <span className="block font-heading text-4xl mb-10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 text-white">
                {item.num}
              </span>

              <h3 className="text-[#e9e7ff] font-bold tracking-widest uppercase text-sm mb-4 group-hover:text-[#8b5cf6] transition-colors">
                {item.title}
              </h3>

              <p className="text-[11px] text-[#a78bfa]/70 leading-relaxed uppercase font-medium">
                {item.desc}
              </p>

              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#8b5cf6]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
