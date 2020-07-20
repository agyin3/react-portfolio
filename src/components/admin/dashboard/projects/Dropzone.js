import React, { useCallback } from "react";
import ReactDropZone from "react-dropzone";
import "./dropzone.css";

const DropzoneComp = ({ setImage, setPreview, preview }) => {

  const onDrop = useCallback((files) => {
    // Saving the image file to state
    setImage(files[0]);

    files.map((file) => {
      // Reading the files and converting to datauri
      const reader = new FileReader();

      reader.onload = (e) => {
        // setting the converted image to state to allow for previews
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <ReactDropZone onDrop={onDrop} accept={"image/*"}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            className={isDragActive ? `drag-active img-drop` : `img-drop`}
            {...getRootProps()}
          >
            <input
              className="img-input"
              {...getInputProps()}
              style={{ display: "inline-block" }}
            />
            {preview && <img className='dropzone-image' src={preview} alt="user profile" />}
          </div>
        </section>
      )}
    </ReactDropZone>
  );
};

export default DropzoneComp;
