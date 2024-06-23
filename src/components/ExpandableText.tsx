import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length === 0 ) return null;
  if (children.length <=limit) return <Text>{children}</Text>
  const text = expanded ? children : children.substring(limit)+"...";

  return (
    <Text>
      {text}{" "} 
      <Button  size= {"xs"} fontWeight = {"bold"} colorScheme={"yellow"} onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
