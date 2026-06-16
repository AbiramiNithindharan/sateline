"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    services: [
      { label: "Web Development", href: "/" },
      { label: "Saas", href: "/" },
      { label: "Booking System", href: "/" },
      { label: "Dashboard management", href: "/" },
    ],
    href: "/services",
  },
  { name: "solutions", href: "/solutions" },
  { name: "portfolio", href: "/portfolio" },

  { name: "contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* Scroll detection useEffect for Navbar */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* detecting mousedown outside the services when services open */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`container max-w-7xl mx-auto mt-5 px-2 md:px-8 py-2 md:py-4  sticky z-50  ${isScrolled ? "backdrop-blur-2xl" : "bg-transparent"}`}
      >
        <div className="flex justify-between items-center">
          {/* Logo and brand name */}
          <div className="flex items-center px-2 gap-1.5 ">
            <Link href="/">
              <Image
                src={Logo}
                alt="Sateline logo"
                width={24}
                height={24}
                className="rounded-lg"
              />
            </Link>

            <h3 className="text-sm sm:text-xl font-bold text-shadow-blue-200 text-blue-900 ">
              Sateline
            </h3>
          </div>
          {/* Nav links for desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {" "}
            {links.map((link) => {
              if (link.name === "Services") {
                return (
                  <Fragment key={link.name}>
                    <div ref={serviceRef} className="relative">
                      <button
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:w-full after:scale-x-0 after:bg-linear-to-r
    after:from-blue-600
    after:to-cyan-500 hover:after:scale-x-100 after:transition-transform after:duration-300 flex items-center gap-1 uppercase text-sm text-blue-900 hover:text-blue-700 cursor-pointer"
                      >
                        {link.name}

                        <ChevronDown
                          className={`h-7 w-5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                        />

                        {pathname === link.href && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute left-0 -bottom-1 h-0.5 w-full bg-linear-to-r from-blue-600 to-cyan-500"
                            transition={{
                              damping: 30,
                              stiffness: 400,
                              type: "spring",
                            }}
                          />
                        )}
                      </button>
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-4 p-4  bg-white min-w-60  shadow shadow-blue-900 rounded-lg transition-all duration-300">
                          {link.services?.map((service) => {
                            return (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="py-2 block text-blue-900 hover:text-blue-500"
                              >
                                {service.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </Fragment>
                );
              }
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
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-linear-to-r from-blue-600 to-cyan-500"
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
              <Link href="/">Start Project</Link>
            </Button>
          </div>
          {/* button for mobile menu */}
          <Button
            variant="outline"
            className="w-10 h-10 flex items-center lg:hidden"
            aria-label="menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
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
              if (link.name === "Services") {
                return (
                  <div key={link.name} ref={serviceRef} className="relative">
                    <button
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                      className="flex items-center justify-between gap-4 uppercase text-sm text-blue-900 cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : " "}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden flex flex-col py-2"
                        >
                          {link.services?.map((service) => {
                            return (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="py-2 block text-blue-900 hover:text-blue-500"
                              >
                                {service.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  className="text-sm text-blue-900 uppercase hover:scale-105 duration-200"
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mb-3 mt-4">
              <Button variant="default" className="px-4 py-2 rounded-full">
                <Link href="/">Start Project</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
