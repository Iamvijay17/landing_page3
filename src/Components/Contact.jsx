import React from "react";
import "./Contact.css";
import Undersite from './Under_Maintance'

import Container from "react-bootstrap/Container";
import row from "react-bootstrap/row";
import Contactpeo from "./asset/ce-agents-contact.png";
const Contact = () => {
  return (
    // <div classNameName="conatainer">
    //   <div classNameName="contact">
    //     <div classNameName="text-light">
    //     <h1 classNameName="contact-heading">Contact us</h1>
    //     <p classNameName="contact-para ">
    //       Facing some issues or want to know more about us? Fill in the details
    //       below and one of our team members will love to talk to you about it.
    //     </p>
    //     </div>
    //     <div className="container-fluid contact2">
    //    <div className="row">
    //        <div className="col-lg-1 col-md-1 col-12">

    //        </div>

    //        <div className="col-lg-6 col-md-6 col-12 form-design">

    //            <form action="/">

    //             <div className="row align-items-center mt-4">
    //                 <div className="col">
    //                     <label id="label1" for="exampleInputEmail1" className="form-label">Email address</label>
    //                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="You@example.com"/>
    //                 </div>
    //             </div>

    //             <div className="row align-items-center mt-4">
    //                 <div className="col">
    //                     <label id="label1" for="fullname" className="input">Name</label>
    //                     <input type="text" name="fname" id="fullname" className="form-control" placeholder="Your Name..."/>
    //                 </div>
    //               </div>

    //               <div className="row align-items-center my-4">
    //                 <div className="col">
    //                     <label id="label1" className="input" for="floatingTextarea2">Message</label>
    //                     <div className="form-floating">
    //                         <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
    //                         <label for="floatingTextarea2">Comments...</label>
    //                       </div>
    //                 </div>
    //               </div>

    //               <div className="mt-3 mb-5">
    //                   <button type="button" className="btn btn-outline-dark">GET HELP</button>

    //               </div>

    //               <a href="#" className="policy"><p>Privacy Policy</p></a>
    //         </form>

    //     </div>
    //     </div></div>

    //     <div className="col-lg-1 col-md-1 col-12">

    //     </div>

    //   <div classNameName="float-end col-lg-3 col-md-3 col-12">
    //     <img src={Contactpeo} alt="Contact_person_img" style={{ width: "300px", height: "500px" }} />
    //     </div>
    //     <div className="col-lg-1 col-md-1 col-12">

    //            </div>
    //   </div>
    // </div>
    <div>
      <div className="contact">
        <h1 className="contact-heading text-light">Contact us</h1>
        
      </div>

      <div className="container-fluid contact2">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-12"></div>

          <div className="col-lg-6 col-md-6 col-12 form-design scale-in-center">
            <form action="/">
              <div className="row align-items-center mt-4">
                <div className="col text-start">
                  <label
                    id="label1"
                    for="exampleInputEmail1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="You@example.com"
                  />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col text-start" >
                  <label id="label1" for="fullname" className="input">
                    Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fullname"
                    className="form-control"
                    placeholder="Your Name..."
                  />
                </div>
              </div>

              <div className="row align-items-center my-4">
                <div className="col text-start">
                  <label id="label1" className="input" for="floatingTextarea2">
                    Message
                  </label>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label for="floatingTextarea2">Comments...</label>
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-5">
                <button type="button" className="btn btn-outline-dark">
                  GET HELP
                </button>
              </div>

              <a href="/under_maintance" className="policy">
                <p>Privacy Policy</p>
              </a>
            </form>
          </div>

          <div className="col-lg-1 col-md-1 col-12"></div>

          <div className="col-lg-3 col-md-3 col-12">
            <img className="bg-side" src={Contactpeo} alt="bg-side" />
          </div>

          <div className="col-lg-1 col-md-1 col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
