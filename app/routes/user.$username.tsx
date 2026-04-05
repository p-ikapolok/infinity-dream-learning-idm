export default function PublicProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-4">

          <div className="w-20 h-20 bg-gray-200 rounded-full" />

          <div>
            <h2 className="font-bold">
              Your Name
            </h2>

            <p className="text-gray-500">
              Frontend Developer
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}