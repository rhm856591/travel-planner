"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";





const SignIn: React.FC = () => {
  const router = useRouter()
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(creds)
    try {
      const login = await signIn("credentials", {
        email: creds.email,
        password: creds.password,
        redirect: false,

      })
      if(login?.status === 200){
        router.push("/dashboard")
      }
      if (login?.error) {
        toast.error(login.error)
      }
      
      
    } catch (e) {
      console.log(e)
    }

  }
  return (
    <>

      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: `url("https://res.cloudinary.com/dvsp7dq94/image/upload/v1703339205/olympic_flag.jpg")`, backgroundColor: "rgba(100,0,0,.5)" }} >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Travel Planner</h2>

                <p className="max-w-xl mt-3 text-white font-medium ">Login now and step into a world of personalized travel experiences. Your gateway to seamless journeys and exclusive deals awaits!</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Travel Planner</h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="example@example.com" value={creds.email} onChange={(e) => { setCreds({ ...creds, email: e.target.value }) }} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                      <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                    </div>

                    <input type="password" name="password" id="password" placeholder="Your Password" value={creds.password} onChange={(e) => { setCreds({ ...creds, password: e.target.value }) }} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="mt-6">
                    <button
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>

                </form>

                <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link href="/auth/signup" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
