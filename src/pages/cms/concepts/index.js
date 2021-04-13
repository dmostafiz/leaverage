import React from 'react';
import AccountLayout from '../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../../helpers/checkAuthAndRedirect';
import NavLeft from '../../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../../Components/AccountLayout/Cms/NavRight';

const Index = ({user}) => {
    return (
        <AccountLayout user={user}>
             <div className="az-content az-content-dashboard">
              <div className="container">
                <div className="az-content-body">
                    <div className="az-dashboard-one-title">
                    <div>
                        <h2 className="az-dashboard-title">Concepts</h2>
                        <p className="az-dashboard-text">It seems you havn't started any project yet'.</p>
                    </div>
                    <div className="az-content-header-right">
                        <div className="media">
                        <div className="media-body">
                            <label>Start Date</label>
                            <h6>Oct 10, 2018</h6>
                        </div>{/* media-body */}
                        </div>{/* media */}
                        <div className="media">
                        <div className="media-body">
                            <label>End Date</label>
                            <h6>Oct 23, 2018</h6>
                        </div>{/* media-body */}
                        </div>{/* media */}
                        <div className="media">
                        <div className="media-body">
                            <label>Event Category</label>
                            <h6>All Categories</h6>
                        </div>{/* media-body */}
                        </div>{/* media */}
                        <a href="#" className="btn btn-purple">Create new concept</a>
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
