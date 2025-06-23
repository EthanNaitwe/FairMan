import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { FaSpotify, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const contactFormSchema = insertContactMessageSchema;
const newsletterFormSchema = insertNewsletterSubscriptionSchema;

export default function ContactSection() {
  const { toast } = useToast();

  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    formState: { errors: contactErrors },
    reset: resetContact,
    setValue: setContactValue,
    watch: watchContact
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const {
    register: registerNewsletter,
    handleSubmit: handleNewsletterSubmit,
    formState: { errors: newsletterErrors },
    reset: resetNewsletter
  } = useForm({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: z.infer<typeof contactFormSchema>) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      resetContact();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const newsletterMutation = useMutation({
    mutationFn: (data: z.infer<typeof newsletterFormSchema>) =>
      apiRequest("POST", "/api/newsletter", data),
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You're now subscribed to Ubuntu Updates.",
      });
      resetNewsletter();
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onContactSubmit = (data: z.infer<typeof contactFormSchema>) => {
    contactMutation.mutate(data);
  };

  const onNewsletterSubmit = (data: z.infer<typeof newsletterFormSchema>) => {
    newsletterMutation.mutate(data);
  };

  const subjectValue = watchContact("subject");

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[var(--deep-charcoal)] to-[var(--african-red)]/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--african-red)] to-[var(--rich-green)]">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[var(--golden-yellow)] mx-auto rounded-full"></div>
            <p className="text-[var(--off-white)]/80 mt-6 max-w-2xl mx-auto">
              Ready to collaborate, book a show, or just want to connect? Let's make music together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[var(--deep-charcoal)]/60 border border-[var(--off-white)]/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="font-semibold text-2xl mb-6 text-[var(--off-white)]">Send a Message</h3>
                <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-[var(--off-white)]/80">First Name</Label>
                      <Input
                        {...registerContact("firstName")}
                        placeholder="Your first name"
                        className="bg-[var(--deep-charcoal)]/80 border border-[var(--off-white)]/20 text-[var(--off-white)] focus:border-[var(--african-red)]"
                      />
                      {contactErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label className="text-[var(--off-white)]/80">Last Name</Label>
                      <Input
                        {...registerContact("lastName")}
                        placeholder="Your last name"
                        className="bg-[var(--deep-charcoal)]/80 border border-[var(--off-white)]/20 text-[var(--off-white)] focus:border-[var(--african-red)]"
                      />
                      {contactErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-[var(--off-white)]/80">Email Address</Label>
                    <Input
                      type="email"
                      {...registerContact("email")}
                      placeholder="your.email@example.com"
                      className="bg-[var(--deep-charcoal)]/80 border border-[var(--off-white)]/20 text-[var(--off-white)] focus:border-[var(--african-red)]"
                    />
                    {contactErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-[var(--off-white)]/80">Subject</Label>
                    <Select value={subjectValue} onValueChange={(value) => setContactValue("subject", value)}>
                      <SelectTrigger className="bg-[var(--deep-charcoal)]/80 border border-[var(--off-white)]/20 text-[var(--off-white)] focus:border-[var(--african-red)]">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Show Booking</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                        <SelectItem value="fan">Fan Message</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {contactErrors.subject && (
                      <p className="text-red-500 text-sm mt-1">{contactErrors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-[var(--off-white)]/80">Message</Label>
                    <Textarea
                      {...registerContact("message")}
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="bg-[var(--deep-charcoal)]/80 border border-[var(--off-white)]/20 text-[var(--off-white)] focus:border-[var(--african-red)] resize-none"
                    />
                    {contactErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{contactErrors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-[var(--african-red)] to-[var(--golden-yellow)] hover:from-[var(--african-red)]/80 hover:to-[var(--golden-yellow)]/80 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-gradient-to-br from-[var(--rich-green)]/20 to-[var(--golden-yellow)]/20 border border-[var(--off-white)]/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 text-[var(--off-white)]">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[var(--african-red)]/20 rounded-full flex items-center justify-center">
                        <Mail className="text-[var(--african-red)] h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[var(--off-white)]/60 text-sm">Email</p>
                        <p className="text-[var(--off-white)] font-medium">booking@fairman.music</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[var(--rich-green)]/20 rounded-full flex items-center justify-center">
                        <Phone className="text-[var(--rich-green)] h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[var(--off-white)]/60 text-sm">Management</p>
                        <p className="text-[var(--off-white)] font-medium">+256 700 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[var(--golden-yellow)]/20 rounded-full flex items-center justify-center">
                        <MapPin className="text-[var(--golden-yellow)] h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[var(--off-white)]/60 text-sm">Based In</p>
                        <p className="text-[var(--off-white)] font-medium">Kampala, Uganda</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <Card className="bg-gradient-to-br from-[var(--royal-purple)]/20 to-[var(--african-red)]/20 border border-[var(--off-white)]/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 text-[var(--off-white)]">Follow the Journey</h3>
                  <p className="text-[var(--off-white)]/80 mb-6">Stay connected and be part of the Ubuntu Rhythms community across all platforms.</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="bg-[var(--rich-green)]/20 hover:bg-[var(--rich-green)]/30 border border-[var(--rich-green)]/30 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 group"
                    >
                      <FaSpotify className="text-[var(--rich-green)] text-3xl mb-3 mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-[var(--off-white)] font-medium">Spotify</p>
                      <p className="text-[var(--off-white)]/60 text-sm">15K Followers</p>
                    </a>
                    
                    <a
                      href="#"
                      className="bg-[var(--golden-yellow)]/20 hover:bg-[var(--golden-yellow)]/30 border border-[var(--golden-yellow)]/30 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 group"
                    >
                      <FaInstagram className="text-[var(--golden-yellow)] text-3xl mb-3 mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-[var(--off-white)] font-medium">Instagram</p>
                      <p className="text-[var(--off-white)]/60 text-sm">25K Followers</p>
                    </a>
                    
                    <a
                      href="#"
                      className="bg-[var(--african-red)]/20 hover:bg-[var(--african-red)]/30 border border-[var(--african-red)]/30 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 group"
                    >
                      <FaTiktok className="text-[var(--african-red)] text-3xl mb-3 mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-[var(--off-white)] font-medium">TikTok</p>
                      <p className="text-[var(--off-white)]/60 text-sm">45K Followers</p>
                    </a>
                    
                    <a
                      href="#"
                      className="bg-[var(--royal-purple)]/20 hover:bg-[var(--royal-purple)]/30 border border-[var(--royal-purple)]/30 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 group"
                    >
                      <FaYoutube className="text-[var(--royal-purple)] text-3xl mb-3 mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-[var(--off-white)] font-medium">YouTube</p>
                      <p className="text-[var(--off-white)]/60 text-sm">12K Subscribers</p>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-[var(--african-red)]/20 to-[var(--rich-green)]/20 border border-[var(--off-white)]/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-[var(--off-white)]">Ubuntu Updates</h3>
                  <p className="text-[var(--off-white)]/80 mb-6">Get exclusive updates, new releases, and tour announcements delivered to your inbox.</p>
                  <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="flex gap-3">
                    <Input
                      type="email"
                      {...registerNewsletter("email")}
                      placeholder="Enter your email"
                      className="flex-1 bg-[var(--deep-charcoal)]/80 border border-[var(--off-white)]/20 text-[var(--off-white)] focus:border-[var(--african-red)]"
                    />
                    <Button
                      type="submit"
                      disabled={newsletterMutation.isPending}
                      className="bg-[var(--african-red)] hover:bg-[var(--african-red)]/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {newsletterMutation.isPending ? "..." : <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </form>
                  {newsletterErrors.email && (
                    <p className="text-red-500 text-sm mt-2">{newsletterErrors.email.message}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
