
import { useState } from "react";
import { Award } from "lucide-react";
import { 
  Heart,
  Cross,
  Globe,
  Sparkles,
  Crown,
  Leaf,
  Mountain,
  Star
} from "lucide-react";
import CertificateHeader from "@/components/CertificateHeader";
import CertificateFilters from "@/components/CertificateFilters";
import CertificateCard from "@/components/CertificateCard";

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
      features: ["All 50 states legal", "Lifetime validity", "Digital + Print", "EverUnity Church seal"],
      price: "Free",
      popular: true,
      preview: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Christian Minister",
      category: "christian",
      icon: Cross,
      description: "Traditional Christian ordination through EverUnity Church",
      features: ["Biblical authority", "Church recognition", "Wedding legal", "Apostolic succession"],
      price: "$9.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Interfaith Minister",
      category: "interfaith",
      icon: Heart,
      description: "Bridge multiple religious traditions under church authority",
      features: ["Multi-faith ceremonies", "Cultural inclusive", "Global recognition", "Church backing"],
      price: "$14.99",
      popular: true,
      preview: "https://images.unsplash.com/photo-1519452634681-4d2395a55925?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Spiritual Life Coach",
      category: "spiritual",
      icon: Sparkles,
      description: "Modern spiritual guidance certification with church credentials",
      features: ["Life coaching rights", "Spiritual counseling", "Meditation leader", "Church endorsement"],
      price: "$19.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Premium Gold Seal",
      category: "premium",
      icon: Crown,
      description: "Luxury certificate with gold embossing and full church documentation",
      features: ["24k gold seal", "Premium paper", "Expedited processing", "Wallet card", "Church letterhead"],
      price: "$49.99",
      popular: true,
      preview: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Nature-Based Minister",
      category: "nature",
      icon: Leaf,
      description: "Earth-centered ordination through EverUnity Church",
      features: ["Outdoor ceremonies", "Eco-friendly", "Seasonal rituals", "Church authority"],
      price: "$12.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Mountain Retreat Minister",
      category: "spiritual",
      icon: Mountain,
      description: "Specialized for outdoor and destination ceremonies with church backing",
      features: ["Destination weddings", "Outdoor expertise", "Adventure ceremonies", "Full church support"],
      price: "$16.99",
      popular: false,
      preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Celebrity Minister Pro",
      category: "premium",
      icon: Star,
      description: "High-profile events with full EverUnity Church credentials",
      features: ["Media training", "Privacy protection", "VIP support", "Legal backup", "Church endorsement"],
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
        <CertificateHeader />
        
        <CertificateFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
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
