import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
      <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Text fontSize={20} fontWeight={"bold"}>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
