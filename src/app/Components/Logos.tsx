import Image from "next/image";

const Logos = () => {
  const logos = [
    { src: "/logo-1.png", alt: "Zapier Logo" },
    { src: "/logo-2.png", alt: "Pipedrive Logo" },
    { src: "/logo-3.png", alt: "CIB Bank Logo" },
    { src: "/Logo-4.png", alt: "Zendesk Logo" },
    { src: "/Logo-5.png", alt: "Burnt Toast Logo" },
    { src: "/Logo-6.png", alt: "PandaDoc Logo" },
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
