import React from 'react'
import {useSelector} from 'react-redux'
import checkAuthAndRedirect from '../../../helpers/checkAuthAndRedirect'
import AccountLayout from '../../Layouts/AccountLayout'

export default function MyProjects({user}) {
    const authUser = useSelector(state => state.auth)

    return (
    <AccountLayout user={user}>
 <div className="az-content az-content-dashboard">
    <div className="container">
      <div className="az-content-body">
        <div className="az-dashboard-one-title">
          <div>
            <h2 className="az-dashboard-title">No projects found</h2>
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
            <a href="#" className="btn btn-purple">Have any idea?</a>
          </div>
        </div>{/* az-dashboard-one-title */}
        <div className="az-dashboard-nav  hidden lg:flex">
          <nav className="nav">
            <a className="nav-link active" data-toggle="tab" href="#">Overview</a>
            <a className="nav-link" data-toggle="tab" href="#">Audiences</a>
            <a className="nav-link" data-toggle="tab" href="#">Demographics</a>
            <a className="nav-link" data-toggle="tab" href="#">More</a>
          </nav>
          <nav className="nav">
            <a className="nav-link" href="#"><i className="far fa-save" /> Save Report</a>
            <a className="nav-link" href="#"><i className="far fa-file-pdf" /> Export to PDF</a>
            <a className="nav-link" href="#"><i className="far fa-envelope" />Send to Email</a>
            <a className="nav-link" href="#"><i className="fas fa-ellipsis-h" /></a>
          </nav>
        </div>
      </div>{/* az-content-body */}
    
       {/* Important contents end here */}
    
    </div>
  </div>{/* az-content */}

    </AccountLayout>

    )
}

MyProjects.getInitialProps = async (ctx) => {
    const user = await checkAuthAndRedirect(`${process.env.API}/authorize`, ctx)
    return { user }
  }
  
