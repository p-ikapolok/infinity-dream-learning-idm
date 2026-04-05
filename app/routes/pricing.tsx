import PublicNavbar from "../layout/public-navbar";
import { Link } from "react-router";

export default function Pricing() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16">

        <h1 className="text-4xl font-bold text-center">
          Pricing
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Plan
            title="Free"
            price="$0"
            features={[
              "Community access",
              "Ehub tools",
              "Limited AI",
            ]}
          />

          <Plan
            title="Pro"
            price="$19"
            features={[
              "All courses",
              "AI tutor",
              "Certificates",
            ]}
            highlight
          />

          <Plan
            title="All Access"
            price="$49"
            features={[
              "Everything unlocked",
              "AI agents",
              "Premium content",
            ]}
          />

        </div>

      </div>
    </div>
  );
}

function Plan({ title, price, features, highlight }: any) {
  return (
    <div
      className={`border p-6 rounded-xl ${
        highlight ? "border-purple-600" : ""
      }`}
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="text-3xl font-bold mt-2">
        {price}
      </div>

      <ul className="mt-4 space-y-2">
        {features.map((f: string) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>

      <Link
        to="/checkout"
        className="mt-6 block bg-purple-600 text-white text-center py-2 rounded"
      >
        Choose Plan
      </Link>
    </div>
  );
}