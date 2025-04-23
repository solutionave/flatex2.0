"use client";
import DanielDokument from "@/components/DanielDokument";
import ErichDokument from "@/components/ErichDokument";
import KamilDokument from "@/components/KamilDokument";
import React from "react";
import { useSelector } from "react-redux";

const Dokument = () => {
  const currentDate = new Date();
  const userData = useSelector((state: any) => state.user);
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  console.log("userData", userData);
  return (
    <div>
      {userData.username === "1045875" && <DanielDokument />}
      {userData.username === "1055128" && <ErichDokument />}
      {userData.username === "1057944" && <KamilDokument />}
    </div>
  );
};

export default Dokument;
