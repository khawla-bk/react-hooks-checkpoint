import React from "react";

const NameFilter = ({ search }) => {
  return (
    <div>
      <form class="form-inline active-pink-3 active-pink-4">
        <input
          class="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Type here.."
          aria-label="Type here"
          onChange={(e) => search(e.target.value)}
        />
      </form>
    </div>
  );
};
export default NameFilter;
