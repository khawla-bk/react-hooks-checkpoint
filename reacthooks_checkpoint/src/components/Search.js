import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = ({ search }) => {
  const [searchValue, setsearchValue] = useState("");

  return (
    <Form inline onSubmit={(e) => e.preventDefault()}>
      <FormControl
        className="searchbar"
        value={searchValue}
        onChange={(e) => setsearchValue(e.target.value)}
        type="text"
        onKeyUp={() => search(searchValue)}
        placeholder="Search"
      />
    </Form>
  );
};

export default Search;
