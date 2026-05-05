import type { Route } from "./+types/home";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PublicNavbar />
      
      <section className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">Invest in your career.</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Get unlimited access to our AI, Creative, and Entrepreneurship programs for one simple price.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Features Side */}
          <div className="p-10 md:p-14 md:w-3/5 bg-white">
            <h2 className="text-3xl font-bold text-blue-950 mb-8">All Access Pass Includes:</h2>
            <ul className="space-y-5">
              {[
                "Unlimited access to AI, Creative, & Business tracks",
                "Full access to interactive projects and case studies",
                "Private community network access",
                "Verified digital certificates of completion",
                "Priority 24/7 AI-driven support"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-lg">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full mr-4 shrink-0">
                    {/* SVG Checkmark */}
                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pricing Side */}
          <div className="p-10 md:p-14 md:w-2/5 bg-blue-950 text-white flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-blue-300 font-bold tracking-widest text-sm uppercase mb-4">Premium Membership</p>
              <div className="flex justify-center items-baseline mb-6">
                <span className="text-7xl font-extrabold text-white">$49</span>
                <span className="text-xl text-blue-300 ml-2 font-medium">/mo</span>
              </div>
              <p className="text-blue-200 mb-10 text-lg">Billed monthly. Cancel anytime.</p>
              <button className="w-full py-4 bg-white text-blue-900 text-lg font-extrabold rounded-xl hover:bg-blue-50 transition shadow-lg shadow-black/20">
                Get All Access Now
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}