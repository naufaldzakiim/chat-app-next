import React from "react";
import { useRouter } from "next/navigation";
import { Grid, Avatar, Text, ActionIcon, Stack } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { IChatRoomDetail } from "@/types/chat";

export default function ChatRoomTopBar({
  chatRoom,
  isGroupChat = false,
}: {
  chatRoom: IChatRoomDetail;
  isGroupChat: boolean;
}) {
  const router = useRouter();
  const members = chatRoom.participant.map((member) => member.name).join(", ");

  return (
    <Grid justify="flex-start" align="center" gutter={4} px={8} py={4}>
      <Grid.Col span="content">
        <ActionIcon variant="subtle" radius="xl" size="lg" onClick={() => {router.push('/chats')}} >
          <IconChevronLeft
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </Grid.Col>
      <Grid.Col span="content">
        <Avatar
          src={chatRoom.image_url}
          radius="xl"
          size="md"
        />
      </Grid.Col>
      <Grid.Col span="auto">
        <Stack align="stretch" justify="center" gap={0} pl={4}>
          <Text size="sm" fw={500}>
            {chatRoom.name}
          </Text>
          {isGroupChat && (
            <Text c="dimmed" size="xs" truncate="end">
              {members}
            </Text>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
