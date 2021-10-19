import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MailIcon, PaperClipIcon } from '@heroicons/react/solid';
import { UploadIcon } from '@heroicons/react/outline';

import {
  ApplicantInformationFormSchema,
  DeviceEnum,
  IApplicantInformationForm,
  SourceOfHireEnum,
} from '../../utils/ApplcationFormResolver';
import Input from '../shared/Input';
import Select from '../shared/Select';

interface StepOneProps {
  handleStep: (action: 'next' | 'previous') => void;
}

const StepOne: React.FC<StepOneProps> = ({ handleStep }) => {
  const formMethods = useForm<IApplicantInformationForm>({
    mode: 'onChange',
    resolver: yupResolver(ApplicantInformationFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      personalEmail: '',
      deviceUsed: null,
      expectedSalary: null,
      sourceOfHire: null,
      linkedInProfile: '',
      personalPhone: '',
      resume: 'string',
    },
  });

  const { watch, handleSubmit } = formMethods;

  const onSubmit = () => {
    handleStep('next');
  };

  return (
    <>
      <div className="mt-10">
        <p className="text-xl lg:text-2xl font-proxiSemiBold text-gray-800">
          Hi, Tell us about yourself.
        </p>
        <p className="text-sm text-gray-700">
          KMC’s screening team will evaluate your application based on the
          information you provide here.
        </p>
      </div>

      <section className="py-10">
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-4">
              {/* First Name */}
              <div className="w-1/2 px-2">
                <Input name="firstName" label="First Name" />
              </div>

              {/* Last Name */}
              <div className="w-1/2 px-2">
                <Input name="lastName" label="Last Name" />
              </div>
            </div>
            <div className="flex mb-4">
              {/* Email */}
              <div className="w-1/2 px-2">
                <Input
                  name="personalEmail"
                  label="Email"
                  placeholder="Email Address"
                  leadingIcon={<MailIcon className="h-5 w-5" />}
                />
              </div>

              {/* Contact Number */}
              <div className="w-1/2 px-2">
                <Input name="personalPhone" label="Contact Number" />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 px-2">
                <Select
                  name="sourceOfHire"
                  label="Source"
                  options={[
                    { name: 'Select an Option', value: null },
                    {
                      name: 'Applicant Referral',
                      value: SourceOfHireEnum.APPLICANT_REFERRAL,
                    },
                    {
                      name: 'Bossjob',
                      value: SourceOfHireEnum.BOSSJOB,
                    },
                    {
                      name: 'Client Referral',
                      value: SourceOfHireEnum.CLIENT_REFERRAL,
                    },
                    {
                      name: 'Google Jobs',
                      value: SourceOfHireEnum.GOOGLE_JOBS,
                    },
                    {
                      name: 'Indeed Jobs',
                      value: SourceOfHireEnum.INDEED,
                    },
                    {
                      name: 'Internship Program',
                      value: SourceOfHireEnum.INTERNSHIP_PROGRAM,
                    },
                    {
                      name: 'Jobstreet',
                      value: SourceOfHireEnum.JOBSTREET,
                    },
                    {
                      name: 'KMC Careers Website',
                      value: SourceOfHireEnum.KMC_CAREERS_WEBSITE,
                    },
                    {
                      name: 'LinkedIn',
                      value: SourceOfHireEnum.LINKEDIN,
                    },
                    {
                      name: 'Non Employee',
                      value: SourceOfHireEnum.NON_EMPLOYEE,
                    },
                    {
                      name: 'Re-Profile',
                      value: SourceOfHireEnum.RE_PROFILE,
                    },
                    {
                      name: 'Social Media',
                      value: SourceOfHireEnum.SOCIAL_MEDIA,
                    },
                    {
                      name: 'Talent Referral Programm',
                      value: SourceOfHireEnum.TALENT_REFERRAL_PROGRAM,
                    },
                    {
                      name: 'Vendor',
                      value: SourceOfHireEnum.VENDOR,
                    },
                    {
                      name: 'Others',
                      value: SourceOfHireEnum.OTHER,
                    },
                  ]}
                />
              </div>

              {watch('sourceOfHire') === 15 && (
                <div className="w-1/2 px-2">
                  <Input name="sourceOfHire_others" label="Others Source" />
                </div>
              )}

              <div className="w-1/2 px-2">
                <Select
                  name="deviceUsed"
                  label="Device Used"
                  options={[
                    { name: 'Select Device Used', value: null },
                    { name: 'Mobile', value: DeviceEnum.MOBILE },
                    { name: 'Tablet', value: DeviceEnum.TABLET },
                    { name: 'Laptop', value: DeviceEnum.LAPTOP },
                    { name: 'PC', value: DeviceEnum.PC },
                  ]}
                />
              </div>
            </div>
            <div className="flex mb-4">
              {/* Linkedin */}
              <div className="w-1/2 px-2">
                <Input
                  name="linkedInProfile"
                  label="Linkedin Profile"
                  prefix="https://"
                />
              </div>

              {/* Salary */}
              <div className="w-1/2 px-2">
                <Input
                  name="expectedSalary"
                  label="Expected Salary"
                  placeholder="Expected Salary"
                  suffix="PHP"
                  type="number"
                />
              </div>
            </div>
            <div className="mb-4 px-2">
              <label
                htmlFor="Resume"
                className="block text-sm font-proxiSemiBold text-gray-600 mb-1"
              >
                Attched Resume
              </label>

              <div className="w-1/2 pr-2">
                <div className="border border-gray-300 rounded-md pl-3 pr-4 py-2 flex items-center justify-between">
                  {watch('resume') ? (
                    <>
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate text-gray-600 font-proxiSemiBold">
                          joodsad.pdf
                        </span>
                      </div>

                      <div className="ml-2 flex-shrink-0">
                        <a
                          href=""
                          className="font-medium text-red-600 hover:text-red-500"
                        >
                          Remove
                        </a>
                      </div>
                    </>
                  ) : (
                    <button
                      className="w-full flex-1 flex items-center justify-center"
                      type="button"
                    >
                      <UploadIcon className="h-5 w-5 text-gray-400" />
                      <span className="ml-2 w-auto truncate text-gray-600 font-proxiSemiBold">
                        Upload Resume
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="px-2 mt-8 flex">
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

export default StepOne;
