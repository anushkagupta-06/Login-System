import React from 'react'
import { useEffect } from 'react'

export default function Home({setPage}) {

  useEffect(() => {
    
    const getBackend = async () => {
      await fetch("http://localhost:8080/hello", {
        method: "GET",
        credentials: "include"
      }).then(res => res.json()).then(data => console.log(data))
    }
    getBackend()
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log("Logout response:", data);
      console.log(data.message);
      setPage(0); // Redirect to Sign In page
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  


  return (
    <div className="w-full h-screen bg-gradient-to-tr from-pink-100 to-indigo-200 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 drop-shadow-md mb-4 animate-fade-in-down">
        🎉 Welcome to Your Dashboard!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        You’ve successfully logged in.
      </p>
      <button 
      onClick={handleLogout}
      className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md transition duration-300 ease-in-out">
        Logout
      </button>
    </div>
  )
}
