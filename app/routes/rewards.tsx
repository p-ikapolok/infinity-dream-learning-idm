import EhubNavbar from "../layout/ehub-navbar";

export default function Rewards() {
  return (
    <div>
      <EhubNavbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold">
          Rewards
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <Reward title="Complete Course" points="50 pts" />
          <Reward title="Use AI Tools" points="10 pts" />
          <Reward title="Join Community" points="20 pts" />

        </div>

      </div>
    </div>
  );
}

function Reward({ title, points }: any) {
  return (
    <div className="border p-6 rounded-xl">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-purple-600 mt-2">{points}</p>
    </div>
  );
}