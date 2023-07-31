"use client";

import { signIn } from "next-auth/react";

const login = async () => {
  await signIn("google", {
    callbackUrl: `${window.location.origin}/`,
  });
};

export default function Component() {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      {/* Use flexbox to center the content */}
      <div className="mx-auto">
        <button
          className="bg-white text-lg rounded text-stone-900 py-1 px-2 hover:bg-stone-200 transition-all duration-150"
          onClick={login}
        >
          <i className="fa-brands fa-google fa-lg mr-4"></i>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}
