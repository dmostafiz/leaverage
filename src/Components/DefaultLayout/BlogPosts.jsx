import Link from 'next/link'
import React from 'react'
import moment from 'moment';

export default function BlogPosts({posts}) {
    return (
        <>
        {posts?.map((post, index) => (
            <div className="shadow bg-gray-100 w-full m-auto h-64" style={{backgroundImage: post.imageUrl ? `url(${post.imageUrl})` : 'url(https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="flex flex-row items-end h-full w-full">
              <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
              <Link href={`/article/${post.slug}`}>
              <a><h3 className="text-base font-bold leading-5 text-light">{post.title}</h3></a>
              </Link>
                <div className="inline-flex items-center mb-3">
                  <Link href="#">
                  <a><span className="capitalize font-base text-xs my-1 mr-1 text-light">
                     {`${post.author?.profile.first_name} ${post.author?.profile.last_name}`}
                  </span></a>
                  </Link>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <div className="w-max inline-flex items-center">
                      <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-xs ml-1 antialiased">0</span>
                    </div>
                    <div className="w-max inline-flex ml-4 items-center">
                      <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-xs ml-1 antialiased">1</span>
                    </div>
                    <div className="w-max inline-flex ml-4 items-center">
                      <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs ml-1 antialiased">{moment(post.createdAt).format('Do MMMM')}</span>
                    </div>
                  </div>
                  {/* <div className="w-max">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          
          
          ))}
        </>
    )
}
