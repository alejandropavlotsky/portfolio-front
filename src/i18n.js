import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          title: 'Hola, soy Alejandro Murawczik',
          subtitle: 'y soy Desarrollador Frontend',
          maintext: 'Estoy en una búsqueda constante de nuevos retos que pongan a prueba y expandan mis habilidades y conocimientos. Mi curiosidad innata y mi pasión por el aprendizaje continuo me han permitido desarrollar soluciones creativas y efectivas en mi trabajo.',
          about: 'sobre mí',
          contact: 'contacto',
          projects: 'Proyectos',
          see: 'Ver proyecto',
          email: 'Email',
          phone: 'Teléfono',
          city: 'Madrid, España',
          location: 'Ubicación'
        }
      },
      en: {
        translation: {
          title: 'Hi, I´m Alejandro Murawczik',
          subtitle: 'and I am a Frontend Developer',
          maintext: 'I am constantly seeking new challenges that test and expand my skills and knowledge.My innate curiosity and passion for continuous learning have allowed me to develop creative and effective solutions in my work',
          about: 'about me',
          contact: 'Contact',
          projects: 'Projects',
          see: 'See project',
          email: 'Email',
          phone: 'Phone',
          city: 'Madrid, Spain',
          location: 'Location'
        }
      }
    }
  });

export default i18n;
