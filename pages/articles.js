import React,{useState, useEffect} from 'react'
import BlogArticles from '../Components/DefaultLayout/BlogArticles'
import DefaultLayout from '../Layouts/DefaultLayout'

export default function Articles({allPosts}) {

    // const [posts, setPosts] = useState(allPosts)

    // useEffect(async () => {
    //     const data = await fetch('http://localhost:3333/api/post/get')
    //     const allPosts = await data.json()

    //     setPosts(allPosts)
    // }, [])

    return (
        <DefaultLayout>
            <div className="navbar-holder"></div>
           <BlogArticles posts={allPosts}/> 
        </DefaultLayout>
    )
}


Articles.getInitialProps = async (ctx) => {

    const data = await fetch(`${process.env.API}/post/get`)
    const allPosts = await data.json()

    return { 
        allPosts
    }
}