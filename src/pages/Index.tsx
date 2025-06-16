import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Star, Download, Users, Shield, Award, Church } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-gradient-to-r from-gold-100 to-yellow-100 text-gold-800 border-gold-200">
              ⭐ #1 Trusted Online Ordination Platform
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-gold-600 bg-clip-text text-transparent mb-4">
            EverUnity Church 
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-gold-600 bg-clip-text text-transparent mb-6">
            Become a Legal Minister
            <span className="block text-2xl md:text-3xl mt-2">in Under 5 Minutes</span>
          </h2>
          
          <div className="flex items-center justify-center mb-4">
            <Church className="h-6 w-6 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700 font-medium">
              Ordination services provided through <span className="text-purple-600 font-semibold">EverUnity Church</span> (Non-Profit 501c3)
            </p>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get legally ordained online with instant certificate download. Officiate weddings, 
            perform ceremonies, and start your ministry with full legal compliance in all 50 states.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Award className="mr-2 h-5 w-5" />
              Get Ordained Now - FREE
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold rounded-xl">
                  <Download className="mr-2 h-5 w-5" />
                  View Sample Certificate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Sample Certificate - Universal Minister</DialogTitle>
                </DialogHeader>
                <div className="bg-white border-4 border-gold-300 p-8 rounded-lg shadow-lg">
                  <div className="text-center space-y-6">
                    <div className="border-b-2 border-gold-200 pb-4">
                      <h2 className="text-3xl font-bold text-blue-900">EverUnity Church</h2>
                      <p className="text-sm text-gray-600">Established 2010 • Non-Profit 501(c)(3)</p>
                    </div>
                    
                    <div className="py-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Certificate of Ordination</h3>
                      <p className="text-lg text-gray-700 mb-6">This is to certify that</p>
                      <div className="border-b-2 border-gray-300 mx-auto w-64 mb-6">
                        <p className="text-xl font-bold text-blue-900 pb-2">[Your Name Here]</p>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        has been duly ordained as a Minister of EverUnity Church and is hereby 
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
                        <Award className="h-12 w-12 text-gold-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">Official Church Seal</p>
                      </div>
                      <div className="text-right">
                        <div className="border-b border-gray-400 w-32 mb-2"></div>
                        <p className="text-sm text-gray-600">Church Authority</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Instant Download</h3>
                <p className="text-gray-600">Get your certificate immediately after ordination</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Church Authority</h3>
                <p className="text-gray-600">Backed by EverUnity Church with proper ecclesiastical credentials</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Join 500K+ Ministers</h3>
                <p className="text-gray-600">Part of the largest online ministry community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <StatsSection />
      <ReviewsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
