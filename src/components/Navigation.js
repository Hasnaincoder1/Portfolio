"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tight text-[#053C5E]">
        <Link href="/">PORTFOLIO</Link>
      </div>
      <div className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-[#D3B88C] ${
              pathname === link.href ? "text-[#D3B88C]" : "text-gray-600"
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <motion.div
                layoutId="underline"
                className="h-0.5 bg-[#D3B88C] mt-0.5"
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
