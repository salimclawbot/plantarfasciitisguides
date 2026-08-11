"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-blue-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="text-xl font-bold text-blue-800">Plantar Fasciitis Guides</Link>
        <nav aria-label="Primary navigation" className="flex w-full gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-slate-700 sm:w-auto sm:pb-0">
          <Link href="/best-shoes-plantar-fasciitis" className="hover:text-blue-700">Best Shoes</Link>
          <Link href="/affiliate-disclosure" className="hover:text-blue-700">Disclosure</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact</Link>
          <Link href="/about" className="hover:text-blue-700">About</Link>
        </nav>
      </div>
    </header>
  );
}
