import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-blue-100 bg-blue-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">Plantar Fasciitis Guides</p>
          <p className="mt-2">Evidence-aware guides to plantar fasciitis symptoms, footwear, insoles, exercises, daily comfort, and questions to discuss with a qualified clinician.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Guides</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/plantar-fasciitis-exercises" className="hover:text-blue-700">Plantar Fasciitis Exercises</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-blue-700">Affiliate Disclosure</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-700">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Info</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about" className="hover:text-blue-700">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-700">Contact</Link></li>
            <li><Link href="/editorial-guidelines" className="hover:text-blue-700">Editorial Guidelines</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-100 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Plantar Fasciitis Guides</div>
    </footer>
  );
}
