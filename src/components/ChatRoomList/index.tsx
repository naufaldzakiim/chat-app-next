import React from "react";
import { Stack } from "@mantine/core";
import ChatRoomItem from "@/components/ChatRoomItem";
import { IChatRoom } from "@/types/chat";

export default function ChatRoomList({
  chatRooms,
}: {
  chatRooms: IChatRoom[];
}) {
  return (
    <Stack h="100vh" align="strech" gap={0}>
      {chatRooms.map((chatRoom) => (
        <ChatRoomItem key={chatRoom.room.id} chatRoom={chatRoom} />
      ))}
    </Stack>
  );
}
