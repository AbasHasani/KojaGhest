"use client";

import axios from "axios";
import { Button } from "../components/ui/button";
import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState<any>(null);
  return (
    <div>
      <h1>Hello testy</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <Button
        onClick={async () => {
          const formData = new FormData();
          formData.append("image", file);
          try {
            const wuho = await axios.post("/api/uploader", formData, {headers: {
                "Content-Type": "multipart/form-data"
            }});
            console.log(wuho)
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Upload
      </Button>
    </div>
  );
};

export default Page;
