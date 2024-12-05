import {
  AppShell,
  Autocomplete,
  Box,
  Burger,
  Flex,
  Input,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ImageLayout from "./ImageApp";
import NavMenu from "./NavMenu";
import { useState } from "react";

const AppLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [searchVal, setSearchVal] = useState("");
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300 }} p="md">
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>MyApp</div>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavMenu />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="md" p={20}>
          <Flex justify="center" align="center" direction="column">
            <Text
              c="blue"
              fw="bold"
              style={{ fontSize: "24px", textAlign: "center" }}
            >
              Image Repo
            </Text>
            <Input
              variant="filled"
              placeholder="Search Images"
              size="md"
              w="50%"
              mt={20}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </Flex>
          {/* <Text>Category:{searchVal}</Text> */}
          <ImageLayout category={searchVal} />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
