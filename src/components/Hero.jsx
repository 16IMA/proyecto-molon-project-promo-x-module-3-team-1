import { Link } from "react-router";

function Hero() {
  return (
    <section className="hero">
      <h2 className="title">Proyectos molones</h2>
      <p className="hero__text">
        Escaparate en línea para recoger ideas a través de la tecnología
      </p>
      <Link className="button--link" to="/Preview">
        Ver proyectos
      </Link>
    </section>
  );
}

export default Hero;
