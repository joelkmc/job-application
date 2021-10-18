import { HTMLInputTypeAttribute, HTMLProps, useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

interface InputProps extends HTMLProps<HTMLDivElement> {
  label: string;
  placeholder: string;
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
  leadingIcon?: JSX.Element | undefined;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  leadingIcon,
  ...rest
}) => {
  const [isError, setIsError] = useState(true);

  return (
    <div {...rest}>
      <button onClick={() => setIsError(!isError)}>asd</button>

      <label
        htmlFor={name}
        className="block text-sm font-proxiSemiBold text-gray-600"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {leadingIcon && (
          <div
            className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              isError ? 'text-red-500' : 'text-gray-400'
            }`}
          >
            {leadingIcon}
          </div>
        )}

        <input
          type={type}
          name={name}
          id={name}
          className={`shadow-sm block w-full  border outline-none transition-all sm:text-sm rounded-md p-2 ${
            isError
              ? 'border-red-500 text-red-600 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500 pr-10'
              : 'focus:ring-kmc-primary focus:border-kmc-primary border-gray-300 pr-2'
          }
          ${leadingIcon ? 'pl-10' : 'pl-2'}
          `}
          placeholder={placeholder}
        />

        {isError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {isError && (
        <p className="mt-2 text-xs text-red-600" id="email-error">
          Your password must be less than 4 characters.
        </p>
      )}
    </div>
  );
};

export default Input;
