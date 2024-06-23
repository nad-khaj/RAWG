import { useRef } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useGameQueryStore } from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const searchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          navigate("/")
          searchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          variant={"filled"}
          placeholder="Search games..."
          borderRadius={20}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
