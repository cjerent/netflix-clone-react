import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import movies from "./movies.json";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {movies.map((elem, index) => {
          const nameSection = elem.category;
          const moviesImages = elem.images;
          return (
            <Section key={index} category={nameSection} images={moviesImages} />
          );
        })}
      </div>
    </>
  );
}

export default App;
