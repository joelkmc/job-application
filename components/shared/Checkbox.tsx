import { ChangeEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface checkboxProps {
  label: string;
  name: string;
}

const Checkbox: React.FC<checkboxProps> = ({ label = '', name }) => {
  const [checked, setChecked] = useState(false);

  const { setValue, register } = useFormContext();

  const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };

  return (
    <div className="">
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id={name}
            checked={checked}
            onChange={handleChecked}
            type="checkbox"
            className="focus:ring-kmc-primary focus:ring-opacity-60 h-4 w-4 text-kmc-primary border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
