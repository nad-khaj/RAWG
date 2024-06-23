import { SimpleGrid ,Text} from '@chakra-ui/react'

import CriticScore from './CriticScore'
import DefineItem from './DefineItem'
import { Game } from '../entities/Game'
interface Props{
    game:Game
}

const GameAttributes = ({game}:Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
    <DefineItem title="Platforms">
      {game.parent_platforms.map((p)=><Text key={p.platform.id}>{p.platform.name}</Text>)}
    </DefineItem>
    <DefineItem title="MetaScore">
       <CriticScore score = {game.metacritic}/> 
    </DefineItem>
    <DefineItem title="Genres">
      {game.genres.map((genre)=><Text key={genre.id}>{genre.name}</Text>)}
    </DefineItem>
    <DefineItem title="Publishers">
      {game.publishers.map((publisher)=><Text key = {publisher.id}>{publisher.name}</Text>)}
    </DefineItem>
    
  </SimpleGrid>
  )
}

export default GameAttributes