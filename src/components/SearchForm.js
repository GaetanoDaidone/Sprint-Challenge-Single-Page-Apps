import React, { useState } from "react";

export default function SearchForm({ onSearch, characters }) {
  // TODO: Add stateful logic for query/form data
  const [name, setName] = ("")

  useEffect(() =>{
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}
    `)
  })

  const handleInputChange = event => {
    setName({ ...name, [event.target.name]: event.target.value })
    let filteredNames = characters.filter(character => {
      return character.name.indexOf(characters) !== -1;
    })
  }
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );