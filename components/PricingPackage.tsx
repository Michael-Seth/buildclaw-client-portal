import PricingCard, { Plan } from "./PricingCard"

// Pricing component that takes an array of plans as a prop
const Pricing: React.FC<{ plans: Plan[] }> = ({ plans }) => {
    return (
      <div className="container py-8 mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    );
  };
  export default Pricing
  
