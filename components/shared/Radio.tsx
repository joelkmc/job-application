import { HTMLProps, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

interface RadioProps extends HTMLProps<HTMLDivElement> {
  label: string;
  name: string;
  options: {
    name: string;
    value: boolean;
    description?: string;
  }[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Radio: React.FC<RadioProps> = ({ options, ...rest }) => {
  const [selected, setSelected] = useState();
  const [isError, setIsError] = useState(true);

  return (
    <div {...rest}>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="block text-sm font-proxiSemiBold text-gray-600 mb-1">
          Have you worked with KMC Solutions before?
        </RadioGroup.Label>
        <div className="bg-white rounded-md -space-y-px">
          {options.map((option, optionIdx) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ checked }) =>
                classNames(
                  isError ? 'border-red-500' : '',
                  optionIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                  optionIdx === options.length - 1
                    ? 'rounded-bl-md rounded-br-md'
                    : '',
                  checked && !isError
                    ? 'bg-kmc-primary bg-opacity-5 border-kmc-primary border-opacity-40 z-10'
                    : 'border-gray-200',
                  'relative border p-4 flex cursor-pointer outline-none focus:outline-none transition-all'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked
                        ? 'bg-kmc-primary border-transparent'
                        : 'bg-white border-gray-300',
                      active
                        ? 'ring-2 ring-offset-2 ring-kmc-primary text-opacity-90'
                        : '',
                      'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center transition-all'
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked ? 'text-gray-900' : 'text-gray-600',
                        'block text-sm font-proxiSemiBold transition-all'
                      )}
                    >
                      {option.name}
                    </RadioGroup.Label>
                    {option?.description && (
                      <RadioGroup.Description
                        as="span"
                        className={classNames(
                          checked ? 'text-kmc-primary' : 'text-gray-500',
                          'block text-sm transition-all'
                        )}
                      >
                        {option.description}
                      </RadioGroup.Description>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {isError && (
        <p className="mt-2 text-xs text-red-600" id="email-error">
          Your password must be less than 4 characters.
        </p>
      )}
    </div>
  );
};

export default Radio;
