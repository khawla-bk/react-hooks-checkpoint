import React from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = ({ setsearchValue }) => {
  return (
    <Form inline onSubmit={(e) => e.preventDefault()}>
      <FormControl
        className="searchbar"
        onChange={(e) => setsearchValue(e.target.value)}
        type="text"
        placeholder="Search"
      />
    </Form>
  );
};

export default Search;
