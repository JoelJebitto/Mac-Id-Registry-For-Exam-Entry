import { useRef } from "react";
import api from "../restApi";
import Model from "./Model";

export default function Login({ isOpen, onClose }) {
  const username = useRef("");
  const password = useRef("");
  async function handleLogin() {
    const username_ = username.current.value;
    const password_ = password.current.value;
    const response = await fetch(api.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username_, password: password_ }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // Save JWT token locally
      onClose();
    } else {
      alert("user Not Found");
    }
  }
  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <h1 className="text-5xl font-bold mb-10 mt-5">Login</h1>

      <label className="font-semibold my-3" htmlFor="username">
        User Name
      </label>
      <input
        ref={username}
        className="bg-black/45 p-5 rounded-2xl focus:bg-black/60  outline-none focus:outline-none focus:ring-0"
        type="text"
        id="username"
      />
      <label className="font-semibold my-3" htmlFor="password">
        Password
      </label>
      <input
        ref={password}
        className="bg-black/45 p-5 rounded-2xl focus:bg-black/60 outline-none focus:outline-none focus:ring-0"
        type="password"
        id="password"
      />

      <div className="flex mt-10 ">
        <button
          onClick={onClose}
          className="flex-1 mr-5 mt-4 text-red-700 my-5 p-5 bg-black/60 hover:bg-black/70 rounded-2xl cursor-pointer"
        >
          Close
        </button>
        <button
          onClick={handleLogin}
          className="flex-1 mt-4 text-blue-700 my-5 p-5 bg-black/60 hover:bg-black/70 rounded-2xl cursor-pointer"
        >
          Login
        </button>
      </div>
    </Model>
  );
}
