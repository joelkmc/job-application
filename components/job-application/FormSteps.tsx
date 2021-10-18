interface FormStepsProps {
  steps: {
    id: string;
    name: string;
    href: string;
    status: string;
  }[];
}

const FormSteps: React.FC<FormStepsProps> = ({ steps }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === 'complete' ? (
              <a
                href={step.href}
                className="group pl-4 py-2 flex flex-col border-l-4 border-kmc-primary hover:border-kmc-primary md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              >
                <span className=" text-kmc-primary font-proxiSemiBold tracking-wide uppercase group-hover:text-kmc-primary">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a
                href={step.href}
                className="pl-4 py-2 flex flex-col border-l-4 border-kmc-primary md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                aria-current="step"
              >
                <span className=" text-kmc-primary font-semibold tracking-wide uppercase">
                  Step {step.id}
                </span>
                <span className="font-medium">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              >
                <span className=" text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                  Step {step.id}
                </span>
                <span className="font-medium">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default FormSteps;
