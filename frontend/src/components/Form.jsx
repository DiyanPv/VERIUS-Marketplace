import { createPortal } from "react-dom";
import { MdOutlineLogin } from "react-icons/md";
import { useContext } from "react";
import { TransactionContext } from "../../context/context";
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

export const LoginModal = ({
  name,
  emailvalue,
  passwordValue,
  moadlisOpen,
  setModalisOpen,
}) => {
  const { loginData, setLoginData } = useContext(TransactionContext);
  return createPortal(
    <div className="flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 h-1/2 justify-center rounded-2xl z-50 fixed border-4 border-gray-800 drop-shadow translate-y-[50%] translate-x-[50%] transition duration-300 ease-in-out">
      <button
        className="absolute top-4 right-4 text-2xl rounded-full pl-3 pb-1 pr-3 border-2 bg-white text-black"
        onClick={() => {
          setModalisOpen(false);
        }}
      >
        x
      </button>
      <div className="flex justify-center items-start text-white border-2 px-16 py-2 mr-2">
        <MdOutlineLogin fontSize={22} />
        Login:
      </div>
      <div className="w-3/5 justify-center flex flex-col items-center">
        <input
          placeholder="E-mail"
          type="email"
          value={loginData.email}
          onChange={(e) => {
            setLoginData((prevState) => {
              return { email: e.target.value, password: prevState.password };
            });
          }}
          className="mb-8 mt-12"
        ></input>

        <input
          placeholder="password"
          type="password"
          value={loginData.password}
          name={name}
          onChange={(e) => {
            setLoginData((prevState) => {
              return { email: prevState.email, password: e.target.value };
            });
          }}
        ></input>
      </div>
      <button
        className="flex items-center mt-10 rounded-2xl bg-white text-black w-fit px-12 py-2 hover:text-white hover:bg-black"
        onClick={(e) => {
          e.preventDefault();
          if (loginData.email !== `` && loginData.password !== ``) {
            localStorage.setItem("email", loginData.email);
            localStorage.setItem("password", loginData.password);
            setLoginData({ email: ``, password: `` });
            setModalisOpen(false);
          }
        }}
      >
        Login
      </button>
    </div>,

    document.getElementById(`portal`)
  );
};
