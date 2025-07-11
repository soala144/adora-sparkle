// components/DynamicOutsideClickHandler.js
"use client";
import dynamic from "next/dynamic";

const DynamicOutsideClickHandler = dynamic(
  () => import("react-outside-click-handler"),
  { ssr: false }
);

export default DynamicOutsideClickHandler;
