"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation"; // Add this import

interface Props {
  switchToRegister?: () => void; // Make prop optional for fallback
}

const LoginForm: React.FC<Props> = ({ switchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email.includes("@")) return setError("Please enter a valid email.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    setError("");
    alert("Login successful!");
  };

  // Use router.push if switchToRegister is not provided
  const handleRegisterClick = () => {
    if (switchToRegister) {
      switchToRegister();
    } else {
      router.push("/register");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          Login
        </Button>
      </form>
      <p className="text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={handleRegisterClick}
          className="text-orange-600 font-semibold"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;