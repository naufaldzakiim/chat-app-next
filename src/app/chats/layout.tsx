"use client"
import { Grid } from "@mantine/core";
import ChatRoomListSection from "./ChatRoomListSection";
import { usePathname } from "next/navigation";

export default function ChatsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isChatRoom = pathname !== "/chats";
  
  return (
    <Grid
    h="100%"
    styles={{
      inner: { margin: 0, height: "100%", width: "100%" },
    }}
  >
    <Grid.Col
      span={{ base: "auto", sm: "content" }}
      w={{ base: "100%", xs: "20em" }}
      p={0}
      visibleFrom={isChatRoom ? "sm" : "base"}
    >
      <ChatRoomListSection />
    </Grid.Col>
    <Grid.Col span="auto" visibleFrom={isChatRoom ? "base" : "sm"} p={0}>
      {children}
    </Grid.Col>
  </Grid>
);
}