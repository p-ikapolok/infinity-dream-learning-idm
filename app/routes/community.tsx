import EhubNavbar from "../layout/ehub-navbar";

export default function Community() {
  return (
    <div>
      <EhubNavbar />

      <div className="max-w-3xl mx-auto p-6">

        <h1 className="text-2xl font-bold">
          Community
        </h1>

        <CreatePost />

        <div className="mt-6 flex flex-col gap-6">

          <Post
            name="Peter"
            content="Just completed AI course!"
          />

          <Post
            name="John"
            content="Anyone learning React?"
          />

        </div>

      </div>
    </div>
  );
}

function CreatePost() {
  return (
    <div className="border p-4 rounded-xl mt-6">
      <textarea
        placeholder="Share something..."
        className="w-full border p-2 rounded"
      />

      <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded">
        Post
      </button>
    </div>
  );
}

function Post({ name, content }: any) {
  return (
    <div className="border p-4 rounded-xl">

      <div className="font-semibold">
        {name}
      </div>

      <p className="mt-2">
        {content}
      </p>

      <div className="flex gap-4 mt-4 text-sm">
        <button className="text-purple-600">
❤️ Like
</button>
        <button>Comment</button>
      </div>

      <div className="mt-4">
        <input
          placeholder="Write comment..."
          className="border p-2 w-full rounded"
        />
      </div>

    </div>
  );
}