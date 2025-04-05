import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "../home/Home";

import { useState } from "react";

export default function Auth() {
  const [page, setPage] = useState(0);
  // assigning 0 for signin and 1 for signup

  return (
    <div className="w-full h-screen bg-cover flex justify-center items-center" style={{ backgroundImage: "url('/login-system-bg.avif')" }}>
      <div className="bg-white w-120 h-100 rounded-md flex flex-col items-center">
        {page === 0 && <Signin setPage={setPage}/>}
        {page === 1 && <Signup setPage={setPage}/>}
        {page === 2 && <Home setPage={setPage} />}
      </div>
    </div>
  );
}
