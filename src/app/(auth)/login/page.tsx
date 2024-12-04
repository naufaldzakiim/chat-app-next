"use client";
import React, { useState } from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Flex,
  Container,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("customer@mail.com");
  const [password, setPassword] = useState("177013");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      if (email !== "customer@gmail.com" && password !== "177013") {
        throw new Error("Invalid email or password");
      }
      Cookies.set("token", "12345");
      Cookies.set(
        "user",
        JSON.stringify({ email, password, name: "king customer" })
      );
      router.push("/chats");
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      h="100vh"
      w="100vw"
      justify="center"
      align="center"
      direction="column"
    >
      <Container w={{ base: "100vw", xs: 570, sm: 760, md: 960 }}>
        <Title ta="center" fw={900}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="youremail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            disabled={loading}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
            disabled={loading}
            mt="md"
          />
          <Text c="red" mt="sm">
            {error}
          </Text>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" onClick={handleLogin} loading={loading}>
            Sign in
          </Button>
        </Paper>
      </Container>
    </Flex>
  );
}
