export function PrimaryButton({ children }: any) {
  return (
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl">
      {children}
    </button>
  );
}

export function SecondaryButton({ children }: any) {
  return (
    <button className="border px-6 py-2 rounded-xl">
      {children}
    </button>
  );
}