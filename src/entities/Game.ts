import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres : Genre[]
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  description_raw: string;
  publishers : Publisher[]
}
