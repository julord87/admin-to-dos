"use client"

import { useSession } from "next-auth/react";

export default function ProfilePage() {

    const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <h1>Profile</h1>
      <hr />

      <div className="flex flex-col">
        <span>{ session?.user?.name ?? 'No Name' }</span>
        <span>{ session?.user?.email ?? 'No Email'}</span>
        <span>{session?.user?.image ?? 'No Image'}</span>
      </div>


    </div>
  );
}