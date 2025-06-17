
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "California",
      rating: 5,
      text: "Absolutely amazing service! I was able to get ordained and officiate my best friend's wedding in just 3 days. The certificate looks official and was accepted without any issues.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      location: "New York",
      rating: 5,
      text: "Perfect for starting my interfaith ministry. The legal documentation was comprehensive and the support team helped me understand all state requirements.",
      image: "/placeholder.svg"
    },
    {
      name: "Rev. Amanda Martinez",
      location: "Texas",
      rating: 5,
      text: "I've been a minister for 3 years now thanks to OfficiantBot. Have officiated over 50 weddings with zero legal issues. Highly recommended!",
      image: "/placeholder.svg"
    },
    {
      name: "David Wilson",
      location: "Florida",
      rating: 5,
      text: "Fast, reliable, and completely legal. The mobile certificate card is a nice touch for carrying in my wallet. Customer service is top-notch!",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Ministers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from real ministers who trust OfficiantBot for their ordination needs
          </p>
          <div className="flex justify-center items-center mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-lg font-semibold">4.9/5 from 12,847 reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.location}</div>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-gray-300 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
