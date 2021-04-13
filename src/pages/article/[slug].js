import React, {useState, useEffect} from 'react'
import DefaultLayout from '../../Layouts/DefaultLayout';
// import AsideArticle from '../../Components/DefaultLayout/AsideArticle';
import Router, {useRouter} from 'next/router'
import Parser from 'html-react-parser'
import moment from 'moment';

export default function Index({initPost}) {

    const router = useRouter()
    const [post, setPost] = useState(initPost)
    
    // useEffect( async () =>{
        
    //     const { slug } = router.query
    //     //  console.log(slug)
    //      const data = await fetch(`http://localhost:3333/api/post/get/${slug}`)
    //      const postData = await data.json()

    //      console.log('Single Post: ',postData)
 
    //      setPost(postData)

    // }, [])

    return (
        <DefaultLayout>
            {/* <div class="navbar-holder"></div>   */}

            {/* <div className="text-center">
                <img width="100%" src={post.imageUrl} />
            </div> */}

            {/* <div style={{ height:'500px', widht:'100%', background:`url(${post.imageUrl})`, backgroundSize:"cover"  }}></div> */}
            {/* Content */}
            {/* <div style={{ borderBottom:"2px solid #e7e7e7" }}></div> */}

            <div className="navbar-holder"></div>
            <section id="content" className="single">
                <div className="container">


                    <div className="row ">
                        {/* Main */}
                        <div className="col-md-12 text-center">
                            <h3 className="text-3xl font-medium mt-0 ml-0 mb-4">{post?.title}</h3>

                            <span className="text-muted">
                                {moment(post.createdAt).format('dddd, MMMM Do YYYY')} (about {moment(post.createdAt).fromNow()})
                                </span>

                            <div className="mt-4 mb-5 d-flex justify-content-center align-items-center">
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
                            
                            <div className="tag-list-article mb-5">
                                <ul>
                                    {post.tags.map((tag, index) =>
                                        <li key={index}><span>#{tag}</span></li>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* <div className="" style={{ borderBottom:"2px solid #e7e7e7" }}></div> */}

                   {/* {post.imageUrl && <div className="max-w-5xl mx-auto text-center mb-4">
                        <img width="100%" src={post.imageUrl} />
                    </div>}
                     */}


                    <div className="row">
                        {/* Main */}
   
                        <main className="col-12 col-lg-8 offset-lg-2">
                         
                        <div className="row">
                            <div className="col-12 align-self-center">
                 
                     
                            {/* <div dangerouslySetInnerHTML={{ __html:post?.body}}></div> */}



                           <div className="single-content">
                           {Parser(post ? post.body : '')}
                           </div>

                            <div className="tag-list-article d-flex mt-5">
                                <span className="mr-2">Categories:</span> 
                                <ul>

                                    {post.categories.map(cat =>
                                        <li><span>{cat.name}</span></li>
                                    )}

                                </ul>
                            </div> 
                            
                            {/* Post Holder */}
                            <div className="mb-5 post-holder">
                                <span className="posted-on">Posted on</span>
                                <ul>
                                  {post.categories.map((cat, index) =>
                                        <li key={index} className="post-meta-item">
                                            <a href="#" rel="bookmark">{cat.name} </a>
                                        </li>
                                    )}
                                    {/* <li className="post-meta-item">
                                            <a href="#" rel="bookmark">
                                                    November 12, 2019
                                            </a>
                                    </li> */}
                                </ul>
                            </div>
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
                        </main>
                        {/* Sidebar */}
                        {/* <AsideArticle/> */}
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
