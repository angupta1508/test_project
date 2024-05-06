import { useState } from "react";

const Signup = () => {

    const [formVal, setVal] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    });

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setVal((preVal) => {
            // console.log(preVal);
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const registerFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formVal);
        try {
            const response = await fetch("http://localhost:8000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formVal),
            })
            console.log(response);
            if(response.ok){
                setVal({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    cpassword: "",
                })
            }
        } catch (error) {
            console.log(error);
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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={registerFormSubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                        <input type="text" name="name" id="form3Example1c" className="form-control" onChange={inputHandler} value={formVal.name} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                        <input type="email" name="email" id="form3Example3c" className="form-control" onChange={inputHandler} value={formVal.email} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example3c">Your Mobile Number</label>
                                                        <input type="number" name="phone" id="form3Example3c" className="form-control" onChange={inputHandler} value={formVal.phone} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                        <input type="password" name="password" id="form3Example4c" className="form-control" onChange={inputHandler} value={formVal.password} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                        <input type="password" name="cpassword" id="form3Example4cd" className="form-control" onChange={inputHandler} value={formVal.cpassword} />
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

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
export default Signup;