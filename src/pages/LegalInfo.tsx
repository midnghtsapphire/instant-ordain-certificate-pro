
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Scale, 
  Shield, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Download,
  ExternalLink,
  MapPin,
  Clock,
  Gavel
} from "lucide-react";

const LegalInfo = () => {
  const stateRequirements = [
    {
      state: "California",
      status: "Fully Legal",
      requirements: ["Online ordination accepted", "No additional filing required", "Lifetime validity"],
      restrictions: ["Must be 18 or older", "Cannot charge excessive fees"],
      color: "green"
    },
    {
      state: "New York", 
      status: "Legal with Registration",
      requirements: ["Online ordination accepted", "Must register with city clerk", "Valid for 2 years"],
      restrictions: ["Registration required in NYC", "Annual renewal in some counties"],
      color: "yellow"
    },
    {
      state: "Texas",
      status: "Fully Legal",
      requirements: ["Online ordination accepted", "No state registration", "Lifetime validity"],
      restrictions: ["Must be 18 or older", "Cannot perform marriages for profit"],
      color: "green"
    },
    {
      state: "Florida",
      status: "Fully Legal",
      requirements: ["Online ordination accepted", "No additional requirements", "Lifetime validity"],
      restrictions: ["Must keep ordination records", "Cannot charge unreasonable fees"],
      color: "green"
    },
    {
      state: "Illinois",
      status: "Legal with Conditions",
      requirements: ["Online ordination accepted", "Must be in good standing", "Valid indefinitely"],
      restrictions: ["Some counties may require local registration", "Must maintain ordination status"],
      color: "yellow"
    }
  ];

  const legalDocuments = [
    {
      title: "Complete Legal Guide",
      description: "Comprehensive 50-state legal requirements and procedures",
      size: "2.3 MB PDF",
      downloads: "45,823"
    },
    {
      title: "Wedding Ceremony Scripts",
      description: "Legal templates for various ceremony types",
      size: "1.8 MB PDF", 
      downloads: "32,156"
    },
    {
      title: "State Registration Forms",
      description: "Pre-filled forms for states requiring registration",
      size: "950 KB PDF",
      downloads: "18,934"
    },
    {
      title: "Legal Troubleshooting Guide",
      description: "Solutions for common legal challenges",
      size: "1.2 MB PDF",
      downloads: "23,567"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Legal Information & Requirements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal guidance for online ordination and wedding officiation across all 50 states
          </p>
          
          <div className="flex justify-center items-center mt-6 space-x-6 text-sm">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span>Legally Backed</span>
            </div>
            <div className="flex items-center">
              <Scale className="h-5 w-5 text-blue-500 mr-2" />
              <span>Court Tested</span>
            </div>
            <div className="flex items-center">
              <Gavel className="h-5 w-5 text-purple-500 mr-2" />
              <span>Attorney Verified</span>
            </div>
          </div>
        </div>

        {/* Legal Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="h-6 w-6 mr-2 text-blue-600" />
              Legal Foundation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">First Amendment Rights</h3>
                <p className="text-sm text-gray-600">
                  Online ordination is protected under religious freedom laws in the United States
                </p>
              </div>
              <div className="text-center">
                <FileText className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">State Recognition</h3>
                <p className="text-sm text-gray-600">
                  All 50 states recognize online ordination with varying procedural requirements
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Legal Protection</h3>
                <p className="text-sm text-gray-600">
                  Our certificates include legal backing and attorney consultation when needed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* State Requirements Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">State-by-State Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateRequirements.map((state, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{state.state}</CardTitle>
                    <Badge 
                      variant={state.color === "green" ? "default" : "secondary"}
                      className={state.color === "green" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                    >
                      {state.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {state.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Restrictions:</h4>
                      <ul className="space-y-1">
                        {state.restrictions.map((restriction, restIndex) => (
                          <li key={restIndex} className="flex items-start text-sm">
                            <AlertCircle className="h-3 w-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{restriction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              View All 50 States
            </Button>
          </div>
        </div>

        {/* Legal Documents */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Documents & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          {doc.size}
                        </span>
                        <span className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          {doc.downloads} downloads
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Legal Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is online ordination legally valid?</AccordionTrigger>
                <AccordionContent>
                  Yes, online ordination is legally valid in all 50 states. The U.S. Constitution's First Amendment protects religious freedom, including the right to ordain ministers online. Courts have consistently upheld online ordination as legitimate.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What if a state or county challenges my ordination?</AccordionTrigger>
                <AccordionContent>
                  Our legal team provides support if your ordination is ever challenged. We maintain a 99.8% success rate in resolving legal challenges and offer free legal consultation for premium certificate holders.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to register with my state?</AccordionTrigger>
                <AccordionContent>
                  Most states do not require registration, but some counties or cities may have local requirements. Our state-specific guides detail exactly what's needed in your area, and we provide pre-filled forms where registration is required.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How long is my ordination valid?</AccordionTrigger>
                <AccordionContent>
                  Your ordination is typically valid for life, though some states have renewal requirements. We track expiration dates and send automatic renewal reminders to ensure your credentials remain current.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I officiate weddings immediately after ordination?</AccordionTrigger>
                <AccordionContent>
                  In most states, yes. However, we recommend waiting 24-48 hours for your ordination to be fully processed in our systems. Some states have waiting periods or additional requirements, which are detailed in your state-specific guide.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Legal Support CTA */}
        <div className="mt-8 bg-blue-50 rounded-lg p-8 text-center">
          <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Support?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our legal team is available to answer questions and provide guidance. Premium certificate holders receive priority support and free consultations.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>
              <ExternalLink className="h-4 w-4 mr-2" />
              Contact Legal Team
            </Button>
            <Button variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
