
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Award, 
  Download, 
  Search, 
  Filter, 
  Star,
  Heart,
  Cross,
  Globe,
  Sparkles,
  Crown,
  Leaf,
  Mountain
} from "lucide-react";

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const certificateTemplates = [
    {
      id: 1,
      name: "Universal Minister",
      category: "universal",
      icon: Globe,
      description: "Perfect for all faiths and non-denominational ceremonies",
      features: ["All 50 states legal", "Lifetime validity", "Digital + Print"],
      price: "Free",
      popular: true,
      preview: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Christian Minister",
      category: "christian",
      icon: Cross,
      description: "Traditional Christian ordination certificate",
      features: ["Biblical authority", "Church recognition", "Wedding legal"],
      price: "$9.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Interfaith Minister",
      category: "interfaith",
      icon: Heart,
      description: "Bridge multiple religious traditions",
      features: ["Multi-faith ceremonies", "Cultural inclusive", "Global recognition"],
      price: "$14.99",
      popular: true,
      preview: "https://images.unsplash.com/photo-1519452634681-4d2395a55925?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Spiritual Life Coach",
      category: "spiritual",
      icon: Sparkles,
      description: "Modern spiritual guidance certification",
      features: ["Life coaching rights", "Spiritual counseling", "Meditation leader"],
      price: "$19.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Premium Gold Seal",
      category: "premium",
      icon: Crown,
      description: "Luxury certificate with gold embossing",
      features: ["24k gold seal", "Premium paper", "Expedited processing", "Wallet card"],
      price: "$49.99",
      popular: true,
      preview: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Nature-Based Minister",
      category: "nature",
      icon: Leaf,
      description: "Earth-centered and nature-focused ordination",
      features: ["Outdoor ceremonies", "Eco-friendly", "Seasonal rituals"],
      price: "$12.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Mountain Retreat Minister",
      category: "spiritual",
      icon: Mountain,
      description: "Specialized for outdoor and destination ceremonies",
      features: ["Destination weddings", "Outdoor expertise", "Adventure ceremonies"],
      price: "$16.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Celebrity Minister Pro",
      category: "premium",
      icon: Star,
      description: "High-profile events and celebrity ceremonies",
      features: ["Media training", "Privacy protection", "VIP support", "Legal backup"],
      price: "$99.99",
      popular: true,
      preview: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
    }
  ];

  const categories = [
    { id: "all", name: "All Templates", count: certificateTemplates.length },
    { id: "universal", name: "Universal", count: 1 },
    { id: "christian", name: "Christian", count: 1 },
    { id: "interfaith", name: "Interfaith", count: 1 },
    { id: "spiritual", name: "Spiritual", count: 2 },
    { id: "premium", name: "Premium", count: 2 },
    { id: "nature", name: "Nature", count: 1 }
  ];

  const filteredCertificates = certificateTemplates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Templates</h1>
          <p className="text-gray-600">Choose from our collection of professional ordination certificates</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search certificate templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertificates.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <Card key={cert.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {cert.popular && (
                  <Badge className="absolute top-2 right-2 z-10 bg-red-500">
                    Popular
                  </Badge>
                )}
                
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <IconComponent className="h-16 w-16 text-blue-600" />
                  <img 
                    src={cert.preview} 
                    alt={cert.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{cert.name}</span>
                    <span className="text-lg font-bold text-green-600">{cert.price}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {cert.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Award className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      Get Certificate
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No certificates found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
