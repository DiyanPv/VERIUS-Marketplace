export const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl w-full">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1 text-white">
        <h1 className="mt-2 text-lg">{title}</h1>

        <p className="mt-2 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};
