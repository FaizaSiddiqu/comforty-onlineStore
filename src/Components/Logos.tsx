import Image from "next/image";

const Logos = () => {
  const logos = [
    { src: "/Images/logo-1.png", alt: "Zapier-Logo" },
    { src: "/Images/logo-2.png", alt: "Pipedrive-Logo" },
    { src: "/Images/logo-3.png", alt: "CIB-Bank-Logo" },
    { src: "/Images/logo-4.png", alt: "Zendesk-Logo" },
    { src: "/Images/Logo-5.png", alt: "Burnt-Toast-Logo" },
    { src: "/Images/Logo-6.png", alt: "PandaDoc-Logo" },
  ];

  return (
    <div className="logo-container ">
      {logos.map((logo, index) => (
        <div key={index} className="logo">
          <Image src={logo.src} alt={logo.alt} width={100} height={100}  style={{width: "auto", height: "auto"}} className="mr-10" />
        </div>
      ))}
    </div>
  );
};

export default Logos;
