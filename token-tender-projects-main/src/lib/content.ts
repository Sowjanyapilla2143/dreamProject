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
  "Found both best friend and soulmate in one person💕 There are so many things I want to tell you, and sometimes words never feel enough. You have become such a special part of my life, and every day with you feels like a gift ra.",

  "I don't know what to say. I just love you so much that sometimes I feel like dachesukovali ninnu, just keep you all to myself. ❤️",

  "How do you notice every little thing about me? Not just the things people can see, but even the things going on in my mind? How do you know when I'm not happy, even when I try my best to act like I'm okay?",

  "How can you give a girl so much priority that sometimes she can't even believe someone could love her this much?",

  "How do you try to fulfil even my smallest wishes without getting irritated, even though I know I irritate you the most? 😁❤️",

  "Maybe you're the only one who knows even my peak sadistic side and still loves me this much. How do you trust me even more than I trust myself?",

  "How do you keep motivating me and making me believe I can do anything, even when I feel like I can't do anything at all?",

  "How do you manage to be there for me in every little moment of my life, no matter what?",

  "How do you make me feel so precious that I never have to doubt how much I mean to you?",

  "And how do you remember and try to fulfil even my smallest wishes, even when we're surrounded by so many people? You still find ways to make me feel special. 🥹❤️",

  "And the biggest thing is, how did you become someone so important in my life that you're almost as important to me as my mom and dad? Sometimes, I feel like I could never choose between you and them if I ever had to. 🫠❤️",

  "Everything feels a little lighter when I'm with you, kukka. ❤️",

  `And if one day our little girl comes to me and asks, "Amma, what kind of boy should I love?" I'd tell her, "When you find a boy like your dad, just go for him, ma. You can leave the rest of the world behind." ❤️🥹`,

  "Because if there's one thing you've taught me, it's how beautiful it feels to be loved by someone who notices you, understands you, trusts you, and chooses you every single day.",

  "Thank you for loving me in ways I never even knew I needed. Thank you for making me feel this loved, this safe, and this special.",

  "I don't think I'll ever be able to explain how much you mean to me, kukka. But I hope you always feel it. ❤️🧿",

  "Regardless of whether I feel stressed, bored, sad, or happy, I simply look forward to the end of the day when I can see you and release all of my burdens. 💫",

  "Thank you for your patience, your laugh, your kindness, for making me feel precious, your cute anger, and for the way you make ordinary days feel magical. I'm so proud of the person you are.",

  "On your birthday, I just want you to know — you are loved, deeply and endlessly. Today and always. Love u raa... Forever thankful to our frnds 🫂",
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
