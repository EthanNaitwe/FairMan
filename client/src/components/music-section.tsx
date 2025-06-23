import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { FaSpotify, FaSoundcloud } from "react-icons/fa";

export default function MusicSection() {
  const tracks = [
    {
      id: "1",
      title: "Mama Africa",
      description: "A heartfelt tribute to the motherland with traditional drums and modern production.",
      duration: "3:42",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
    },
    {
      id: "2",
      title: "Ubuntu",
      description: "The album's title track celebrating community and human connection.",
      duration: "4:15",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
    },
    {
      id: "3",
      title: "Pearl of Africa",
      description: "An uplifting anthem dedicated to Uganda's natural beauty and resilient people.",
      duration: "3:28",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
    },
    {
      id: "4",
      title: "Rhythm of Tomorrow",
      description: "A forward-looking track blending electronic elements with traditional instruments.",
      duration: "4:01",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
    }
  ];

  const handlePlayTrack = (trackId: string) => {
    console.log("Playing track:", trackId);
  };

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-[var(--deep-charcoal)]/50 to-[var(--african-red)]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--rich-green)] to-[var(--royal-purple)]">
              Music & Discography
            </h2>
            <div className="w-24 h-1 bg-[var(--golden-yellow)] mx-auto rounded-full"></div>
            <p className="text-[var(--off-white)]/80 mt-6 max-w-2xl mx-auto">
              Explore Fair Man's musical journey through his latest releases and acclaimed albums
            </p>
          </div>
          
          {/* Featured Album */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-[var(--african-red)]/20 to-[var(--rich-green)]/20 border border-[var(--off-white)]/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
                      alt="Ubuntu Rhythms Album Cover"
                      className="rounded-xl shadow-2xl w-full max-w-sm mx-auto"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl mb-4 text-[var(--golden-yellow)]">Ubuntu Rhythms</h3>
                    <p className="text-[var(--off-white)]/80 mb-6">
                      The latest album that celebrates the philosophy of Ubuntu - "I am because we are" - through a powerful collection of tracks that blend traditional Ugandan sounds with contemporary Afrobeat.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <Badge variant="secondary" className="bg-[var(--african-red)]/30 text-[var(--african-red)]">
                        Afrobeat
                      </Badge>
                      <Badge variant="secondary" className="bg-[var(--rich-green)]/30 text-[var(--rich-green)]">
                        Traditional
                      </Badge>
                      <Badge variant="secondary" className="bg-[var(--royal-purple)]/30 text-[var(--royal-purple)]">
                        World Music
                      </Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-[var(--rich-green)] hover:bg-[var(--rich-green)]/80 text-white">
                        <FaSpotify className="mr-2" />
                        Spotify
                      </Button>
                      <Button 
                        variant="outline"
                        className="bg-[var(--golden-yellow)] hover:bg-[var(--golden-yellow)]/80 text-[var(--deep-charcoal)] border-[var(--golden-yellow)]"
                      >
                        <FaSoundcloud className="mr-2" />
                        SoundCloud
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Track Listings */}
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <Card 
                key={track.id}
                className={`bg-[var(--deep-charcoal)]/60 border border-[var(--off-white)]/10 hover:border-${
                  index % 4 === 0 ? '[var(--african-red)]' : 
                  index % 4 === 1 ? '[var(--golden-yellow)]' : 
                  index % 4 === 2 ? '[var(--rich-green)]' : '[var(--royal-purple)]'
                }/30 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={track.image}
                      alt={`${track.title} artwork`}
                      className="w-16 h-16 rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--off-white)] mb-2">{track.title}</h4>
                      <p className="text-[var(--off-white)]/60 text-sm mb-3">{track.description}</p>
                      <div className="flex items-center space-x-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handlePlayTrack(track.id)}
                          className="text-[var(--african-red)] hover:text-[var(--african-red)]/80 p-0"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                        <span className="text-[var(--off-white)]/40 text-sm">{track.duration}</span>
                        <div className="flex space-x-2 ml-auto">
                          <a href="#" className="text-[var(--rich-green)] hover:text-[var(--rich-green)]/80 text-sm">
                            <FaSpotify />
                          </a>
                          <a href="#" className="text-[var(--golden-yellow)] hover:text-[var(--golden-yellow)]/80 text-sm">
                            <FaSoundcloud />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
