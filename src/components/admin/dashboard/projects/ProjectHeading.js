import { Box, Typography } from "@material-ui/core";
import { lime, red } from "@material-ui/core/colors";
import { Delete, Favorite, FavoriteBorder } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import React, { useCallback } from "react";
import API from "../../../../utils/API";

const HeadingContainer = withStyles({
  root: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})(Box);

const ProjectHeading = (props) => {
  const { fetchProjects } = props;
  const { id, favorite, name } = props.project;

  const updateFav = useCallback(
    async (e, id) => {
      e.preventDefault();

      try {
        // PUT request toggle favorite
        await API.put(`/projects/${id}`, { favorite: !favorite });

        // re-call fetchProjects to get updated list of projects
        fetchProjects();
      } catch (err) {
        // NEED TO ADD PROPER ERROR HANDLING
        console.log("There was an error", err.response);
      }
    },
    [favorite, fetchProjects]
  );

  const deleteProj = useCallback(
    async (e, id) => {
      e.preventDefault();

      try {
        // DELETE request to delete image
        await API.delete(`/projects/${id}`);

        // re-call fetchProjects to get updated list of projects
        fetchProjects();
      } catch (err) {
        // NEED TO ADD PROPER ERROR HANDLING
        console.log("There was an error delete: ", err.response);
      }
    },
    [fetchProjects]
  );

  return (
    <HeadingContainer>
      <Typography variant="h3" component="h2">
        {name}
      </Typography>
      <Box>
        {favorite ? (
          <Favorite
            onClick={(e) => updateFav(e, id)}
            fontSize="large"
            style={{ color: red[700] }}
          />
        ) : (
          <FavoriteBorder
            onClick={(e) => updateFav(e, id)}
            fontSize="large"
            style={{ color: red[700] }}
          />
        )}

        <Delete
          onClick={(e) => deleteProj(e, id)}
          fontSize="large"
          style={{ color: lime[500] }}
        />
      </Box>
    </HeadingContainer>
  );
};

export default ProjectHeading;
