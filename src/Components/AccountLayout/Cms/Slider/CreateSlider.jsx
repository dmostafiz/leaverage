import React, { useState, useRef} from 'react';
import { slugify } from '../../../../../helpers/generalHelpers';
import cookies from 'js-cookie'
import useSWR, { mutate } from 'swr'
import toast from 'react-hot-toast';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import token from '../../../../../helpers/token';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const CreateSlider = () => {

    const [sliderName, setSliderName] = useState('')
    const [sliderTitle, setSliderTitle] = useState('')
    const [sliderDesc, setSliderDesc] = useState('')

    const [rawImg, setRawImg] = useState('')
    const [status, setStatus] = useState('active')
    const [hasBtn, setHasBtn] = useState(false)

    // const hasBtnCheckRef = useRef()
    
    const [buttonName, setButtonName] = useState('')
    const [buttonLink, setButtonLink] = useState('')
    const [buttonColor, setButtonColor] = useState('#FFFFFF')
    const [buttonBgColor, setButtonBgColor] = useState('#2B9929')

    const [loading, setLoading] = useState(false)
    const [imgLoading, setImageLoading] = useState(false)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [serverError, setServerError] = useState('')


    const handleImageUpload = async (files) => {

        setImageLoading(true)
        const image = files[0]

        const reader = new FileReader()
        reader.readAsDataURL(image)

        reader.onloadend = () => {
            setRawImg(reader.result)
            setImageLoading(false)

            console.log(reader.result);
        }


        // let data = new FormData();
        // data.append('file', image);
        // data.append('upload_preset', 'leaverage');

        // const response = await axios.post('https://api.Cloudinary.com/v1_1/dgzzionee/image/upload',
        //     data, { headers: { 'Content-Type': 'multipart/form-data' } })

        // const uploadedFile = response.data

        // console.log('Upload: ', uploadedFile.secure_url)

        // setImageUrl(uploadedFile.secure_url)

        // setRawImg(image)


    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const toastId = toast.loading('Saving...');

        setLoading(true)

        const headers = {
            'Content-Type': 'application/json',
            Authorization: token
        }

        const body = {
            name: sliderName,
            title: sliderTitle,
            description: sliderDesc,
            image: rawImg,
            status:status,
            hasButton: hasBtn,
            buttonName: buttonName,
            buttonLink: buttonLink,
            buttonBgColor: buttonBgColor,
            buttonTextColor: buttonColor
        }

        const response = await axios.post(`${process.env.API}/slider/save`, body, { headers })

        const data = await response.data

        if (data.type == 'error') return setServerError(data.msg) & setLoading(false) & toast.dismiss(toastId) & toast.error(data.msg) & setSuccess('')
        mutate(`${process.env.API}/slider/getall`)
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
        setSliderName('')
        setSliderTitle('')
        setSliderDesc('')
        setRawImg('') 

        setHasBtn(false)
    
        setButtonName('')
        setButtonLink('')
        setButtonColor('#FFFFFF')
        setButtonBgColor('#2B9929')
    
        setLoading(false)
        setImageLoading(false)
    
        setSuccess('')
        setError('')
        setServerError('')
    }

    return (
        <div>

            {/* <h2 className="az-content-title">All posts</h2> */}
            <div className="az-content-label mg-b-5">Create Slider</div>
            <p className="mg-b-20">Using the most basic table markup.</p>

            <div className="mb-5">
                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Slider name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Slider name"
                            onChange={(e) => setSliderName(e.target.value)}
                            value={sliderName}
                        />
                        {error ? <p className="text-danger">{error}</p> : ''}
                    </div>{/* col */}
                </div>{/* row */}
                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Slider title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter slider title"
                            onChange={(e) => setSliderTitle(e.target.value)}
                            value={sliderTitle}
                        />
                    </div>{/* col */}
                </div>{/* row */}
                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Description</label>
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Enter slider description"
                            onChange={(e) => setSliderDesc(e.target.value)}
                            value={sliderDesc}
                        ></textarea>
                    </div>{/* col */}
                </div>{/* row */}

                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12">
                        <label className="form-label mg-b-0">Slider Image</label>
                        <Dropzone
                            style={{ background: `url(${rawImg})` }}
                            className="drop-zone"
                            onDrop={acceptedFiles => handleImageUpload(acceptedFiles)}>

                            {({ getRootProps, getInputProps }) => (

                                <div {...getRootProps} >


                                    {imgLoading ? <div class="spinner-border"
                                        role="status"
                                        style={{
                                            color: rawImg == '' ? '#d6d6d6' : 'white',
                                            width: "50px",
                                            height: "50px",
                                            position: 'relative',
                                            left: "154px",
                                            top: "76px"
                                        }}>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                        : <img src="/upload.png" style={{
                                            position: 'relative',
                                            width: "50px",
                                            left: "43%",
                                            top: "76px",
                                            opacity: 0.5
                                        }} />
                                    }

                                    <input className="d-none" {...getInputProps} />
                                </div>

                            )}
                        </Dropzone>
                    </div>
                </div>


                <div className="row row-xs align-items-center mg-b-20">
                    <div className="col-md-12 flex justify-between items-end">
                        <div className="flex-1">
                            <label htmlFor="status">Status</label>
                            <select value={status} onChange={e => setStatus(e.target.value)}
                            className="form-control" id="status">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="ml-3 flex-1">
                            <input defaultChecked={hasBtn} onChange={() => setHasBtn(!hasBtn)} type="checkbox" id="hasbtn" />
                            <label htmlFor="hasbtn" className="ml-2">Has button</label>
                        </div>
                    </div>
                </div>


                {hasBtn && (
                    <>
                        <div className="row row-xs align-items-center mg-b-20">
                            <div className="col-md-12">
                                <label className="form-label mg-b-0">Button name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter button name"
                                    onChange={(e) => setButtonName(e.target.value)}
                                    value={buttonName}
                                />
                                {error ? <p className="text-danger">{error}</p> : ''}
                            </div>{/* col */}
                        </div>{/* row */}

                        <div className="row row-xs align-items-center mg-b-20">
                            <div className="col-md-12">
                                <label className="form-label mg-b-0">Button Link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter button link"
                                    onChange={(e) => setButtonLink(e.target.value)}
                                    value={buttonLink}
                                />
                                {error ? <p className="text-danger">{error}</p> : ''}
                            </div>{/* col */}
                        </div>{/* row */}

                        <div className="row row-xs align-items-center mg-b-20">
                            <div className="col-md-12 flex justify-between">

                               <div className="flex-1">
                                    <label className="form-label mg-b-0">Button bg color</label>
                                    <input
                                        type="color"
                                        className="form-control"
                                        placeholder="Enter button color"
                                        onChange={(e) => setButtonBgColor(e.target.value)}
                                        value={buttonBgColor}
                                    />
                                    {error ? <p className="text-danger">{error}</p> : ''}
                                </div>

                                <div className="flex-1">
                                    <label className="form-label mg-b-0">Button text color</label>
                                    <input
                                        type="color"
                                        className="form-control"
                                        placeholder="Enter button color"
                                        onChange={(e) => setButtonColor(e.target.value)}
                                        value={buttonColor}
                                    />
                                    {error ? <p className="text-danger">{error}</p> : ''}
                                </div>  

                            </div>{/* col */}
                        </div>{/* row */}
                    </>
                )}



                <div className="mt-5">
                    {serverError ? <p className="text-danger">{serverError}</p> : ''}
                    {success ? <p className="text-success">{success}</p> : ''}


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

export default CreateSlider;