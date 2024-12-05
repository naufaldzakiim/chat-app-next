import React from "react";
import { Input, ActionIcon, CloseButton } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function SearchInput({
  search,
  setSearch,
  placeholder = "",
}: {
  search: string;
  setSearch: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <Input
      placeholder={placeholder}
      bg="white.1"
      value={search}
      onChange={(event) => setSearch(event.currentTarget.value)}
      rightSectionPointerEvents="all"
      size="xs"
      radius="lg"
      rightSection={
        search === "" ? (
          <ActionIcon
            variant="white"
            color="gray"
            radius="xl"
            aria-label="Settings"
            size="sm"
            style={{ display: search ? "none" : undefined }}
          >
            <IconSearch style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        ) : (
          <CloseButton
            aria-label="Clear input"
            size="sm"
            onClick={() => setSearch("")}
            style={{ display: search ? undefined : "none" }}
          />
        )
      }
    />
  );
}
