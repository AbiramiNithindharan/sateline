"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ContainerVariants, ItemVariants } from "./NavbarVariants";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
  },

  { name: "Case Study", href: "/case-studies" },

  { name: "contact", href: "/contact" },
];

const NavbarClient = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  /* Scroll detection useEffect for Navbar */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <div className="sticky top-0 z-50">
        <motion.nav
          variants={ContainerVariants}
          initial="hidden"
          animate="visible"
          className={`container w-full mx-auto py-4 md:py-6 px-6 md:px-12 rounded-2xl ${isScrolled ? "backdrop-blur-2xl" : "bg-transparent"}`}
        >
          <motion.div
            variants={ItemVariants}
            className="flex justify-between items-center"
          >
            {/* Logo and brand name */}
            <div className="flex items-center px-2 gap-1.5 ">
              <Link href="/">
                <Image
                  src="/Logo.jpg"
                  alt="Sateline logo"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
              </Link>

              <h3 className="brand text-lg md:text-xl lg:text-2xl text-shadow-blue-200 text-blue-900 uppercase">
                Sateline
              </h3>
            </div>
            {/* Nav links for desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {" "}
              {links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-linear-to-r after:from-blue-600
    after:to-cyan-500 after:transition-transform after:duration-300 hover:after:scale-x-100 uppercase text-sm text-blue-900 hover:text-blue-700"
                    href={link.href}
                  >
                    {link.name}

                    {pathname === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute left-0 -bottom-1 h-0.5 w-full bg-linear-to-r from-blue-800 via-cyan-700 to-violet-950 "
                        transition={{
                          damping: 30,
                          stiffness: 400,
                          type: "spring",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            {/* button for desktop */}
            <div className="hidden lg:block">
              <Button variant="default" className="rounded-full px-4 py-2">
                <Link href="/contact">Start Project</Link>
              </Button>
            </div>
            {/* button for mobile menu */}
            <Button
              variant="outline"
              className="h-10 w-10 lg:hidden"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
        </motion.nav>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="p-4 fixed inset-0 top-20 border-b
              border-slate-200 z-50  flex flex-col items-start justify-start gap-8 lg:hidden bg-white/95 backdrop-blur-md"
          >
            {links.map((link) => {
              return (
                <Button
                  asChild
                  variant="outline"
                  className="border-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
     flex
    items-center
    gap-3
    uppercase
    text-sm
    font-medium
    transition-colors
    duration-200
    ${
      pathname === link.href
        ? "text-blue-700"
        : "text-blue-900 hover:text-blue-700"
    }
  `}
                  >
                    <span
                      className={`
      h-5
      w-1
      rounded-full
      transition-colors
      ${pathname === link.href ? "bg-blue-700" : "bg-transparent"}
    `}
                    />

                    {link.name}
                  </Link>
                </Button>
              );
            })}

            <div className="mb-3 mt-4">
              <Button variant="default" className="px-4 py-2 rounded-full">
                <Link href="/contact">Start Project</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarClient;
