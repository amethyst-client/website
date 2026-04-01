"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Collections", ariaLabel: "View product collections", link: "/collections" },
    { label: "Process", ariaLabel: "How we build", link: "/#process" },
    { label: "Status", ariaLabel: "View product status", link: "/download" },
];

const socialItems = [
    { label: "Discord", link: "https://discord.gg/WAFac8MxMx" },
    { label: "GitHub", link: "https://github.com/amethyst-studios" },
];

export default function Header() {
    return (
        <StaggeredMenu
            isFixed
            position="right"
            logoUrl="/logo.png"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={false}
            colors={["#1a0d2e", "#6d28d9"]}
            accentColor="#8b5cf6"
        />
    );
}
