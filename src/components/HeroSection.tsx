import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Download, Church } from "lucide-react";
import SampleCertificate from "./SampleCertificate";
import FeatureCards from "./FeatureCards";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="bg-gradient-to-r from-gold-100 to-yellow-100 text-gold-800 border-gold-200">
            ⭐ #1 Trusted Online Ordination Platform
          </Badge>
        </div>
        
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/e0da411d-bf08-439a-be39-c331ba6e5f25.png" 
            alt="EverUnity Church Logo" 
            className="h-32 w-32"
          />
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
              <SampleCertificate />
            </DialogContent>
          </Dialog>
        </div>
        
        <FeatureCards />
      </div>
    </section>
  );
};

export default HeroSection;
