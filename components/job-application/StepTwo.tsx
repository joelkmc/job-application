import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import {
  ConflictOfInterestFormSchema,
  IConflictOfInterestForm,
} from '../../utils/ApplcationFormResolver';
import Input from '../shared/Input';
import Radio from '../shared/Radio';

interface StepTwoProps {
  handleStep: (action: 'next' | 'previous') => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ handleStep }) => {
  const formMethods = useForm<IConflictOfInterestForm>({
    mode: 'onChange',
    resolver: yupResolver(ConflictOfInterestFormSchema),
    defaultValues: {
      workWithKMC: null,
      boundByAgreement: null,
      workedWithKMCClients: null,
      locationWorkedWithKMC: '',
      locationWorkedWithClients: '',
      dateWorkedWithKMCClients: null,
      dateWorkedWithKMC: null,
    },
  });

  const {
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
  } = formMethods;

  const onSubmit = () => {
    handleStep('next');
  };
  console.log({ errors, vaues: getValues() });

  return (
    <>
      <div className="mt-10">
        <p className="text-xl lg:text-2xl font-proxiSemiBold text-gray-800">
          Conflict of Interest
        </p>
        <p className="text-sm text-gray-600">
          <span className="mb-3 mt-1 block">
            Why are we asking this information?
          </span>
          It is the policy of the KMC MAG Solutions Inc. to maintain the highest
          level of ethical standards in the conduct of its business and affairs.
          Whilst voluntary at this stage declaring conflict of interest is
          essential as an employee.
        </p>
      </div>

      <section className="py-10">
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <Radio
                  name="workWithKMC"
                  label="Have you worked with KMC Solutions before?"
                  options={[
                    { name: 'Yes', value: true },
                    { name: 'No', value: false },
                  ]}
                />
              </div>

              {watch('workWithKMC') && (
                <div className="flex flex-col w-full md:w-1/2 px-2 space-y-2">
                  <Input
                    name="locationWorkedWithKMC"
                    label="Location Worked with KMC"
                    placeholder="Location"
                    className="mb-4 md:mb-0"
                  />
                  <Input
                    name="dateWorkedWithKMC"
                    label="Date started working with KMC"
                    type="date"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 px-2">
                <Radio
                  name="workedWithKMCClients"
                  label="Have you worked with KMC Clients before?"
                  options={[
                    { name: 'Yes', value: true },
                    { name: 'No', value: false },
                  ]}
                />
              </div>

              {watch('workedWithKMCClients') && (
                <div className="flex flex-col w-full md:w-1/2 px-2 space-y-2">
                  <Input
                    name="locationWorkedWithClients"
                    label="Location Worked with KMC client or tenant"
                    placeholder="Location"
                    className="mb-4 md:mb-0"
                  />
                  <Input
                    name="dateWorkedWithKMCClients"
                    label="Date started working with KMC client or tenant"
                    type="date"
                  />
                </div>
              )}
            </div>

            <div className="flex mb-4">
              <div className="w-full md:w-1/2 px-2">
                <Radio
                  name="boundByAgreement"
                  label="Have you worked with KMC Clients before?"
                  options={[
                    { name: 'Yes', value: true },
                    { name: 'No', value: false },
                  ]}
                />
              </div>
            </div>

            <div className="px-2 mt-8 flex">
              <button
                type="button"
                onClick={() => handleStep('previous')}
                className="bg-gray-500 outline-none px-10 mr-4 py-2 rounded-md focus:ring-2 ring-gray-500 ring-opacity-20 shadow-sm hover:shadow-md focus:shadow-md transition-all"
              >
                <span className="text-white font-proxiSemiBold">Back</span>
              </button>
              <button
                type="submit"
                className="bg-kmc-primary outline-none px-10 py-2 rounded-md focus:ring-2 ring-kmc-primary ring-opacity-20 shadow-sm hover:shadow-md focus:shadow-md transition-all"
              >
                <span className="text-white font-proxiSemiBold">Next</span>
              </button>
            </div>
          </form>
        </FormProvider>
      </section>
    </>
  );
};

export default StepTwo;
