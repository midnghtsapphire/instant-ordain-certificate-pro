
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
          <Badge variant="secondary" className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300">
            ⭐ #1 Trusted Online Ordination Platform
          </Badge>
        </div>
        
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/43757637-58f7-4860-b242-8c137266ab0d.png" 
            alt="EverUnity Church Logo" 
            className="h-32 w-32"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent mb-4">
          SmartMinisterBot 
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-6">
          Become a Legal Minister
          <span className="block text-2xl md:text-3xl mt-2">in Under 5 Minutes</span>
        </h2>
        
        <div className="flex items-center justify-center mb-4">
          <Church className="h-6 w-6 text-amber-700 mr-2" />
          <p className="text-lg text-gray-700 font-medium">
            Ordination services provided through <span className="text-amber-700 font-semibold">EverUnity Church</span> (Non-Profit 501c3)
          </p>
        </div>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get legally ordained online with instant certificate download. Officiate weddings, 
          perform ceremonies, and start your ministry with full legal compliance in all 50 states.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Award className="mr-2 h-5 w-5" />
            Get Ordained Now - FREE
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-xl">
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
