import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const DefineItem = ({ title, children }: Props) => {
  return (
    <Box as={"dl"} marginY ={5}>
      <Heading as={"dt"}  fontSize = {" md"} color = "gray.600">{title}</Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefineItem;
