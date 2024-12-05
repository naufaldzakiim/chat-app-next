"use client";
import React from "react";
import { Grid } from "@mantine/core";
import ChatRoomSection from "../ChatRoomSection";
import ChatRoomListSection from "../ChatRoomListSection";

export default function page({ params }: { params: { id: string } }) {
  return (
    // <Grid
    //   h="100%"
    //   styles={{
    //     inner: { margin: 0, height: "100%", width: "100%" },
    //   }}
    // >
    //   <Grid.Col
    //     span={{ base: "auto", sm: "content" }}
    //     w={{ base: "100%", xs: "20em" }}
    //     p={0}
    //     visibleFrom="sm"
    //   >
    //     <ChatRoomListSection />
    //   </Grid.Col>
    //   <Grid.Col span="auto" p={0}>
    //     <ChatRoomSection id={params.id} />
    //   </Grid.Col>
    // </Grid>
    <ChatRoomSection id={params.id} />
  );
}
