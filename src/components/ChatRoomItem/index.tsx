import React from "react";
import { useRouter } from "next/navigation";
import { Avatar, Flex, Text, Group, Card, ThemeIcon,  } from "@mantine/core";
import { IconPhoto, IconVideo, IconFileDescription } from "@tabler/icons-react";
import { IChatRoom, ChatType } from "@/types/chat";
import classes from "./ChatRoomItem.module.css"

export default function ChatRoomItem({ chatRoom }: { chatRoom: IChatRoom }) {
  const roomName = chatRoom.room.name;
  const roomImage = chatRoom.room.image_url;
  const isGroupChat = chatRoom.room.participant.length > 2;
  const lastChat = chatRoom.comments[chatRoom.comments.length - 1];
  const senderName = chatRoom.room.participant.find(
    (participant) => participant.id === lastChat.sender
  )?.name;
  const router = useRouter();

  return (
    <Card className={classes.chatRoomItem} onClick={() => {router.push(`/chats/${chatRoom.room.id}`)}}>
      <Group>
        <Avatar src={roomImage} radius="xl" />
        <Flex direction="column" maw="80%">
          <Text size="sm" fw={500}>
            {roomName}
          </Text>

          <Message
            type={lastChat.type}
            isGroupChat={isGroupChat}
            message={lastChat.message}
            sender={senderName}
          />
        </Flex>
      </Group>
    </Card>
  );
}

function Message({
  type,
  isGroupChat = false,
  message,
  sender
}: {
  type: ChatType;
  isGroupChat: boolean;
  message: string;
  sender?: string;
}) {
  return (
    <Group justify="flex-start" gap={0}>
      {isGroupChat && (
        <Text c="dimmed" size="xs" truncate="end">
          {sender}:{" "}
        </Text>
      )}
      {type !== "text" && (
        <ThemeIcon variant="white" size="sm" color="gray" bg="none">
          {type === "image" && (
            <IconPhoto style={{ width: "70%", height: "70%" }} />
          )}
          {type === "video" && (
            <IconVideo style={{ width: "70%", height: "70%" }} />
          )}
          {type === "pdf" && (
            <IconFileDescription style={{ width: "70%", height: "70%" }} />
          )}
        </ThemeIcon>
      )}
      <Text size="xs" c="dimmed" truncate="end">
        {type === "image" && "Photo"}
        {type === "video" && "Video"}
        {type === "pdf" && "Document"}
        {type === "text" && message}
      </Text>
    </Group>
  );
}
