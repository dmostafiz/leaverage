import React from 'react'
import BlogArticles from '../Components/DefaultLayout/BlogArticles'
import DefaultLayout from '../Layouts/DefaultLayout'

export default function Concepts() {
    return (
        <DefaultLayout>


            <div className="navbar-holder" style={{ minHeight: '53px' }}></div>


            <section id="blog" className="max-w-6xl mx-auto section-vs-0 section-vsr-30 body-mode-dark blog-grid masonry news">
                <div data-aos="fade-in" data-aos-delay='100' data-aos-anchor="body" className="container full-grid">

                    <div className="intro mt-4">
                        <div className="align-self-center text-center text-md-left">
                            <h2 className="text-3xl text-gray-900 text-dark">New online business concepts</h2>
                            <p>Focused on results we seek to raise the level of our customers.</p>
                        </div>

                    </div>

                    <div className="row">
                        <main className="col-12  p-0 mb-5">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">


{[1,2,3,4,5,6,7,8,9,12,4,5,4564,6].map((project, index) => (

<div className="">

  <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-grey-dark flex items-center">
        <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
      <div className="text-sm">
        <p className="text-black leading-none">Jonathan Reinink</p>
        <p className="text-grey-dark">Aug 18</p>
      </div>
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
