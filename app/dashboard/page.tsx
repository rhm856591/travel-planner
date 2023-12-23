"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const page = () => {

  return (
    <div>
      This is dashboard page.
      <button onClick={() => signOut()}>Sign out</button>

    </div>
  )
}


export default page