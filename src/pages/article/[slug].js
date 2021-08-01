import React, {useState, useEffect} from 'react'
import DefaultLayout from '../../Layouts/DefaultLayout';
// import AsideArticle from '../../Components/DefaultLayout/AsideArticle';
import Router, {useRouter} from 'next/router'
import Parser from 'html-react-parser'
import moment from 'moment';
import NavHolder from '../../Components/DefaultLayout/NavHolder';

export default function Index({initPost}) {

    const router = useRouter()
    const [post, setPost] = useState(initPost)
    
    return (
        <DefaultLayout>

            <NavHolder />

            <section id="content" className="single -mt-16 md:-mt-8">
                <div className="container">

                    <div className="max-w-3xl mx-auto">

                        {/* Main */}
                        <div className=" ">
                            <div className="text-left">
                                <h3 className="text-2xl md:text-4xl font-bold mt-0 ml-0 mb-3">
                                    {post?.title}
                                </h3>
                               <div className="mb-4 d-flex ">
                                <img className="shadow-sm bg-light mr-2" src={post?.author?.profile.avatar} 
                                style={{ 
                                    width:"30px", 
                                    height:"30px", 
                                    borderRadius:"50%"
                                }} />
                               <div className="d-flex flex-column  justify-content-start align-items-start">
                                <span className="text-dark" style={{fontSize:"16px"}}>{`${post?.author?.profile.first_name} ${post?.author?.profile.last_name}`}</span>
                                <span className="text-success" style={{fontSize:"12px"}}>{`@${post?.author?.username}`}</span>
                               </div>
                            </div>
                            
                            </div>

                            <span className="text-muted mb-20">
                                {moment(post.createdAt).format('dddd, MMMM Do YYYY')} (about {moment(post.createdAt).fromNow()})
                            </span>

                            <div className="tag-list-article mt-3">
                                <ul>
                                    {post.tags.map((tag, index) =>
                                        <li className="mr-3" key={index}>
                                            <span className="text-gray-400 text-md">
                                                #{tag}
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                        </div>

                        <div className="single-content text-xl">
                            {Parser(post ? post.body : '')}
                        </div>

                        <div>
                            
                            <div className="flex items-center flex-row tag-list-article d-flex mt-3 mb-5">
                                <span className="mr-2">Categories:</span> 
                                <ul>
                                    {post.categories.map(cat =>
                                        <li><span>{cat.name}</span></li>
                                    )}
                                </ul>
                            </div> 
                            
                            {/* Post Holder */}
         
                            {/* Comments */}
                            <h3>Leave a Reply</h3>
                            <p>Sed mauris nulla, tempor eu est vel, dapibus hendrerit mauris.</p>
                            <form>
                                <fieldset>
                                <div className="row">
                                    <div className="col-12 col-lg-6 input-group p-0 pr-lg-3">
                                    <input type="text" name="name" data-minlength={3} className="form-control" placeholder="Name" required />
                                    </div>
                                    <div className="col-12 col-lg-6 input-group p-0">
                                    <input type="email" name="email" data-minlength={3} className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 input-group p-0">
                                    <textarea name="message" data-minlength={3} className="form-control" placeholder="Message" required defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-12 input-group p-0">
                                    <a id="next-3" className="send btn primary-button">SEND<i className="icon-login left" /></a>
                                </div>
                                </fieldset>
                            </form>
                        
                        </div>  


                    </div>
                </div>
            </section>

            

        </DefaultLayout>
    )
}

Index.getInitialProps = async (ctx) => {

    const {slug} = ctx.query
    const data = await fetch(`${process.env.API}/post/get/${slug}`)
    const initPost = await data.json()

    return { 
        initPost
    }
}

// export const getServerSideProps = async (ctx) => {



//     return {
//         props:{}
//     }
// }
