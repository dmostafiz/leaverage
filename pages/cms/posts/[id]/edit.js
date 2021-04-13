import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AccountLayout from '../../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../../helpers/checkAuthAndRedirect'
import NavLeft from '../../../../Components/AccountLayout/Cms/NavLeft'
import NavRight from '../../../../Components/AccountLayout/Cms/NavRight'
import Link from 'next/link'
import MyEditor from '../../../../Components/MyEditor'
// import TynnyMCE from '../../../../Components/TynnyMCE';
import { slugify, getText, getFocusKeywords } from '../../../../helpers/generalHelpers';
import Select from 'react-select'
import dynamic from 'next/dynamic';
// import SummerNote from '../../../../Components/SummerNote';
import toast, { Toaster } from 'react-hot-toast';
// import ImageUploader from 'react-images-upload'
// const ImageUploader = dynamic(
//     () => import('react-images-upload'),
//     { ssr: false }
// )
import Dropzone from 'react-dropzone'
import token from '../../../../helpers/token'
import { useRouter } from 'next/router'

const TynnyMCE = dynamic(
    () => import('../../../../Components/TynnyMCE'),
    { ssr: false }
)

const Edit = ({ user }) => {

    const [tagField, setTagField] = useState('')
    const [fkeywordsField, setFkeywordsField] = useState('')
    

    const [imgLoading, setImageLoading] = useState(false)

    const [optionals, setOptionals] = useState(false)

    const [cats, setCats] = useState([])
    const [postCats, setPostCats] = useState([])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [imageUrl, setImageUrl] = useState('')
    const [temporaryImage,setTemporaryImage] = useState('')
    const [rawImage,setRawImage] = useState('')

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    const [slug, setSlug] = useState('')
    const [seoTitle, setSeoTitle] = useState('')
    const [metaDesc, setMetaDesc] = useState('')

    const [focusKeywords, setFocusKeywords] = useState([])

    const router = useRouter()
    const id = router.query.id

    const [Editor, setEditor] = useState('')

    // let Editor;

    useEffect(async () => {

        const resp = await axios.get(`${process.env.API}/post/getid/${id}`)
        //    console.log(resp.data);
        const post = await resp.data


        let initPostCats = []
        post.categories.map(cat => {
            initPostCats.push({ value: cat._id, label: cat.name })
            // setCategories([...categories, {value: cat._id, label: cat.name}])
        })


        setPostCats(initPostCats)

        setCategories(initPostCats)

        setTitle(post.title)

        setDescription(post.body)
        setImageUrl(post.imageUrl)
        setTemporaryImage(post.imageUrl)
        // setCategories([])
        setTags(post.tags)
    
        setSlug(post.slug)
        setSeoTitle(post.metaTitle)
        setMetaDesc(post.metaDescription)
    
        setFocusKeywords(post.fKeywords)



        const response = await fetch(`${process.env.API}/category/get`)
        const allCategories = await response.json()

        let initCat = []
        allCategories.map(cat => {
            initCat.push({ value: cat._id, label: cat.name })
            // setCategories([...categories, {value: cat._id, label: cat.name}])
        })

        setCats(initCat)

        setEditor(<TynnyMCE 
                    body={post.body} 
                    setDesc={handleDescriptionChange} 
                />)

    }, [])


    const handleImageUpload = async (imgs) => {
        setImageLoading(true)
        const image = imgs[0]
        // let data = new FormData();
        // data.append('file', image);
        // data.append('upload_preset', 'leaverage');

        // const response = await axios.post('https://api.Cloudinary.com/v1_1/dgzzionee/image/upload',
        //     data, { headers: { 'Content-Type': 'multipart/form-data' } })

        // const uploadedFile = response.data

        // console.log('Upload: ', uploadedFile.secure_url)
        const reader = new FileReader()
        reader.readAsDataURL(image)

        reader.onloadend = () => {
            setRawImage(reader.result)
            // setImageUrl(reader.result)
            setTemporaryImage(reader.result)
            // setImageUrl(reader.result)
            setImageLoading(false)

            // console.log(reader.result);
        }


        // setImageUrl(uploadedFile.secure_url)

        // setImageLoading(false)
    }

    const handleCategoryChange = (value) => {
        setCategories(value)
        setPostCats(value)
        // setCats(value)
        console.log(categories)
    }

    const handleCollapseAdvanceFieds = () => {
        setOptionals(!optionals)
    }

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]


    const handleTagSubmit = (e) => {

        if (e.keyCode == 188 || e.keyCode == 13) {
            if (tags.length < 5) {
                e.target.value.trim().replace(',', '') && setTags([...tags, e.target.value.trim().replace(',', '')])
                setTagField('')
            }
        }
    }


    const handleFkeywordsSubmit = (e) => {

        if (e.keyCode == 188 || e.keyCode == 13) {
            if (focusKeywords.length < 20) {
                e.target.value.trim().replace(',', '') && setFocusKeywords([...focusKeywords, e.target.value.trim().replace(',', '')])
                setFkeywordsField('')
            }
        }
    }

    const handleTagRemove = (tag) => {
        const newTags = tags.filter(t => t != tag)
        setTags(newTags)
    }

    const handleFocusKeyWordsRemove = (keyword) => {
        const keywords = focusKeywords.filter(fk => fk != keyword)
        setFocusKeywords(keywords)
    }
    

    const handleTitleChange = (value) => {

        setTitle(value)

        setSlug(slugify(value))
        setSeoTitle(value)
    }


    const handleDescriptionChange = async (value) => {
        setDescription(value)

        const text = getText(value)
        setMetaDesc(text.substring(0,500))

        const fKewords = await getFocusKeywords(text)

        setFocusKeywords(fKewords)
        // console.log('Keyword: ', fKewords)
    }



    const [submitLoading, setSubmitLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        setSubmitLoading(true)
        
  
        const body = {
            title:title,
            slug:slug,
            body:description,
            rawImage: rawImage,
            image: imageUrl,
            categories:categories,
            tags:tags,
            metaTitle:seoTitle,
            metaDescription: metaDesc,
            fKeywords: focusKeywords,
            status:'publish'
        }
        // console.log('Fields: ',JSON.stringify(fields))

        const headers = {
            'Content-Type': 'application/json',
            Authorization: token
        }

        const response = await axios.post(`${process.env.API}/post/save/${id}`, body, {headers})

        const data = await response.data

        if(data.type == 'success') {
            toast.success(data.msg);
            setSuccess(data.msg)
            clearAll()
        }
        else{
            // clearAll()
            setError(data.msg)
            setSubmitLoading(false)
        }
        

        console.log(data)
    }


    const clearAll = () => {
        // const [tagField, setTagField] = useState('')
        // const [fkeywordsField, setFkeywordsField] = useState('')
        
    
        // const [imgLoading, setImageLoading] = useState(false)
        // const [optionals, setOptionals(false)] = useState(false)
    
        // setCats([])
        // setTitle('')
        // setDescription('')
        // setImageUrl('')
        // setCategories([])
        // setPostCats([])
        // setTags([])
        // setSlug('')
        // setSeoTitle('')
        // setMetaDesc('')
        // setFocusKeywords([])

        setSubmitLoading(false)
    }

    return (
        <AccountLayout user={user}>
            <div className="az-content az-content-dashboard">
                <div className="container d-flex flex-column">
                    <div className="az-content-body">
                        <div className="az-dashboard-one-title">

                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <div className="az-content-breadcrumb">
                                    <span>Dashboard</span>
                                    <span>Create post</span>
                                </div>
                                {/* <Link href="/cms/posts">
                                    <a className="btn btn-dark btn-sm">Back to all posts</a>
                                </Link> */}
                            </div>

                        </div>
                    </div>
                    <div className="az-content-body">    

                        {/* <br /> */}

                        <div className="az-content-label mg-b-5">Create new post</div>
                        <p className="mg-b-20">Using the most basic table markup.</p>



                        <div className="row">
                            <div className="col-md-8">

                                <div className="">
                                    <div className="row row-xs align-items-center">
                                        <div className="col-md-12">
                                            <input
                                                value={title}
                                                onChange={(e) => handleTitleChange(e.target.value)}
                                                type="text"
                                                className="form-control a-title"
                                                placeholder="Title..." />
                                        </div>
                                    </div>
                                    <div className="row row-xs align-items-center mg-b-20">
                                        <div className="col-md-12">
                                            
                                         {Editor}

                                        </div>
                                    </div>


                                    <div className="mb-4">
                                        <a href="javascript:void(0)" onClick={() => handleCollapseAdvanceFieds()}
                                            className="text-info"><small>{!optionals ? 'Show advance fields' : 'Hide advance fields'}</small></a>
                                    </div>

                                    {optionals == true && <>

                                        <div className="row row-xs mb-2">
                                            <div className="col-md-12">
                                                <label className="text-muted">SEO title - generated from main title</label>
                                                <input
                                                    value={seoTitle}
                                                    onChange={e => setSeoTitle(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="SEO title..." />
                                            </div>
                                        </div>

                                        <div className="row row-xs mb-2">
                                            <div className="col-md-12">
                                                <label className="text-muted">SEO slug - generated from main title</label>
                                                <input
                                                    onChange={e => setSlug(e.target.value)}
                                                    value={slug}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Post slug..." />
                                            </div>
                                        </div>

                                        <div className="row row-xs mb-2">
                                            <div className="col-md-12">
                                                <label className="text-muted">Meta description - generated from main body</label>
                                                <textarea
                                                    value={metaDesc}
                                                    onChange={e => setMetaDesc(e.target.value)}
                                                    type="text"
                                                    rows="5"
                                                    className="form-control"
                                                    placeholder="SEO Description / Excerpt"></textarea>
                                            </div>
                                        </div>

                                        <div className="row row-xs mb-4">
                                            <div className="col-md-12">
                                                <label className="text-muted">Focus keywords - seperate by ( , ) comma</label>
                                                <input
                                                value={fkeywordsField}
                                                onChange={(e) => setFkeywordsField(e.target.value)}
                                                onKeyUp={e=>handleFkeywordsSubmit(e)}
                                                type="text" className="form-control" placeholder="Ex# awesome article, my first tour, ....." />
                                            </div>
                                        </div>

                                       {focusKeywords.length ? <div className="mt-2 tag-list">
                                            <h6 className="text-muted pl-1">Focus keywords:</h6>
                                            <ul>
                                                {focusKeywords.map(fk =>
                                                    <li><span>{fk}<span onClick={() => handleFocusKeyWordsRemove(fk)} className="tag-remover">
                                                        <i className="fa fa-times"></i>
                                                    </span></span></li>
                                                )}
                                            </ul>
                                        </div> : ''}
                                        

                                    </>}


                                </div>

                            </div>

                            <div className="col-md-4">

                                <Dropzone
                                    style={{ background: `url(${temporaryImage})` }}
                                    className="drop-zone"
                                    onDrop={acceptedFiles => handleImageUpload(acceptedFiles)}>

                                    {({ getRootProps, getInputProps }) => (

                                        <div {...getRootProps} >


                                            {imgLoading ? <div class="spinner-border"
                                                role="status"
                                                style={{
                                                    color: temporaryImage == '' ? '#d6d6d6' : 'white',
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

                                <Select
                                    className="mg-t-30"
                                    // style={{ width:'100%' }}
                                    closeMenuOnSelect={true}
                                    placeholder="Select category"
                                    // components={animatedComponents}
                                    // defaultValue={[colourOptions[4], colourOptions[5]]}
                                    isMulti
                                    options={cats} 
                                    value={postCats}
                                    isClearable
                                    onChange={(value => handleCategoryChange(value))}
                                />

                                <div className="row row-xs mt-2">
                                    <div className="col-md-12">
                                        <input value={tagField} onChange={(e) => setTagField(e.target.value)} onKeyUp={e => handleTagSubmit(e)} type="text" className="form-control form-control-sm" placeholder=" Tags..." />
                                        <small className="text-muted">Note:- Hit Comma / Enter to add tags</small>
                                    </div>
                                </div>

                                <div className="mt-2 tag-list">
                                    <ul>
                                        {tags.map(tag =>
                                            <li><span>{tag}<span onClick={() => handleTagRemove(tag)} className="tag-remover">
                                                <i className="fa fa-times"></i>
                                            </span></span></li>
                                        )}
                                    </ul>
                                </div>

                                <div className="mg-t-30 text-right">
                                    <Link href='/cms/posts'>
                                        <a className="btn btn-light btn-sm pd-x-30" style={{ width: "49%" }}>Back</a>
                                    </Link>

                                    <button onClick={(e) => handleSubmit(e)} style={{ width: "50%" }}
                                        className="btn btn-success btn-sm pd-x-30 mg-l-3">
                                                   {submitLoading  ? <><span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span> Publishing...</>
                                                    : <>Publish</> }
                                    </button>

                                </div>

                            </div>
                        </div>
                        {/* <!-- table-responsive --> */}

                    </div>




                </div>
            </div>{/* az-content */}

        </AccountLayout>
    );
}

Edit.getInitialProps = async (ctx) => {
    const user = await checkAuthAndRedirect(`${process.env.API}/authorize`, ctx)

    // console.log(allCategories)
    return { user }
}


export default Edit;
