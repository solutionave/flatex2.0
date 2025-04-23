"use client";
import DanielKontent from "@/components/DanielKontent";
import ErichKontent from "@/components/ErichKontent";
import KamilKontent from "@/components/KamilKontent";
import React from "react";
import { useSelector } from "react-redux";

const Kontent = () => {
  const currentDate = new Date();
  const userData = useSelector((state: any) => state.user);
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  console.log("userData", userData);
  return (
    <div>
      {userData.username === "1045875" && <DanielKontent />}
      {userData.username === "1055128" && <ErichKontent />}
      {userData.username === "1057944" && <KamilKontent />}
    </div>
  );
};

export default Kontent;
