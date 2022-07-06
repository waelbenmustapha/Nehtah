import React, { useRef, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function ImageUpload({ setImage, image }) {
  const [loading, setLoading] = useState(false);
  const hiddeninput = useRef(null);

  function uploadimg(files) {
    const formData = new FormData();
    setLoading(true);
    formData.append("file", files[0]);
    formData.append("upload_preset", "nehtah");
    axios
      .post("https://api.cloudinary.com/v1_1/dq1i1g9th/image/upload", formData)
      .then((res) => {
        setImage(res.data.url);
        console.log(res.data.url);
        setLoading(false);
      })
      .catch((err) => {
        alert("خطأ اثناء تحميل الصورة");
        setLoading(false);
      });
  }

  return (
    <div>
      <div>
        {loading == false ? (
          <span
            className="hover"
            onClick={() => {
              hiddeninput.current.click();
            }}
          >
            <img
              src={
                image.length == 0
                  ? "https://static.thenounproject.com/png/3927-200.png"
                  : image
              }
              style={{ height: "55px", width: "65px", display: "inline" }}
            />
            <input
              ref={hiddeninput}
              style={{ display: "none" }}
              type="file"
              onChange={(e) => {
                uploadimg(e.target.files);
              }}
            />
          </span>
        ) : (
          <Oval heigth="40" width="40" color="grey" ariaLabel="loading" />
        )}
      </div>
    </div>
  );
}
export default ImageUpload;
