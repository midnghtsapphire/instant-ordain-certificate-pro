import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Download } from "lucide-react";

interface CertificateCardProps {
  cert: {
    id: number;
    name: string;
    category: string;
    icon: React.ComponentType<any>;
    description: string;
    features: string[];
    price: string;
    popular: boolean;
    preview: string;
  };
}

const CertificateCard = ({ cert }: CertificateCardProps) => {
  const IconComponent = cert.icon;
  
  const SampleCertificateWithIcon = () => (
    <div className="bg-white border-4 border-gold-300 p-8 rounded-lg shadow-lg">
      <div className="text-center space-y-6">
        <div className="border-b-2 border-gold-200 pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/8d8510c7-e2f7-47ed-a1a1-9ec665bf380f.png" 
              alt="EverUnity Church Logo" 
              className="h-16 w-16"
            />
          </div>
          <h2 className="text-3xl font-bold text-blue-900">EverUnity Church</h2>
          <p className="text-sm text-gray-600">Established 2010 • Non-Profit 501(c)(3)</p>
        </div>
        
        <div className="py-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Certificate of Ordination</h3>
          <div className="flex justify-center mb-4">
            <IconComponent className="h-12 w-12 text-blue-600" />
          </div>
          <h4 className="text-xl font-semibold text-purple-600 mb-4">{cert.name}</h4>
          <p className="text-lg text-gray-700 mb-6">This is to certify that</p>
          <div className="border-b-2 border-gray-300 mx-auto w-64 mb-6">
            <p className="text-xl font-bold text-blue-900 pb-2">[Your Name Here]</p>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            has been duly ordained as a {cert.name} of EverUnity Church and is hereby 
            authorized to perform marriages, baptisms, funerals, and other religious ceremonies 
            in accordance with the laws of all fifty states.
          </p>
        </div>
        
        <div className="flex justify-between items-end pt-6 border-t-2 border-gold-200">
          <div className="text-left">
            <div className="border-b border-gray-400 w-32 mb-2"></div>
            <p className="text-sm text-gray-600">Date of Ordination</p>
          </div>
          <div className="text-center">
            <img 
              src="/lovable-uploads/8d8510c7-e2f7-47ed-a1a1-9ec665bf380f.png" 
              alt="EverUnity Church Seal" 
              className="h-12 w-12 mx-auto mb-2"
            />
            <p className="text-xs text-gray-500">Official Church Seal</p>
          </div>
          <div className="text-right">
            <div className="border-b border-gray-400 w-32 mb-2"></div>
            <p className="text-sm text-gray-600">Church Authority</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Sample Certificate - {cert.name}</DialogTitle>
              </DialogHeader>
              <SampleCertificateWithIcon />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
