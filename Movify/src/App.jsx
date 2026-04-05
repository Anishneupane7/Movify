import MovieContent from "./components/MovieContent";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <MovieContent />
      </main>
    </div>
  );
};

export default App;
