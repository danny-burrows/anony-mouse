export type TrilogyAccent = "gold" | "berry" | "sea";

export interface Trilogy {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  stories: string[];
  ageRange: string;
  textDetails: string;
  audioDetails: string;
  accent: TrilogyAccent;
  kindleUrl: string;
  audibleUrl: string;
}

export const trilogies: Trilogy[] = [
  {
    slug: "moonbeam-mysteries",
    title: "Moonbeam Mysteries",
    eyebrow: "Cozy puzzle trilogy",
    tagline: "Lantern-lit clues, hidden doors, and one very curious mouse.",
    description:
      "A gentle mystery set for readers who love secret passages, soft suspense, and clever little discoveries before bedtime.",
    stories: [
      "The Lantern Under the Stairs",
      "The Secret of Button Bay",
      "Midnight at Crumbly Castle",
    ],
    ageRange: "Ages 5-9",
    textDetails: "3 illustrated stories, about 240 pages",
    audioDetails: "3 narrated adventures, about 2 hr 35 min",
    accent: "gold",
    kindleUrl: "",
    audibleUrl: "",
  },
  {
    slug: "bramble-brook-buddies",
    title: "Bramble Brook Buddies",
    eyebrow: "Friendship adventure trilogy",
    tagline: "Garden rescues, muddy paws, and brave teamwork in every chapter.",
    description:
      "This trilogy leans playful and outdoorsy, with Anony-Mouse and friends solving small problems with kindness, courage, and a bit of squeaky chaos.",
    stories: [
      "The Kite in the Apple Tree",
      "The Picnic Blanket Rescue",
      "A Race to Firefly Field",
    ],
    ageRange: "Ages 4-8",
    textDetails: "3 read-aloud stories, about 210 pages",
    audioDetails: "3 voice-led tales, about 2 hr 10 min",
    accent: "berry",
    kindleUrl: "",
    audibleUrl: "",
  },
  {
    slug: "starlight-harbor",
    title: "Starlight Harbor",
    eyebrow: "Dreamy voyage trilogy",
    tagline: "Tiny boats, moon-tide maps, and big-hearted nighttime wonder.",
    description:
      "A more lyrical collection for families who want the Anony-Mouse world to feel a little bigger, softer, and full of warm imagination.",
    stories: [
      "The Paper Boat Parade",
      "The Whispering Lighthouse",
      "The Bell at Sleepy Pier",
    ],
    ageRange: "Ages 5-10",
    textDetails: "3 chapter stories, about 255 pages",
    audioDetails: "3 bedtime listens, about 2 hr 50 min",
    accent: "sea",
    kindleUrl: "",
    audibleUrl: "",
  },
];
