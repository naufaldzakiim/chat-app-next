import { Stack } from "@mantine/core";

export default function ChatsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Stack h="100vh" align="strech" justify="flex-start">{children}</Stack>;
}