import React from 'react';

const AsideArticle = () => {
    return (
        <aside className="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">                    
          <div className="row">
            <div className="col-12 align-self-center text-left">                                
              {/* Widget [author] */}
              <div className="item widget-author">  
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#" className="author">
                      <img src="assets/images/team-1.jpg" alt="Lorem ipsum" />
                      <h4 className="title">By John Doe</h4>
                    </a>
                    <p className="biography">I am a fan of motorsport and music and my hobby is to collect miniatures of racing cars.</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="d-lg-flex align-items-center"><i className="icon-clock mr-2" />3 Days Ago</span> <span className="badge tag m-0 active">Technology</span>
                  </li>
                </ul>                                      
              </div>
              {/* Widget [categories] */}
              <div className="item widget-categories">  
                <h4 className="title">Categories</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#">Technology</a>
                    <span className="badge circle">23</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#">Education</a>
                    <span className="badge circle">41</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#">Industry</a>
                    <span className="badge circle">26</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#">Development</a>
                    <span className="badge circle">75</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#">Architecture</a>
                    <span className="badge circle">39</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#">Management</a>
                    <span className="badge circle">62</span>
                  </li>
                </ul>                                
              </div>
              {/* Widget [tags] */}
              <div className="item widget-tags">  
                <h4 className="title">Popular Tags</h4>
                <a href="#" className="badge tag">Mobile</a>
                <a href="#" className="badge tag">Development</a>
                <a href="#" className="badge tag">Technology</a>
                <a href="#" className="badge tag">App</a>
                <a href="#" className="badge tag">Education</a>
                <a href="#" className="badge tag">Business</a>
                <a href="#" className="badge tag">Health</a>
                <a href="#" className="badge tag">Industry</a>
              </div>
              {/* Widget [share-this] */}
              <div className="item widget-share-this">
                <h4 className="title">Share This</h4>
                <ul className="navbar-nav social share-list">
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-instagram ml-0" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-facebook" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-linkedin" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-twitter" /></a>
                  </li>
                </ul>
              </div>
              {/* Widget [gallery] */}
              <div className="item widget-gallery">
                <h4 className="title">Image Gallery</h4>                                    
                <div className="gallery row justify-content-center">
                  <a className="col-6 item" href="assets/images/portfolio-1.jpg">
                    <img src="assets/images/gallery-1.jpg" className="w-100" />
                  </a>
                  <a className="col-6 item" href="assets/images/portfolio-2.jpg">
                    <img src="assets/images/gallery-2.jpg" className="w-100" />
                  </a>
                  <a className="col-6 item" href="assets/images/portfolio-3.jpg">
                    <img src="assets/images/gallery-3.jpg" className="w-100" />
                  </a>
                  <a className="col-6 item" href="assets/images/portfolio-4.jpg">
                    <img src="assets/images/gallery-4.jpg" className="w-100" />
                  </a>
                  <a className="col-6 item" href="assets/images/portfolio-5.jpg">
                    <img src="assets/images/gallery-5.jpg" className="w-100" />
                  </a>
                  <a className="col-6 item" href="assets/images/portfolio-6.jpg">
                    <img src="assets/images/gallery-6.jpg" className="w-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
    );
}

export default AsideArticle;
