import { Text } from "@mantine/core";
import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text fz="lg" fw="bolder">
        About Page
      </Text>
    </div>
  );
};

export default AboutPage;
