
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  
  // Simulated user state - in a real app this would come from auth context
  const [user] = useState({
    name: "John Smith",
    email: "john.smith@email.com",
    isLoggedIn: true
  });

  const handleLogoClick = () => {
    setIsLogoClicked(true);
    setTimeout(() => setIsLogoClicked(false), 800);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-amber-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/43757637-58f7-4860-b242-8c137266ab0d.png" 
              alt="EverUnity Church Logo" 
              className={`h-10 w-10 transition-all duration-500 ${
                isLogoClicked ? 'scale-[3] z-50' : 'scale-100'
              }`}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              SmartMinisterBot
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/certificates" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">
              Certificates
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/legal-info" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">
              Legal Info
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">
              Reviews
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-xs text-gray-500">Logged in</p>
                  <p className="text-sm font-medium text-gray-700">{user.name}</p>
                </div>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-gray-700 hover:text-amber-700">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-700 hover:text-amber-700">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
                    Get Ordained
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/certificates" className="text-gray-700 hover:text-amber-700 font-medium">
                Certificates
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-amber-700 font-medium">
                Pricing
              </Link>
              <Link to="/legal-info" className="text-gray-700 hover:text-amber-700 font-medium">
                Legal Info
              </Link>
              <Link to="/reviews" className="text-gray-700 hover:text-amber-700 font-medium">
                Reviews
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-700 font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                {user.isLoggedIn ? (
                  <>
                    <div className="text-center py-2">
                      <p className="text-xs text-gray-500">Logged in</p>
                      <p className="text-sm font-medium text-gray-700">{user.name}</p>
                    </div>
                    <Link to="/dashboard">
                      <Button variant="outline" className="w-full">Dashboard</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700">
                        Get Ordained
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
