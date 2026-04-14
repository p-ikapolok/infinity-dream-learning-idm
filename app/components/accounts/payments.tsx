/* ================= PAYMENTS ================= */

function Payments() {
  return (
    <div>
      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        
        {/* Status Card */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-2">
            Your Payment Status for <span className="font-semibold">ALX Access</span> is
          </p>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-orange-500 font-semibold">Active</span>
            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
              At risk
            </span>
          </div>

          <p className="text-sm text-gray-500">
            Your access is valid until 13 Oct 2025
          </p>
        </div>

        {/* Due Card */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Payment due is</p>

          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            USD 5.00
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Due on 13 Oct 2025
          </p>

          <button className="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1">
            Make payment now →
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div>
        <h2 className="font-semibold mb-4">Billing History</h2>

        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-500">Receipts</p>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-full text-sm text-blue-600">
            <Download size={16} /> Download
          </button>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          {[
            "Jul 27, 2025",
            "Jun 18, 2025",
            "May 15, 2025",
            "Apr 14, 2025",
            "Mar 15, 2025",
            "Feb 13, 2025",
          ].map((date, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border-b last:border-none"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="text-sm">
                  Receipt ALX Access #{Math.floor(Math.random() * 500000)}
                </span>
              </div>

              <span className="text-sm text-gray-500">{date}</span>
              <span className="text-sm">USD 5.00</span>

              <Eye className="text-blue-500 cursor-pointer" size={18} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <button className="text-gray-500">← Previous</button>

          <div className="flex gap-2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
              1
            </span>
            <span>2</span>
          </div>

          <button className="text-gray-500">Next →</button>
        </div>
      </div>
    </div>
  );
}
