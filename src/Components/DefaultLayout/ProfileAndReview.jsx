import React from 'react'
import Link from 'next/link'

export default function ProfileAndReview() {
return (
<>
    {/* This is an example component */}
    <div className="max-w-6xl mx-auto md:mt-10 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-0 md:gap-8">

            <div style={{ minHeight:"478px" }} className="w-full bg-white py-6 px-6 shadow-md">

                <div className="mt-6">
                    <div className="h-20">
                        {/* <img className="rounded-tl-xl rounded-tr-xl"
                            src="https://pbs.twimg.com/profile_banners/607109926/1622322022/1500x500" /> */}
                    </div>
                </div>
                <div className="-mt-24">
                    <div className="relative flex justify-center rounded-full">
                        <img className="absolute w-32 rounded-full"
                            src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/2bf2e854e6d67c88f42b9f76432465e6-1617809663108/3eccca4d-c708-4448-97fd-3162e20245cd.jpg" />
                        <img className=" top-20 left-10 relative w-14 h-14 rounded-full" src="/fiverr-level-1.png" />
                    </div>
                </div>
                <div className="relative top-20">
                    <div className="mt-2 text-lg">
                        <p className="text-center"><span className="font-bold">Mostafiz Rahaman</span> (Welfordian)</p>
                    </div>
                    <div className="mt-2 flex justify-center text-lg">
                        <p className="text-center">web, native app developer and MLM Expert
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="flex items-center mt-2">

                            <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>

                            <span className="font-bold ml-1">5.0</span>
                            <span className="font-normal ml-1 text-gray-400">(16 reviews)</span>
                        </div>
                    </div>

                    <div className="flex pb-3 mt-3 items-center border-b">
                        <a target="_blank" href="https://www.fiverr.com/dmostafiz"
                            className="py-2 rounded flex-1 bg-green-500 text-white text-center font-bold">
                            <i className="fas fa-plus-circle" /> Get me on Fiverr
                        </a>
                    </div>

                    <div className="flex items-center">
                        <div className="text-gray-400">
                            <i className="fas fa-home" />
                        </div>
                        <div className="text-lg ml-3">
                            <p>Lives in <span className="font-bold">Frederick, Maryland</span></p>
                        </div>
                    </div>
                    <div className="flex mt-2 items-center">
                        <div className="text-gray-400">
                            <i className="fas fa-rss" />
                        </div>
                        <div className="text-lg ml-3">
                            <p>Followed by 28 people</p>
                        </div>
                    </div>
                    <div className="flex mt-2 items-center">
                        <div className="text-gray-400">
                            <i className="fas fa-link" />
                        </div>
                        <div className="text-lg ml-3">
                            <p>welford.me</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* review item */}
            <div className="col-span-2 bg-white shadow-md px-4 py-4 ">
                <div className="mb-1 tracking-wide px-4 ">
                    <h2 className="text-gray-500 font-bold text-xl mt-1 mb-3">Alltime reviews</h2>
                    <div className="border-b -mx-8 px-8 ">
                        <div className="flex items-center mt-1">
                            <div className=" w-1/5 text-yellow-500 tracking-tighter">
                                <span className="font-bold">5 star</span>
                            </div>
                            <div className="w-3/5">
                                <div className="bg-gray-300 w-full rounded-lg h-2">
                                    <div className=" w-7/12 bg-yellow-500 rounded-lg h-2" />
                                </div>
                            </div>
                            <div className="w-1/5 text-gray-700 pl-3">
                                <span className="text-sm">51%</span>
                            </div>
                        </div>{/* first */}
                        <div className="flex items-center mt-1">
                            <div className="w-1/5 text-yellow-500 tracking-tighter">
                                <span className="font-bold">4 star</span>
                            </div>
                            <div className="w-3/5">
                                <div className="bg-gray-300 w-full rounded-lg h-2">
                                    <div className="w-1/5 bg-yellow-500 rounded-lg h-2" />
                                </div>
                            </div>
                            <div className="w-1/5 text-gray-700 pl-3">
                                <span className="text-sm">17%</span>
                            </div>
                        </div>{/* second */}
                        <div className="flex items-center mt-1">
                            <div className="w-1/5 text-yellow-500 tracking-tighter">
                                <span className="font-bold">3 star</span>
                            </div>
                            <div className="w-3/5">
                                <div className="bg-gray-300 w-full rounded-lg h-2">
                                    <div className=" w-3/12 bg-yellow-500 rounded-lg h-2" />
                                </div>
                            </div>
                            <div className="w-1/5 text-gray-700 pl-3">
                                <span className="text-sm">19%</span>
                            </div>
                        </div>{/* thierd */}
                        <div className="flex items-center mt-1">
                            <div className=" w-1/5 text-yellow-500 tracking-tighter">
                                <span className="font-bold">2 star</span>
                            </div>
                            <div className="w-3/5">
                                <div className="bg-gray-300 w-full rounded-lg h-2">
                                    <div className=" w-1/5 bg-yellow-500 rounded-lg h-2" />
                                </div>
                            </div>
                            <div className="w-1/5 text-gray-700 pl-3">
                                <span className="text-sm">8%</span>
                            </div>
                        </div>{/* 4th */}
                        <div className="flex items-center mt-1">
                            <div className="w-1/5 text-yellow-500  tracking-tighter">
                                <span className="font-bold">1 star</span>
                            </div>
                            <div className="w-3/5">
                                <div className="bg-gray-300 w-full rounded-lg h-2">
                                    <div className=" w-2/12 bg-yellow-500  rounded-lg h-2" />
                                </div>
                            </div>
                            <div className="w-1/5 text-gray-700 pl-3">
                                <span className="text-sm">5%</span>
                            </div>
                        </div>{/* 5th */}
                    </div>
                </div>

                <div className="w-full px-4">
                    {/* This is an example component */}
                    <div className="flex items-center justify-center">
                        <div className="bg-white pb-4 rounded w-full">

                            <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0 mt-4">
                                <div className="border rounded-lg">
                                    <div className="flex items-center space-x-4 p-4">
                                        <div className="flex items-center p-4 bg-yellow-400 text-white rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 h-7"
                                                width={24} height={24} viewBox="0 0 24 24">
                                                <path
                                                    d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-500 font-semibold">Total Reviews</p>
                                            <div className="flex items-baseline space-x-4">
                                                <h2 className="text-2xl font-semibold">
                                                    16
                                                </h2>
                                                {/* <p className="text-green-700 flex font-semibold space-x-1">
                                                    <span>↑</span>
                                                    <span className="font-bold">122</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="border rounded-lg">
                                    <div className="flex items-center space-x-4 p-4">
                                        <div className="flex items-center p-4 bg-yellow-400 text-white rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 h-7"
                                                width={24} height={24} viewBox="0 0 24 24">
                                                <path
                                                    d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-500 font-semibold">Total Projects</p>
                                            <div className="flex items-baseline space-x-4">
                                                <h2 className="text-2xl font-semibold">
                                                    23
                                                </h2>
                                                {/* <p className="text-green-700 flex font-semibold space-x-1">
                                                    <span>↑</span>
                                                    <span className="font-bold">122</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-medium tracking-tight">We working as a giant</h3>

                    <p className="text-gray-700 text-sm py-1">
                        give your opinion about this item.We working as a giant team with worldwide best freelancersr.
                    </p>


                     <Link  href="/reviews">
                        <a className="py-2 rounded text-yellow-600 font-bold">What customers says about us</a>
                     </Link>

                </div>
            </div>

        </div>

    </div>

</>
)
}