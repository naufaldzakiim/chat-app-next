"use client";
import React, { useState, useEffect } from "react";
import { IChatRoom } from "@/types/chat";
import { data as chatData } from "@/db/data";
import ChatRoomList from "@/components/ChatRoomList";
import ChatRoomTopBar from "@/components/ChatRoomTopBar";
import { Stack, Tabs, ScrollArea } from "@mantine/core";

export default function ChatsPage() {
  const [data, setData] = useState<IChatRoom[]>(chatData.results);
  const [filteredData, setFilteredData] = useState<IChatRoom[]>(data);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string | null>("all");

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (activeTab === "all") {
      setData(chatData.results);
    } else if (activeTab === "people") {
      setData(
        chatData.results.filter((room) => room.room.participant.length == 2)
      );
    } else if (activeTab === "group") {
      setData(
        chatData.results.filter((room) => room.room.participant.length > 2)
      );
    }
    setSearch("");
  }, [activeTab]);

  useEffect(() => {
    setFilteredData(
      data.filter((room) =>
        room.room.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Stack gap={0}>
      <ChatRoomTopBar search={search} setSearch={setSearch} />
      <Tabs radius="xl" value={activeTab} onChange={setActiveTab} px={8} py={4}>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="people">People</Tabs.Tab>
          <Tabs.Tab value="group">Group</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <ScrollArea h={`calc(100vh - 90px)`}>
        <ChatRoomList chatRooms={filteredData} />
      </ScrollArea>
    </Stack>
  );
}
