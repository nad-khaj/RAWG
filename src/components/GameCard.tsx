import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
 
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const ratingStr = parseInt(game.rating.toFixed(0));
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <HStack>
          <Text fontSize={20} fontWeight={"bold"}>
            <Link to={`/games/${game.slug}`}> {game.name} </Link> {game.rating}
          </Text>
          <Emoji rating={ratingStr} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
