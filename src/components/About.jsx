import "../styles/sass/about.scss";
import perfil from "../assets/perfil.jpeg";


export const About = () => {
  return (
    <section id="about">
      <header>
        <h1>Hola, soy Alejandro Murawczik</h1>
        <h2>y soy Frontend Developer</h2>
        <img src={ perfil } alt="foto de perfil" />
      </header>
      <p>
        Estoy en una búsqueda constante de nuevos retos que pongan a prueba y
        expandan mis habilidades y conocimientos. Mi curiosidad innata y mi
        pasión por el aprendizaje continuo me han permitido desarrollar
        soluciones creativas y efectivas en mi trabajo.
      </p>
    </section>
  )
}
