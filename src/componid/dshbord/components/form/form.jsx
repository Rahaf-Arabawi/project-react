import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedStudents = JSON.parse(localStorage.getItem("clintsData")) || [];
    const file = data.image[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const student = {
          id: Date.now(),
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          gender: data.gender,
          mobileNumber: data.mobileNumber,
          image: reader.result,
        };

        const updatedStudents = [...storedStudents, student];
        localStorage.setItem("clintsData", JSON.stringify(updatedStudents));

        toast.success("student add successful", { autoClose: 1500 });
        setTimeout(() => {
          navigate("/dash");
        }, 2000);
      };
      reader.readAsDataURL(file);
    } else {
      const student = {
        id: Date.now(),
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        gender: data.gender,
        mobileNumber: data.mobileNumber, // Added mobile number
        image: "",
      };

      const updatedStudents = [...storedStudents, student];
      localStorage.setItem("clintsData", JSON.stringify(updatedStudents));

      // Show success toast
      toast.success("Student added successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Redirect after the toast
      setTimeout(() => {
        navigate("/dash");
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-orange-400 to-orange-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center1 mb-2">Add Student</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full border rounded p-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border rounded p-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Gender</label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full border rounded p-2"
              >
                <option value="">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Student E-mail</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full border rounded p-2"
                placeholder="ex: myname@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Upload Image</label>
              <input
                type="file"
                {...register("image")}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="number"
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                })}
                className="w-full border rounded p-2"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="button w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default RegistrationForm;
