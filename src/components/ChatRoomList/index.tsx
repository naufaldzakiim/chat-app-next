import React from "react";
import { Stack, Text, LoadingOverlay } from "@mantine/core";
import ChatRoomItem from "@/components/ChatRoomItem";
import { IChatRoom } from "@/types/chat";

export default function ChatRoomList({
  chatRooms,
  loading = false,
}: {
  chatRooms: IChatRoom[];
  loading?: boolean;
}) {
  return (
    <Stack h="100%" align="strech" gap={0}>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      {chatRooms.map((chatRoom) => (
        <ChatRoomItem key={chatRoom.room.id} chatRoom={chatRoom} />
      ))}
      {chatRooms.length === 0 && !loading && (
        <Text ta="center" size="lg" c="dimmed" mt="60%">
          No chat rooms found
        </Text>
      )}
    </Stack>
  );
}
