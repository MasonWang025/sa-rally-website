import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const navigation = {
  main: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/cultureofconsentshs/",
      icon: (props) => <FontAwesomeIcon icon={faInstagram} {...props} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/groups/283979260063445",
      icon: (props) => <FontAwesomeIcon icon={faFacebook} {...props} />,
    },
    {
      name: "Email",
      href: "mailto:cultureofconsentshs@gmail.com",
      icon: (props) => <FontAwesomeIcon icon={faEnvelope} {...props} />,
    },
  ],
};

export default navigation;
