import moment from 'moment';
import axios from 'axios';
import token from '../../../../helpers/token';
import React, { useEffect, useState } from 'react';
import AccountLayout from '../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../../helpers/checkAuthAndRedirect';
import NavLeft from '../../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../../Components/AccountLayout/Cms/NavRight';
import CreateSlider from '../../../Components/AccountLayout/Cms/Slider/CreateSlider';
import useSwr, { mutate } from 'swr'
import Parser from 'html-react-parser'
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const Index = ({ user }) => {
    
    // const [categories, setCategories] = useState([])
    const {data} = useSwr(`${process.env.API}/slider/getall`)
    const sliders = data

    useEffect( async () => {
        console.log(sliders)
    //    const response = await fetch('http://localhost:3333/api/slider/get') 
    //    const data = await response.json()  
    //    setCategories(data)
    },[])

    const handleDelete = async (id) => {
        const tstID = toast.loading('Deleting...');
        // alert(id)
        const response = await fetch(`${process.env.API}/slider/delete/${id}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: token
            }
        })

        const data = await response.json()
        console.log(data)

        if(data.type === 'success') return toast.success(data.msg, {id:tstID }) & mutate(`${process.env.API}/slider/getall`) 
    }
    
    return (
        <AccountLayout user={user}>
            <div className="az-content az-content-dashboard">
                <div className="container flex-column">

                    <div className="az-content-body mb-3">

                       <div className="az-dashboard-one-title">
                            <div>
                                <h2 className="az-dashboard-title">Sliders</h2>
                                <p className="az-dashboard-text">It seems you havn't started any project yet'.</p>
                            </div>

                        </div>{/* az-dashboard-one-title */}
                        <div className="az-dashboard-nav hidden lg:flex">
                            <NavLeft />
                            <NavRight />
                        </div>

                        <div className="az-content-breadcrumb">
                            <span>Dashboard</span>
                            <span>Sliders</span>
                        </div>

                    </div>


                    <div className="az-content-body">

                        <div className="row">

                            <div className="col-md-4">
                               <CreateSlider/> 
                            </div>

                            <div className="col-md-8">
                                {/* <h2 className="az-content-title">All posts</h2> */}
                                <div className="az-content-label mg-b-5">Sliders Table</div>
                                <p className="mg-b-20">Using the most basic table markup.</p>

                                <div className="table-responsive">
                                    <table className="table mg-b-0">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Name</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Created at</th>
                                                <th>Last modified</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {sliders?.map((slider, index) => <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    {slider.name}
                                                    <div>
                                                        <Link href={`/cms/sliders/${slider._id}/edit`}>
                                                            <a className="text-success"><small>Edit</small></a>
                                                        </Link>
                                                        <small className="ml-1 mr-1">|</small>
                                                        <a onClick={() => handleDelete(slider._id)} href={Parser('javascript:void(0)')} className="text-danger"><small>Delete</small></a>
                                                    </div>
                                                </td>
                                                <td>{slider.title}</td>
                                                <td>{slider.description}</td>
                                                <td>{moment(slider.createdAt).format('MMMM Do YYYY') }</td>
                                                <td>{moment(slider.updatedAt).format('MMMM Do YYYY') }</td>
                                
                                            </tr>)} 

                                        </tbody>
                                    </table>
                                </div>
                                {/*
                               
                                <!-- table-responsive --> */}

                            </div>

                        </div>

                    </div>{/* az-content-body */}

                    {/* Important contents end here */}

                </div>
            </div>{/* az-content */}

        </AccountLayout>
    );
}

Index.getInitialProps = async (ctx) => {
    const user = await checkAuthAndRedirect(`${process.env.API}/authorize`, ctx)
    return { user }
}

export default Index;