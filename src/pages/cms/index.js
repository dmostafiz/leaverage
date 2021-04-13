import React from 'react';
import AccountLayout from '../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../helpers/checkAuthAndRedirect';
import Link from 'next/link';
import NavLeft from '../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../Components/AccountLayout/Cms/NavRight';

const Index = ({user}) => {
    return (
        <AccountLayout user={user}>
             <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
              <div className="container">

                <div className="az-content-body">
                    <div className="az-dashboard-one-title">
                    <div>
                        <h2 className="az-dashboard-title">Dashboard (CMS)</h2>
                        <p className="az-dashboard-text">It seems you havn't started any project yet'.</p>
                    </div>
                    </div>{/* az-dashboard-one-title */}
                    <div className="az-dashboard-nav hidden lg:flex">
                        <NavLeft/>
                        <NavRight/>
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
