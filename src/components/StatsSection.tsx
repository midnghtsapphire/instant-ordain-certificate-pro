
import { Card, CardContent } from "@/components/ui/card";
import { Award, Download, Users, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500,000+",
      label: "Ministers Ordained",
      color: "text-blue-600"
    },
    {
      icon: Download,
      number: "2.5M+",
      label: "Certificates Downloaded",
      color: "text-green-600"
    },
    {
      icon: Award,
      number: "50",
      label: "States Legal Coverage",
      color: "text-purple-600"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands of Ministers Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our growing community of legal wedding officiants and spiritual leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
