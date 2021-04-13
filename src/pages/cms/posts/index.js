import React from 'react';
import AccountLayout from '../../../Layouts/AccountLayout'
import checkAuthAndRedirect from '../../../../helpers/checkAuthAndRedirect';
import NavLeft from '../../../Components/AccountLayout/Cms/NavLeft';
import NavRight from '../../../Components/AccountLayout/Cms/NavRight';
import Link from 'next/link';
import useSWR from 'swr';
import moment from 'moment';

const Index = ({ user }) => {

  const {data} = useSWR(`${process.env.API}/post/get`)
  const posts = data?.posts

  console.log('SWR POsts: ',posts)

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
                {posts?.map((post, index) => <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {post.title}
                    <div>
                      <Link href={`/cms/posts/${post._id}/edit`}>
                        <a href={`/cms/posts/${post._id}/edit`} className="text-success"><small>Edit</small></a>
                      </Link>
                      <small className="ml-1 mr-1">|</small>
                      <a href="" className="text-danger"><small>Delete</small></a>
                    </div>
                  </td>
                  <td>
                  {post.metaDescription.substr(0, 150)}
                  </td>
                  <td>
                    <ul>
                      {post.categories?.map((cat, index) => <li>{cat.name}</li>)}
                    </ul>
                  </td>
                  <td>{moment(post.createdAt).format('MMMM Do YYYY') }</td>
                  <td>{moment(post.updatedAt).format('MMMM Do YYYY') }</td>
                </tr>

                )}

    
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
