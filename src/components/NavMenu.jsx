import { Box, Stack, Text } from "@mantine/core";
import { menuList } from "../constant";

const NavMenu = () => {
  return (
    <Stack>
      {menuList?.map((menu) => (
        <Box p={8}>
          <Text fw="bold" fz={20}>
            {menu?.name}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

export default NavMenu;
