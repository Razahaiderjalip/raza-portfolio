"use client";
import Container from "./Container";
import React, { useState } from "react";
import Logo from "./Logo";
import { navbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import SidebarPage from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="border-b border-b-hoverColor/50 bg-bodyColor text-white/80 sticky top-0 z-50">
      <Container className="py-5 flex justify-between items-center ">
        <Logo title="Raza Haider" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 uppercase text-sm tracking-wide font-medium">
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect relative overflow-x-hidden group ${
                pathname === item?.href && "text-hoverColor"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
          <Link
            href={"/pdfs/Updated Local CV Raza Haider 23-12-2024.pdf"}
            target="_blank"
            rel="noopener noreferer"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire me
          </Link>
        </div>
        <button
          className="md:hidden inline-flex relative hover:text-hoverColor hoverEffect"
          aria-label="Toggle menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </button>
      </Container>
      <div className="md:hidden">
        <SidebarPage
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathname={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
