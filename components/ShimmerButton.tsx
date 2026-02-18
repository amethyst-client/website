"use client";

import React, { useRef } from "react";

interface ShimmerButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function ShimmerButton({ children, className = "", onClick }: ShimmerButtonProps) {
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = btnRef.current;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty("--x", `${x}%`);
        btn.style.setProperty("--y", `${y}%`);
    };

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            className={`shimmer-btn ${className}`}
        >
            {children}
        </button>
    );
}
