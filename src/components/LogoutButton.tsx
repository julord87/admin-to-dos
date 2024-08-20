"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CiAlarmOn, CiLogout } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

export default function LogoutButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="px-6 py-3 flex items-center space-x-4 rounded-md text-gray-600">
        <IoShieldOutline />
        <span className="group-hover:text-gray-700">Espere...</span>
      </button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button 
        className="px-6 py-3 flex items-center space-x-4 rounded-md text-gray-600"
        onClick={() => signIn()}
      >
        <CiAlarmOn />
        <span className="group-hover:text-gray-700">Ingresar</span>
      </button>
    );
  }

  return (
    <button
      className="px-6 py-3 flex items-center space-x-4 rounded-md text-gray-600"
      onClick={() => signOut()}
    >
      <CiLogout />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
}
