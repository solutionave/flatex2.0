"use client";
import DanielDepot from "@/components/DanielDepot";
import ErichDepot from "@/components/ErichDepot";
import KamilDepot from "@/components/KamilDepot";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const currentDate = new Date();
  const userData = useSelector((state: any) => state.user);
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  console.log("userData", userData);
  return (
    <div>
      {userData.username === "1045875" && <DanielDepot />}
      {userData.username === "1055128" && <ErichDepot />}
      {userData.username === "1057944" && <KamilDepot />}
    </div>
  );
};

export default page;
