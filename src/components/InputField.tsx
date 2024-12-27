import React from "react";
interface InputFieldProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full h-12 px-3 py-2 border shadow-sm focus:outline-none sm:text-sm ${className}`}
      />
      {/* {error && <p className="mt-2 text-sm text-red-600">{error}</p>} */}
    </div>
  );
};
export default InputField;
