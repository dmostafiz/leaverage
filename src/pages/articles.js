import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import BlogArticles from '../Components/DefaultLayout/BlogArticles'
import DefaultLayout from '../Layouts/DefaultLayout'
import Router, {useRouter} from 'next/router'

export default function Articles({ allPosts, postCount }) {

    const[posts, setPosts] = useState(allPosts)

    const[categories, setCategories] = useState([])
    const[loadMore, setLoadMore] = useState(true)
    const[loadMoreLoading, setLoadMoreLoading] = useState(false)
    const[limit, setLimit] = useState(12)

    const router = useRouter()
    // const [posts, setPosts] = useState(allPosts)

    useEffect(async () => {
        setPosts(allPosts)

        hideLoadMoreBtn(limit)

        if(categories.length < 1)
        {
            const response = await axios.get(`${process.env.API}/posts-cat/get`)
            const cats = await response.data
            setCategories(cats)
        }

        Router.events.on('routeChangeStart', () => {
            setLimit(12)
        })
        //will update posts

    }, [router])


    const handleLoadMore = async () => {

        hideLoadMoreBtn()

        setLoadMoreLoading(true)

        const category = router.query.category == undefined || null ? 'all' : router.query.category

        const shouldLoad = 12

        const response = await axios.get(`${process.env.API}/posts/get/${category}/${limit+shouldLoad}`)
        const posts = await response.data.posts

        setPosts(posts)

        const extnds = limit + shouldLoad

        setLimit(extnds)

        setLoadMoreLoading(false)

        hideLoadMoreBtn(extnds)


    }

    const hideLoadMoreBtn = (limit) => {
        if(limit == postCount || limit > postCount){
            setLoadMore(false)
        }
        else{
            setLoadMore(true)
        }
    }

    return (
        <DefaultLayout>


            <div className="navbar-holder" style={{ minHeight: '53px' }}></div>

            <div className="category-menu border border-b-3 text-white">
                <div className="max-w-6xl mx-auto">
                    <ul className="flex">
                        <li className="mx-2">
                            <Link href={`/articles?category=all`}>
                                <a className="text-gray-500">All Articles</a>
                            </Link>
                            <span className="text-gray-300 ml-2">|</span>
                        </li>
                        {categories.map((cat, index) => <li key={cat._id} className="mx-1">
                                <Link href={`/articles?category=${cat.slug}`}>
                                    <a>{cat.name}</a>
                                </Link>
                                {categories.length > (index + 1) && <span className="text-gray-300 ml-2">|</span>}
                                
                            </li>
                        )}
       
                    </ul>
                </div>
            </div>


            {allPosts ? <BlogArticles posts={posts} /> : <h1>Loading</h1>}

            <div className="text-center mb-5">
                {loadMore && <a href="javascript:void(0)" onClick={handleLoadMore} className="text-gray-500">
                  {loadMoreLoading ? 'Loading...' : 'Load more' }
                </a>}
            </div>

        </DefaultLayout>
    )
}


export const getServerSideProps = async (ctx) => {

    const filter = ctx.query.category
    const limit = 12
    const response = await axios.get(`${process.env.API}/posts/get/${filter}/${limit}`)

    const allPosts = await response.data.posts
    const postCount = await response.data.count
    return {
        props: { allPosts, postCount }
    }
}