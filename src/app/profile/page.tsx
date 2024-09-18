"use client";
import React from 'react'
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import { useEffect } from "react";
import Footer from '@/components/Footer';

const page = () => {
  const user = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/profile');
    } else {
      router.push('/');
    }
  }, [user, router]);

  return (
    <>
      <button
        onClick={() => {
          logout();
        }}
        className="px-8 py-3 bg-pin text-defaultBackGround rounded-lg transition-colors text-lg shadow-md font-serif"
      >
        ログアウト
      </button>
      <Footer />
    </>
  )
}

export default page