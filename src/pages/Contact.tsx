
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  HeadphonesIcon,
  Video,
  FileText,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    priority: "normal",
    category: "general",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support for urgent questions",
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 8AM-8PM EST",
      responseTime: "Immediate",
      action: "Call Now: (555) 123-4567",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed help with documentation",
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Screen sharing for complex issues",
      availability: "By appointment",
      responseTime: "Same day",
      action: "Schedule Call",
      color: "bg-orange-100 text-orange-700"
    }
  ];

  const supportStats = [
    { label: "Average Response Time", value: "< 2 hours", icon: Clock },
    { label: "Customer Satisfaction", value: "98.5%", icon: CheckCircle },
    { label: "Support Tickets Resolved", value: "45,000+", icon: HeadphonesIcon },
    { label: "Active Support Agents", value: "24/7", icon: Users }
  ];

  const categories = [
    { value: "general", label: "General Questions" },
    { value: "legal", label: "Legal Support" },
    { value: "technical", label: "Technical Issues" },
    { value: "billing", label: "Billing & Payments" },
    { value: "certificates", label: "Certificate Issues" },
    { value: "urgent", label: "Urgent Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help from our expert support team. We're here to ensure your ordination experience is smooth and successful.
          </p>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {supportStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Your Support Method</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${method.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <div className="space-y-1 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{method.availability}</span>
                            </div>
                            <div className="flex items-center">
                              <Zap className="h-3 w-3 mr-1" />
                              <span>Response: {method.responseTime}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2 w-full">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <Card className="mt-6 border-red-200 bg-red-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="destructive">Emergency</Badge>
                  <span className="font-semibold text-red-800">Wedding Day Support</span>
                </div>
                <p className="text-sm text-red-700 mb-3">
                  Need immediate help on your wedding day? Call our emergency hotline.
                </p>
                <Button variant="destructive" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency: (555) 911-HELP
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Support Category *</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="low">Low - General question</option>
                      <option value="normal">Normal - Need help soon</option>
                      <option value="high">High - Urgent issue</option>
                      <option value="critical">Critical - Wedding emergency</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your question or issue in detail..."
                      rows={6}
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button type="submit" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button type="button" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Instead
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Before You Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Quick Answers</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Check our FAQ section</li>
                      <li>• Review state legal requirements</li>
                      <li>• Download troubleshooting guides</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Have Ready</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Your certificate number</li>
                      <li>• Order confirmation email</li>
                      <li>• Screenshots of any errors</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
