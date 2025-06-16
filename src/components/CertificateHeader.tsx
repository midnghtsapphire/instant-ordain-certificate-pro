
import { Church } from "lucide-react";

const CertificateHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Templates</h1>
      <p className="text-gray-600 mb-4">Choose from our collection of professional ordination certificates</p>
      <div className="flex items-center">
        <Church className="h-5 w-5 text-purple-600 mr-2" />
        <p className="text-sm text-gray-700">
          All certificates issued through <span className="font-semibold text-purple-600">EverUnity Church</span> with full ecclesiastical authority
        </p>
      </div>
    </div>
  );
};

export default CertificateHeader;
