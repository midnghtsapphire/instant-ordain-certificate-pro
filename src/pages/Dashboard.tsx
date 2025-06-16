
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Share2, Edit, Award, Users, Calendar, Star } from "lucide-react";

const Dashboard = () => {
  const userStats = {
    certificatesIssued: 3,
    weddingsOfficiated: 12,
    memberSince: "March 2024",
    nextRenewal: "March 2025"
  };

  const certificates = [
    {
      id: 1,
      type: "Universal Minister",
      status: "Active",
      issueDate: "2024-03-15",
      expiryDate: "2025-03-15",
      downloads: 5
    },
    {
      id: 2,
      type: "Wedding Officiant",
      status: "Active", 
      issueDate: "2024-03-20",
      expiryDate: "2025-03-20",
      downloads: 3
    },
    {
      id: 3,
      type: "Interfaith Minister",
      status: "Pending Verification",
      issueDate: "2024-06-10",
      expiryDate: "2025-06-10",
      downloads: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ministry Dashboard</h1>
          <p className="text-gray-600">Manage your certificates and ministry activities</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{userStats.certificatesIssued}</p>
                  <p className="text-sm text-gray-600">Certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{userStats.weddingsOfficiated}</p>
                  <p className="text-sm text-gray-600">Weddings</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm font-semibold">{userStats.memberSince}</p>
                  <p className="text-sm text-gray-600">Member Since</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-600 mr-3" />
                <div>
                  <p className="text-sm font-semibold">{userStats.nextRenewal}</p>
                  <p className="text-sm text-gray-600">Next Renewal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certificates Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>My Certificates</span>
              <Button>
                <Award className="h-4 w-4 mr-2" />
                Create New Certificate
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">{cert.type}</h3>
                      <p className="text-sm text-gray-600">
                        Issued: {cert.issueDate} • Expires: {cert.expiryDate}
                      </p>
                      <p className="text-xs text-gray-500">{cert.downloads} downloads</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={cert.status === "Active" ? "default" : "secondary"}>
                      {cert.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
