"use client";
import RegisterForm from "@/app/pages/RegistationForm";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <RegisterForm switchToLogin={() => router.push("/login")} />
  );
};