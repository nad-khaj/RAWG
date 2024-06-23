import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.04)",
        transition: "transform 200ms ease-in",
      }}
      width={"100%"}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
