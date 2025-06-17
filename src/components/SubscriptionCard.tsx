
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SubscriptionPlan } from "@/services/subscriptionService";

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
  loading?: boolean;
  isActive?: boolean;
}

const SubscriptionCard = ({ plan, onSelect, loading, isActive }: SubscriptionCardProps) => {
  return (
    <Card className={`relative ${isActive ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">${plan.price}</span>
          {plan.price > 0 && <span className="text-sm text-gray-500 ml-1">/one-time</span>}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={() => onSelect(plan)}
          disabled={loading || isActive}
          className="w-full"
          variant={isActive ? "outline" : "default"}
        >
          {isActive ? "Current Plan" : loading ? "Processing..." : "Select Plan"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
