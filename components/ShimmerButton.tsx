"use client";

import React from "react";
import Link from "next/link";

interface ShimmerButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export default function ShimmerButton({ children, className = "", onClick, href }: ShimmerButtonProps) {
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty("--x", `${x}%`);
        btn.style.setProperty("--y", `${y}%`);
    };

    if (href) {
        return (
            <Link
                href={href}
                onClick={onClick}
                onMouseMove={handleMouseMove}
                className={`shimmer-btn ${className}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            className={`shimmer-btn ${className}`}
        >
            {children}
        </button>
    );
}
