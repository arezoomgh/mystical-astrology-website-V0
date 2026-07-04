export type ZodiacSign = {
  slug: string
  name: string
  symbol: string
  dates: string
  element: "Fire" | "Earth" | "Air" | "Water"
  quality: string
  ruling: string
  traits: string[]
  about: string
  horoscope: string
  love: string
  career: string
  wellness: string
  lucky: { number: string; color: string; day: string }
}

export const zodiacSigns: ZodiacSign[] = [
  {
    slug: "aries",
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 – Apr 19",
    element: "Fire",
    quality: "Cardinal",
    ruling: "Mars",
    traits: ["Courageous", "Passionate", "Driven", "Spontaneous"],
    about:
      "As the first sign of the zodiac, Aries carries the spark of new beginnings. Ruled by Mars, you move through life with fearless momentum, leading where others hesitate.",
    horoscope:
      "The cosmos rewards your boldness today. A door you thought closed reveals a quiet opening — walk through it with the confidence that has always defined you. Trust the fire within before you seek approval without.",
    love:
      "Passion runs high, but tenderness will carry you further than intensity. Let someone see the softer constellation beneath your armor.",
    career:
      "Your initiative catches the eye of those who matter. Pitch the idea you have been holding back — the timing aligns in your favor.",
    wellness:
      "Channel restless energy into movement. A brisk walk under open sky settles the mind more than any screen.",
    lucky: { number: "9", color: "Crimson", day: "Tuesday" },
  },
  {
    slug: "taurus",
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 – May 20",
    element: "Earth",
    quality: "Fixed",
    ruling: "Venus",
    traits: ["Grounded", "Loyal", "Sensual", "Patient"],
    about:
      "Ruled by Venus, Taurus finds beauty in the tangible and comfort in the steady. You build slowly and permanently, cultivating a life rich in loyalty and simple luxury.",
    horoscope:
      "Stability is your quiet superpower today. While others chase the fleeting, you tend to what lasts. A financial or emotional seed you planted begins to show green — nurture it patiently.",
    love:
      "Devotion deepens. A small, sincere gesture means more than grand words. Let comfort become intimacy.",
    career:
      "Steady effort pays dividends. Resist the urge to rush; your methodical pace is exactly what a delicate project needs.",
    wellness:
      "Ground yourself through the senses — good food, soft textures, time in a garden. Your body craves the earth.",
    lucky: { number: "6", color: "Emerald", day: "Friday" },
  },
  {
    slug: "gemini",
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 – Jun 20",
    element: "Air",
    quality: "Mutable",
    ruling: "Mercury",
    traits: ["Curious", "Witty", "Adaptable", "Expressive"],
    about:
      "Ruled by Mercury, Gemini is the zodiac's messenger — quick, curious, and endlessly communicative. You hold two worlds at once, weaving ideas into conversation like starlight into thread.",
    horoscope:
      "Words are your currency today, and the exchange rate is high. A conversation opens an unexpected path. Say what you mean and the universe conspires to carry it far.",
    love:
      "Mental connection ignites the heart. Someone is drawn to the way your mind moves — let curiosity lead the dance.",
    career:
      "Your versatility shines. Juggling multiple threads feels natural now; just remember to finish what sparks the most joy.",
    wellness:
      "Quiet the mental chatter with breathwork. Even five still minutes restores your restless intellect.",
    lucky: { number: "5", color: "Golden Yellow", day: "Wednesday" },
  },
  {
    slug: "cancer",
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 – Jul 22",
    element: "Water",
    quality: "Cardinal",
    ruling: "The Moon",
    traits: ["Nurturing", "Intuitive", "Protective", "Deep"],
    about:
      "Ruled by the Moon, Cancer feels the tides of emotion others cannot see. Your intuition is a compass, and your care creates the safe harbors where love takes root.",
    horoscope:
      "The Moon illuminates your inner world today. Trust the feeling you can't quite explain — it knows something logic hasn't caught up to. Home, in every sense, is where your power gathers.",
    love:
      "Emotional safety draws you closer. Open the door to vulnerability and watch tenderness bloom in return.",
    career:
      "Your empathy is an asset, not a weakness. Reading the room today gives you an edge others lack.",
    wellness:
      "Honor your need for retreat. A slow evening by water — bath, sea, or rain — replenishes your spirit.",
    lucky: { number: "2", color: "Silver", day: "Monday" },
  },
  {
    slug: "leo",
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 – Aug 22",
    element: "Fire",
    quality: "Fixed",
    ruling: "The Sun",
    traits: ["Radiant", "Generous", "Bold", "Warm"],
    about:
      "Ruled by the Sun, Leo shines with a warmth that draws others near. You lead with heart and generosity, born to be seen and to make others feel luminous in your glow.",
    horoscope:
      "The spotlight finds you today, and you were made for it. Your natural warmth opens hearts and doors alike. Lead with generosity and the recognition you crave arrives on its own.",
    love:
      "Romance turns theatrical in the best way. Let your affection be lavish — your heart is happiest when it gives freely.",
    career:
      "Your confidence inspires a team. Step forward to lead; others are quietly waiting for your signal.",
    wellness:
      "Feed your creative fire. An act of self-expression today does more for your spirit than any rest.",
    lucky: { number: "1", color: "Gold", day: "Sunday" },
  },
  {
    slug: "virgo",
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 – Sep 22",
    element: "Earth",
    quality: "Mutable",
    ruling: "Mercury",
    traits: ["Precise", "Devoted", "Analytical", "Humble"],
    about:
      "Ruled by Mercury, Virgo perfects the world through quiet devotion to detail. You find the sacred in the practical, turning care and precision into a kind of everyday magic.",
    horoscope:
      "Clarity favors you today. The small detail others overlook becomes the key you hold. Trust your discernment — refining rather than reinventing brings the breakthrough.",
    love:
      "Love is in the thoughtful gesture. Show your affection through acts of care and let someone appreciate your devotion.",
    career:
      "Your eye for detail solves a lingering problem. Organize the chaos and you become indispensable.",
    wellness:
      "Release the need for perfection. A gentle routine soothes you more than another item checked off.",
    lucky: { number: "5", color: "Sage Green", day: "Wednesday" },
  },
  {
    slug: "libra",
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 – Oct 22",
    element: "Air",
    quality: "Cardinal",
    ruling: "Venus",
    traits: ["Harmonious", "Diplomatic", "Charming", "Fair"],
    about:
      "Ruled by Venus, Libra seeks the beauty of balance. You are the diplomat of the zodiac, weighing every side with grace and creating harmony wherever discord once lived.",
    horoscope:
      "The scales tip toward peace today. A relationship or decision that felt uneven finds its equilibrium. Lead with your natural grace and beauty follows into every corner.",
    love:
      "Partnership is highlighted. A shared moment of beauty deepens a bond — surround yourself with what feels harmonious.",
    career:
      "Your diplomacy resolves what force could not. Mediate today and you earn lasting trust.",
    wellness:
      "Restore balance through beauty. Art, music, or a tidy space realigns your inner scales.",
    lucky: { number: "7", color: "Rose", day: "Friday" },
  },
  {
    slug: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 – Nov 21",
    element: "Water",
    quality: "Fixed",
    ruling: "Pluto & Mars",
    traits: ["Intense", "Magnetic", "Transformative", "Loyal"],
    about:
      "Ruled by Pluto and Mars, Scorpio dives where others fear to tread. You are the alchemist of the zodiac, transforming shadow into strength and secrecy into profound insight.",
    horoscope:
      "Transformation stirs beneath the surface today. What ends is making room for something more powerful. Trust your instincts — you see the truth others try to hide.",
    love:
      "Intimacy intensifies. Let your guard down with someone worthy and the connection becomes electric and rare.",
    career:
      "Your focus is laser-sharp. A hidden opportunity reveals itself to those willing to look beneath the obvious.",
    wellness:
      "Release what no longer serves you. Emotional cleansing today frees energy you didn't know you were holding.",
    lucky: { number: "8", color: "Deep Maroon", day: "Tuesday" },
  },
  {
    slug: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 – Dec 21",
    element: "Fire",
    quality: "Mutable",
    ruling: "Jupiter",
    traits: ["Adventurous", "Optimistic", "Honest", "Free"],
    about:
      "Ruled by Jupiter, Sagittarius is the eternal seeker. You chase horizons of meaning and adventure, guided by an optimism that turns every journey into a story worth telling.",
    horoscope:
      "The universe expands your horizon today. An opportunity to learn, travel, or grow appears — say yes. Your optimism is not naive; it is the map that leads to fortune.",
    love:
      "Adventure binds hearts now. Share a new experience with someone and watch the connection catch fire.",
    career:
      "Big-picture thinking pays off. Pitch the visionary idea; today favors the bold and the far-sighted.",
    wellness:
      "Feed your need for freedom. Time outdoors or a change of scenery lifts your spirit instantly.",
    lucky: { number: "3", color: "Royal Purple", day: "Thursday" },
  },
  {
    slug: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 – Jan 19",
    element: "Earth",
    quality: "Cardinal",
    ruling: "Saturn",
    traits: ["Ambitious", "Disciplined", "Wise", "Resilient"],
    about:
      "Ruled by Saturn, Capricorn climbs steadily toward mastery. You are the mountain-goat of the zodiac, patient and enduring, building legacies that outlast the fleeting trends of the moment.",
    horoscope:
      "Your discipline compounds today. The long game you've been playing shows its first true reward. Keep climbing — the summit is closer than the clouds suggest.",
    love:
      "Commitment feels grounding. Show up consistently and a relationship builds on foundations that hold.",
    career:
      "Authority recognizes your dedication. A responsibility offered today is a sign of well-earned trust.",
    wellness:
      "Rest is productive too. Grant yourself permission to pause — even mountains are shaped by stillness.",
    lucky: { number: "4", color: "Charcoal", day: "Saturday" },
  },
  {
    slug: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 – Feb 18",
    element: "Air",
    quality: "Fixed",
    ruling: "Uranus & Saturn",
    traits: ["Visionary", "Independent", "Humane", "Original"],
    about:
      "Ruled by Uranus, Aquarius sees the future before it arrives. You are the visionary of the zodiac, marching to an original rhythm and dreaming of a world made kinder and freer.",
    horoscope:
      "Innovation flows through you today. An unconventional idea proves to be exactly what the moment needs. Trust your originality — the world is catching up to your vision.",
    love:
      "Friendship is the soil of love now. A connection built on shared ideals grows into something unexpectedly deep.",
    career:
      "Your fresh perspective breaks a stalemate. Propose the idea others call impossible; today it lands.",
    wellness:
      "Connect with community. Belonging to something larger recharges your independent spirit.",
    lucky: { number: "11", color: "Electric Blue", day: "Saturday" },
  },
  {
    slug: "pisces",
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 – Mar 20",
    element: "Water",
    quality: "Mutable",
    ruling: "Neptune & Jupiter",
    traits: ["Dreamy", "Compassionate", "Artistic", "Intuitive"],
    about:
      "Ruled by Neptune, Pisces swims between worlds — the seen and the imagined. You are the dreamer and empath of the zodiac, channeling boundless compassion into art, spirit, and love.",
    horoscope:
      "The veil is thin today, and your intuition runs deep. A dream or quiet feeling carries a message worth heeding. Let compassion guide you and beauty finds its way to you.",
    love:
      "Soulful connection is favored. Let yourself be swept into tenderness — your empathy is a gift someone treasures.",
    career:
      "Creativity solves what logic could not. Trust your imagination to find the elegant answer today.",
    wellness:
      "Protect your energy. Time alone with music or water helps you release what you've absorbed from others.",
    lucky: { number: "7", color: "Sea Green", day: "Thursday" },
  },
]

export function getSign(slug: string): ZodiacSign | undefined {
  return zodiacSigns.find((s) => s.slug === slug)
}
