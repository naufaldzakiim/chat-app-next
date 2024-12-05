import React from "react";
import { Grid } from "@mantine/core";
import SearchInput from "@/components/Input/SearchInput";
import UserMenu from "@/components/UserMenu";

export default function ChatRoomTopBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <Grid align="center" justify="space-between" gutter={4} px={8} py={8}>
      <Grid.Col span="auto">
        <SearchInput
          search={search}
          setSearch={setSearch}
          placeholder="Search Chat"
        />
      </Grid.Col>
      <Grid.Col span="content">
        <UserMenu />
      </Grid.Col>
    </Grid>
  );
}
