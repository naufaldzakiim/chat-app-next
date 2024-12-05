"use client";
import React from "react";
import { Stack, ThemeIcon, Text, Center } from "@mantine/core";
import { IconBubbleText } from "@tabler/icons-react";

export default function ChatsPage() {
  return (
    <Stack bg="gray.3" h="100%" px={64} justify="center" gap={0}>
      <Center>
        <ThemeIcon variant="transparent" color="gray" radius="xl" size={96}>
          <IconBubbleText style={{ width: "70%", height: "70%" }} />
        </ThemeIcon>
      </Center>
      <Center>
        <Stack gap={0} maw={512}>
          <Center>
            <Text size="lg" fw={500}>
              WhatsCatt
            </Text>
          </Center>
          <Center>
            <Text size="md" ta="center" c="dark.2">
              Enjoy seamless messaging with a user-friendly interface and a
              variety of features to enhance your chatting experience.
            </Text>
          </Center>
        </Stack>
      </Center>
    </Stack>
  );
}
