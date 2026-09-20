export interface GoogleReview {
  customer: string;
  avatar?: string;
  service?: string;
  text: string;
  link: string;
  rating?: number;
}

export const googleReviews: GoogleReview[] = [
  {
    customer: "Rael Rifkind",
    service: "Toronto",
    text: "The best groomer in town! Our Phoebe, who is quite nervous and not usually a fan of grooming, LOVES her groomer, Maggie! She's always so excited to see her and comes home looking and smelling amazing! Seamless booking process and everyone is so friendly and welcoming.",
    link: "https://g.page/r/CX4IejTQEmJwEB0/review",
    rating: 5,
  },
  {
    customer: "Corey Herscu",
    service: "North York",
    text: "I have tried most of the grooming services in the area and FUR BAR consistently over-delivers on service, quality and price. No matter how ratty and disheveled my dog looks (my bad), they take care and are very fair with pricing!",
    link: "https://g.page/r/CdNoaSSLAoHmEB0/review",
    rating: 5,
  },
  {
    customer: "Laura Cox",
    service: "Newmarket",
    text: "Excellent! My bernadoodle has been here twice, once for a puppy cut and now a full groom. They did an amazing job! It’s hard to find a great groomer for a doodle, but he looked so amazing with his teddy bear cut! Highly recommend!",
    link: "https://g.page/r/CQpiJXRG8NM2EAg/review",
    rating: 5,
  },
];
