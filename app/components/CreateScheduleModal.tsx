{open && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl w-[400px]">
      <h2 className="text-lg font-semibold mb-4">Create Schedule</h2>

      {/* form goes here */}

      <button onClick={() => setOpen(false)}>
        Close
      </button>
    </div>
  </div>
)}