import { data } from 'autoprefixer'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineUpload } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { VscCloudUpload } from 'react-icons/vsc'

const EditService = ({ setEdit, service }) => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const imageRef = useRef()
  const [url, setUrl] = useState(null);

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setUrl(url);
    }
    setValue('image', selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setValue('image', selectedFile);
      setUrl(url);
    }
  };
  return (

    <div className='w-full h-full absolute bg-gray-100 top-0 py-4 px-2 overflow-hidden'>
      <div className='flex justify-between'><h2 className='text-lg font-semibold text-gray-600'>Edit Service</h2>
        <button
          className='text-2xl text-gray-600 font-semibold'
          onClick={() => setEdit(false)}
        ><RxCross2 /></button>
      </div>
      <form method='post' encType='multipart/form-data'
        onSubmit={handleSubmit((data) => {

        })}
      >
        <div className='mt-4'>
          <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
            <input
              type="text"
              placeholder='Enter title of service'
              className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
              {...register('title', {
                required: 'Title is required!',
              })}
            />
          </div>
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div className='w-full mt-2'>
          <div className='w-full h-[200px] border-2 border-dashed border-gray-300 cursor-pointer p-2'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {url ? (
              <div className='w-full'>
                <RxCross2 className='float-right text-xl text-gray-600 cursor-pointer' onClick={() => setUrl(null)} />
                <div className='w-full flex justify-center'>
                  <img className='w-full h-[160px] object-contain' src={url} alt="Selected" />
                </div>
              </div>
            ) : (
              <div>
                <div className='w-full text-center text-[100px] flex justify-center text-gray-400 font-semibold'>
                  <VscCloudUpload />
                </div>
                <div className='w-full text-center'>
                  <span className='text-center text-[#434343]'>Drag and drop or</span>
                  <span className='text-center text-[#AE56EF] cursor-pointer' onClick={() => imageRef.current.click()}> Click to Browse</span>
                </div>
              </div>
            )}
          </div>
          <div className='w-full mx-auto'>
            <div>
              <input
                type="file"
                hidden
                {...register('image', { required: 'Image is required!' })}
                onChange={handleFile}
                accept="image/*"
                ref={imageRef}
              />
            </div>
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          </div>
        </div>
        <div className='mt-4'>
          <div className='w-full  rounded-md bg-slate-300 text-gray-600'>
            <textarea
              placeholder='Write description'
              className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2 resize-none"
              {...register('description', {
                required: 'Description is required!',
              })}
              cols={30}
              rows={4}
            >
            </textarea>
          </div>
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <div>
          <button className=" bg-[#00BCD5] hover:bg-[#1f636c] w-[100px] mt-3 px-3  text-[#f3f3f3] flex gap-1 justify-center items-center  py-2 rounded float-right" type="submit">
            <div className='flex justify-center items-center gap-1'>  <span><MdOutlineUpload /></span>
              <span> Upload</span></div>

          </button>
        </div>
      </form >
    </div >

  )
}

export default EditService