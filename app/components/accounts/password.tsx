/* ================= PASSWORD ================= */

function Password() {
  return (
    <div>
      <h2 className="font-semibold mb-4">Change Password</h2>

      <div className="space-y-3 max-w-sm">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-2 rounded-md"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Update Password
        </button>
      </div>
    </div>
  );
}