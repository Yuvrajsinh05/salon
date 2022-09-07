import React from 'react'
import './home.css'

const home = () =>{
  return (
    // <div>honwkasmcmncc.md vjn d,mvnklmc.m cjljx.vn .</div>
    <>
                    <div id="banner">
                <img src="https://i.postimg.cc/zfZzZT2n/logo.png" className="logo"/>
                    <div className="banner-text">
                        <h1>Baisa Beauty Care</h1>
                        <p>We will style , You will style</p>
                        <div className="banner-btn">
                            <a href="#service"><span></span><b>Login</b></a>
                            <a href="#features"><span></span><b>Registraion</b></a>
                        </div>
                    </div>
               </div>
                <div id="sideNav">
                        <nav>
                            <ul>
                                <li><a href="#banner">HOME</a></li>
                                <li><a href="#features">service</a></li>
                                <li><a href="#service">Blogs</a></li>
                                <li><a href="#testimonials">Reward</a></li>
                                <li><a href="#footer">Products</a></li>
                            </ul>
                        </nav>
                </div>
                <div id="menuBtn">
                    <img src="https://i.postimg.cc/j5RRCtb2/menu.png" id="menu"/>
                </div>

            {/* <!--Features--> */}

               <div id="features">
                <div className="title-text">
                    <p>FEATURES</p>
                    <h1>Why Choose Us</h1>
                </div>
                <div className="features-box">
                    <div className="features">
                        <h1><b>Experienced Staff</b></h1>
                        <div className="features-desc">
                            <div className="features-icon">
                                <i className='bx bx-check-shield'></i>
                            </div>
                            <div className="features-text">
                                <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis,elit sapie eleifend ligula.</p>
                            </div>
                        </div>
                        <h1><b>Pre Booking Online</b></h1>
                        <div className="features-desc">
                            <div className="features-icon">
                                <i className='bx bx-check-square'></i>
                            </div>
                            <div className="features-text">
                                <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis,elit sapie eleifend ligula.</p>
                            </div>
                        </div>
                        <h1><b>Affordable Cost</b></h1>
                        <div className="features-desc">
                            <div className="features-icon">
                                <i className='bx bx-rupee'></i>
                            </div>
                            <div className="features-text">
                                <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis,elit sapie eleifend ligula.</p>
                            </div>
                        </div>
                    </div>

                    <div className="features-img">
                        <img src="https://i.postimg.cc/qMW0y8T9/barber-man.jpg"/>
                    </div>
                </div>
                </div>
                {/* services  */}
            <div id="service">
                <div className="title-text">
                    <p>SERVICES</p>
                    <h1><b>We Provide Better</b></h1>
                </div>
                <div section="service-box">
                    <div className="img-box container">
                        <div className="single-service">
                            <img src="https://i.postimg.cc/JhLLdMtx/pic-1.jpg"/>
                            <div className="overlay"></div>
                            <div className="service-desc">
                                <h3>Hair Styling</h3>
                                <hr/>
                                <p>this is test under description of barbeer foundatin this is test under description of barber foundation</p>
                            </div>
                        </div>
                        <div className="single-service">
                            <img src="https://i.postimg.cc/t4Pb5YR7/pic-2.jpg"/>
                            <div className="overlay"></div>
                            <div className="service-desc">
                                <h3>Beard Trim</h3>
                                <hr/>
                                <p>this is test under description of barbeer foundatin this is test under description of barber foundation</p>
                            </div>
                        </div>
                        <div className="single-service">
                            <img src="https://i.postimg.cc/VLJmJK3q/pic-3.jpg"/>
                            <div className="overlay"></div>
                            <div className="service-desc">
                                <h3>Hair Cut</h3>
                                <hr/>
                                <p>this is test under description of barbeer foundatin this is test under description of barber foundation</p>
                            </div>
                        </div>
                        <div className="single-service">
                            <img src="https://i.postimg.cc/9fYj6K7h/pic-4.jpg"/>
                            <div className="overlay"></div>
                            <div className="service-desc">
                                <h3>Dry Shampoo</h3>
                                <hr/>
                                <p>this is test under description of barbeer foundatin this is test under description of barber foundation</p>
                            </div>
                        </div>
                    </div>
               </div>
             </div>
    </>
  )
}


export default home
