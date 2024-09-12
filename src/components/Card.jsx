import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Card = ({ name, description, url, index }) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      key={index}
      className="project-item"
    >
      <h3>{name}</h3>
      <p>{description[i18n.language]}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {t("see")}
      </a>
    </motion.div>
  );
};
