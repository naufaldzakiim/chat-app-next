"use client";
import React from "react";
import { Grid, Stack, ThemeIcon, Text, Center } from "@mantine/core";
import ChatRoomListSection from "./ChatRoomListSection";
import { IconBubbleText } from "@tabler/icons-react";

export default function ChatsPage() {
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
    //   >
    //     <ChatRoomListSection />
    //   </Grid.Col>
    //   <Grid.Col span="auto" visibleFrom="sm" p={0}>
    //     <Stack bg="gray.3" h="100%" px={64} justify="center" gap={0}>
    //       <Center>
    //         <ThemeIcon variant="transparent" color="gray" radius="xl" size={96}>
    //           <IconBubbleText style={{ width: "70%", height: "70%" }} />
    //         </ThemeIcon>
    //       </Center>
    //       <Center>
    //         <Stack gap={0} maw={512}>
    //           <Center>
    //             <Text size="lg" fw={500}>
    //               WhatsCatt
    //             </Text>
    //           </Center>
    //           <Center>
    //             <Text size="md" ta="center" c="dark.2">
    //               Enjoy seamless messaging with a user-friendly interface and a
    //               variety of features to enhance your chatting experience.
    //             </Text>
    //           </Center>
    //         </Stack>
    //       </Center>
    //     </Stack>
    //   </Grid.Col>
    // </Grid>

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
