export const useNavigation = () => {
  const mainNav = [
    { pageTitle: "Home", pageLink: "/" },
    { pageTitle: "About us", pageLink: "/#about" },
    { pageTitle: "Services", pageLink: "/#services" },
    { pageTitle: "Contact us", pageLink: "/#contact" },
  ];

  const services = [
    {
      title: "Emergency Plumbing",
      link: "/services/emergency-plumbing",
    },
    {
      title: "Drain Cleaning",
      link: "/services/drain-cleaning",
    },
    {
      title: "Leak Repairs",
      link: "/services/leak-repairs",
    },
    {
      title: "Water Heater Installation",
      link: "/services/water-heater-installation",
    },
  ];

  return {
    mainNav,
    services,
  };
};
