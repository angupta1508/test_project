import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();
    const [userDetail, setUserDetail] = useState({
        email: "admin@admin.com",
        password: "123456"
    });

    const inputHandler = (event) => {
        const { name, value } = event.target;

        setUserDetail((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetail)
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.token);
            storeTokenInLS(data.token);
            navigate ("/");
        }
    }


    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                <NavLink to="/signup" className="link-secondary text-decoration-none">Sign Up</NavLink>
                                            </p>
                                            {/* <a href="#!" className="link-secondary text-decoration-none">Forgot password</a> */}


                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <form action="#!" onSubmit={submitHandler}>
                                                <div className="row gy-3 overflow-hidden">
                                                    <div className="col-12">
                                                        <div className="form-floating mb-3">
                                                            <label for="email" className="form-label mb-4">Email</label>
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" onChange={inputHandler} value={userDetail.email} />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating mb-3">
                                                            <label for="password" className="form-label mb-4">Password</label>
                                                            <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={inputHandler} value={userDetail.password} />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                            <label className="form-check-label text-secondary" for="remember_me">
                                                                Keep me logged in
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button className="btn bsb-btn-2xl btn-primary" type="submit">Log in now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;