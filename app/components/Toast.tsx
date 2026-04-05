import { useEffect } from "react";

export default function Toast({ message, show, onClose }: any) {
  useEffect(() => {
    if (show) {
      setTimeout(onClose, 2500);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg z-50">
      {message}
    </div>
  );
}