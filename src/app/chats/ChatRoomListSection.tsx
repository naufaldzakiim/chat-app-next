"use client";
import React, { useState, useEffect } from "react";
import { IChatRoom } from "@/types/chat";
import { getChatRooms } from "@/utils/data-fetch";
import ChatRoomList from "@/components/ChatRoomList";
import ChatRoomListTopBar from "@/components/ChatRoomListTopBar";
import { Stack, Tabs, ScrollArea } from "@mantine/core";

export default function ChatsRoomListSection() {
  const [data, setData] = useState<IChatRoom[]>([]);
  const [filteredData, setFilteredData] = useState<IChatRoom[]>(data);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const chatRooms = getChatRooms(activeTab || "all");
      setData(chatRooms);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    setFilteredData(
      data.filter((room) =>
        room.room.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Stack gap={0}>
      <ChatRoomListTopBar search={search} setSearch={setSearch} />
      <Tabs radius="xl" value={activeTab} onChange={setActiveTab} px={8} py={4}>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="people">People</Tabs.Tab>
          <Tabs.Tab value="group">Group</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <ScrollArea h={`calc(100vh - 90px)`}>
        <ChatRoomList chatRooms={filteredData} loading={loading} />
      </ScrollArea>
    </Stack>
  );
}
