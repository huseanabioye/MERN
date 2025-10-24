
import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import api from '../lib/axios';


const AddPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
     if (!title.trim() || !content.trim()){
        toast.error("All fields are required");
        return;
     }
       setLoading(true) 
       try {
        await api.post("/notes", {
          title,
          content
        })
        toast.success("Note create successfully!");
        Navigate("/")
         
       } catch (error) { 

        console.log(error )
        toast.error("failed to create new Note")
       }finally{
        setLoading(false)
       }
  };
  return (
    <div className='min-h-screen bg-base-100'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className='btn btn-ghost mb-6'>
          <ArrowLeftIcon className='size-5'/> 
          Back to Notes
          </Link>
          <div className="card bg-base-50">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">
                 Create New Note
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="from-control mb-4">
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" 
                  placeholder='Note Title' 
                  className='input input-bordered w-full'
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="from-control mb-4">
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <textarea 
                  placeholder='Write your note here...' 
                  className='textarea textarea-bordered  w-full'
                  value={content} 
                  onChange={(e) => setContent(e.target.value)}/>
                </div>
                 <div className="card-actions justify-end">
                  <button type='submit' className='btn btn-primary' disabled={loading}
                  >
                    {loading ? "creating ..." : "create Note"}
                  </button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPage