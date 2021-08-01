import Link from 'next/link'
import React from 'react'
import BlogArticles from '../Components/DefaultLayout/BlogArticles'
import NavHolder from '../Components/DefaultLayout/NavHolder'
import DefaultLayout from '../Layouts/DefaultLayout'

export default function Projects() {
    return (
        <DefaultLayout title="Projects">


            <NavHolder />


            <section id="blog" className="max-w-6xl mx-auto section-vs-0 section-vsr-30 body-mode-dark blog-grid masonry news">
                <div data-aos="fade-in" data-aos-delay='100' data-aos-anchor="body" className="container full-grid">

                    <div className="intro mt-4">
                        <div className="align-self-center text-center text-md-left">
                            <h2 className="text-3xl text-gray-900 text-dark">Our previous projects</h2>
                            <p>Focused on results we seek to raise the level of our customers.</p>
                        </div>

                    </div>

                    <div className="row">
                        <main className="col-12  p-0 mb-5">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">


{[1,2,3,4,5,6,7,8,9,12,4,5,4564,6].map((project, index) => (

<div className="">
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
    <div className="bg-cover bg-center h-56 p-4" style={{backgroundSize:'cover',backgroundImage: `url(https://picsum.photos/id/${index}/200/300)`}}>

    </div>
    <div className="p-4">
        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Company forced matrix with PTC</p>
        <p>
            <span className="text-3xl text-gray-900 mr-2">$1,500</span> 
            <span>Estimated cost</span>
        </p>
        <p className="text-gray-700 mt-2">Estimated cost of the whole project. Days development forced matrix with</p>
    </div>
    <div className="flex justify-between p-4 b text-gray-700">
        <div className="inline-flex content-betwen">
        {/* Icon */}
        <p><span className="text-gray-900 font-bold">30</span> Days development</p>
        </div>
        <div className="inline-flex space-center">
        {/* Icon   */}
        <p><span className="text-gray-900 font-bold">5</span> Revisions</p>
        </div>
    </div>
    {/* <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-green-200">
        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
        <div className="flex items-center pt-2">
        <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)'}}>
        </div>
        <div>
            <p className="font-bold text-gray-900">Tiffany Heffner</p>
            <p className="text-sm text-gray-700">(555) 555-4321</p>
        </div>
        </div>
    </div> */}
    </div>
</div>

))}




                            </div>
                        </main>
                    </div>
                    {/* Pagination */}
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="text-center mb-5">
                {!loadMoreLoading ? loadMore && <a href="javascript:void(0)" onClick={handleLoadMore} className="text-gray-500">
                  Load more
                </a> : <Loading height='25px' width='25px' center={true} /> }
            </div> */}

        </DefaultLayout>
    )
}
