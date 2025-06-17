
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Users } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Instant Download",
      description: "Get your certificate immediately after ordination",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Church Authority",
      description: "Backed by EverUnity Church with proper ecclesiastical credentials",
      color: "text-everunity-blue-600"
    },
    {
      icon: Users,
      title: "Join 500K+ Ministers",
      description: "Part of the largest online ministry community",
      color: "text-everunity-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <Card key={index} className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:bg-everunity-purple-50/30">
          <CardContent className="p-6 text-center">
            <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;
