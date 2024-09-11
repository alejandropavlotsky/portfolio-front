import { useTranslation } from "react-i18next";
import "../styles/sass/about.scss";
import perfil from "../assets/perfil.jpeg";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <header>
        <h1>{t("title")}</h1>
        <h2>{t("subtitle")}</h2>
        <img src={perfil} alt="foto de perfil" />
      </header>
      <p>{t("maintext")}</p>
    </section>
  );
};
