export default function Card({ children }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700">
      {children}
    </div>
  );
}