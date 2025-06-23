import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Music, Trophy, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[var(--deep-charcoal)] to-[var(--deep-charcoal)]/90">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-gradient">
              About Fair Man
            </h2>
            <div className="w-24 h-1 bg-[var(--rich-green)] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
                alt="Fair Man portrait"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
              />
              
              <Card className="bg-gradient-to-r from-[var(--african-red)]/20 to-[var(--golden-yellow)]/20 border border-[var(--off-white)]/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-[var(--golden-yellow)]">Quick Facts</h3>
                  <ul className="space-y-2 text-[var(--off-white)]/80">
                    <li className="flex items-center">
                      <MapPin className="text-[var(--african-red)] mr-2 h-4 w-4" />
                      Born in Kampala, Uganda
                    </li>
                    <li className="flex items-center">
                      <Music className="text-[var(--rich-green)] mr-2 h-4 w-4" />
                      Genre: Afrobeat, World Music
                    </li>
                    <li className="flex items-center">
                      <Trophy className="text-[var(--golden-yellow)] mr-2 h-4 w-4" />
                      2x East African Music Award Winner
                    </li>
                    <li className="flex items-center">
                      <Globe className="text-[var(--royal-purple)] mr-2 h-4 w-4" />
                      Tours across 15+ countries
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[var(--african-red)] to-[var(--rich-green)] rounded-full"></div>
                <div className="pl-8">
                  <h3 className="font-semibold text-2xl mb-4 text-[var(--off-white)]">The Journey</h3>
                  <p className="text-[var(--off-white)]/80 leading-relaxed mb-6">
                    Born into a family of traditional musicians in Kampala, Fair Man discovered his calling at age 7 when he first heard his grandfather's adungu echoing through their family compound. This moment sparked a lifelong journey of blending Uganda's rich musical heritage with contemporary global sounds.
                  </p>
                  <p className="text-[var(--off-white)]/80 leading-relaxed mb-6">
                    After studying music production in Nairobi and collaborating with artists across the East African music scene, Fair Man developed his signature sound – a vibrant fusion of traditional Ugandan rhythms, modern Afrobeat, and international influences that speaks to both local communities and global audiences.
                  </p>
                  <p className="text-[var(--off-white)]/80 leading-relaxed">
                    Today, Fair Man continues to push boundaries, using his platform to celebrate African culture while addressing contemporary social issues through his music. His latest album "Ubuntu Rhythms" has garnered international acclaim and positioned him as one of Africa's most promising musical ambassadors.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <Card className="text-center p-4 bg-[var(--african-red)]/20 border-[var(--african-red)]/30">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-[var(--african-red)] mb-1">5</div>
                    <div className="text-sm text-[var(--off-white)]/60">Albums</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-[var(--golden-yellow)]/20 border-[var(--golden-yellow)]/30">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-[var(--golden-yellow)] mb-1">50+</div>
                    <div className="text-sm text-[var(--off-white)]/60">Concerts</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-[var(--rich-green)]/20 border-[var(--rich-green)]/30">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-[var(--rich-green)] mb-1">100K+</div>
                    <div className="text-sm text-[var(--off-white)]/60">Fans</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
