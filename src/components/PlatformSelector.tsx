import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import { useGameQueryStore } from "../store";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setPlatformId = useGameQueryStore((s)=>s. setPlatformId)
  const selectedPlatformId = useGameQueryStore((s)=>s.gamequery.platformId)
  const selectedPlatform = data.results.find( platform =>platform.id === selectedPlatformId)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiSolidChevronDown />}>
        { selectedPlatform?.name ||  "All Platforms"}
      </MenuButton>
      <MenuList>
        {/* <MenuItem onClick={()=>onSelectePlatform() }>All Platforms</MenuItem> */}
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() =>{ setPlatformId(platform.id)
            }}
            key={platform.id}
          >
            {platform.name}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
