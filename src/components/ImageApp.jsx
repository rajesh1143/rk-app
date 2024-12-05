import { Box, Group, Image, Text } from "@mantine/core";
import { imageCollectionList } from "../assets/images/images";
import { useEffect, useState } from "react";

const ImageLayout = ({ category }) => {
  const [filterdImg, setFilteredImg] = useState([]);

  useEffect(() => {
    const filterImg = imageCollectionList.data.filter((eachImg) =>
      eachImg.category.includes(category) ? true : false
    );
    setFilteredImg(filterImg);
  }, [category]);

  return (
    <Group gap="lg" mt="lg">
      {filterdImg?.map((eachImg) => (
        <Box h={200} w={230}>
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src={eachImg?.category.includes(category) ? eachImg.url : ""}
          />
        </Box>
      ))}
    </Group>
  );
};

export default ImageLayout;
