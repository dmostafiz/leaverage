import moment from 'moment';
import axios from 'axios';
import token from '../../../helpers/token';
import React, { useEffect, useState } from 'react';
import AccountLayout from '../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../helpers/checkAuthAndRedirect';
import NavLeft from '../../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../../Components/AccountLayout/Cms/NavRight';
import CreateCategory from '../../../Components/AccountLayout/Cms/Category/CreateCategory';
import useSwr, { mutate } from 'swr'
import Parser from 'html-react-parser'
import toast, { Toaster } from 'react-hot-toast';

const Index = ({ user }) => {
    
    // const [categories, setCategories] = useState([])
    const {data} = useSwr(`${process.env.API}/category/get`)
    const categories = data

    useEffect( async () => {
    //    const response = await fetch('http://localhost:3333/api/category/get') 
    //    const data = await response.json()  
    //    setCategories(data)
    },[])

    const handleDelete = async (id) => {
        const tstID = toast.loading('Deleting...');
        // alert(id)
        const response = await fetch(`${process.env.API}/category/delete/${id}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               Authorization: token
            }
        })
        const data = await response.json()
        console.log(data)

        if(data.type === 'success') return toast.success(data.msg, {id:tstID }) & mutate(`${process.env.API}/category/get`) 
    }
    
    return (
        <AccountLayout user={user}>
            <div className="az-content az-content-dashboard">
                <div className="container flex-column">

                    <div className="az-content-body mb-3">

                       <div className="az-dashboard-one-title">
                            <div>
                                <h2 className="az-dashboard-title">Categories</h2>
                                <p className="az-dashboard-text">It seems you havn't started any project yet'.</p>
                            </div>

                        </div>{/* az-dashboard-one-title */}
                        <div className="az-dashboard-nav hidden lg:flex">
                            <NavLeft />
                            <NavRight />
                        </div>

                        <div className="az-content-breadcrumb">
                            <span>Dashboard</span>
                            <span>Categories</span>
                        </div>

                    </div>


                    <div className="az-content-body">

                        <div className="row">

                            <div className="col-md-4">
                               <CreateCategory/> 
                            </div>

                            <div className="col-md-8">
                                {/* <h2 className="az-content-title">All posts</h2> */}
                                <div className="az-content-label mg-b-5">Categories Table</div>
                                <p className="mg-b-20">Using the most basic table markup.</p>

                                <div className="table-responsive">
                                    <table className="table mg-b-0">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Total Posts</th>
                                                <th>Created at</th>
                                                <th>Last modified</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {categories?.map((category, index) => <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    {category.name}
                                                    <div>
                                                        <a href="" className="text-success"><small>Edit</small></a>
                                                        <small className="ml-1 mr-1">|</small>
                                                        <a onClick={() => handleDelete(category._id)} href={Parser('javascript:void(0)')} className="text-danger"><small>Delete</small></a>
                                                    </div>
                                                </td>
                                                <td>{category.slug}</td>
                                                <td>3 posts</td>
                                                <td>{moment(category.createdAt).format('MMMM Do YYYY') }</td>
                                                <td>{moment(category.updatedAt).format('MMMM Do YYYY') }</td>
                                
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