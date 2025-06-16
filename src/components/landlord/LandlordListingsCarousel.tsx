
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, Pencil, Archive } from "lucide-react";

// Placeholder thumbnails
const thumbnails = [
  "https://images.unsplash.com/photo-1517022812141-23620dba5c23?fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?fit=crop&w=400&q=80"
];

interface Listing {
  id: number;
  title: string;
  status: "Active" | "Pending" | "Inactive";
  views: number;
  lastUpdated: string;
}
interface Props {
  listings: Listing[];
  loading?: boolean;
  onManage: (id: number) => void;
  onPreview: (id: number) => void;
  onViewAll: () => void;
}

const statusColor: Record<string, string> = {
  "Active": "bg-green-100 text-green-800",
  "Pending": "bg-yellow-100 text-yellow-800",
  "Inactive": "bg-gray-200 text-gray-700"
};

const LandlordListingsCarousel: React.FC<Props> = ({
  listings, loading, onManage, onPreview, onViewAll
}) => (
  <section>
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-lg text-gray-900">Your Active Listings</span>
      <Button variant="link" className="text-primary" onClick={onViewAll}>View All Listings</Button>
    </div>
    <Carousel>
      <CarouselContent className="gap-4">
        {loading 
          ? Array.from({ length: 3 }).map((_, idx) => (
              <CarouselItem key={idx} className="sm:basis-1/2 md:basis-1/3">
                <Card className="rounded-xl overflow-hidden shadow group h-full flex flex-col justify-between">
                  <CardContent className="p-0">
                    <img
                      src={thumbnails[idx % thumbnails.length]}
                      alt="Loading..."
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="bg-muted h-4 w-24 rounded" />
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-200 text-gray-700">
                          —
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">Berlin, Germany</div>
                      <div className="flex items-center gap-4 text-sm mb-2">
                        <span>
                          <Eye className="inline mr-1 w-4 h-4" />
                          -- Views
                        </span>
                        <span>
                          <MessageSquare className="inline mr-1 w-4 h-4" />5 Inquiries
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-auto">
                    <Button variant="outline" className="flex-1">
                      <Pencil className="mr-1 w-4 h-4" /> Manage
                    </Button>
                    <Button variant="ghost" className="flex-1">
                      <Eye className="mr-1 w-4 h-4" /> Preview
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))
          : listings.map((listing, idx) => (
              <CarouselItem key={listing.id} className="sm:basis-1/2 md:basis-1/3">
                <Card className="rounded-xl overflow-hidden shadow group h-full flex flex-col justify-between">
                  <CardContent className="p-0">
                    <img
                      src={thumbnails[idx % thumbnails.length]}
                      alt={listing.title}
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-lg truncate">
                          {listing.title}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${statusColor[listing.status]}`}>
                          {listing.status}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">Berlin, Germany</div>
                      <div className="flex items-center gap-4 text-sm mb-2">
                        <span>
                          <Eye className="inline mr-1 w-4 h-4" />
                          {listing.views} Views
                        </span>
                        <span>
                          <MessageSquare className="inline mr-1 w-4 h-4" />5 Inquiries
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-auto">
                    <Button variant="outline" className="flex-1" onClick={() => onManage(listing.id)}>
                      <Pencil className="mr-1 w-4 h-4" /> Manage
                    </Button>
                    <Button variant="ghost" className="flex-1" onClick={() => onPreview(listing.id)}>
                      <Eye className="mr-1 w-4 h-4" /> Preview
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

export default LandlordListingsCarousel;
