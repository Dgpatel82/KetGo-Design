import React from "react";
import Icon from "../../../components/AppIcon";

const SocialLinks = () => {
  const socialMedia = [
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
    { name: "Pinterest", icon: "Pinterest", url: "https://pinterest.com" }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialMedia.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-light-gray hover:bg-accent hover:text-white p-3 rounded-full transition-colors duration-200"
          aria-label={`Follow us on ${platform.name}`}
        >
          <Icon name={platform.icon} size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;