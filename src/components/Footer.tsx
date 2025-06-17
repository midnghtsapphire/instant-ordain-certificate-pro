import { Mail, MapPin, Phone, Church } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/d4c6b8c6-3b32-4bc1-a2dd-2f8a4c5e9b7d.png" 
                alt="EverUnity Church Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold">OfficiantBot</span>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <Church className="h-5 w-5 text-purple-400" />
              <span className="text-sm text-gray-300">Powered by EverUnity Church (Non-Profit 501c3)</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The world's most trusted online ordination platform. Get legally ordained 
              through EverUnity Church and start your ministry journey with full confidence and legal backing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>1-800-MINISTER (1-800-646-4783)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span>support@officiantbot.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span>Legal in All 50 States</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/ordination" className="text-gray-400 hover:text-white transition-colors">Online Ordination</Link></li>
              <li><Link to="/certificates" className="text-gray-400 hover:text-white transition-colors">Minister Certificates</Link></li>
              <li><Link to="/legal-info" className="text-gray-400 hover:text-white transition-colors">Legal Documentation</Link></li>
              <li><Link to="/wedding-planning" className="text-gray-400 hover:text-white transition-colors">Wedding Planning</Link></li>
              <li><Link to="/ministry-tools" className="text-gray-400 hover:text-white transition-colors">Ministry Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 OfficiantBot. All rights reserved. Ordination services provided through EverUnity Church (Non-Profit).
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">Legal Notices</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
