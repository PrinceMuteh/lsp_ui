import Image from "next/image";

const PoweredBy = () => {
  return (
    <div className="mt-28 py-4 flex justify-center items-center text-white">
      Powered by
      <Image
        src="/images/logo2.png"
        alt="Logo"
        width={100}
        height={80}
        className="rounded-lg shadow-lg ml-4"
      />
    </div>
  );
};

export default PoweredBy;
