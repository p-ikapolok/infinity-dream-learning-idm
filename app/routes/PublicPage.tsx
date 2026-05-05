import PublicNavbar from '../components/PublicNavbar';
import Link from 'next/link';

export default function ProgramsPage() {
  // A reusable SVG Checkmark component for the lists
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-600 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 tracking-tight mb-8">
            Master the skills that <br className="hidden md:block"/>
            <span className="text-blue-600">define the future.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Explore our comprehensive learning tracks. From training AI models to designing beautiful interfaces and launching your own business.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
        
        {/* AI, Data & Tech Section */}
        <section id="ai" className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">Track 01</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">AI, Data & Tech</h2>
            <p className="text-lg text-slate-600 mb-6">
              Dive into machine learning, data engineering, and generative AI. Build intelligent systems and master the algorithms shaping tomorrow's technology landscape.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckIcon /> Machine Learning Foundations</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Large Language Models (LLMs)</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Data Engineering & Python</li>
            </ul>
            <Link href="/pricing">
              <button className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition">Get All Access</button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-72 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            {/* SVG Microchip / Tech Icon */}
            <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
          </div>
        </section>

        {/* Creative Section */}
        <section id="creative" className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">Track 02</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Creative & Design</h2>
            <p className="text-lg text-slate-600 mb-6">
              Design intuitive, beautiful, and user-centric digital experiences. Learn the principles of interaction, typography, and visual storytelling.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckIcon /> UI/UX & Figma Mastery</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Design Systems</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Interactive Prototyping</li>
            </ul>
            <Link href="/pricing">
              <button className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition">Get All Access</button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-72 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            {/* SVG Design / Palette Icon */}
            <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a3 3 0 10-4.242-4.242l-3.879 3.879a15.994 15.994 0 00-4.647 4.764m-1.051 3.205a15.996 15.996 0 00-3.396 1.62m3.396-1.62c.31.284.645.545 1.002.784m0 0c.39.26.804.49 1.238.694m-1.238-.694c-.39-.26-.804-.49-1.238-.694" />
            </svg>
          </div>
        </section>

        {/* Entrepreneurship Section */}
        <section id="business" className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">Track 03</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Entrepreneurship</h2>
            <p className="text-lg text-slate-600 mb-6">
              Transform innovative ideas into scalable businesses. Learn market positioning, growth marketing, and how to lead high-performing teams.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckIcon /> Startup Fundamentals</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Growth Marketing & SEO</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Venture Finance & Fundraising</li>
            </ul>
            <Link href="/pricing">
              <button className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition">Get All Access</button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-72 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            {/* SVG Rocket / Startup Icon */}
            <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.452 15.068 15.068 0 01-.06-.311m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
        </section>

      </div>
    </div>
  );
}