import CommunityLayout from "../components/CommunityLayout";

export default function Community() {
  return (
    <CommunityLayout>
      <div className="w-full h-full">
        <iframe
          src="https://infinity-dream-community.circle.so/"
          title="Infinity Dream Community"
          className="w-full h-full border-0"
          allow="camera; microphone; fullscreen; clipboard-write"
        />
      </div>
    </CommunityLayout>
  );
}