import { useTranslation } from "react-i18next";
import "../styles/sass/footer.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact">
      <p>{t('email')}: <a href="mailto:alejandro.murawczik.p@gmail.com">alejandro.murawczik.p@gmail.com</a></p>
      <p>{t('phone')}: <a href="tel:+34695261173">695 261 173</a></p>
      <p>{ t('location') }: <span>{ t('city') }</span></p>
      </footer>
  )
}
