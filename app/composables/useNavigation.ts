export const useNavigation = () => {
  const mainNav = [
    { pageTitle: "Home", pageLink: "/" },
    { pageTitle: "About us", pageLink: "/about" },
    { pageTitle: "Services", pageLink: "/services" },
    { pageTitle: "Contact us", pageLink: "/contact" },
  ];

  const footerNav = [];

  return {
    mainNav,
  };
};
