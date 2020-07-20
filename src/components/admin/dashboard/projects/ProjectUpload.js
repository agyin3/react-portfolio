import React, { useState } from 'react'
import API from '../../../../utils/API'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../styled-components'
import DropzoneComp from './Dropzone'

const ProjectUpload = () => {
    const [image, setImage] = useState()
    const [preview, setPreview] = useState('')
    const { register, handleSubmit, reset, errors } = useForm()

    const onSubmit = async (data) => {
        // Creating new instance of form-data
        const formData = new FormData()
        // Adding a key-value pair to the formData object
        formData.append('image-raw', image)

        try {
            const res = await API.post('/projects', data)
            const proj_image = await API.post(`/projects/${res.data.project.id}/images`, formData, {headers: {"Content-Type": "multipart/form-data"}})

            setPreview('')
            setImage()
            reset()
        }catch(err) {
            console.log(err.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DropzoneComp setImage={setImage} preview={preview} setPreview={setPreview} />
        {/* register your input into the hook by invoking the "register" function */}
          <div>
          <label htmlFor='name'>Name</label><br />
          <input id='name' name="name" ref={register({ required: true })} />   
          </div>      

          <div>
          <label htmlFor='url'>Project URL</label><br />
          <input id='url' name="url" ref={register({ required: true })} />
          </div>

          <div>
          {errors.exampleRequired && <span>This field is required</span>}
          <label htmlFor='github'>Github Repo</label><br />
          <input id='github' name='github' ref={register({ required: true })} />
          </div>
          
          <Button onSubmit={onSubmit} type='submit'>Submit</Button>
        </form>
      )
}

export default ProjectUpload