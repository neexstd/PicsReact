import SearchForm from "./components/SearchForm";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const handleSubmit = async function (term) {
    const result = await searchImages(term);
    setList(result);
  };

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <SearchForm onSubmit={handleSubmit} />
      <ImageList list={list} />
    </div>
  );
}

export default App;
