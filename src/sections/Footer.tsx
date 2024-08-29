import LogoImage from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <LogoImage className="h-6 w-6" />
            <div className="font-medium">Ai Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:flex-1 lg:gap-7 gap-5 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs  md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs  md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="transition text-white/70 hover:text-white text-xs  md:text-sm"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 transition hover:text-white text-xs  md:text-sm"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition text-xs  md:text-sm"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YtSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
