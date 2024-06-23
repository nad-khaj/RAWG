import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import { useGameQueryStore } from "../store";

 
 
const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s)=>s.gamequery.genreId)
  const selectedlatformId = useGameQueryStore((s)=>s.gamequery.platformId)
  const selectedGenre = useGenre(selectedGenreId)
  const selectedPlatform= usePlatform(selectedlatformId)
 
 
  const header = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={5} marginLeft={10}>
      {header}
    </Heading>
  );
};

export default GameHeading;
