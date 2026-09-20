export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  quote: string;
  icon: "hotel" | "compass" | "ticket" | "car" | "graduation-cap" | "users" | "shield-check" | "file-check";
}

export interface ContactInfo {
  phone: string;
  phoneTel: string;
  email: string;
  facebook: string;
  facebookUrl: string;
  instagram: string;
  instagramUrl: string;
}

export const servicesContactInfo: ContactInfo = {
  phone: "043 702 8516",
  phoneTel: "0437028516",
  email: "Bndtravels01@gmail.com",
  facebook: "BND Travel and Tours",
  facebookUrl: "https://www.facebook.com/SkwitchiTravels",
  instagram: "byahe_ni_drew_travel_and_tours",
  instagramUrl: "https://www.instagram.com/byahe_ni_drew_travel_and_tours",
};

export const servicesData: ServiceItem[] = [
  {
    id: "hotel-booking",
    index: "01",
    title: "Hotel Booking",
    description: "Book Your Stay and Wake up to Waves and Sunshine.",
    quote: "Looking for a place to stay when you travel. Don't worry We got you!",
    icon: "hotel",
  },
  {
    id: "local-and-international-tour",
    index: "02",
    title: "Local and International Tour",
    description: "We Travel at your own Comfort.",
    quote: "Adventure awaits—go find it.",
    icon: "compass",
  },
  {
    id: "local-and-international-ticketing",
    index: "03",
    title: "Local and International Ticketing",
    description: "Connecting you to your dream destinations",
    quote: "Your next adventure is only a ticket away!",
    icon: "ticket",
  },
  {
    id: "van-rental",
    index: "04",
    title: "Van Rental",
    description: "Your adventure is just a key turn away. Reliable van rental for your next getaway!",
    quote: "Dependable like a friend! Reliable service for your travels",
    icon: "car",
  },
  {
    id: "educational-tour",
    index: "05",
    title: "Educational Tour",
    description: "Every journey is a new chapter.",
    quote: "Adventures are the best way to learn.",
    icon: "graduation-cap",
  },
  {
    id: "team-building",
    index: "06",
    title: "Team Building",
    description: "Teamwork makes the dream work—and the adventure fun!",
    quote: "Building bonds and breaking barriers.",
    icon: "users",
  },
  {
    id: "insurance",
    index: "07",
    title: "Insurance",
    description: "Flight or Passenger Insurance",
    quote: "We got your safety and comfortable journey",
    icon: "shield-check",
  },
  {
    id: "visa-assistance",
    index: "08",
    title: "Visa Assistance",
    description: "Explore your Dream Places and Destinations",
    quote: "Assisting you is our best priority!",
    icon: "file-check",
  },
];
