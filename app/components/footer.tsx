export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10 mt-10">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">Infinity Hub</h2>
        <p className="mt-2">The community of those who value time.</p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 text-sm mb-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Learning</a>
        <a href="#" className="hover:underline">Community</a>
        <a href="#" className="hover:underline">Rewards</a>
        <a href="#" className="hover:underline">Support</a>
        <a href="#" className="hover:underline">Privacy policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </div>

      <div className="flex justify-center space-x-6 mb-6">
        <img src="/icons/x.png" alt="X" className="w-6 h-6" />
        <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
        <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
      </div>

      <p className="text-center text-sm">
        © 2026 Infinity. All rights reserved.
      </p>
    </footer>
  );
}