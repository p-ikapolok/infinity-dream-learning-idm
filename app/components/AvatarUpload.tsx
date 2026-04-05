import { useState } from "react";

export default function AvatarUpload() {
  const [image, setImage] = useState<any>(null);

  return (
    <div>
      {image ? (
        <img
          src={image}
          className="w-24 h-24 rounded-full object-cover"
        />
      ) : (
        // replaced the old div with <AvatarUpload />
        <AvatarUpload />
      )}

      <input
        type="file"
        className="mt-2"
        onChange={(e: any) =>
          setImage(URL.createObjectURL(e.target.files[0]))
        }
      />
    </div>
  );
}