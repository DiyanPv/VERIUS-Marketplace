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
  return (
    <div className="flex flex-row items-center justify-center h-full">
      <dialog className="flex flex-col items-center bg-[#d2bab0] w-1/2 h-96 justify-center rounded-2xl z-10">
        <div></div>
        <div className="w-3/5 justify-center flex flex-col items-center">
          <input
            placeholder="Email"
            type="email"
            value={emailvalue}
            className=""
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
      </dialog>
    </div>
  );
};
