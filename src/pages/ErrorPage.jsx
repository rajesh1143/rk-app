import { Stack, Text } from "@mantine/core";
import React from "react";

const ErrorPage = () => {
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
      <Stack>
        <Text fz="lg" c="red" fw="bolder">
          404:Page Not Found
        </Text>
      </Stack>
    </div>
  );
};

export default ErrorPage;
