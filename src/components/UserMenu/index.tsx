import {
  IconChevronRight,
  IconDots,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
import { ActionIcon, Avatar, Group, Menu, Text } from "@mantine/core";
import Cookies from "js-cookie";

export default function UserMenu() {
  const user = JSON.parse(Cookies.get("user") || "{}");

  return (
    <Group justify="center">
      <Menu
        withArrow
        width={300}
        position="bottom-end"
        transitionProps={{ transition: "pop" }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon variant="default" radius="xl">
            <IconDots size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight size={16} stroke={1.5} />}>
            <Group>
              <Avatar radius="xl" name={user.name} color="initials" />

              <div>
                <Text fw={500}>{user.name}</Text>
                <Text size="xs" c="dimmed">
                  {user.email}
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}
          >
            Change account
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              Cookies.remove("token");
              Cookies.remove("user");
              window.location.reload();
            }}
            leftSection={<IconLogout size={16} stroke={1.5} />}
          >
            Logout
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            color="red"
            leftSection={<IconTrash size={16} stroke={1.5} />}
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
