import React from 'react';
import './About.css'; // Importar el archivo CSS para estilos

function About() {
  return (
    <div id="about" className="about">
      <h2>Acerca de mi </h2>
      <p>
        Hola y en esta oportunidad estamaremos viendo como hacer nuestro sitio con react + github actions + github pages.
      </p>
      <p>
        Soy Organizador de la comunidad de Elastic Search Chile y SysArmy Chile, donde me encargo de organizar eventos y charlas para la comunidad.
        De profesion soy Ingeniero Civil en Informatica y Telecomunicaciones de la Universidad Diego portales, tengo postitulo en ingeligencia artificilia y en
        ingenieria de software de la Universidad de Chile. Actulamente me desempeño como Head Architect & Software Developer en la Universidad de Chile.
      </p>
      <p>
        Estoy disponible para conversar y debatir distintos puntos de vistas.
      </p>
    </div>
  );
}

export default About;
