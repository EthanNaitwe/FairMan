import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

export default function TourSection() {
  const tourDates = [
    {
      id: "1",
      month: "DEC",
      day: "15",
      venue: "Kampala Serena Hotel",
      city: "Kampala, Uganda",
      type: "Album Launch",
      status: "VIP Available",
      description: "Special album launch event featuring full live band and traditional dancers",
      isSoldOut: false
    },
    {
      id: "2",
      month: "JAN",
      day: "20",
      venue: "Nairobi National Theatre",
      city: "Nairobi, Kenya",
      type: "Concert",
      status: "Sold Out",
      description: "East African tour stop featuring collaborations with local Kenyan artists",
      isSoldOut: true
    },
    {
      id: "3",
      month: "FEB",
      day: "14",
      venue: "London O2 Academy",
      city: "London, UK",
      type: "International Tour",
      status: "Early Bird",
      description: "First UK performance bringing African rhythms to European audiences",
      isSoldOut: false
    },
    {
      id: "4",
      month: "MAR",
      day: "08",
      venue: "New York SOB's",
      city: "New York, USA",
      type: "Intimate Concert",
      status: "Limited Seats",
      description: "Exclusive intimate performance in NYC's premier world music venue",
      isSoldOut: false
    }
  ];

  const handleBuyTickets = (eventId: string) => {
    console.log("Buy tickets for event:", eventId);
  };

  const handleMoreInfo = (eventId: string) => {
    console.log("More info for event:", eventId);
  };

  const handleSubscribeToUpdates = () => {
    console.log("Subscribe to tour updates");
  };

  return (
    <section id="tour" className="py-20 bg-gradient-to-br from-[var(--african-red)]/10 to-[var(--deep-charcoal)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--african-red)] to-[var(--golden-yellow)]">
              Tour & Events
            </h2>
            <div className="w-24 h-1 bg-[var(--royal-purple)] mx-auto rounded-full"></div>
            <p className="text-[var(--off-white)]/80 mt-6 max-w-2xl mx-auto">
              Join Fair Man on his world tour bringing Ubuntu Rhythms to stages across the globe
            </p>
          </div>
          
          <div className="space-y-6">
            {tourDates.map((event, index) => (
              <Card 
                key={event.id}
                className={`bg-gradient-to-r ${
                  index % 4 === 0 ? 'from-[var(--deep-charcoal)]/80 to-[var(--african-red)]/10' :
                  index % 4 === 1 ? 'from-[var(--deep-charcoal)]/80 to-[var(--rich-green)]/10' :
                  index % 4 === 2 ? 'from-[var(--deep-charcoal)]/80 to-[var(--golden-yellow)]/10' :
                  'from-[var(--deep-charcoal)]/80 to-[var(--royal-purple)]/10'
                } border border-[var(--off-white)]/10 hover:border-[var(--african-red)]/30 transition-all duration-300 group`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div className={`${
                          index % 4 === 0 ? 'bg-[var(--african-red)]' :
                          index % 4 === 1 ? 'bg-[var(--rich-green)]' :
                          index % 4 === 2 ? 'bg-[var(--golden-yellow)]' :
                          'bg-[var(--royal-purple)]'
                        }/20 px-4 py-2 rounded-lg text-center min-w-[80px]`}>
                          <div className={`${
                            index % 4 === 0 ? 'text-[var(--african-red)]' :
                            index % 4 === 1 ? 'text-[var(--rich-green)]' :
                            index % 4 === 2 ? 'text-[var(--golden-yellow)]' :
                            'text-[var(--royal-purple)]'
                          } font-bold text-lg`}>
                            {event.month}
                          </div>
                          <div className="text-[var(--off-white)] font-bold text-2xl">{event.day}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl text-[var(--off-white)] mb-1">{event.venue}</h3>
                          <p className="text-[var(--off-white)]/80 mb-2">{event.city}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className={`${
                              index % 4 === 0 ? 'bg-[var(--rich-green)]/30 text-[var(--rich-green)]' :
                              index % 4 === 1 ? 'bg-[var(--african-red)]/30 text-[var(--african-red)]' :
                              index % 4 === 2 ? 'bg-[var(--royal-purple)]/30 text-[var(--royal-purple)]' :
                              'bg-[var(--african-red)]/30 text-[var(--african-red)]'
                            }`}>
                              {event.type}
                            </Badge>
                            <Badge variant="secondary" className={`${
                              event.isSoldOut ? 'bg-[var(--royal-purple)]/30 text-[var(--royal-purple)]' :
                              'bg-[var(--golden-yellow)]/30 text-[var(--golden-yellow)]'
                            }`}>
                              {event.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-[var(--off-white)]/60 text-sm">{event.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {event.isSoldOut ? (
                        <>
                          <Button 
                            disabled
                            className="bg-[var(--off-white)]/20 text-[var(--off-white)]/60 cursor-not-allowed"
                          >
                            Sold Out
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => handleMoreInfo(event.id)}
                            className="border-[var(--golden-yellow)] text-[var(--golden-yellow)] hover:bg-[var(--golden-yellow)] hover:text-[var(--deep-charcoal)]"
                          >
                            Waitlist
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            onClick={() => handleBuyTickets(event.id)}
                            className="bg-[var(--african-red)] hover:bg-[var(--african-red)]/80 text-white transform group-hover:scale-105 transition-all duration-300"
                          >
                            Buy Tickets
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => handleMoreInfo(event.id)}
                            className="border-[var(--golden-yellow)] text-[var(--golden-yellow)] hover:bg-[var(--golden-yellow)] hover:text-[var(--deep-charcoal)]"
                          >
                            More Info
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[var(--off-white)]/60 mb-6">Want to be the first to know about new tour dates?</p>
            <Button 
              onClick={handleSubscribeToUpdates}
              className="bg-gradient-to-r from-[var(--african-red)] to-[var(--golden-yellow)] hover:from-[var(--african-red)]/80 hover:to-[var(--golden-yellow)]/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Bell className="mr-2 h-4 w-4" />
              Get Tour Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
