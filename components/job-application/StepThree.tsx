interface StepThreeProps {
  handleStep: (action: 'next' | 'previous') => void;
}

const StepThree: React.FC<StepThreeProps> = ({}) => {
  return <div>Step 3</div>;
};

export default StepThree;
