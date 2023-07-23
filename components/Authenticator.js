"use client"

import { useSession,signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from 'react'
import ProfileMenu from "./ProfileMenu";




const Authenticator = () => {
    const {data: session} = useSession();
    // console.log(session);
   return (
    <div >
      {session ? 

      <ProfileMenu session={session}/>
      :
      <button onClick={()=> signIn('google')}>SIGN IN</button>

      }

    </div>
   )   
}

export default Authenticator