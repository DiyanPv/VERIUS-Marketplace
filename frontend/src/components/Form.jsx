import { createPortal } from "react-dom";
export const InputForm = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      className="my-2 w-full rounded-l p-2 outline-none bg-transparent text-white border-none white-glassmorphism"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={(e) => handleChange(e, name)}
    ></input>
  );
};

export const LoginModal = ({ name, emailvalue, passwordValue }) => {
  return createPortal(
    <div className="flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 h-1/2 justify-center rounded-2xl z-50 fixed border-4 border-gray-800 drop-shadow translate-y-[50%] translate-x-[50%]">
      <div className="flex justify-start items-start mr-40 text-white">
        Login:
      </div>
      <div className="w-3/5 justify-center flex flex-col items-center">
        <input
          placeholder="Email"
          type="email"
          value={emailvalue}
          className="mb-8 mt-12"
        ></input>
        <input
          placeholder="password"
          type="password"
          value={passwordValue}
          name={name}
        ></input>
      </div>
      <button className="flex items-center mt-10 rounded-2xl bg-black text-white w-fit px-12 py-2">
        Login
      </button>
    </div>,

    document.getElementById(`portal`)
  );
};
