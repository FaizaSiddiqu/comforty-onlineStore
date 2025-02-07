import Image from "next/image";

const popularStyle = () => {
  return (
    <div className="grid grid-cols-2  p-2 mt-4">
        
      {/* Left Section */}
     
        
      <div className="col-span-1 flex items-center justify-center relative ml-8">
        <Image
          src="/Image-7.png"
          alt="Orange Chair"
          width={400}
          height={400}
          className="rounded-md"
        />
        <div className="absolute top-1/2 left-0 -rotate-90 text-gray-600 text-lg font-extrabold">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        
      </div>
      

      {/* Right Section */}
      <div className="col-span-1 grid grid-cols-2 gap-4">
        <Image
          src="/Images/Image-8.png"
          alt="White Chair"
          width={200}
          height={200}
          className="rounded-md"
        />
        <Image
          src="/Images/black.png"
          alt="Simple Chair"
          width={200}
          height={200}
          className="rounded-md"
        />
        <Image
          src="/Images/Image-1.png"
          alt="Gray Chair"
          width={200}
          height={200}
          className="rounded-md"
        />
        <div className="relative">
          <Image
            src="/Images/Image-4.png"
            alt="Wooden Chair"
            width={200}
            height={200}
            className="rounded-md"
          />
          
        </div>
      </div>
    </div>
  );
};

export default popularStyle;
