export const navItems = [
  { label: "Why Fur Bar", href: "#" },
  { label: "Dog Grooming", href: "#" },
  { label: "Cat Grooming", href: "#" },
  { label: "Photo Gallery", href: "#" },
  { label: "Groomers", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Fur Your Information", href: "#" },
  { label: "Howl at Us", href: "#" },
];

export const locations = [
  {
    id: "newmarket",
    name: "Newmarket",
    phone: "905-953-1313",
    phoneHref: "tel:+19059531313",
    email: "newmarket@furbar.ca",
    instagram: "https://www.instagram.com/furbar.newmarket/",
    address: "17665 Leslie Street, Unit 8",
    city: "Newmarket, ON L3Y 3E3",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=17665+Leslie+Street+Unit+8+Newmarket+ON",
    bookingUrl: "https://booking.moego.pet/ol/book?name=FurBarNewmarket",
    reviewUrl: "https://g.page/r/CQpiJXRG8NM2EAg/review",
    hours: [
      { day: "Monday", time: "9:00 – 7:00" },
      { day: "Tuesday", time: "8:00 – 7:00" },
      { day: "Wednesday", time: "9:00 – 7:00" },
      { day: "Thursday", time: "8:00 – 7:00" },
      { day: "Friday", time: "8:00 – 6:00" },
      { day: "Saturday", time: "8:00 – 4:30" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    id: "north-york",
    name: "North York",
    phone: "416-780-9480",
    phoneHref: "tel:+14167809480",
    email: "northyork@furbar.ca",
    instagram: "https://www.instagram.com/furbar.northyork",
    address: "2825 Dufferin Street",
    city: "North York, ON M6B 3R9",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=2825+Dufferin+Street+North+York+ON",
    bookingUrl: "https://booking.moego.pet/ol/book?name=FurBar",
    reviewUrl: "https://g.page/r/CdNoaSSLAoHmEB0/review",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "9:00 – 5:30" },
      { day: "Wednesday", time: "9:00 – 7:00" },
      { day: "Thursday", time: "9:00 – 7:00" },
      { day: "Friday", time: "8:00 – 4:30" },
      { day: "Saturday", time: "8:00 – 4:30" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    id: "toronto",
    name: "Toronto",
    phone: "416-366-7729",
    phoneHref: "tel:+14163667729",
    email: "toronto@furbar.ca",
    instagram: "https://www.instagram.com/furbar.toronto/",
    address: "844 King Street West",
    city: "Toronto, ON M5V 1P1",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=844+King+Street+West+Toronto+ON",
    bookingUrl: "https://booking.moego.pet/ol/landing?name=FurBarToronto",
    reviewUrl: "https://g.page/r/CX4IejTQEmJwEB0/review",
    hours: [
      { day: "Monday", time: "9:00 – 6:00" },
      { day: "Tuesday", time: "9:00 – 6:00" },
      { day: "Wednesday", time: "9:00 – 6:00" },
      { day: "Thursday", time: "8:00 – 6:00" },
      { day: "Friday", time: "9:00 – 6:00" },
      { day: "Saturday", time: "9:00 – 6:00" },
      { day: "Sunday", time: "9:00 – 6:00" },
    ],
    note: "Open 7 days a week",
  },
] as const;

export const dogServices = [
  {
    name: "Full Groom",
    description:
      "Premium shampoo and conditioner, fluff dry, nail trim, ear cleaning, and a full haircut including face, feet, and sanitary trim.",
  },
  {
    name: "Bath, Brush & Tidy",
    description:
      "A thorough bath and brush with a light face, feet, and sanitary tidy — ideal between full grooms.",
  },
  {
    name: "Bath & De-shedding",
    description:
      "De-shedding shampoo and treatment plus a deep brush to lift the undercoat and keep your home a little less furry.",
  },
  {
    name: "Puppy Grooming",
    description:
      "A gentle first-groom experience with puppy shampoo, brushing, nails, ears, and a light tidy so they leave happy.",
  },
];

export const catServices = [
  {
    name: "Short Hair Full Coat",
    description:
      "Bath, fluff dry, nails, ears, face and eye clean, brush, and de-shedding. Sanitary or paw-pad trims on request.",
  },
  {
    name: "Long Hair Full Coat",
    description:
      "Full bath and de-shed with sanitary shave and paw-pad trim included. Extra tidying for pants, belly, or chest available.",
  },
  {
    name: "Lion Trim",
    description:
      "A very short body cut with boots, a round head or mane, and your choice of full, trimmed, or pom tail.",
  },
  {
    name: "Comb Cut (Teddy Bear)",
    description:
      "A fuller, length-leaving haircut with the same finishing options — a softer look that still stays manageable.",
  },
];

export const whyPoints = [
  {
    title: "Certified for every breed",
    body: "From the tiniest Pomeranian to the biggest doodle, our groomers are trained to handle all coats — and cats, too.",
  },
  {
    title: "A calmer salon",
    body: "We take a gentle, stress-free approach in a clean environment so the visit is easier on your pet and on you.",
  },
  {
    title: "Natural, sensitive-skin care",
    body: "We use natural, hypoallergenic shampoos formulated for dogs and cats — including the ones who itch.",
  },
  {
    title: "Family-owned, GTA-grown",
    body: "Founded by pet parents Noah Aychental and Rachel Dombrowsky to get great grooms without the 4–6 week wait.",
  },
];

export const galleryImages = [
  { src: "/images/gallery/doodle.jpg", alt: "Freshly groomed brown doodle sitting on the table" },
  { src: "/images/gallery/bernese.jpg", alt: "Fluffy black and white dog after a groom" },
  { src: "/images/gallery/shih-tzu.jpg", alt: "Shih Tzu with a tidy round cut and top knot" },
  { src: "/images/gallery/schnauzer.jpg", alt: "Schnauzer in a Fur Bar bandana after grooming" },
  { src: "/images/gallery/golden.jpg", alt: "Smiling golden retriever after a bath and tidy" },
  { src: "/images/gallery/cat.jpg", alt: "Cat after a professional lion-style groom" },
];

export const social = {
  facebook: "http://www.facebook.com/furBarPetGrooming",
};
