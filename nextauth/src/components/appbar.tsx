"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();

  return (
    <div className=" justify-center items-center flex gap-5 px-2 py-14 ">
      <button
        className=" bg-blue-500 px-2 py-1 rounded-md text-white"
        onClick={() => signIn()}
      >
        Signin
      </button>
      <button
        className=" bg-red-500 px-2 py-1 rounded-md text-white"
        onClick={() => signOut()}
      >
        Sign out
      </button>
      {JSON.stringify(session)}
    </div>
  );
};
