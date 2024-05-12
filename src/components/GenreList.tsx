import { HStack, Link, List, ListItem ,Image, Spinner} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props{
    onSelectGenre : (selectedGenre : Genre)=>void
}
const GenreList = ({onSelectGenre}:Props) => {
  const { data,error,isloading } = useGenres();
  if (error) return null
  if (isloading) return <Spinner />
  
  return (
    <>
      {data.map((genre) => (
        <List paddingLeft={"5px"}>
          <ListItem padding ={"5px"}>
            <HStack>
              <HStack padding={1} key={genre.id}>
                <Image  src={getCroppedImageUrl(genre.image_background)} boxSize={"32px"} borderRadius={10} objectFit={"cover"}></Image>
                <Link onClick={()=>onSelectGenre(genre)}> {genre.name}</Link>
              </HStack>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default GenreList;
