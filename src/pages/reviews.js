import React from 'react'
import BlogArticles from '../Components/DefaultLayout/BlogArticles'
import DefaultLayout from '../Layouts/DefaultLayout'

export default function Reviews() {
    return (
        <DefaultLayout title="Reviews">


            <div className="navbar-holder" style={{ minHeight: '53px' }}></div>


            <section id="blog" className="max-w-6xl mx-auto section-vs-0 section-vsr-30 body-mode-dark blog-grid masonry news">
                <div data-aos="fade-in" data-aos-delay='100' data-aos-anchor="body" className="container full-grid">

                    <div className="intro mt-4">
                        <div className="align-self-center text-center text-md-left">
                            <h2 className="text-3xl text-gray-900 text-dark">Our Achivements (Client Feedbacks)</h2>
                            <p>Focused on results we seek to raise the level of our customers.</p>
                        </div>

                    </div>

                    <div className="row">
                        <main className="col-12  p-0 mb-5">
                            <div className="grid lg:grid-cols-1 md:grid-cols-3 grid-cols-1 gap-2">


{[1,2,3,4,5,6,7,8,9,12,4,5,4564,6].map((project, index) => (

<div className="">
  <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg ">
    <div className="flex mb-4">
      <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <div className="ml-2 mt-0.5">
        <div className="flex flex-col md:flex-row">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                Loyce Kuvalis
            </span>
            <span className="block font-small text-gray-400 md:ml-2">
                (New Joursey, US)
            </span>
        </div>
        <span className="block font-small text-base leading-snug text-gray-400">CEO - CalyForm Unit</span>
        {/* <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">16 December at 08:25</span> */}
      </div>
    </div>
    <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud enim ad minim ve quis nostrud.</p>
    <div className="flex justify-between items-center mt-5">
      <div className="flex ">
        <img width="20px" src="star.svg" />
        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">5.0</span>
      </div>  
      <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">3 Orders</div>
    </div>
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
