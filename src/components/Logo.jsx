import logoSrc from "/images/logo.svg";

export default function Logo() {
  return (
    <img
      src={logoSrc}
      alt="Logo"
      className="h-auto pt-8 pb-8 mx-auto max-w-[90vw]"
    />
  );
}

