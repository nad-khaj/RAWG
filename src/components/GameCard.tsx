import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
      <HStack justifyContent={"space-between"}>
      <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}></CriticScore>
      </HStack>
        <Text fontSize={20} fontWeight={"bold"}>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
