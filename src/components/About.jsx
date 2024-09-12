import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/sass/about.scss";
import perfil from "../assets/perfil.jpeg";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <motion.header initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h1>{t("title")}</h1>
        <h2>{t("subtitle")}</h2>
        <img src={perfil} alt="foto de perfil" />
      </motion.header>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {t("maintext")}
      </motion.p>
    </section>
  );
};
