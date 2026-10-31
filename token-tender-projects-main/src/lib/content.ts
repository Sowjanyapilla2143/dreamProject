// ✏️ Edit everything personal here.
export type Question = { id: string; question: string; options: string[]; correctAnswer: string; successMessage: string };

export const QUESTIONS: Question[] = [
  { id: "q1", question: "Where did we first meet?", options: ["Kakinada", "A friend's party", "Rajahmundry", "At work"], correctAnswer: "Kakinada", successMessage: "You remember! ❤️" },
  { id: "q2", question: "What nickname do I use for you?", options: ["Baby", "Cutie", "Hero", "Dimple"], correctAnswer: "Dimple", successMessage: "Only for you 💕" },
  { id: "q3", question: "A place we dream of visiting together?", options: ["Paris", "Maldives", "Tirupati", "Switzerland"], correctAnswer: "Tirupati", successMessage: "One day, again together ✨" },
  { id: "q4", question: "Another form of I Love You", options: ["18", "21", "43", "23"], correctAnswer: "21", successMessage: "Always 21 ❤️" },
  { id: "q5", question: "The app which made us to meet?", options: ["Kine Master", "Whatsapp", "Instagram", "Facebook"], correctAnswer: "Kine Master", successMessage: "The Creator & Editor 🌹" },
  { id: "q6", question: "Who loves you the most?", options: ["Me", "Me", "Me", "Obviously me"], correctAnswer: "Obviously me", successMessage: "Correct answer forever ❤️" },
  { id: "q7", question: "The nick name for me which you love the most?", options: ["Jaanu", "Kukka", "Bngrm", "Bujji"], correctAnswer: "Jaanu", successMessage: "Mere Jaan ❤️" },
  { id: "q8", question: "A day to be remembered... the first step of our love?", options: ["Jan 11", "Nov 01", "Nov 23", "Feb 14"], correctAnswer: "Jan 11", successMessage: "A day to celebrate... Anniversary ❤️" },
  { id: "q9", question: "Our dream car?", options: ["BMW", "Benz", "Audi", "Ferrari"], correctAnswer: "BMW", successMessage: "We will ❤️" },
  { id: "q10", question: "Present Our daily go to destination?", options: ["Microsoft", "Value Momentum", "Amazon", "Tank Bund"], correctAnswer: "Microsoft", successMessage: "You got it! ✨" },
  { id: "q11", question: "The place in hyd which remind me of you the most?", options: ["Microsoft", "Peddamma Talli temple", "Amazon", "Entire Hyderabad"], correctAnswer: "Entire Hyderabad", successMessage: "Hyd is Love 💕" },
  { id: "q12", question: "My most fav part of you?", options: ["Eyes", "Dimple", "Shoulder", "Voice"], correctAnswer: "Eyes", successMessage: "Just make me forget everyting ❤️" },
  { id: "q13", question: "My Forever go to place to sleep?", options: ["Your Arms", "Your Shoulder", "Your Lap", "All of the above"], correctAnswer: "All of the above", successMessage: "It's jst you.. you can make me sleep like a baby like amma ❤️" },
  { id: "q14", question: "My fav time with you?", options: ["Romance", "Chat", "Talks", "Teasing each other"], correctAnswer: "Teasing each other", successMessage: "Lucky to have both Best Friend and Soul Mate in one... The One 💕" },
  { id: "q15", question: "Do you know why I Love You?", options: ["You Make me laugh", "You Make me feel like I'm Precious", "You make me cry", "All of the Above"], correctAnswer: "All of the Above", successMessage: "Whatever the emotion, Most of the times it's just bcoz of you and jst for you 💕" },
];
export const QUESTIONS_PER_VISIT = 3;

// Add your photos to /public/photos/ and update src paths.
export const MEMORIES = [
  { src: "/photos/1.jpg", caption: "day feels better when i'm with you 😍", date: "2024" },
  { src: "/photos/2.jpg", caption: "Forever. 🫴", date: "2025" },
  { src: "/photos/3.jpg", caption: "The way you consider my frnds 😽", date: "2026" },
  { src: "/photos/4.jpg", caption: "youuu 😘", date: "Forever" },
  { src: "/photos/5.jpg", caption: "I'm sure you never kill my inner child 🫂", date: "2025" },
  { src: "/photos/6.jpg", caption: "favourite moments with you #Peddamma❤️", date: "2025" },
  { src: "/photos/7.jpg", caption: "My relief 💕", date: "2025" },
  { src: "/photos/8.jpg", caption: "Mr. Handsome 😍", date: "Forever" },
  { src: "/photos/9.jpg", caption: "The day everything felt a little more special #Pondii🙂‍↔️", date: "2026" },

  { src: "/photos/11.jpg", caption: "#My Hero 🫣", date: "2026" },
  { src: "/photos/12.jpg", caption: "#Devotional Partner🥰", date: "Forever" },
  { src: "/photos/13.jpg", caption: "#Fam 💕", date: "2026" },
  { src: "/photos/14.jpg", caption: "Bujjjoooollluuuuuuu 😘😘😘", date: "2025" },
  { src: "/photos/15.jpg", caption: "A day 🫂", date: "2025" },
  { src: "/photos/16.jpg", caption: "And many more memories waiting for us.", date: "Forever ❤️" },
  { src: "/photos/17.jpg", caption: "My Shoulder is always there for you to lean on🫂",  },
  { src: "/photos/18.jpg", caption: "One of my favourite moments with you 💕", date: "2026" },
  { src: "/photos/19.jpg", caption: "The most spcl Celebration😍", date: "2025" },
  { src: "/photos/20.jpg", caption: "#Love ❤️", date: "Forever" },
  { src: "/photos/21.jpg", caption: "#That Smile 🥺🫂.", date: "2025" },
  { src: "/photos/22.jpg", caption: "Our little Laughs 😍", date: "2025" },
  { src: "/photos/23.jpg", caption: "With you every moment #Spcl🫂", date: "2025" },
  { src: "/photos/24.jpg", caption: "#Hyd 💕", date: "Forever" },
  { src: "/photos/25.jpg", caption: "Jst hold it for entire life 🫂🫴", date: "2025" },
  { src: "/photos/26.jpg", caption: "My cravings Partner #Mandi🫣", date: "2025" },
  { src: "/photos/27.jpg", caption: "#My Stress Buster 🫂", date: "2025" },
  { src: "/photos/28.jpg", caption: "And many more memories waiting for us ❤️", date: "Forever" },
  { src: "/photos/29.jpg", caption: "Go to destine #Amma❤️", date: "2025" },
  { src: "/photos/30.jpg", caption: "#Buddy 🙂‍↔️", date: "Forever" },
 
  { src: "/photos/32.jpg", caption: "Waiting for our little ones❤️", date: "2026" },

  { src: "/photos/36.jpg", caption: "Chinni Philo Chinni Sowji 😁🤩", date: "2024" },
 
  { src: "/photos/38.jpg", caption: "#Us 💕", date: "Forever" },
  { src: "/photos/39.jpg", caption: "#My Source of Happieness🫂", date: "2026" },
  { src: "/photos/40.jpg", caption: "And many more memories waiting for us.", date: "Forever" },
  { src: "/photos/41.jpg", caption: "#u guyssss 🫂❤️", date: "2026" },
  { src: "/photos/42.jpg", caption: "Always there to admire me🫣", date: "2026" },
  { src: "/photos/43.jpg", caption: "My Comfort Zone 🫂🥺", date: "2025" },
  { src: "/photos/44.jpg", caption: "#Govinda 🫂🫂🫂🫂🫂💕", date: "Forever" },
 
  { src: "/photos/46.jpeg", caption: "#my bujjuluuuuu 😘", date: "2025" },
  { src: "/photos/47.jpg", caption: "#Bday🤍💫😘", date: "2025" },
  
  { src: "/photos/48.jpg", caption: "The day everything felt a little more special 😍", date: "2026" },
  { src: "/photos/49.jpg", caption: "#Peace 💕", date: "2026" },
  { src: "/photos/50.jpg", caption: "#Dimple 🫣", date: "2025" },
  { src: "/photos/51.jpg", caption: "#That Smile 😍💕", date: "Forever" },
  { src: "/photos/52.jpg", caption: "#Little things🤩", date: "Forever" },
  { src: "/photos/54.jpg", caption: "#Memorable ❤️", date: "2026" },
  { src: "/photos/55.jpg", caption: "#Shopping Partner😁", date: "Forever" },
  { src: "/photos/56.jpg", caption: "😁🤩", date: "2026" },
  { src: "/photos/57.jpg", caption: "#My Love ❤️", date: "2026" },
 
 
  { src: "/photos/60.jpg", caption: "#My entertainment partner 🙂‍↔️😍 nxt movie ki eppudu teesukelthunnav?",},

  { src: "/photos/62.jpg", caption: "#Love 💕", date: "Forever" },
  { src: "/photos/63.jpg", caption: "#Besttttttt frnddddd🙂‍↔️🫂", date: "Forever" },
  { src: "/photos/64.jpg", caption: "#Soulmate 🫂💕", date: "Forever" },

];

export const LETTER = [
  "Found both best friend and soulmate in one person💕 There are so many things I want to tell you, and sometimes words never feel enough. You have become such a special part of my life, and every day with you feels like a gift.",
  "Regardless of whether I feel stressed, bored, sad, or happy, I simply look forward to the end of the day when I can see you and release all of my burdens.💫",
  "Thank you for your patience, your laugh, your kindness, for making me feel precious, your cute anger and for the way you make ordinary days feel magical. I'm so proud of the person you are.",
  "On your birthday, I just want you to know — you are loved, deeply and endlessly. Today and always. Love u raa...Forever thankful to our frnds🫂",
];

export const PROPOSAL = [
  "You make my world softer, brighter, and so much more beautiful.",
  "If I could choose again, I would still want to know you, laugh with you, grow with you, and make beautiful memories with you.",
  "So here I am, asking you — will you keep choosing us, every single day?",
  "Will you be my forever valentine????",
  "Here is to us, and to everything still waiting for us. ❤️",
];

export const SONGS = {
  day: "/music/birthday.mp3",
  memories: "/music/memories.mp3",
  letter: "/music/letter.mp3",
  proposal: "/music/proposal.mp3",
  dream: "/music/dream.mp3",
};
