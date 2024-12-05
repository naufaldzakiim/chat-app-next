import React from "react";
import { Grid, Avatar, Input, ActionIcon, CloseButton } from "@mantine/core";
import SearchInput from "@/components/Input/SearchInput";

export default function ChatRoomTopBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <Grid align="center" justify="space-between" gutter={4} px={8} py={4}>
      <Grid.Col span="content">
        <Avatar radius="xl" size="md" variant="transparent" />
      </Grid.Col>
      <Grid.Col span="auto">
        <SearchInput search={search} setSearch={setSearch} placeholder="Search Chat" />
      </Grid.Col>
    </Grid>
  );
}
