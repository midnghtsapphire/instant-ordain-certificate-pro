
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Crown, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Ordination",
      price: "FREE",
      originalPrice: null,
      icon: Award,
      popular: false,
      description: "Perfect for officiating friends & family",
      features: [
        "Digital Minister Certificate",
        "Basic Legal Documentation",
        "Email Support",
        "Valid in All 50 States",
        "Instant Download"
      ],
      cta: "Get Ordained Free",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Premium Minister",
      price: "$29.99",
      originalPrice: "$59.99",
      icon: Crown,
      popular: true,
      description: "Most popular for professional officiants",
      features: [
        "Everything in Basic",
        "Premium Certificate Design",
        "Wallet-Size ID Card",
        "Letter of Good Standing",
        "Priority Email Support",
        "Wedding Planning Guide",
        "Ceremony Scripts Library"
      ],
      cta: "Upgrade to Premium",
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Professional Ministry",
      price: "$49.99",
      originalPrice: "$99.99",
      icon: Zap,
      popular: false,
      description: "Complete ministry business package",
      features: [
        "Everything in Premium",
        "Ministry Credential Package",
        "State Filing Assistance",
        "Tax-Exempt Status Guide",
        "Business Setup Resources",
        "24/7 Phone Support",
        "Legal Consultation",
        "Marketing Materials"
      ],
      cta: "Start Your Ministry",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Ordination Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started for free or upgrade for professional features and enhanced credibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  {plan.price !== "FREE" && (
                    <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-lg font-semibold ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            All plans include lifetime access • 30-day money-back guarantee • No recurring fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
