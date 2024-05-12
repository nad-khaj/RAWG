// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "main main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"} padding={4}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem  paddingLeft={"5px"} area={"aside"}>
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid selectedGenre = {selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
