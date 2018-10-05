import React from "react";

function Search(props) {
  return (
    <form>
      <h4>Search for characters:</h4>
      <input type="text" placeholder="Search for characters" value={props.inputText} onChange={props.changeInput} />
    </form>
  )
}

export default Search;