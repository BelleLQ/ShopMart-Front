import React, {useEffect, useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {AiTwotoneEyeInvisible, AiTwotoneEye} from 'react-icons/ai';



const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    console.log(showPassword);
    return (
        <div className="container-fluid">
            <Header />
            <main>
                <div className="container w-50 my-4">
                <h4 className="text-center">Log In</h4>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <div className="input-group">
                            <input type={showPassword?"password":"text"} class="form-control" id="exampleInputPassword1"/>
                            <span className="input-group-text">
                            <Link to="#" className="link-black-no-a-dec link-hover-grey" onClick={()=>
                                setShowPassword(!showPassword)
                            }>{showPassword?<AiTwotoneEyeInvisible />:<AiTwotoneEye/>}</Link>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" class="btn btn-dark">Log In</button>
                    </div>
                </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LoginPage
