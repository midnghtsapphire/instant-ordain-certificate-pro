
import { Award } from "lucide-react";

const SampleCertificate = () => {
  return (
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
  );
};

export default SampleCertificate;
