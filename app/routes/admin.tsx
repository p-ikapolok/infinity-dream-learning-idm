export default function Admin() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-6">

        <div className="border p-4 rounded">
          Users
          <div className="text-2xl font-bold">
            2,450
          </div>
        </div>

        <div className="border p-4 rounded">
          Courses
          <div className="text-2xl font-bold">
            32
          </div>
        </div>

        <div className="border p-4 rounded">
          Revenue
          <div className="text-2xl font-bold">
            $24,000
          </div>
        </div>

        <div className="border p-4 rounded">
          Instructors
          <div className="text-2xl font-bold">
            12
          </div>
        </div>

      </div>

    </div>
  );
}