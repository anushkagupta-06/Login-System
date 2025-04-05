import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signin({setPage}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (result.message === "User logged in") {
        navigate("/"); // navigate to home page
      } else {
        alert(result.message); // show error
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.\n Wrong user id or password !!");
    }
  };
  

  return (
    <>
      <h1 className="text-3xl font-bold text-rose-500 font-mono drop-shadow-md animate-pulse">Sign In</h1>

      <form className="flex flex-col p-2 items-center" onSubmit={handleSubmit(onSubmit)}>
      
      <input type="email" placeholder="Enter your email" className="bg-white border border-gray-300 p-2 h-10 w-75 rounded-md m-1" {...register("email", {required: {value: true, message: "This field is required"}})} />
      
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      
      <input type="password" placeholder="Password" className="bg-white border border-gray-300 p-2 h-10 w-75 rounded-md m-1" {...register("password", { required: {value: true, message: "This field is required"}, minLength: {value: 8, message: "Password must be atleast 8 characters long"} })} />
    
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}


      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
      <input className="mt-6 w-20 h-10 bg-green-400 rounded-sm cursor-pointer hover:bg-green-500 duration-500" type="submit" />
    </form>

    <h6>New User? <button onClick={() => {
        setPage(1)
    }} className="text-blue-800 hover:underline cursor-pointer">Sign Up</button></h6>


    </>
  );
}
