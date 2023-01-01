import { useState } from "react";

function SearchForm({ onSubmit }) {
  const [term, useTerm] = useState("");

  const handleChange = function (event) {
    useTerm(event.target.value);
  };

  const handleSumbit = function (event) {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <form
        className="flex justify-center mt-20 w-3/12 mx-auto"
        onSubmit={handleSumbit}
      >
        <input
          value={term}
          onChange={handleChange}
          type="text"
          className="border-2 border-black p-2 rounded-none w-[100%]"
          placeholder="Найти картинки"
        />
        <button
          onClick={handleSumbit}
          className="bg-gray-100 py-2 px-2 border-2 border-black border-l-0"
        >
          🔎
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
