"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      const q = self.selector!;

      gsap.set(q("[data-scale]"), { autoAlpha: 1 });
      gsap.set(q("[data-line-fill]"), { scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(q("[data-scale]"), {
        scale: 0.92,
        autoAlpha: 0,
        duration: 0.5,
        ease: "expo.out"
      })
      .to(q("[data-line-fill]"), {
        scaleX: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15
      }, "-=0.6")
      .from(q("[data-left]"), {
        x: -24,
        autoAlpha: 0,
        duration: 0.8,
        ease: "expo.out"
      }, "-=0.8")
      .from(q("[data-right-item]"), {
        x: 24,
        autoAlpha: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.12
      }, "-=0.9");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 pb-32" id="performance">
      <div
        className="pointer-events-none absolute left-[36%] top-[8%] z-10 text-[clamp(4rem,15vw,10rem)] font-heading uppercase tracking-tighter text-white/7 select-none"
      >
        CLIENT
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="h-px w-full bg-white/5 mb-24" />
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-20 items-end">

          <div className="space-y-10" data-left>
            <h2
              className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.6rem,7vw,3.8rem)]"
              data-scale
            >
              Smooth. Stable.
            </h2>

            <p className="max-w-xl text-lg text-[#a29ada]/80 leading-relaxed font-light">
              Amethyst keeps things simple. Less junk running in the background, and consistent frame times. Launch and play.
            </p>
          </div>

          <div className="space-y-8 pb-4">

            {[
              { label: "Frame pacing", value: "Consistent" },
              { label: "Crashes", value: "Rare" }
            ].map((item) => (
              <div key={item.label} className="space-y-4" data-right-item>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#c4b5fd] font-medium">
                  <span>{item.label}</span>
                  <span className="text-white/40">{item.value}</span>
                </div>

                <div className="h-px w-full bg-white/10 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-[#8b5cf6] origin-left"
                    data-line-fill
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
