"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  switchToRegister?: () => void;
}

const LoginForm: React.FC<Props> = ({ switchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) return setError("Please enter a valid email.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    setError("");
    alert("Login successful!");
  };

  const handleRegisterClick = () => {
    if (switchToRegister) {
      switchToRegister();
    } else {
      router.push("/register");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white/80 rounded-2xl shadow-2xl p-8 border border-green-100 mb-8">
      <h2 className="text-3xl font-extrabold mb-6 text-green-700 text-center tracking-tight">
        Login to Your Account
      </h2>
      {error && (
        <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-green-300 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50 placeholder:text-green-700/60 text-green-900"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-green-300 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50 placeholder:text-green-700/60 text-green-900"
        />
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 rounded-lg"
        >
          Login
        </Button>
      </form>
      <p className="text-sm mt-6 text-center text-gray-700">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={handleRegisterClick}
          className="text-primary font-semibold hover:underline transition-colors"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;