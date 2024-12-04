import { Box, Group, Image, Text } from "@mantine/core";
import { imageCollectionList } from "../assets/images/images";

const ImageLayout = () => {
  return (
    <Group gap="lg" mt="lg">
      {imageCollectionList?.shoes?.map((eachImg) => (
        <Box h={200} w={230}>
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src={eachImg?.url}
          />
        </Box>
      ))}
    </Group>
  );
};

export default ImageLayout;
