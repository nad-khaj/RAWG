import { Badge } from "@chakra-ui/react";

interface Props{
    score : number;
}

const CriticScore = ({score}:Props) => {
    const color = score >75 ? "green": score >60 ? "yellow" : "red"
  return (
    <Badge colorScheme= {color} fontSize={"12 px"} padding ={1} borderRadius={5}>{score}</Badge>
  )
}

export default CriticScore