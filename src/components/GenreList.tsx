import { Box, HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useGameQueryStore } from "../store";

const GenreList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gamequery.genreId);
  const { data, error, isPending } = useGenres();
  if (error) return null;
  if (isPending) return <Spinner />;

  return (
    <Box>
      {data.results.map((genre) => (
        <List paddingLeft={"5px"} key={genre.id} >
          <ListItem padding={"5px"}>
            <HStack>
              <HStack padding={1}>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize={"32px"}
                  borderRadius={10}
                  objectFit={"cover"}
                ></Image>
                <Link
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => {setGenreId(genre.id)
                }}
                >
                  {" "}
                  {genre.name}
                </Link>
              </HStack>
            </HStack>
          </ListItem>
        </List>
      ))}
    </Box>
  );
};

export default GenreList;
