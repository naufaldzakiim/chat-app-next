"use client";
import React from "react";
import ChatRoomSection from "../ChatRoomSection";

export default function page({ params }: { params: { id: string } }) {
  return (
    <ChatRoomSection id={params.id} />
  );
}
