import React from "react";

const Paginacion = ({ onSiguiente, onAnterior, paginacion }) => {
  const { next, prev } = paginacion;
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center mt-4">
          {prev === null ? (
            <button
              className="btn btn-warning disabled d-none"
              onClick={onAnterior}
            >
              Anterior
            </button>
          ) : (
            <button className="btn btn-warning" onClick={onAnterior}>
              Anterior
            </button>
          )}

          {next === null ? (
            <button
              className="btn btn-dark ms-2 disabled d-none"
              onClick={onSiguiente}
            >
              Siguiente
            </button>
          ) : (
            <button className="btn btn-dark ms-2" onClick={onSiguiente}>
              Siguiente
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Paginacion;
