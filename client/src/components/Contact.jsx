const Contact = () => {
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
                                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px;" }}></textarea>
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