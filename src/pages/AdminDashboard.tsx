
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Award, 
  DollarSign, 
  TrendingUp, 
  Search,
  Filter,
  Download,
  Edit,
  Eye,
  MoreHorizontal,
  Calendar,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const stats = {
    totalUsers: 125847,
    certificatesIssued: 98234,
    monthlyRevenue: 145890,
    growthRate: 12.5
  };

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      location: "California, USA",
      certificateType: "Universal Minister",
      status: "Active",
      registrationDate: "2024-06-15",
      lastLogin: "2024-06-16"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 234-5678",
      location: "New York, USA", 
      certificateType: "Premium Gold",
      status: "Active",
      registrationDate: "2024-06-14",
      lastLogin: "2024-06-15"
    },
    {
      id: 3,
      name: "Amanda Martinez",
      email: "amanda.m@email.com",
      phone: "(555) 345-6789",
      location: "Texas, USA",
      certificateType: "Interfaith Minister",
      status: "Pending",
      registrationDate: "2024-06-13",
      lastLogin: "2024-06-13"
    },
    {
      id: 4,
      name: "David Wilson",
      email: "d.wilson@email.com",
      phone: "(555) 456-7890",
      location: "Florida, USA",
      certificateType: "Christian Minister",
      status: "Active",
      registrationDate: "2024-06-12",
      lastLogin: "2024-06-16"
    },
    {
      id: 5,
      name: "Jessica Thompson",
      email: "j.thompson@email.com",
      phone: "(555) 567-8901",
      location: "Colorado, USA",
      certificateType: "Nature-Based",
      status: "Active",
      registrationDate: "2024-06-11",
      lastLogin: "2024-06-14"
    }
  ];

  const filteredUsers = recentUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || user.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, certificates, and platform analytics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{stats.certificatesIssued.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Certificates Issued</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">${stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-yellow-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{stats.growthRate}%</p>
                  <p className="text-sm text-gray-600">Growth Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>User Management</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search users by name, email, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "active" ? "default" : "outline"}
                  onClick={() => setFilterStatus("active")}
                  size="sm"
                >
                  Active
                </Button>
                <Button
                  variant={filterStatus === "pending" ? "default" : "outline"}
                  onClick={() => setFilterStatus("pending")}
                  size="sm"
                >
                  Pending
                </Button>
              </div>
            </div>

            {/* Users Table */}
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{user.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {user.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {user.phone}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {user.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">Certificate: {user.certificateType}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">Registered: {user.registrationDate}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">Last login: {user.lastLogin}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No users found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Manage Certificates</h3>
              <p className="text-sm text-gray-600">Create, edit, and approve certificate templates</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">View Analytics</h3>
              <p className="text-sm text-gray-600">Monitor platform usage and performance metrics</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Support Tickets</h3>
              <p className="text-sm text-gray-600">Manage customer support requests and issues</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
