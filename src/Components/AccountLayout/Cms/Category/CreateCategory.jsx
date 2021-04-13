import React, { useState } from 'react';
import { slugify } from '../../../../../helpers/generalHelpers';
import cookies from 'js-cookie'
import useSWR, { mutate } from 'swr'
import toast from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {

    const [categoryName, setCategoryName] = useState('')
    const [categorySlug, setCategorySlug] = useState('')
    const [categoryDesc, setCategoryDesc] = useState('')

    const [loading, setLoading] = useState(false)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [serverError, setServerError] = useState('')




    const handleSubmit = async (e) => {
        e.preventDefault()
        const toastId = toast.loading('Saving...');

        setLoading(true)

        const token = cookies.get('login') ? JSON.parse(cookies.get('login')).token : undefined

        if(categoryName == '') return setError('Category name should not be empty.') & setLoading(false) & setSuccess('')

        const slug = categorySlug == '' ? slugify(categoryName) : categorySlug

        const response = await fetch(`${process.env.API}/category/save`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({name: categoryName, slug: slug, description: categoryDesc})
        })

        

        const data = await response.json()
        if(data.type == 'error') return setServerError(data.msg) & setLoading(false) & toast.dismiss(toastId) & toast.error(data.msg) & setSuccess('')
        mutate(`${process.env.API}/category/get`)
        toast.dismiss(toastId)
        toast.success(data.msg)
        setSuccess(data.msg)
        
        clearAllFields()
        
    }

    const handleReset = (e) => {
        e.preventDefault()

        clearAllFields()
        setSuccess('')
    }

    const clearAllFields = () => {
        setCategoryName('')
        setCategorySlug('')
        setCategoryDesc('')
        setLoading(false)
        setError('')
        setServerError('')
    }

    return (
        <div>
            
            {/* <h2 className="az-content-title">All posts</h2> */}
            <div className="az-content-label mg-b-5">Create category</div>
            <p className="mg-b-20">Using the most basic table markup.</p>

            <div className="mb-5">
                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Category</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter category name"
                            onChange={(e)=>setCategoryName(e.target.value)} 
                            value={categoryName}
                        />
                        {error ? <p className="text-danger">{error}</p>:''}
                    </div>{/* col */}
                </div>{/* row */}
                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Slug</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter category slug" 
                            onChange={(e)=>setCategorySlug(e.target.value)} 
                            value={categorySlug}
                        />
                    </div>{/* col */}
                </div>{/* row */}
                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Description</label>
                        <textarea
                          type="text"
                          className="form-control" 
                          placeholder="Enter category description"
                          onChange={(e)=>setCategoryDesc(e.target.value)}
                          value={categoryDesc}
                        ></textarea>
                    </div>{/* col */}
                </div>{/* row */}

                <div className="text-">
                {serverError ? <p className="text-danger">{serverError}</p>:''}
                {success ? <p className="text-success">{success}</p>:''}

                
                <button onClick={(e) => handleReset(e)} className="btn btn-dark pd-x-30">Reset</button>
                <button onClick={(e) => handleSubmit(e)} className="btn btn-success pd-x-30 mg-l-5">
                  {loading 
                    ? <><span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span> Saving...</>
                    : <>Save</> 
                  }
                </button>
                {/* <Toaster /> */}
                {/* <ToastContainer /> */}
                </div>
            </div>

        </div>
    );
}

export default CreateCategory;