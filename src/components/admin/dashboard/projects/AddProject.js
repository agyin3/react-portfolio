import React, { useState } from "react";
import DropzoneComp from "./Dropzone";
import AddProjectForm from "./AddProjectForm";
import { SimpleContainer } from "../../../../styled-components";

const AddProject = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  return (
    <SimpleContainer
      width='80%'
      margin='0 auto'
      direction='column'
      justify='flex-start'
      padding='2.5% 0'
      color='#000'
    >
      <DropzoneComp
        setImage={setImage}
        setPreview={setPreview}
        preview={preview}
      />
      <AddProjectForm image={image} setPreview={setPreview}/>
    </SimpleContainer>
  );
};

export default AddProject;
