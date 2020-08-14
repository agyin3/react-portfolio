import React from "react";
import {
  SimpleContainer,
  ProjectContainer,
} from "../../../../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../../../utils/API";

const ProjectCard = ({ project, fetchProjects }) => {
  const updateFav = async (e, id) => {
    e.preventDefault();


    try {
      await API.put(`/projects/${id}`, { favorite: !project.favorite });
      fetchProjects();
    } catch (err) {
      console.log("There was an error", err.response);
    }
  };

  const deleteProj = async (e, id) => {
    e.preventDefault();

    try {
      await API.delete(`/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.log("There was an error", err.response);
    }
  }

  return (
    <SimpleContainer
      width="85%"
      height="100%"
      padding="1% 0"
      margin="25px 0"
      justify="space-around"
      background="#30323d"
      overflow="initial"
    >
      <img src={project.image} style={{ height: "200px", width: "25%" }} />
      {/* Possibly move these into their own component */}
      <SimpleContainer
        width="55%"
        height="300px"
        background="#30323d"
        direction="column"
        padding="10px 0"
        justify="space-between"
      >
        <SimpleContainer
          width="100%"
          height="100px"
          background="#30323d"
          align="baseline"
        >
          <h1
            style={{
              textAlign: "center",
              textDecoration: "underline",
              margin: "0.67em",
              fontSize: "2.8rem",
            }}
          >
            {project.name}
          </h1>

          {project?.favorite ? (
            <FontAwesomeIcon
              className="admin_svg"
              icon={["fas", "heart"]}
              onClick={(e) => updateFav(e, project.id)}
            />
          ) : (
            <FontAwesomeIcon
              className="admin_svg"
              icon={["far", "heart"]}
              onClick={(e) => updateFav(e, project.id)}
            />
          )}

          <FontAwesomeIcon
            className="admin_svg"
            icon={"trash"}
            onClick={(e) => deleteProj(e, project.id)}
          />
        </SimpleContainer>
        <p>{project.description}</p>
        {/* Possibly move these into their own component */}
        <SimpleContainer
          width="100%"
          height="75px"
          background="#30323d"
          justify="space-around"
        >
          <a href={project.github}>Github Repo</a>
          <a href={project.url}>Deployed Site</a>
          {/* Need to add edit and delete buttons */}
        </SimpleContainer>
      </SimpleContainer>
    </SimpleContainer>
  );
};

export default ProjectCard;
