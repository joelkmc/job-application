interface StepTwoProps {
  handleStep: (action: 'next' | 'previous') => void;
}

const StepTwo: React.FC<StepTwoProps> = ({}) => {
  return <div>Step 2</div>;
};

export default StepTwo;
