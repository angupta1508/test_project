import { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [userData,setUserData] = useState(true);
    const { user } = useAuth();
    
    if(userData && user) {
        setContact({
            name: user.name,
            email: user.email,
            phone: user.phone,
            message: "",
        });
        setUserData(false);
    }

    const InputHandler = (event) => {

        const { name, value } = event.target;

        setContact((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })


    }

    return (
        <>
            <div className="container contact-form" >
                <div style={{ background: "-webkit-linear-gradient(left, #0072ff, #00c6ff)" }}>
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                    </div>
                    <form method="post" >
                        <h3 className="text-light">Drop Us a Message</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name *" value={contact.name} onChange={InputHandler} />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="email" className="form-control" placeholder="Your Email *" value={contact.email} onChange={InputHandler} />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="phone" className="form-control" placeholder="Your Phone Number *" value={contact.phone} onChange={InputHandler} />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="submit" name="submit" className="btnContact" value="Send Message" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <textarea name="message" className="form-control" placeholder="Your Message *" onChange={InputHandler} style={{ width: "100%", height: "150px" }}>{contact.message}</textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Contact;