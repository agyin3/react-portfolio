import React from "react";
import { useForm } from "react-hook-form";
import API from "../../../../utils/API";
import { SimpleInput } from "../../../../styled-components";
import { useHistory } from "react-router-dom";

const AddProjectForm = ({ image, setPreview }) => {
  const history = useHistory()

  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {

    try {
        const project = await API.post('/projects', data)

        if(image !== undefined){
            const formData = new FormData()
            formData.append('image-raw', image)

            const uploaded = await API.post(`/projects/${project.data.project.id}/images`, formData, {
              headers: { "Content-Type": "multipart/form-data" },
            })
        }

        history.push('/admin/dash')




        // NEED TO IMPORT HISTORY OBJECT AND PUSH TO DASHBOARD HOME
    }catch(err) {
        // ERROR MESSAGE KEEPS COMING BACK WITH 404
        console.log('You fucked up trying to add a project', err.response)
    }finally {
        reset()
        setPreview('')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <SimpleInput id="name" name="name" ref={register({ required: true })} />
      </div>

      <div>
        <label htmlFor="github">Github</label>
        <br />
        <SimpleInput id="github" name="github" ref={register({ required: true })} />
      </div>

      <div>
        <label htmlFor="url">Deployed</label>
        <br />
        <SimpleInput id="url" name="url" ref={register({ required: true })} />
      </div>

      <div>
        <label htmlFor="languages">Languages</label>
        <br />
        <SimpleInput id="languages" name="languages" ref={register({ required: true })} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          ref={register({ required: true })}
        />
      </div>
      <button type="submit" onSubmit={handleSubmit(onSubmit)} onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </form>
  );
};

export default AddProjectForm;
