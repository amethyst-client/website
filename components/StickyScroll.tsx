"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StickyScroll() {
    const stickyRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": () => {
                    const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", stickyRef.current || undefined);

                    if (scenes.length > 0) {
                        gsap.set(scenes, { autoAlpha: 0, y: 18 });
                        gsap.set(scenes[0], { autoAlpha: 1, y: 0 });
                    }

                    if (stickyRef.current && scenes.length > 1) {
                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: stickyRef.current,
                                start: "top top",
                                end: `+=${scenes.length * 340}`,
                                scrub: 0.6,
                                pin: true,
                            },
                        });

                        const step = 1.1;
                        scenes.forEach((el, index) => {
                            if (index === 0) return;
                            tl.to(scenes[index - 1], { autoAlpha: 0, y: -12, duration: 0.5 }, index * step);
                            tl.to(el, { autoAlpha: 1, y: 0, duration: 0.5 }, index * step);
                        });
                    }
                },
                "(max-width: 1023px)": () => {
                    const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", stickyRef.current || undefined);
                    gsap.set(scenes, { autoAlpha: 1, y: 0 });
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={stickyRef} className="relative z-30" id="products">
            <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 pb-32 pt-20">
                <div className="brutal-shell relative min-h-[80vh] p-6 sm:p-8 lg:p-10">
                    <div className="lg:absolute lg:left-10 lg:top-[22%] lg:max-w-xl space-y-6" data-scene>
                        <div className="brutal-chip inline-flex items-center gap-3 px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8b5cf6]">
                            <span className="h-px w-6 bg-[#8b5cf6]/40" />
                            01 Product
                        </div>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Amethyst Client
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/90 leading-relaxed font-light">
                            A high performance Minecraft client focused on stable gameplay, lower resource use, and free access.
                        </p>
                    </div>

                    <div className="lg:absolute lg:left-10 lg:top-[22%] lg:max-w-xl space-y-6" data-scene>
                        <div className="brutal-chip inline-flex items-center gap-3 px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8b5cf6]">
                            <span className="h-px w-6 bg-[#8b5cf6]/40" />
                            02 Product
                        </div>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Amethyst Purge
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/90 leading-relaxed font-light">
                            A PaperMC plugin with a 7 day purge event, team systems, custom structures, and special weapons.
                        </p>
                    </div>

                    <div className="lg:absolute lg:left-10 lg:top-[22%] lg:max-w-xl space-y-6" data-scene>
                        <div className="brutal-chip inline-flex items-center gap-3 px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8b5cf6]">
                            <span className="h-px w-6 bg-[#8b5cf6]/40" />
                            03 Studio
                        </div>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Build. Test. Improve.
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/90 leading-relaxed font-light">
                            We build small first versions, test in real sessions, and keep the updates that actually help users.
                        </p>
                    </div>
                </div>

                <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
                    <div className="flex flex-col gap-8 text-right opacity-15">
                        <div className="text-[10rem] font-heading uppercase leading-none tracking-tighter">
                            AMETHYST
                        </div>
                        <div className="text-[10rem] font-heading uppercase leading-none tracking-tighter text-transparent border-t border-white/25 pt-8" style={{ WebkitTextStroke: "1px rgba(196,181,253,0.5)" }}>
                            STUDIOS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
