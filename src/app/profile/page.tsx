"use client";

import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const session = useSession();

  console.log(session);

  return <div>PROFILE</div>;
};

export default ProfilePage;
