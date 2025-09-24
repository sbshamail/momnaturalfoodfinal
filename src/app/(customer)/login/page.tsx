"use client";
import LoginForm from "@/components/pages/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <LoginForm switchToRegister={() => router.push("/register")} />
  );
}