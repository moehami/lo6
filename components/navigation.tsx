"use client";

import { useState } from "react";
import Link from "next/link";
import React from 'react';

import { Home, Newspaper  , Phone, Store, Info, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b bg-opacity-25 backdrop-blur-md fixed top-0  w-full z-50">
      <div className="container mx-auto px-4 ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Store className="h-6 w-6" />
            <span className="text-xl font-bold">LoBin Stores</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="flex items-center bg-white bg-opacity-60">
                <Home className="h-5 w-5 mr-2" />
Home
              </Button></Link>
              <Link href="/blog">
              <Button variant="ghost" className="flex items-center bg-white bg-opacity-60">
                <Newspaper className="h-5 w-5 mr-2" />

               Blog
              </Button>

            </Link>

            <Link href="/about-us">
              <Button variant="ghost" className="flex items-center bg-white bg-opacity-60">
                <Info className="h-5 w-5 mr-2" />
                About
              </Button>
            </Link>

            <Link href="/contact-us">
              <Button variant="ghost" className="flex items-center bg-white bg-opacity-60">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>

            <Button>Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-30 backdrop-blur-md border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full flex items-center justify-start bg-white bg-opacity-60">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Button>
            </Link>

            <Link href="/blog" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full flex items-center justify-start bg-white bg-opacity-60">
                <Newspaper className="h-5 w-5 mr-2" />
                Blog
              </Button>
            </Link>

            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full flex items-center justify-start bg-white bg-opacity-60">
                <Info className="h-5 w-5 mr-2" />
                About
              </Button>
            </Link>

            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full flex items-center justify-start bg-white bg-opacity-60">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>

            <Button className="w-full">Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
