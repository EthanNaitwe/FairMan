import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function VideosSection() {
  const videos = [
    {
      id: "1",
      title: "Mama Africa",
      description: "Official music video featuring stunning landscapes of Uganda",
      views: "2.1M views",
      date: "3 months ago",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&h=270"
    },
    {
      id: "2",
      title: "Pearl of Africa (Live)",
      description: "Live performance from the East African Music Festival",
      views: "850K views",
      date: "6 months ago",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&h=270"
    },
    {
      id: "3",
      title: "Behind the Beats",
      description: "Exclusive look at the making of \"Ubuntu Rhythms\"",
      views: "420K views",
      date: "1 month ago",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&h=270"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-[var(--royal-purple)]/10 to-[var(--deep-charcoal)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--royal-purple)] to-[var(--african-red)]">
              Music Videos
            </h2>
            <div className="w-24 h-1 bg-[var(--rich-green)] mx-auto rounded-full"></div>
            <p className="text-[var(--off-white)]/80 mt-6 max-w-2xl mx-auto">
              Experience Kwame's visual storytelling through his captivating music videos
            </p>
          </div>
          
          {/* Featured Video */}
          <div className="mb-12">
            <Card className="relative aspect-video bg-[var(--deep-charcoal)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--off-white)]/10">
              <CardContent className="p-0 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--african-red)]/20 to-[var(--rich-green)]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[var(--african-red)]/80 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-[var(--african-red)] transition-colors cursor-pointer">
                      <Play className="text-white h-8 w-8 ml-1" />
                    </div>
                    <h3 className="font-semibold text-xl text-[var(--off-white)] mb-2">Ubuntu - Official Music Video</h3>
                    <p className="text-[var(--off-white)]/60">Watch the powerful visual story behind the album's title track</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card 
                key={video.id}
                className="bg-[var(--deep-charcoal)]/60 rounded-xl overflow-hidden border border-[var(--off-white)]/10 hover:border-[var(--golden-yellow)]/30 transition-all duration-300 group"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[var(--golden-yellow)]/20 to-[var(--african-red)]/20">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--deep-charcoal)]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[var(--african-red)]/90 rounded-full flex items-center justify-center hover:bg-[var(--african-red)] transition-colors cursor-pointer">
                      <Play className="text-white h-6 w-6 ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[var(--off-white)] mb-2">{video.title}</h4>
                  <p className="text-[var(--off-white)]/60 text-sm mb-3">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-[var(--off-white)]/40">
                    <span>{video.views}</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-[var(--royal-purple)] hover:bg-[var(--royal-purple)]/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <FaYoutube className="mr-2 h-5 w-5" />
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
