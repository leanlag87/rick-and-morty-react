import ContenedorPersonajes from "./components/ContenedorPersonajes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import Paginacion from "./components/Paginacion";

function App() {
  const title = "Rick & Morty";
  const [personajes, setPersonajes] = useState([]);
  const [paginacion, setPaginacion] = useState({});

  const fetchPersonajes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPersonajes(data.results);
    setPaginacion(data.info);
  };

  useEffect(() => {
    fetchPersonajes("https://rickandmortyapi.com/api/character");
  }, []);

  const onSiguiente = () => {
    fetchPersonajes(paginacion.next);
  };

  const onAnterior = () => {
    fetchPersonajes(paginacion.prev);
  };

  return (
    <>
      <Navbar title={title} />
      <div className="container">
        <Paginacion
          onSiguiente={onSiguiente}
          onAnterior={onAnterior}
          paginacion={paginacion}
        />
        <ContenedorPersonajes personajes={personajes} />
        <Paginacion
          onSiguiente={onSiguiente}
          onAnterior={onAnterior}
          paginacion={paginacion}
        />
      </div>
    </>
  );
}

export default App;
