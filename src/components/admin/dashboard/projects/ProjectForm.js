import React, { useCallback } from "react";
import API from "../../../../utils/API";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import theme from "../../../../styles/theme";
import { withStyles } from "@material-ui/styles";

const ProjectInput = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",

    // override font color
    " & .MuiInputBase-input": {
      color: theme.palette.secondary.light,
    },

    // override border color
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: "#FFBA0A",
      },
    },

    // override label color
    "& .MuiInputLabel-outlined": {
      color: theme.palette.secondary.light,
    },
  },
})(TextField);

const ProjectForm = ({ image, setPreview }) => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = useCallback(
    async (data) => {
      try {
        // In order to properly upload the image to the database
        // we need the project's id number. To handle this
        // we need to make two separate API requests
        // 1. To create the project
        // 2. To upload the image

        // POST request to create project
        const project = await API.post("/projects", data);

        // If there is an image to upload
        // make second API request
        if (image !== undefined) {
          const formData = new FormData();
          formData.append("image-raw", image);

          // POST request to upload image
          await API.post(
            `/projects/${project.data.project.id}/images`,
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
        }

        // Push to dashboard if successful
        history.push("/admin/dash");
      } catch (err) {
        // NEED TO ADD PROPER ERROR HANDLING
        console.log("You fucked up trying to add a project", err.response);
      } finally {
        // reset form and preview regardless of API respsonse code
        reset();
        setPreview("");
      }
    },
    [history, image, reset, setPreview]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "2rem" }}>
      <ProjectInput
        name="name"
        id="name"
        type="text"
        inputRef={register({ required: true }, { name: "name" })}
        variant="outlined"
        margin="dense"
        label="Name"
        fullWidth
        color="secondary"
      />
      <ProjectInput
        name="github"
        id="github"
        type="url"
        inputRef={register({ required: true }, { name: "github" })}
        variant="outlined"
        margin="dense"
        label="Github"
        color="secondary"
        fullWidth
      />
      <ProjectInput
        name="url"
        id="url"
        type="url"
        inputRef={register({ required: true }, { name: "url" })}
        variant="outlined"
        margin="dense"
        label="Deployed"
        color="secondary"
        fullWidth
      />
      <ProjectInput
        name="languages"
        id="languages"
        type="text"
        inputRef={register({ required: true }, { name: "languages" })}
        variant="outlined"
        margin="dense"
        label="Languages"
        color="secondary"
        fullWidth
      />
      <ProjectInput
        name="description"
        id="description"
        type="text"
        multiline
        rows={4}
        inputRef={register({ required: true }, { name: "description" })}
        variant="outlined"
        margin="dense"
        label="Description"
        color="secondary"
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        size="large"
        variant="outlined"
        color="secondary"
        onSubmit={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </form>
  );
};

export default ProjectForm;
