import React, { memo, useState } from "react";
import DropzoneComp from "./Dropzone";
import ProjectForm from "./ProjectForm";
import theme from "../../../../styles/theme";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const FormContainer = withStyles({
  root: {
    height: "100vh",
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
  },
})(Box);

const AddProject = memo(() => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  return (
    <FormContainer>
      <Typography variant="h2" component="p">
        Add Project
      </Typography>
      <DropzoneComp
        setImage={setImage}
        setPreview={setPreview}
        preview={preview}
      />
      <ProjectForm image={image} setPreview={setPreview} />
    </FormContainer>
  );
});

export default AddProject;
