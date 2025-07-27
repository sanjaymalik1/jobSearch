//@ts-nocheck
'use client'
import React from 'react';
import { signout } from '@/services/firebaseAuth';
import { useRouter } from 'next/navigation';
const router = useRouter

const LogoutButton = () => {
    const router = useRouter()
  async function handleLogout(){
    await signout();
    router.push("/signin")
  }
  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center space-x-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
    >
      {/* SVG Icon: Heroicons "Arrow Right On Rectangle" */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
        />
      </svg>
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;