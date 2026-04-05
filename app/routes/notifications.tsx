import EhubNavbar from "../layout/ehub-navbar";

export default function Notifications() {
  return (
    <div>
      <EhubNavbar />

      <div className="max-w-2xl mx-auto p-6">

        <h1 className="text-2xl font-bold">
          Notifications
        </h1>

        <div className="mt-6 flex flex-col gap-4">

          <Item text="John liked your post" />
          <Item text="New course available" />
          <Item text="You earned reward points" />

        </div>

      </div>
    </div>
  );
}

function Item({ text }: any) {
  return (
    <div className="border p-4 rounded-lg">
      {text}
    </div>
  );
}