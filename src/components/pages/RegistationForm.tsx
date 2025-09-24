"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

interface Props {
  switchToLogin: () => void;
}

const RegisterForm: React.FC<Props> = ({ switchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 3) return setError("Name must be at least 3 characters.");
    if (!email.includes("@")) return setError("Please enter a valid email.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    setError("");
    alert("Registration successful!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Register</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-orange-400"
        />
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white"
        >
          Sign Up
        </Button>
      </form>
      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-orange-600 font-semibold"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
