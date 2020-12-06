import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function useSocialLogin() {
  let icon = [
    { id: "FacebookIcon", icon: <FacebookIcon /> },
    { id: "InstagramIcon", icon: <InstagramIcon /> },
    { id: "TwitterIcon", icon: <TwitterIcon /> },
    { id: "MailIcon", icon: <MailIcon /> },
    { id: "GitHubIcon", icon: <GitHubIcon /> },
    { id: "LinkedInIcon", icon: <LinkedInIcon /> },
  ];

  //   const [socialMediaValue, setSocialMediaValue] = useState();

  const handleLoginClick = (id) => {
    switch (id) {
      case "FacebookIcon":
        return window.alert(`${id} login is still in development, Please use Email to login `);
      case "Instagram":
        return window.alert(`${id} login is still in development, Please use Email to login `);
      case "TwitterIcon":
        return window.alert(`${id} login is still in development, Please use Email to login `);
      case "MailIcon":
        return window.alert(`${id} login is still in development, Please use Email to login `);
      case "GitHubIcon":
        return window.alert(`${id} login is still in development, Please use Email to login `);
      case "LinkedInIcon":
        return window.alert(`${id} login is still in development, Please use Email to login `);
      default:
        return window.alert(`${id} login is still in development, Please use Email to login `);
    }
  };
  return { icon, handleLoginClick };
}
