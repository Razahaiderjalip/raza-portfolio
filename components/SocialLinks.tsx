import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:border-lightSky hoverEffect">
        <Link href={"https://github.com/razahaiderjalip"}>
          <span>
            <Github />
          </span>
        </Link>
      </div>
      <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:border-lightSky hoverEffect">
        <Link href={"https://www.linkedin.com/in/raza-haider-jalip/"}>
          <span>
            <Linkedin />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
