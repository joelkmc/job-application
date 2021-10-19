import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import FormSteps from '../components/job-application/FormSteps';
import StepOne from '../components/job-application/StepOne';
import StepThree from '../components/job-application/StepThree';
import StepTwo from '../components/job-application/StepTwo';

const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const handleStep = (action: 'next' | 'previous') => {
    const stepFunction = {
      next: () => setCurrentStep((old) => old + 1),
      previous: () => setCurrentStep((old) => old - 1),
    };

    stepFunction[action]();
  };

  const steps = [
    {
      id: 1,
      name: 'Applicant Information',
      href: '#',
      status: 'current',
      component: <StepOne handleStep={handleStep} />,
    },
    {
      id: 2,
      name: 'Conflict of Interest',
      href: '#',
      status: 'upcoming',
      component: <StepTwo handleStep={handleStep} />,
    },
    {
      id: 3,
      name: 'Legal Status',
      href: '#',
      status: 'upcoming',
      component: <StepThree handleStep={handleStep} />,
    },
  ];

  return (
    <>
      <Head>
        <title>KMC | Job Application</title>
      </Head>
      <div className="main min-h-screen min-w-full h-full">
        <header className="bg-black w-full h-16 px-4 sm:px-10">
          <div className="flex items-center h-full space-x-3">
            <Image
              src={'/images/KMC-LOGO.png'}
              height={35}
              width={133}
              alt="KMC-LOGO"
            />
            <div className="h-10 py-2 border-r border-white"></div>
            <p className="text-xl sm:text-2xl text-white">Job Application</p>
          </div>
        </header>

        <div className="w-full max-w-4xl h-full mx-auto mt-9 mb-12 px-4 sm:px-10">
          <div className="md:w-3/4 mx-auto">
            <FormSteps
              steps={steps}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          </div>

          {steps[currentStep].component}
        </div>
      </div>
    </>
  );
};

export default Home;
