import PublicNavbar from "../layout/public-navbar";

export default function Programs() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold">
          Programs
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Card
            title="AI Data & Tech"
            link="/ai-data-tech"
          />

          <Card
            title="Creative"
            link="/creative"
          />

          <Card
            title="Entrepreneurship"
            link="/entrepreneurship"
          />

        </div>
      </div>
    </div>
  );
}

function Card({ title, link }: any) {
  return (
    <a
      href={link}
      className="p-6 border rounded-xl block hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </a>
  );
}