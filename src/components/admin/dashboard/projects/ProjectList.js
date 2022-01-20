import React, { useState, useEffect, useCallback, memo } from "react";
import ProjectCard from "./ProjectCard";
import API from "../../../../utils/API";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const ProjectWrapper = withStyles({
    root: {
        height: "200vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "scroll",
    },
})(Box);

const ProjectList = memo(() => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = useCallback(async () => {
        try {
            // GET request to retrieve projects
            const res = await API.get("/projects");
            console.log({ res });
            setProjects(res.data.projects.sort((a, b) => a._id - b._id));
        } catch (err) {
            // NEED TO ADD PROPER ERROR HANDLING
            console.log("There was an error fetching: ", err.response);
        }
    }, [setProjects]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return (
        <ProjectWrapper>
            {projects.map((project) => (
                <ProjectCard
                    key={project._id}
                    project={project}
                    fetchProjects={fetchProjects}
                />
            ))}
        </ProjectWrapper>
    );
});

export default ProjectList;
