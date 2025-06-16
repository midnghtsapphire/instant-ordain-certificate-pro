
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, ThumbsUp, Filter, Search, Award, Heart, Quote } from "lucide-react";

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "California, USA",
      rating: 5,
      date: "2024-06-10",
      verified: true,
      ceremony: "Beach Wedding",
      title: "Absolutely Perfect for My First Wedding!",
      review: "I was nervous about officiating my best friend's wedding, but OfficiantBot made everything so easy. The certificate was accepted without any questions, and the legal guidance was invaluable. The whole process took less than 24 hours!",
      helpful: 23,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&h=100&fit=crop&crop=face",
      tags: ["Fast Processing", "Great Support", "Legal Acceptance"]
    },
    {
      id: 2,
      name: "Rev. Michael Chen",
      location: "New York, USA",
      rating: 5,
      date: "2024-06-08",
      verified: true,
      ceremony: "Interfaith Ceremony",
      title: "Professional Grade Certificate - Worth Every Penny",
      review: "I've been officiating for 3 years and have used several services. OfficiantBot's premium certificate is the most professional-looking I've seen. The gold seal and quality paper really impress couples and their families.",
      helpful: 18,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      tags: ["Premium Quality", "Professional", "Impressive Design"]
    },
    {
      id: 3,
      name: "Amanda Martinez",
      location: "Texas, USA",
      rating: 5,
      date: "2024-06-05",
      verified: true,
      ceremony: "Traditional Wedding",
      title: "50+ Weddings and Still Going Strong!",
      review: "As a full-time wedding officiant, I needed credentials that would never be questioned. OfficiantBot delivered perfectly. I've officiated over 50 weddings with zero legal issues. The customer support is also top-notch!",
      helpful: 31,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      tags: ["Professional Use", "Zero Issues", "Excellent Support"]
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Florida, USA",
      rating: 5,
      date: "2024-06-02",
      verified: true,
      ceremony: "Destination Wedding",
      title: "Saved My Sister's Wedding Day!",
      review: "The original officiant got sick 2 days before my sister's wedding. I got ordained through OfficiantBot in just 3 hours! The express service was worth every penny. The wallet card is a nice touch too.",
      helpful: 15,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      tags: ["Emergency Service", "Fast Delivery", "Life Saver"]
    },
    {
      id: 5,
      name: "Rev. Jessica Thompson",
      location: "Colorado, USA",
      rating: 5,
      date: "2024-05-28",
      verified: true,
      ceremony: "Mountain Wedding",
      title: "Perfect for Outdoor Ceremonies",
      review: "I specialize in outdoor and mountain weddings. The nature-based minister certificate was exactly what I needed. The legal documentation for remote locations was incredibly helpful.",
      helpful: 12,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      tags: ["Outdoor Ceremonies", "Specialized", "Remote Locations"]
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Washington, USA",
      rating: 4,
      date: "2024-05-25",
      verified: true,
      ceremony: "Civil Union",
      title: "Great Service, Minor Delivery Delay",
      review: "Overall excellent experience. The certificate quality is fantastic and was accepted without issues. Only minor complaint was the shipping took an extra day, but customer service was responsive and apologetic.",
      helpful: 8,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      tags: ["High Quality", "Minor Delay", "Good Support"]
    },
    {
      id: 7,
      name: "Maria Rodriguez",
      location: "Arizona, USA",
      rating: 5,
      date: "2024-05-20",
      verified: true,
      ceremony: "Bilingual Wedding",
      title: "Excellent for Multicultural Ceremonies",
      review: "I needed to officiate a bilingual wedding ceremony. The interfaith minister certificate was perfect, and the cultural guidance materials were incredibly valuable. Highly recommend for diverse ceremonies!",
      helpful: 19,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
      tags: ["Multicultural", "Bilingual", "Cultural Guidance"]
    },
    {
      id: 8,
      name: "Rev. John Patterson",
      location: "Georgia, USA",
      rating: 5,
      date: "2024-05-15",
      verified: true,
      ceremony: "Renewal of Vows",
      title: "Beautiful Ceremony Materials Included",
      review: "The premium package came with amazing ceremony scripts and resources. I used them for a vow renewal ceremony and the couple was in tears (happy ones!). The script templates saved me hours of preparation.",
      helpful: 14,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      tags: ["Premium Package", "Ceremony Scripts", "Time Saver"]
    }
  ];

  const stats = {
    totalReviews: 12847,
    averageRating: 4.9,
    ratingBreakdown: {
      5: 92,
      4: 6,
      3: 1,
      2: 0.5,
      1: 0.5
    }
  };

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRating = filterRating === "all" || review.rating === parseInt(filterRating);
    return matchesSearch && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Minister Reviews</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real reviews from real ministers who trust OfficiantBot for their ordination needs
          </p>
        </div>

        {/* Overall Stats */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stats.averageRating}</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">Based on {stats.totalReviews.toLocaleString()} reviews</p>
              </div>
              
              <div className="space-y-2">
                {Object.entries(stats.ratingBreakdown).reverse().map(([rating, percentage]) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm w-8">{rating}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Verified Reviews</h3>
                <p className="text-sm text-gray-600">All reviews are from verified purchasers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search reviews by name, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterRating === "all" ? "default" : "outline"}
              onClick={() => setFilterRating("all")}
            >
              All Ratings
            </Button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <Button
                key={rating}
                variant={filterRating === rating.toString() ? "default" : "outline"}
                onClick={() => setFilterRating(rating.toString())}
              >
                {rating}★
              </Button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{review.date}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">• {review.location}</span>
                      <span className="text-sm text-gray-600">• {review.ceremony}</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {review.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <button className="flex items-center space-x-1 hover:text-blue-600">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-red-600">
                          <Heart className="h-4 w-4" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <Quote className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No reviews found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More */}
        {filteredReviews.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline">
              Load More Reviews
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
