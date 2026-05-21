import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CommunityLayout({ children }: Props) {
  return (
    <div className="bg-gray-50 h-screen flex flex-col overflow-hidden">
      <main className="flex-1 min-h-0 overflow-hidden">
        {children}
      </main>
    </div>
  );
}