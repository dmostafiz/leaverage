import moment from 'moment';
import axios from 'axios';
import token from '../../../../helpers/token';
import React, { useEffect, useState } from 'react';
import AccountLayout from '../../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../../helpers/checkAuthAndRedirect';
import NavLeft from '../../../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../../../Components/AccountLayout/Cms/NavRight';
import UpdateSlider from '../../../../Components/AccountLayout/Cms/Slider/UpdateSlider';
import useSwr, { mutate } from 'swr'
import Parser from 'html-react-parser'
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const Edit = ({ user }) => {
    
    const [slider, setSlider] = useState({})

    useEffect( async () => {
    //    const response = await fetch('http://localhost:3333/api/slider/get') 
    //    const data = await response.json()  
    //    setCategories(data)
    },[])

    
    return (
        <AccountLayout user={user}>
            <div className="az-content az-content-dashboard">
                <div className="container flex-column">

                    <div className="az-content-body mb-3">

                       <div className="az-dashboard-one-title">
                            <div>
                                <h2 className="az-dashboard-title">Edit Slider</h2>
                                <p className="az-dashboard-text">It seems you havn't started any project yet'.</p>
                            </div>

                        </div>{/* az-dashboard-one-title */}
                
                        <div className="az-content-breadcrumb">
                            <span>Dashboard</span>
                            <span>Sliders</span>
                            <span>Edit</span>
                        </div>

                    </div>


                    <div className="az-content-body">

                        <div className="row">

                            <div className="col-md-4 offset-md-4">
                               <UpdateSlider/> 
                            </div>

                        </div>

                    </div>{/* az-content-body */}

                    {/* Important contents end here */}

                </div>
            </div>{/* az-content */}

        </AccountLayout>
    );
}

Edit.getInitialProps = async (ctx) => {
    const user = await checkAuthAndRedirect(`${process.env.API}/authorize`, ctx)
    return { user }
}

export default Edit;