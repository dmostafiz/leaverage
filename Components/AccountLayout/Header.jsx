import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import cookies from 'js-cookie'
import { makeAuthentication } from '../../state/auth/actions'
import IsActive from '../../helpers/IsActive'
// import { useRouter } from 'next/router'

export default function Header() {
  // const {asPath} = useRouter()

  let user = useSelector(state => state.auth)

  useEffect(() => {
    // console.log('Header: ', user)
  }, [])

  const handleLogout = () => {
    cookies.remove('login')
    window.location.replace('/sign-in')
  }


  return (
    <div className="az-header">
      <div className="container">
        <div className="az-header-left">

          <a href="/" className="az-logo"><span />
                  DMostafiz <small className="text-muted ml-1"> Back office</small>
          </a>

          <a href="#" id="azMenuShow" className="az-header-menu-icon d-lg-none"><span /></a>
        </div>{/* az-header-left */}
        <div className="az-header-menu">
          <div className="az-header-menu-header">
            <a href="index.html" className="az-logo"><span /> azia</a>
            <a href="#" className="close">×</a>
          </div>{/* az-header-menu-header */}

          <ul className="nav">

            <li className={`nav-item ${IsActive(['/account'], 'active')}`}>
              <Link href="/account">
                <a className="nav-link"><i className="typcn typcn-chart-area-outline" /> Dashboard</a>
              </Link>
            </li>

            <li className={`nav-item ${IsActive(['/account/my-projects'], 'active')}`}>
              <Link href="/account/my-projects">
                <a className="nav-link"><i className="typcn typcn-folder" /> My Projects</a>
              </Link>
            </li>

            <li className={`nav-item ${IsActive(['/cms', 
                '/cms/posts', 
                '/cms/categories', 
                '/cms/pages',
                '/cms/concepts',
                '/cms/projects',
                'cms/reviews',

                '/cms/posts/create',
              ], 'active')}`}>
              <Link href="/cms">
                <a className="nav-link"><i className="typcn typcn-document" /> CMS</a>
              </Link>
            </li>

            {/* <li className="nav-item">
              <a href="#" className="nav-link with-sub"><i className="typcn typcn-book" /> Components</a>
              <div className="az-menu-sub az-menu-sub-mega">
                <div className="container">
                  <div>
                    <nav className="nav">
                      <span>UI Elements</span>
                      <a href="elem-accordion.html" className="nav-link">Accordion</a>
                      <a href="elem-alerts.html" className="nav-link">Alerts</a>
                      <a href="elem-avatar.html" className="nav-link">Avatar</a>
                      <a href="elem-badge.html" className="nav-link">Badge</a>
                      <a href="elem-breadcrumbs.html" className="nav-link">Breadcrumbs</a>
                      <a href="elem-buttons.html" className="nav-link">Buttons</a>
                      <a href="elem-cards.html" className="nav-link">Cards</a>
                      <a href="elem-carousel.html" className="nav-link">Carousel</a>
                    </nav>
                    <nav className="nav">
                      <a href="elem-collapse.html" className="nav-link">Collapse</a>
                      <a href="elem-dropdown.html" className="nav-link">Dropdown</a>
                      <a href="elem-icons.html" className="nav-link">Icons</a>
                      <a href="elem-images.html" className="nav-link">Images</a>
                      <a href="elem-list-group.html" className="nav-link">List Group</a>
                      <a href="elem-media-object.html" className="nav-link">Media Object</a>
                      <a href="elem-modals.html" className="nav-link">Modals</a>
                      <a href="elem-navigation.html" className="nav-link">Navigation</a>
                    </nav>
                    <nav className="nav">
                      <a href="elem-pagination.html" className="nav-link">Pagination</a>
                      <a href="elem-popover.html" className="nav-link">Popover</a>
                      <a href="elem-progress.html" className="nav-link">Progress</a>
                      <a href="elem-spinners.html" className="nav-link">Spinners</a>
                      <a href="elem-toast.html" className="nav-link">Toast</a>
                      <a href="elem-tooltip.html" className="nav-link">Tooltip</a>
                    </nav>
                  </div>
                  <div>
                    <nav className="nav">
                      <span>Forms</span>
                      <a href="form-elements.html" className="nav-link">Form Elements</a>
                      <a href="form-layouts.html" className="nav-link">Form Layouts</a>
                      <a href="form-validation.html" className="nav-link">Form Validation</a>
                      <a href="form-wizards.html" className="nav-link">Form Wizards</a>
                      <a href="form-editor.html" className="nav-link">WYSIWYG Editor</a>
                    </nav>
                  </div>
                  <div>
                    <nav className="nav">
                      <span>Charts</span>
                      <a href="chart-morris.html" className="nav-link">Morris Charts</a>
                      <a href="chart-flot.html" className="nav-link">Flot Charts</a>
                      <a href="chart-chartjs.html" className="nav-link">ChartJS</a>
                      <a href="chart-sparkline.html" className="nav-link">Sparkline</a>
                      <a href="chart-peity.html" className="nav-link">Peity</a>
                    </nav>
                  </div>
                  <div>
                    <nav className="nav">
                      <span>Maps</span>
                      <a href="map-google.html" className="nav-link">Google Maps</a>
                      <a href="map-leaflet.html" className="nav-link">Leaflet</a>
                      <a href="map-vector.html" className="nav-link">Vector Maps</a>
                      <span>Tables</span>
                      <a href="table-basic.html" className="nav-link">Basic Tables</a>
                      <a href="table-data.html" className="nav-link">Data Tables</a>
                    </nav>
                  </div>
                </div>
              </div>
            </li> 
            <li className="nav-item">
              <a href="#" className="nav-link with-sub"><i className="typcn typcn-tabs-outline" /> Utilities</a>
              <nav className="az-menu-sub">
                <a href="util-background.html" className="nav-link">Background</a>
                <a href="util-border.html" className="nav-link">Border</a>
                <a href="util-display.html" className="nav-link">Display</a>
                <a href="util-flex.html" className="nav-link">Flex</a>
                <a href="util-height.html" className="nav-link">Height</a>
                <a href="util-margin.html" className="nav-link">Margin</a>
                <a href="util-padding.html" className="nav-link">Padding</a>
                <a href="util-position.html" className="nav-link">Position</a>
                <a href="util-typography.html" className="nav-link">Typography</a>
                <a href="util-width.html" className="nav-link">Width</a>
                <a href="util-extras.html" className="nav-link">Extras</a>
              </nav>
            </li>*/}
        
          </ul>
        </div>{/* az-header-menu */}
        <div className="az-header-right">
          <a href="#" className="az-header-search-link"><i className="fas fa-search" /></a>
          <div className="az-header-message">
            <a href="app-chat.html"><i className="typcn typcn-messages" /></a>
          </div>{/* az-header-message */}
          <div className="dropdown az-header-notification">
            <a href="#" className="new"><i className="typcn typcn-bell" /></a>
            <div className="dropdown-menu">
              <div className="az-dropdown-header mg-b-20 d-sm-none">
                <a href="#" className="az-header-arrow"><i className="icon ion-md-arrow-back" /></a>
              </div>
              <h6 className="az-notification-title">Notifications</h6>
              <p className="az-notification-text">You have 2 unread notification</p>
              <div className="az-notification-list">
                <div className="media new">
                  <div className="az-img-user"><img src="/account/img/img2.jpg" alt="" /></div>
                  <div className="media-body">
                    <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                    <span>Mar 15 12:32pm</span>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media new">
                  <div className="az-img-user online"><img src="/account/img/img3.jpg" alt="" /></div>
                  <div className="media-body">
                    <p><strong>Joyce Chua</strong> just created a new blog post</p>
                    <span>Mar 13 04:16am</span>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="az-img-user"><img src="/account/img/img4.jpg" alt="" /></div>
                  <div className="media-body">
                    <p><strong>Alt=""hea Cabardo</strong> just created a new blog post</p>
                    <span>Mar 13 02:56am</span>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="az-img-user"><img src="/account/img/img5.jpg" alt="" /></div>
                  <div className="media-body">
                    <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                    <span>Mar 12 10:40pm</span>
                  </div>{/* media-body */}
                </div>{/* media */}
              </div>{/* az-notification-list */}
              <div className="dropdown-footer"><a href="#">View All Notifications</a></div>
            </div>{/* dropdown-menu */}
          </div>{/* az-header-notification */}
          <div className="dropdown az-profile-menu">
            <a href="#" className="az-img-user"><img src={user.profile?.avatar} alt="" /></a>
            <div className="dropdown-menu">
              <div className="az-dropdown-header d-sm-none">
                <a href="#" className="az-header-arrow"><i className="icon ion-md-arrow-back" /></a>
              </div>
              <div className="az-header-profile">
                <div className="az-img-user">
                  <img src={user.profile?.avatar} alt="" />
                </div>{/* az-img-user */}
                <h6>{user.profile?.first_name}</h6>
                <span>Premium Member</span>
              </div>{/* az-header-profile */}
              <a href="#" className="dropdown-item"><i className="typcn typcn-user-outline" /> My Profile</a>
              <a href="#" className="dropdown-item"><i className="typcn typcn-edit" /> Edit Profile</a>
              <a href="#" className="dropdown-item"><i className="typcn typcn-time" /> Activity Logs</a>
              <a href="#" className="dropdown-item"><i className="typcn typcn-cog-outline" /> Account Settings</a>
              <a href="#" onClick={() => handleLogout()} className="dropdown-item"><i className="typcn typcn-power-outline" /> Sign Out</a>
            </div>{/* dropdown-menu */}
          </div>
        </div>{/* az-header-right */}
      </div>{/* container */}
    </div>
  )

}
