import React from 'react'
import NavHolder from '../Components/DefaultLayout/NavHolder'
import DefaultLayout from '../Layouts/DefaultLayout'

export default function calculateCost() {
return (
<DefaultLayout title="Concepts" nav="home">

    <NavHolder />

        <div className="w-screen items-center justify-center md:mb-16 rounded-lg shadow-md md:shadow-lg pb-10 md:pb-20">
            
            <div className="max-w-6xl mx-auto flex md:flex-row flex-col">
            <div className="flex-1 px-8 md:px-0">
                <h3 className="font-semibold text-2xl tracking-wide mb-6">Get an idea of estimated development time duration & costs for your project</h3>
                <p className="text-gray-500 my-1 text-lg">
                    We added huge modules of various types web applications. you can select hourly price or fixed price for those modules. Or you can just submit a custom web application quote to us. we will understand your concept and decide the cost by negotiat and if we and you both agree then take over the project. 
                    <br /><br />
                    <span className="font-semibold text-lg">Note: the calculator will calculate cost and development time duration of the project & give you estimate idea. though you can negotiat with us.</span>
                </p>
            </div>
            {/* <div className="md:px-2 items-center flex md:ml-3">
                <button
                    className="bg-green-700 text-white font-bold px-4 py-2 text-sm uppercase rounded tracking-wider focus:outline-none hover:bg-green-800">Write
                    Idea</button>
            </div> */}
            </div>

        </div>
  
    <section id="blog" className="max-w-6xl mx-auto section-vs-0 section-vsr-30 body-mode-dark blog-grid masonry news">
        <div data-aos="fade-in" data-aos-delay='100' data-aos-anchor="body" className="container full-grid">

            <div className="intro mt-4 px-2">
                <div className="align-self-center text-center text-md-left">
                    <h2 className="text-3xl text-gray-900 text-dark">Calculate your estimated cost</h2>
                    <p>Focused on results we seek to raise the level of our customers.</p>
                </div>
            </div>

            <div className="row">
                <main className="col-12  p-0 mb-5">
      
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
        </a> :
        <Loading height='25px' width='25px' center={true} /> }
    </div> */}

</DefaultLayout>
)

}