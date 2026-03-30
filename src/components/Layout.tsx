import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Splinfluence Enterprise"
                className="h-16 w-16 object-contain"
              />
              <span className="font-serif font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                Splinfluence
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="inline-block">
                <Button variant="default" size="sm" className="hidden lg:flex">
                  Work With Us
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-2xl font-serif font-medium ${
                    location === link.path ? "text-primary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link href="/contact" className="w-full inline-block">
                  <Button className="w-full" size="lg">
                    Work With Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-[#050811] border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Splinfluence Enterprise"
                  className="h-16 w-16 object-contain"
                />
                <span className="font-serif font-bold text-xl text-white">Splinfluence</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Driving innovation across industries and delivering excellence everywhere — agriculture, technology, design, health, and fashion.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-sm text-muted-foreground">Livestock & Agriculture (Poultry)</span></li>
                <li><span className="text-sm text-muted-foreground">Web Development & Digital</span></li>
                <li><span className="text-sm text-muted-foreground">Writing & Content</span></li>
                <li><span className="text-sm text-muted-foreground">Graphic Design & Branding</span></li>
                <li><span className="text-sm text-muted-foreground">Health Sector Support</span></li>
                <li><span className="text-sm text-muted-foreground">Fashion (Airxence)</span></li>
                <li><span className="text-sm text-muted-foreground">Advertisement & Marketing</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <address className="not-italic space-y-3 text-sm text-muted-foreground">
                <p>Nigeria (Serving clients nationwide)</p>
                <p className="pt-2 text-primary">splinfluenceenterprise@gmail.com</p>
                <p>+234 803 794 1915</p>
              </address>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Splinfluence Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="text-xs text-muted-foreground hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
