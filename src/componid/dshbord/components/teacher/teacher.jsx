import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./teacher.css";

const TeacherProfile = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedTeacher = JSON.parse(localStorage.getItem("teacherProfile"));
    if (storedTeacher) {
      setFirstName(storedTeacher.firstName);
      setLastName(storedTeacher.lastName);
      setEmail(storedTeacher.email);
      setPhone(storedTeacher.phone);
      setImage(storedTeacher.profileImage);
    }
  }, []);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    const storedTeacher = JSON.parse(localStorage.getItem("teacherProfile"));
    storedTeacher.phone = e.target.value;
    localStorage.setItem("teacherProfile", JSON.stringify(storedTeacher));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      const storedTeacher = JSON.parse(localStorage.getItem("teacherProfile"));
      storedTeacher.profileImage = reader.result;
      localStorage.setItem("teacherProfile", JSON.stringify(storedTeacher));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateClick = () => {
    toast.success("Profile updated successfully!");
    setTimeout(() => {
      navigate("/dash");
    }, 2000);
  };

  return (
    <div className="bodyala">
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
                        onChange={(e) => setFirstName(e.target.value)}
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
                        onChange={(e) => setLastName(e.target.value)}
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
                        value={email}
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
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate("/dash")}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
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
      <ToastContainer />
    </div>
  );
};

export default TeacherProfile;
