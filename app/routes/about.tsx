import type { Route } from "./+types/home";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-blue-950 text-white pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight">Empowering the next generation of builders.</h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            We believe education should be dynamic, practical, and deeply aligned with the modern tech industry.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Mission</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              We built this learning system to bridge the gap between traditional academia and the real-world skills required by top technology companies.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Whether you are an aspiring data scientist, a creative designer, or a future founder, our carefully curated curriculum provides the exact roadmap you need to succeed in a fast-paced world.
            </p>
          </div>
          
          <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Platform Impact</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-4xl font-extrabold text-blue-600">3</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Core Disciplines</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-4xl font-extrabold text-blue-600">100%</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Project-Based Learning</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-4xl font-extrabold text-blue-600">24/7</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">AI Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}