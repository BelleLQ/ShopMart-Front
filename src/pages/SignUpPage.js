import React, {useEffect, useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {AiTwotoneEyeInvisible, AiTwotoneEye} from 'react-icons/ai';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
		lastName: "",
		email: "",
		password: "",
		phoneNumber: ""
    });
    const createAccount = (evt) =>{
        evt.preventDefault();
        console.log(JSON.stringify(formData));

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/customers`,{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
    
              alert(json.message);
              setFormData({
                firstName : "",
                lastName : "",
                email: "",
                password: "",
            })
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    }
    

    return (
        <div className="container-fluid">
            <Header />
            <main>
                <div className="container w-50 my-4">
                <h4 className="text-center">Sign up</h4>
                <form action="" onSubmit={createAccount}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input required type="email" className="form-control" id="email" value={formData.email} onChange={(evt)=>{
                            setFormData({...formData, email:evt.target.value});
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="input-group">
                            <input required type={showPassword?"password":"text"} className="form-control" id="password" value={formData.password} onChange={(evt)=>{
                                setFormData({...formData, password: evt.target.value})
                                console.log(evt.target.value);
                            }}/>
                            <span className="input-group-text">
                            <Link to="#" className="link-black-no-a-dec link-hover-grey" 
                            onClick={()=>
                                setShowPassword(!showPassword)
                            } >{showPassword?<AiTwotoneEyeInvisible />:<AiTwotoneEye/>}</Link>
                            </span>
                        </div>
                    </div>
                    <hr className="form-divider"/>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input required type="text" className="form-control" id="firstName" value={formData.firstName} onChange={(evt)=>{
                            setFormData({...formData, firstName: evt.target.value})
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input required type="text" className="form-control" id="lastName" value={formData.lastName} onChange={(evt)=>{
                            setFormData({...formData, lastName: evt.target.value})
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input required type="text" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={(evt)=>{
                            setFormData({...formData, phoneNumber: evt.target.value})
                        }}/>
                    </div>
                    <div className="mb-3">
                        <input required type="checkbox" id="gridCheck"/>                        
                        <label htmlFor="gridCheck" className="mx-2">I agree to the Shop Mart
                            <Link to="#" className="link-blue-no-a-dec link-hover-darkblue"> Terms of Use </Link> 
                            and 
                            <Link to="#" className="link-blue-no-a-dec link-hover-darkblue"> Privacy Notice</Link>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark">Sign Up</button>
                    </div>
                </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default SignUpPage
