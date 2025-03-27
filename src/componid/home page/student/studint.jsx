import React, { useState, useEffect } from "react";
import Nav from "../navBar/nav";
import Footer from "../footer/footer";
import "./student.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("studentProfile"));
    if (storedUser) {
      setPhone(storedUser.phone);
      setFirstName(storedUser.firstName);
      setLastName(storedUser.lastName);
      setImage(storedUser.profileImage);
    }
  }, []);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    const storedUser = JSON.parse(localStorage.getItem("studentProfile"));
    storedUser.phone = e.target.value;
    localStorage.setItem("studentProfile", JSON.stringify(storedUser));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      const storedUser = JSON.parse(localStorage.getItem("studentProfile"));
      storedUser.profileImage = reader.result;
      localStorage.setItem("studentProfile", JSON.stringify(storedUser));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateClick = () => {
    toast.success("Profile updated successfully!");
    setTimeout(() => {
      navigate("/");
    }, 2000); // Delay for 2 seconds to show the toast before navigating
  };

  return (
    <div className="bodyala">
      <Nav />
      <div className="container8">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src={
                          image ||
                          "https://bootdey.com/img/Content/avatar/avatar7.png"
                        }
                        alt="User Avatar"
                      />
                    </div>
                    <div className="upload-image">
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={
                          JSON.parse(localStorage.getItem("studentProfile"))
                            ?.email
                        }
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <Link to="/">
                        <button type="button" className="btn btn-secondary">
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn22  "
                        onClick={handleUpdateClick}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default StudentProfile;
