import { Fragment, HTMLProps, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

interface SelectProps extends HTMLProps<HTMLDivElement> {
  label: string;
  placeholder: string;
  name: string;
  options: {
    name: string;
    value: string | number;
  }[];
}

// TODO:
const Select: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  options,
  ...rest
}) => {
  const [selected, setSelected] = useState(options[0]);
  const [isError, setIsError] = useState(true);

  return (
    <div {...rest}>
      <button onClick={() => setIsError(!isError)}>asd</button>

      <label
        // htmlFor={name}
        className="block text-sm font-proxiSemiBold text-gray-600"
      >
        {label}
      </label>

      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative w-full py-2 pl-3 pr-10 text-left bg-white border transition-all rounded-lg shadow-sm cursor-default sm:text-sm ${
              isError ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <span
              className={`block truncate transition-all ${
                isError ? 'text-red-600' : 'text-gray-900'
              }`}
            >
              {selected.name}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? 'text-kmc-primary bg-kmc-primary bg-opacity-10'
                        : 'text-gray-900'
                    }
                      cursor-default select-none relative py-2 pl-10 pr-4 transition-all`
                  }
                  value={option}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`${
                          selected.name === option.name
                            ? 'font-proxiSemiBold text-kmc-primary'
                            : 'font-proxiRegular'
                        } block truncate transition-all`}
                      >
                        {option.name}
                      </span>
                      {selected.name === option.name ? (
                        <span
                          className={`${
                            active ? 'text-kmc-primary' : 'text-kmc-primary'
                          }
                            absolute inset-y-0 left-0 flex items-center pl-3 transition-all`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {isError && (
        <p className="mt-2 text-xs text-red-600" id="email-error">
          Your password must be less than 4 characters.
        </p>
      )}
    </div>
  );
};

export default Select;
