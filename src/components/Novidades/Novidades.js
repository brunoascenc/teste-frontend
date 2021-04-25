import React from "react";
import "./Novidades.scss";

const Novidades = () => {
  return (
    <section className="novidades">
      <article className="audio">
        <div>
          <p>Novidades</p>
          <h1>Áudio</h1>
          <p>Profissional</p>
          <button>Confira</button>
        </div>
      </article>
      <article className="instrumentos">
        <div>
          <p>Novidades</p>
          <h1>Instrumentos</h1>
          <p>Músicais</p>
          <button>Confira</button>
        </div>
      </article>
    </section>
  );
};

export default Novidades;
