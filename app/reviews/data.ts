export interface VideoReviewItem {
  id: string;
  title: string;
  tagline: string;
  highlight: string;
  duration: string;
  durationSeconds: number;
  rating: number;
  videoSrc: string;
  tourName: string;
  traveler: string;
}

export const videoReviews: VideoReviewItem[] = [
  {
    id: "rev-1",
    title: "Batanes Island Explorer",
    tagline: "Rolling Hills & Dramatic Coastlines",
    highlight: "Breathtaking landscapes and heartwarming local Ivatan hospitality!",
    duration: "0:20",
    durationSeconds: 20,
    rating: 5,
    videoSrc: "/reviews/AQM0_qeNA_HUr3d8NPJtjQeaFaqKF4FZRrOSe6XePlWcnzjPpdgpf3nadzCAhgePMfTNnLHVbsD0sesQqj4hEeEUrhCf_kW0KoBa72MBlA.mp4",
    tourName: "Batanes Complete Experience",
    traveler: "Verified Guest"
  },
  {
    id: "rev-2",
    title: "Scenic Tour Highlights",
    tagline: "Unforgettable Moments with Family",
    highlight: "Unforgettable memories and an extraordinary itinerary from start to end.",
    duration: "0:26",
    durationSeconds: 26,
    rating: 5,
    videoSrc: "/reviews/AQMRavmBFNB-5iHTKypm78bHiBLhnJJRmm-xoSesyBuxG58pNbXewY7gatamMqpmA7sdti3FasVV5YBB_P4x-Ap7QD7HP6y9rzI1FtZpiA.mp4",
    tourName: "Scenic Northern Wonders",
    traveler: "Verified Guest"
  },
  {
    id: "rev-3",
    title: "Highland & Coast Adventure",
    tagline: "Seamless & Well-Organized",
    highlight: "Seamless tour coordination from start to finish—10/10 recommend to all!",
    duration: "0:18",
    durationSeconds: 18,
    rating: 5,
    videoSrc: "/reviews/AQO8i4L0CmgF-tZkuwlnBqHX2BgHUp0Yo7jETSxEHQD6-BGF36SbtlE30g8Y1_ovOWPehV7mC5LeV_Zxg_y3SAhO_0YfEOXdB-DvZJs1Uw.mp4",
    tourName: "Highland Coastline Tour",
    traveler: "Verified Guest"
  },
  {
    id: "rev-4",
    title: "Memorable Group Getaway",
    tagline: "Stress-Free Travel with Friends",
    highlight: "Super friendly tour coordinators and completely hassle-free group travel.",
    duration: "0:40",
    durationSeconds: 40,
    rating: 5,
    videoSrc: "/reviews/AQP76nGSu_2yup_GWynK5bezJArRmaJI2spBMj8GIXqNisYTwh1Kstp_i8ERViKDeKjUh5Cz2Tt6Bf7vT2hOA0IiOOMZzrn6_vRNEjavew.mp4",
    tourName: "Island Group Getaway",
    traveler: "Verified Guest"
  },
  {
    id: "rev-5",
    title: "Authentic Cultural Journey",
    tagline: "Top Hotels & Caring Tour Guides",
    highlight: "The cleanest hotels, top van service, and magical memories that last a lifetime.",
    duration: "0:21",
    durationSeconds: 21,
    rating: 5,
    videoSrc: "/reviews/AQPBFqnpl3oVEUp8gjgO0J65R5CHoI8UvoF_sRCzig65aqog-WJ1s50PEYLaogaAUru4_i4HPVtfrqKTt04DVlH2LpkNJjlvzM7TGoiyoQ.mp4",
    tourName: "Cultural Heritage Tour",
    traveler: "Verified Guest"
  },
  {
    id: "rev-6",
    title: "Paradise Experience",
    tagline: "Dream Vacation Made Effortless",
    highlight: "Truly a dream vacation made effortless and picturesque by BND Travel & Tours.",
    duration: "0:31",
    durationSeconds: 31,
    rating: 5,
    videoSrc: "/reviews/AQPiLzwcPKb38Nzy77pGZhXq1htQ3hwgjri5KeLJZxIBVuj2siMxsQtm1eSSJ5EJYvtec8zVSQjFY16SXGhrLQiRKPv54EcFa4DH0WTJhQ.mp4",
    tourName: "Exclusive Paradise Tour",
    traveler: "Verified Guest"
  }
];
