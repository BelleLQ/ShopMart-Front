import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {AiTwotoneEyeInvisible, AiTwotoneEye} from 'react-icons/ai';



const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <div className="container form-container w-50 my-4">
                <h4 className="text-center">Log In</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="input-group">
                            <input type={showPassword?"password":"text"} className="form-control" id="exampleInputPassword1"/>
                            <span className="input-group-text">
                            <Link to="#" className="link-black-no-a-dec link-hover-grey" onClick={()=>
                                setShowPassword(!showPassword)
                            }>{showPassword?<AiTwotoneEyeInvisible />:<AiTwotoneEye/>}</Link>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark">Log In</button>
                    </div>
                </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LoginPage
