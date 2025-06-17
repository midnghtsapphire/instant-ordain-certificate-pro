import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Award, User, Mail, Lock, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    state: "",
    ordainationType: "",
    agreeTerms: false,
    agreeAge: false
  });
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms || !formData.agreeAge) {
      toast({
        title: "Agreement required",
        description: "Please agree to the terms and confirm your age.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(formData.email, formData.password, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        state: formData.state,
        ordination_type: formData.ordainationType
      });

      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success!",
          description: "Your account has been created. Please check your email to verify your account."
        });
        navigate("/login");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SmartMinisterBot
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Get Ordained Today</h1>
          <p className="text-xl text-gray-600">Become a legal minister in under 5 minutes</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl text-center">Ordination Application</CardTitle>
            <p className="text-center text-gray-600">Fill out this form to receive your minister certificate</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Create Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Select onValueChange={(value) => updateFormData("state", value)}>
                    <SelectTrigger className="h-12">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="california">California</SelectItem>
                      <SelectItem value="texas">Texas</SelectItem>
                      <SelectItem value="florida">Florida</SelectItem>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ordainationType">Ministry Type</Label>
                  <Select onValueChange={(value) => updateFormData("ordainationType", value)}>
                    <SelectTrigger className="h-12">
                      <Award className="h-4 w-4 text-gray-400 mr-2" />
                      <SelectValue placeholder="Choose ministry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interfaith">Interfaith Ministry</SelectItem>
                      <SelectItem value="christian">Christian Ministry</SelectItem>
                      <SelectItem value="spiritual">Spiritual/New Age</SelectItem>
                      <SelectItem value="non-denominational">Non-Denominational</SelectItem>
                      <SelectItem value="custom">Custom/Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeAge"
                    checked={formData.agreeAge}
                    onCheckedChange={(checked) => updateFormData("agreeAge", checked)}
                  />
                  <Label htmlFor="agreeAge" className="text-sm leading-relaxed">
                    I confirm that I am at least 18 years old and legally able to enter into this ordination
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => updateFormData("agreeTerms", checked)}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg"
                disabled={!formData.agreeTerms || !formData.agreeAge || loading}
              >
                <Award className="mr-2 h-5 w-5" />
                {loading ? "Creating Account..." : "Complete Ordination - FREE"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
