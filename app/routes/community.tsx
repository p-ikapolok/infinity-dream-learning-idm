import Layout from "../components/Layout";

export default function Community() {
  return (
    <Layout>
      <div className="w-full h-screen overflow-hidden bg-white">
        <iframe
          src="https://infinity-dream-community.circle.so/"
          title="Infinity Dream Community"
          className="w-full h-full border-0"
          allow="camera; microphone; fullscreen; display-capture"
        />
      </div>
    </Layout>
  );
}