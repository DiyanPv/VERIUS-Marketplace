export const InputForm = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      className="my-2 w-full rounded-l p-2 outline-none bg-transparent text-white border-none white-glassmorphism"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      handleChange={handleChange}
    ></input>
  )
}
