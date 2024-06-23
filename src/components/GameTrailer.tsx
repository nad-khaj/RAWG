import { Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrialers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isPending, error } = useTrailers(gameId);
  if (error) throw error;
  if (isPending) return <Spinner />;
  const firstTrailerObj = data.results[0];

  return firstTrailerObj ? (
    <video  controls src={firstTrailerObj.data[480]} poster={firstTrailerObj.preview} >
      {" "}
    </video>
  ) : (
    <Text color={"red"} >  video not found  </Text>
  );
};

export default GameTrailer;
