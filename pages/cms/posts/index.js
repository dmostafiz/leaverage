import React from 'react';
import AccountLayout from '../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../helpers/checkAuthAndRedirect';
import NavLeft from '../../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../../Components/AccountLayout/Cms/NavRight';
import Link from 'next/link';

const Index = ({ user }) => {
  return (
    <AccountLayout user={user}>
      <div className="az-content az-content-dashboard">
        <div className="container flex-column">

        <div className="az-content-body">
          <div className="az-dashboard-one-title">
            <div>
              <h2 className="az-dashboard-title">Posts</h2>
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
              <Link href="/cms/posts/create">
                <a className="btn btn-purple">Create new post</a>
              </Link>
            </div>
          </div>{/* az-dashboard-one-title */}

          <div className="az-dashboard-nav hidden lg:flex">
            <NavLeft />
            <NavRight />
          </div>

          <div className="az-content-breadcrumb">
            <span>Dashboard</span>
            {/* <span>Tables</span> */}
            <span>All posts</span>
          </div>
          {/* <h2 className="az-content-title">All posts</h2> */}
          <br />

        </div>
        <div className="az-content-body">

          <div className="az-content-label mg-b-5">Posts Table</div>
          <p className="mg-b-20">Using the most basic table markup.</p>

          <div className="table-responsive">

            <table className="table mg-b-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th width="25%">Title</th>
                  <th width="45%">Description</th>
                  <th>Category</th>
                  <th width="10%">Created at</th>
                  <th width="15%">Last modified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    Tiger Nixon ebluar indicoroll of twin
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. making it look like readable English.
                  </td>
                  <td>System Architect</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    thie most beautiful of the systme
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. as opposed to using 'Content here, content here', making it look like readable English.
                  </td>
                  <td>Accountant</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    Ashton Cox of the right side of the ocean in the middle east
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </td>
                  <td>Junior Technical Author</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    Right side of the ocean in the middle east
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                  </td>
                  <td>Senior Javascript Developer</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
                <tr>
                  <th scope="row">5</th>

                  <td>
                    One of the most popular saight in the middle east
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </td>
                  <td>Accountant</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>
                    One of the most popular saight
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    It is a long established fact tha. As opposed to using 'Content here, content here', making it look like readable English.
                  </td>
                  <td>Junior Technical Author</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    The right side of one of the most popular saight
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </td>
                  <td>Senior Javascript Developer</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>
                    Ocasion of the most popular saight
                    <div>
                      <a href="" className="text-success"><small>Edit</small></a>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                    As opposed to using 'Content here, content here', making it look like readable English.
                  </td>
                  <td>Accountant</td>
                  <td>22 Apr, 2015</td>
                  <td>22 Apr, 2015</td>
                </tr>
              </tbody>
            </table>


          </div>
          {/* <!-- table-responsive --> */}

        </div>



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
