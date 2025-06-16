
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Award } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Minister",
      price: "Free",
      period: "Forever",
      description: "Perfect for getting started with basic ordination",
      features: [
        "Universal Minister Certificate",
        "Basic PDF download",
        "Email support",
        "Legal in all 50 states",
        "Standard processing (3-5 days)"
      ],
      notIncluded: [
        "Premium templates",
        "Priority support",
        "Physical mailed certificate",
        "Wallet card"
      ],
      icon: Award,
      color: "bg-gray-100",
      textColor: "text-gray-900",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional Minister",
      price: "$29.99",
      period: "One-time",
      description: "Most popular choice for serious ministers",
      features: [
        "Everything in Basic",
        "5 premium certificate templates",
        "Instant digital delivery",
        "Physical mailed certificate",
        "Wallet-size card",
        "Priority email support",
        "Legal document package",
        "State-specific guidance"
      ],
      notIncluded: [
        "Phone support",
        "Custom branding",
        "Bulk certificates"
      ],
      icon: Star,
      color: "bg-blue-600",
      textColor: "text-white",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Premium Minister Pro",
      price: "$59.99",
      period: "One-time",
      description: "For professional officiants and ministry leaders",
      features: [
        "Everything in Professional",
        "Unlimited certificate templates",
        "Custom ministry branding",
        "Phone + email support",
        "Expedited processing (24 hrs)",
        "Multiple denomination options",
        "Ceremonial resources library",
        "Wedding script templates",
        "Legal consultation (1 session)"
      ],
      notIncluded: [
        "Ongoing legal support",
        "Ministry website"
      ],
      icon: Zap,
      color: "bg-purple-600",
      textColor: "text-white",
      buttonVariant: "default" as const,
      popular: false
    },
    {
      name: "Elite Minister",
      price: "$149.99",
      period: "One-time",
      description: "Ultimate package for high-volume officiants",
      features: [
        "Everything in Premium Pro",
        "Unlimited bulk certificates",
        "Custom ministry website",
        "Dedicated account manager",
        "24/7 priority support",
        "Legal protection insurance",
        "Advanced ceremonial training",
        "Marketing materials kit",
        "Ongoing legal consultations",
        "White-label licensing rights"
      ],
      notIncluded: [],
      icon: Crown,
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      textColor: "text-black",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Express Processing",
      description: "Get your certificate in 1 hour",
      price: "$19.99"
    },
    {
      name: "Premium Paper Certificate",
      description: "Heavy cardstock with gold foil seal",
      price: "$24.99"
    },
    {
      name: "Ministry Starter Kit",
      description: "Wedding scripts, ceremonial guides, and templates",
      price: "$39.99"
    },
    {
      name: "Legal Protection Plan",
      description: "Annual legal insurance and consultation",
      price: "$99.99/year"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Ordination Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free basic ordination to premium professional packages - find the perfect plan for your ministry needs
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center mt-8 space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Legal in All 50 States</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Instant Digital Delivery</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>500,000+ Ministers Ordained</span>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className={`text-center pb-4 ${plan.color} ${plan.textColor} rounded-t-lg`}>
                  <IconComponent className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-sm opacity-75 ml-1">/{plan.period}</span>}
                  </div>
                  <p className="text-sm opacity-90 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start opacity-50">
                        <div className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0 rounded-full border border-gray-300"></div>
                        <span className="text-sm text-gray-500 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  >
                    {plan.price === "Free" ? "Get Started Free" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Optional Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-600">{addon.price}</span>
                    <Button variant="outline" size="sm">Add</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ or Guarantee Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">100% Satisfaction Guarantee</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              If you're not completely satisfied with your ordination certificate, we'll refund your money within 30 days. 
              Our certificates are legally recognized in all 50 states and backed by our legal team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
