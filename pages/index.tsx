import { MailIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Image from 'next/image';
import FormSteps from '../components/job-application/FormSteps';
import Input from '../components/shared/Input';

const Home: NextPage = () => {
  const steps = [
    { id: '1', name: 'Applicant Information', href: '#', status: 'current' },
    { id: '2', name: 'Conflict of Interest', href: '#', status: 'upcoming' },
    { id: '3', name: 'Legal Status', href: '#', status: 'upcoming' },
  ];

  return (
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

      <div className="w-full max-w-5xl h-full mx-auto mt-9 mb-12">
        <div className="md:w-2/3 mx-auto">
          <FormSteps steps={steps} />
        </div>

        <div className="w-full mt-10">
          <p className="text-2xl font-proxiExtraBold text-gray-800">
            Hi, Tell us about yourself.
          </p>
          <p className="text-sm">
            KMC’s screening team will evaluate your application based on the
            information you provide here.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="w-1/2">
            <Input
              name="firstName"
              label="First Name"
              placeholder="First Name"
              leadingIcon={<MailIcon className="h-5 w-5" aria-hidden="true" />}
            />
          </div>
          <div className="w-1/2">
            <Input
              name="firstName"
              label="First Name"
              placeholder="First Name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
