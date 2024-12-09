import Image from "next/image";

const Logos = () => {
  const logos = [
    { src: "/Logo-1.png", alt: "Zapier Logo" },
    { src: "/Logo-2.png", alt: "Pipedrive Logo" },
    { src: "/Logo-3.png", alt: "CIB Bank Logo" },
    { src: "/Logo-4.png", alt: "Zendesk Logo" },
    { src: "/Logo-5.png", alt: "Burnt Toast Logo" },
    { src: "/Logo-6.png", alt: "PandaDoc Logo" },
  ];

  return (
    <div className="logo-container ">
      {logos.map((logo, index) => (
        <div key={index} className="logo">
          <Image src={logo.src} alt={logo.alt} width={100} height={50} className="mr-10" />
        </div>
      ))}
    </div>
  );
};

export default Logos;
