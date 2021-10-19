import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import {
  ILegalStatusForm,
  LegalStatusFormSchema,
} from '../../utils/ApplcationFormResolver';
import Checkbox from '../shared/checkbox';
import Input from '../shared/Input';
import Radio from '../shared/Radio';

interface StepThreeProps {
  handleStep: (action: 'next' | 'previous') => void;
}

const StepThree: React.FC<StepThreeProps> = ({ handleStep }) => {
  const formMethods = useForm<ILegalStatusForm>({
    mode: 'onChange',
    resolver: yupResolver(LegalStatusFormSchema),
    defaultValues: {
      consent: false,
      filipinoCitizen: null,
      isConvicted: null,
      workPermitExpiryDate: null,
    },
  });

  const {
    watch,
    handleSubmit,
    formState: { errors },
    getValues,
  } = formMethods;

  console.log({ errors, values: getValues() });
  const onSubmit = () => {
    console.log('form finished');
  };

  return (
    <>
      <div className="mt-10">
        <p className="text-xl lg:text-2xl font-proxiSemiBold text-gray-800">
          Legal Status
        </p>
      </div>

      <section className="py-10">
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <Radio
                  name="filipinoCitizen"
                  label="Are you a Filipino Citizen?"
                  options={[
                    { name: 'Yes', value: true },
                    { name: 'No', value: false },
                  ]}
                />
              </div>

              {watch('filipinoCitizen') && (
                <div className="flex flex-col w-full md:w-1/2 px-2 space-y-2">
                  <Input
                    name="workPermitExpiryDate"
                    label="Expiry Date of Work Permit"
                    type="date"
                  />
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <Radio
                name="isConvicted"
                label="Have you ever been convicted of felony or any offense against the law?"
                options={[
                  { name: 'Yes', value: true },
                  { name: 'No', value: false },
                ]}
              />
            </div>

            <div className="w-full px-2 mb-4 md:mb-0 mt-7">
              <Checkbox
                name="consent"
                label="I affirm and certify that all the information and answers to questions herein are complete, true and correct to the best of my knowledge and belief. I understand that any misrepresentation, falsification, or omission of any infomation called for in the application may render this application void and will be cause for termination, whenever discovered."
              />
            </div>

            <div className="px-2 mt-8 flex">
              <button
                type="submit"
                className="bg-kmc-primary outline-none px-10 py-2 rounded-md focus:ring-2 ring-kmc-primary ring-opacity-20 shadow-sm hover:shadow-md focus:shadow-md transition-all"
              >
                <span className="text-white font-proxiSemiBold">
                  Submit Application
                </span>
              </button>
            </div>
          </form>
        </FormProvider>
      </section>
    </>
  );
};

export default StepThree;
