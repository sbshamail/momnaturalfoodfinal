"use client";
import RegisterForm from "@/components/pages/RegistationForm";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <RegisterForm switchToLogin={() => router.push("/login")} />
  );
}s