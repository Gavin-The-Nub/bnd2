export interface SocialChannel {
  name: string;
  platform: "facebook" | "instagram" | "tiktok";
  handle: string;
  url: string;
  description: string;
}

export interface BusinessDetails {
  enterprise: string;
  dotAccreditation: string;
  region: string;
}

export interface ContactChannelInfo {
  header: string;
  tagline: string;
  callout: string;
  motto: string;
  emails: string[];
  phones: {
    label: string;
    number: string;
    tel: string;
  }[];
  socials: SocialChannel[];
  businessDetails: BusinessDetails;
}

export const contactData: ContactChannelInfo = {
  header: "Contact Us",
  tagline: "Get To Know Us!",
  callout: "Check our Social Media to get Information About Us!",
  motto: "LET'S GO AND TRAVEL WITH US",
  emails: [
    "Bndtravelsales@gmail.com",
    "Bndtravels01@gmail.com",
  ],
  phones: [
    {
      label: "Mobile / Smart",
      number: "0970 206 5826",
      tel: "09702065826",
    },
    {
      label: "Landline (Batangas)",
      number: "043 702 8516",
      tel: "0437028516",
    },
  ],
  socials: [
    {
      name: "Facebook",
      platform: "facebook",
      handle: "BND Travel and Tours",
      url: "https://www.facebook.com/drewAdventures",
      description: "Chat with us, explore current tour packages, travel updates, and verified guest reviews.",
    },
    {
      name: "Instagram",
      platform: "instagram",
      handle: "BND Travel and Tours",
      url: "https://www.instagram.com/bndtravelandtours/?utm_source=qr",
      description: "Stunning destination photography, real client travel reels, and visual tour highlights.",
    },
    {
      name: "TikTok",
      platform: "tiktok",
      handle: "Byahe_ni_Drew Travel and Tours",
      url: "https://www.tiktok.com/@byahe_ni_drew",
      description: "Dynamic travel videos, guest tour experiences, resort tours, and travel tips.",
    },
  ],
  businessDetails: {
    enterprise: "BND TRAVEL AND TOURS OPC",
    dotAccreditation: "DOT- R4A- TTA- 03110-2026",
    region: "Region 4A (CALABARZON)",
  },
};
