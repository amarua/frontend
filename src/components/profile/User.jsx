const User = () => {
    return (  
        <section className="home-section">
        <div className="text">User Profile</div>

        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="profile-user-box card-box bg-custom">
                            <div className="row">
                                <div className="col-sm-6"><span className="float-left mr-3"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/498240/header.jpg?t=1606153059" alt="" className="thumb-lg rounded-circle"/></span>
                                    <div className="media-body text-white">
                                        <h4 className="mt-1 mb-1 font-18">Soeng Souy</h4>
                                        <p className="font-13 text-light">Web Design</p>
                                        <p className="text-light mb-0">Combodia, Phnom Penh</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-right">
                                        <button type="button" className="btn btn-light waves-effect"><i className="mdi mdi-account-settings-variant mr-1"></i> Edit Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card-box">
                            <h4 className="header-title mt-0">Personal Information</h4>
                            <div className="panel-body">
                                <p className="text-muted font-13">Hye, I’m Soeng Souy residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.</p>
                                <hr/>
                                <div className="text-left">
                                    <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Soeng Souy</span></p>
                                    <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(+885) 966686372</span></p>
                                    <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">soengsouy@gmail.com</span></p>
                                    <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">KH</span></p>
                                    <p className="text-muted font-13"><strong>Languages :</strong> <span className="m-l-5">
                                        <span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> 
                                        <span>English</span> </span><span className="m-l-5">
                                        <span className="flag-icon flag-icon-de m-r-5" title="de"></span> 
                                        <span>German</span> </span><span className="m-l-5">
                                        <span className="flag-icon flag-icon-es m-r-5" title="es"></span> 
                                        <span>Spanish</span> </span><span className="m-l-5">
                                        <span className="flag-icon flag-icon-fr m-r-5" title="fr"></span>
                                        <span>French</span></span>
                                    </p>
                                </div>
                                <ul className="social-links list-inline mt-4 mb-0">
                                    <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                                </ul>
                            </div>
                        </div>
                            
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card-box tilebox-one"><i className="icon-layers float-right text-muted"></i>
                                    <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                                    <h2 className="" data-plugin="counterup">1,587</h2>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card-box tilebox-one"><i className="icon-paypal float-right text-muted"></i>
                                    <h6 className="text-muted text-uppercase mt-0">Base Charge</h6>
                                    <h2 className="">₹<span data-plugin="counterup">850</span></h2>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card-box tilebox-one"><i className="icon-rocket float-right text-muted"></i>
                                    <h6 className="text-muted text-uppercase mt-0">Task Completed</h6>
                                    <h2 className="" data-plugin="counterup">1,490</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-box">
                            <h4 className="header-title mt-0 mb-3">Experience</h4>
                            <div className="">
                                <div className="">
                                    <h5 className="text-custom">Lead designer / Developer</h5>
                                    <p className="mb-0">soengsouy.com</p>
                                    <p><b>2010-2015</b></p>
                                    <p className="text-muted font-13 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <hr/>
                                <div className="">
                                    <h5 className="text-custom">Senior Graphic Designer</h5>
                                    <p className="mb-0">soengsouy.com</p>
                                    <p><b>2007-2009</b></p>
                                    <p className="text-muted font-13 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-box">
                            <h4 className="header-title mb-3">Projects</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Project Name</th>
                                            <th>Start Date</th>
                                            <th>Due Date</th>
                                            <th>Status</th>
                                            <th>Assign</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Kh Admin</td>
                                            <td>01/01/2015</td>
                                            <td>07/05/2015</td>
                                            <td><span className="label label-info">Work in Progress</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Kh Admin Frontend</td>
                                            <td>01/01/2015</td>
                                            <td>07/05/2015</td>
                                            <td><span className="label label-success">Pending</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Kh Admin Admin</td>
                                            <td>01/01/2015</td>
                                            <td>07/05/2015</td>
                                            <td><span className="label label-pink">Done</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Kh Admin Frontend</td>
                                            <td>01/01/2015</td>
                                            <td>07/05/2015</td>
                                            <td><span className="label label-purple">Work in Progress</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Kh Admin Admin</td>
                                            <td>01/01/2015</td>
                                            <td>07/05/2015</td>
                                            <td><span className="label label-warning">Coming soon</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default User;