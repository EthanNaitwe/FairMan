import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Kwame performing with traditional instruments",
      colSpan: "lg:col-span-2"
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=320",
      alt: "Kwame in recording studio",
      colSpan: ""
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=320",
      alt: "Energetic concert crowd",
      colSpan: ""
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=320",
      alt: "Traditional African drums",
      colSpan: ""
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Music video production behind the scenes",
      colSpan: "lg:col-span-2"
    },
    {
      id: "6",
      src: "https://www.endorse256services.co.ug/images/fairman.png",
      alt: "Kwame in traditional African attire",
      colSpan: ""
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Festival performance with large crowd",
      colSpan: "lg:col-span-2"
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=320",
      alt: "Collaboration with African artists",
      colSpan: ""
    }
  ];

  const handleImageClick = (imageId: string) => {
    setSelectedImage(imageId);
  };

  const handleLoadMore = () => {
    console.log("Load more photos");
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[var(--golden-yellow)]/10 to-[var(--deep-charcoal)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--golden-yellow)] to-[var(--rich-green)]">
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-[var(--african-red)] mx-auto rounded-full"></div>
            <p className="text-[var(--off-white)]/80 mt-6 max-w-2xl mx-auto">
              Capturing moments from performances, studio sessions, and cultural celebrations
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer relative overflow-hidden rounded-xl ${image.colSpan}`}
                onClick={() => handleImageClick(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${
                  index % 4 === 0 ? 'bg-[var(--african-red)]' :
                  index % 4 === 1 ? 'bg-[var(--rich-green)]' :
                  index % 4 === 2 ? 'bg-[var(--golden-yellow)]' :
                  'bg-[var(--royal-purple)]'
                }/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-lg">🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-[var(--rich-green)] to-[var(--golden-yellow)] hover:from-[var(--rich-green)]/80 hover:to-[var(--golden-yellow)]/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              📷 Load More Photos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
