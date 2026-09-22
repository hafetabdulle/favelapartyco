import type { CategoryId } from './tours';

export type Platform = 'airbnb' | 'viator' | 'getyourguide';

export interface Review {
  name: string;
  location?: string;
  /** The Airbnb "Once in a lifetime" style highlight, when the reviewer left one */
  highlight?: string;
  tour: string;
  date: string;
  text: string;
  platform: Platform;
  category: CategoryId;
}

export const reviews: Review[] = [
  /* ─────────────────────────── NIGHTLIFE ─────────────────────────── */
  {
    name: 'Gerald', location: 'London, United Kingdom', highlight: 'Once in a lifetime',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'September 2026', platform: 'airbnb', category: 'nightlife',
    text: 'Today we went to Favela Party and had a great experience from start to finish. Big respect to Tom, the owner, for creating such a strong experience, but a special mention has to go to Marlon. Marlon was professional, respectful, welcoming and made us feel comfortable throughout the whole experience. You can tell he genuinely cares about the people he looks after and about representing the community in the right way. We really appreciated the energy, the hospitality and the respect shown to us. It was a memorable experience and one we’ll definitely remember from Rio.',
  },
  {
    name: 'Herold', location: 'Durham, NC',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'September 2026', platform: 'airbnb', category: 'nightlife',
    text: 'First let me say if you are not sure about this experience, do not hesitate to book! My wife and two friends from NC booked this bar hop and experience. It was well worth the money and nicely organized! 10 out of 10! We were safe and throughly enjoyed ourselves! Our guides knew the community and gave a great orientation! Intense, Unique and Fun.',
  },
  {
    name: 'Genesis',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'August 2026', platform: 'airbnb', category: 'nightlife',
    text: 'I really enjoyed my experience on the favela tour. We spent a great amount of time at each location, which gave us the opportunity to really learn about the culture, take pictures, and fully enjoy the experience. A special shoutout to Carol and Rodrigo! They were both very knowledgeable about the culture of the favela and took really good care of us throughout the tour. I truly felt like I got an authentic experience, especially when it came to the party atmosphere. Overall, I had an amazing time and would definitely recommend this tour to anyone looking for a fun and authentic cultural experience in Rio.',
  },
  {
    name: 'Ricardo', location: 'Miami, FL', highlight: 'Once in a lifetime',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'August 2026', platform: 'airbnb', category: 'nightlife',
    text: 'Absolutely incredible experience! The favela tour was easily one of the highlights of my time in Rio. From beginning to end, our guide stayed with us, was extremely responsible, and made sure everyone felt comfortable and safe. I never felt uneasy at any point. Getting to experience Rocinha up close, meet people, see the community, and enjoy the nightlife was something completely different from anything else I did in Rio. It was fun, authentic, and honestly a hell of an experience. 10/10!',
  },
  {
    name: 'Alan', highlight: 'Once in a lifetime',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'August 2026', platform: 'airbnb', category: 'nightlife',
    text: 'This was a wonderful experience from start to finish! I felt safe and comfortable throughout the entire experience. The staff was incredibly friendly, pleasant, and accommodating, and the overall energy was amazing. I truly enjoyed every moment and would definitely recommend it to others. I would absolutely do it again!',
  },
  {
    name: 'Cristiana',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'July 2026', platform: 'viator', category: 'nightlife',
    highlight: 'Rio real, divertido y seguro!',
    text: '¡La experiencia fue muy buena! Divertida y segura. Tomi y su equipo saben lo que hacen 🙂👏. ¡Recomiendo para realmente conocer Río!',
  },
  {
    name: 'Luzie', highlight: 'Once in a lifetime',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'March 2026', platform: 'airbnb', category: 'nightlife',
    text: "We had the absolute best time on this tour and Tom was such a great host, he knows his stuff and was such a fun person to hang out with! We immediately knew that it's gonna be a great night and it really was! Loved connecting with all these amazing people and I'd recommend this to everyone! A big obrigada to the guides! <3",
  },
  {
    name: 'Christian', location: 'Los Angeles, CA', highlight: 'Once in a lifetime',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'March 2026', platform: 'airbnb', category: 'nightlife',
    text: 'Amazing! The hosts were very kind and made me feel very welcomed!!! People in RIO really know how to PARTY!!! Highly recommend if you want to meet new people!',
  },
  {
    name: 'Κωνσταντίνα', location: 'Greece',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'April 2026', platform: 'airbnb', category: 'nightlife',
    text: "Guilherme is the best host and one of the happiest, most energetic people I've met in Rio. Without him, our night wouldn't have been nearly as amazing! He made sure everyone was having a great time and introduced us to many people — everyone was incredibly welcoming. I would definitely do it again! Thank you for the wonderful experience Guii ❤️",
  },
  {
    name: 'Karl', location: 'Frankfurt, Germany',
    tour: 'Pub Crawl & Real Favela Party in Rocinha', date: 'April 2026', platform: 'airbnb', category: 'nightlife',
    text: "An incredible experience — something completely new, with great guides. Rarely have I seen someone who radiates such enthusiasm, enjoyment of their work, and warmth as Guilherme! Lidson is also extremely likeable and very knowledgeable; you feel very safe with the two of them. The bars are great, and it's even better on the street!!",
  },
  {
    name: 'Aaron', location: 'Austin, TX', highlight: 'Once in a lifetime',
    tour: 'Botafogo Bar Crawl', date: 'May 2026', platform: 'airbnb', category: 'nightlife',
    text: 'Tom is the man! He took us to 3 great bars I never would have found on my own. The last one was a 3 story upscale bar with dope music to vibe to. He made it easy to connect even tho I showed up a little late. We had an amazing time!',
  },
  {
    name: 'Kayla',
    tour: 'Monday Night Samba at Pedra do Sal', date: 'September 2026', platform: 'airbnb', category: 'nightlife',
    text: 'I highly recommend this experience if you are coming here and you are a solo traveler! The experience was very fun being able to see the live samba band, but then also seeing the transition into different types of music! The people I met on the tour were great and so was Tom! Next time I come back to Rio, I will definitely be booking this again. I felt safe.',
  },
  {
    name: 'Tameka', location: 'Miami, FL', highlight: 'Once in a lifetime',
    tour: 'Monday Night Samba at Pedra do Sal', date: 'September 2026', platform: 'airbnb', category: 'nightlife',
    text: 'This was the best way to bring in my birthday as a solo traveler. I met some nice people and danced the night away. Tom made the best host. Felt super safe!!',
  },
  {
    name: 'Nayon', location: 'London, United Kingdom',
    tour: 'Monday Night Samba at Pedra do Sal', date: 'August 2026', platform: 'airbnb', category: 'nightlife',
    text: 'I had the best night at Pedra! Solo travelling and made some amazing friends from that night thanks to Tom! Will 100% go again',
  },
  {
    name: 'Jovan', location: 'Carlton, Australia', highlight: 'Once in a lifetime',
    tour: 'Inside Rocinha, Rooftop BBQ with Locals', date: 'August 2026', platform: 'airbnb', category: 'nightlife',
    text: 'I had a great night with Gabriel and Sherlock. They are warm hosts, with many surprises for us throughout the night. And the venue is cozy with incredible views. Juicy steak and other meats. So glad I came!',
  },

  /* ────────────────────────── RIO & CULTURE ───────────────────────── */
  {
    name: 'Shane', location: 'London, United Kingdom', highlight: 'Once in a lifetime',
    tour: 'Football Match at Maracanã', date: 'May 2026', platform: 'airbnb', category: 'rio-culture',
    text: 'Attending the Flamengo football match was an absolutely amazing experience and something that anyone visiting Rio should definitely tick off their bucket list. The atmosphere was incredible, the passion of the fans was unforgettable, and it was one of the highlights of my trip. Lidson was amazing from start to finish. We connected instantly, and he made me feel right at home. He was friendly, welcoming, knowledgeable, and made the entire experience seamless and enjoyable. I couldn’t have asked for a better host. A well-deserved 10/10!',
  },
  {
    name: 'Mikayla', location: 'Ladson, SC', highlight: 'Once in a lifetime',
    tour: 'Football Match at Maracanã', date: 'April 2026', platform: 'airbnb', category: 'rio-culture',
    text: 'I had so much fun at the match! I loved how the locals brought so much energy! I would love to see different teams play in the future! 10/10 recommend!',
  },
  {
    name: 'Aleksandar', location: 'Serbia',
    tour: 'Rio Full-Day Tour', date: 'September 2026', platform: 'getyourguide', category: 'rio-culture',
    text: 'I had an amazing experience on this private guided tour of Rio de Janeiro. The whole day was very well organized, starting with a convenient hotel pickup and ending with a drop-off back at the hotel. Visiting Christ the Redeemer was definitely one of the highlights, with incredible views over the city. I also really enjoyed seeing the Escadaria da Bandeira do Brasil and the famous Selarón Steps, which added a lot of color and character to the tour. The Museum of Tomorrow was an interesting and unique experience, while Sugarloaf Mountain offered some of the most spectacular panoramic views of Rio. Having a private guide made the experience even better, as we could learn more about each place and enjoy the tour at a comfortable pace. Highly recommended for anyone visiting Rio for the first time!',
  },

  /* ─────────────────── ADVENTURE & ADRENALINE ────────────────────── */
  {
    name: 'Thayane Pontes', location: 'Brazil',
    tour: 'Doors-Off Helicopter Flight', date: 'September 2026', platform: 'getyourguide', category: 'adventure',
    text: 'A experiência mais incrível que eu já tive na minha vida!!! Esse passeio vale muito a pena, com certeza é o melhor passeio do Rio de Janeiro. Passamos pela orla do Rio, da praia do recreio até Copacabana. Depois seguimos pro tão esperado: o Cristo Redentor 😍 E por fim, ainda tivemos a vista deslumbrante do Pão de Açúcar. Surreal de lindo!!! As vistas são de tirar o fôlego, do começo ao fim!!! E a experiência de voar sem portas é fantástico, só dá mais emoção ainda pro passeio. Amei cada segundo 😍',
  },
  {
    name: 'GetYourGuide traveler', location: 'Netherlands',
    tour: 'Doors-Off Helicopter Flight', date: 'August 2026', platform: 'getyourguide', category: 'adventure',
    text: 'Super gave ervaring',
  },

  /* ───────────────────── OUTDOORS & NATURE ───────────────────────── */
  {
    name: 'Laika', location: 'South Africa',
    tour: 'Sunrise Hike at Morro Dois Irmãos', date: 'September 2026', platform: 'getyourguide', category: 'outdoors',
    text: 'I thoroughly enjoyed this experience with Milla and Rodrigo. They were both attentive and willing to take breaks when needed, always making sure no one was left behind. Extremely lovely guides! Highly recommend.',
  },
  {
    name: 'Aleksandar', location: 'Serbia',
    tour: 'Sunrise Hike at Morro Dois Irmãos', date: 'September 2026', platform: 'getyourguide', category: 'outdoors',
    text: 'The hike was a perfect way to start the day in Rio. The trail was manageable and the views along the way were already beautiful, but reaching the top for sunrise was definitely the highlight. Seeing Rio wake up with the beaches, mountains and coastline below was a memorable experience. The guide was friendly and made the whole experience easy, including the moto-taxi ride to the trail entrance. I also liked that breakfast in Vidigal was included after the hike, as it was a nice way to finish the morning. Overall, it was a great experience and I would recommend it to anyone who enjoys hiking and wants to see a different side of Rio.',
  },

  /* ───────────────────── LOCAL EXPERIENCES ───────────────────────── */
  {
    name: 'Apryl', highlight: 'Once in a lifetime',
    tour: 'Complete Rocinha Favela Tour', date: 'September 2026', platform: 'airbnb', category: 'local',
    text: 'This was an incredible and meaningful experience! Rodrigo was knowledgeable, personable, passionate, and professional. Because he is from the community, he shared his neighborhood and culture with an authenticity that made the tour truly special. His personal connection to the community brought the experience to life, and his stories and firsthand insight gave us a perspective we could never have gotten on our own. He showed just as much interest in getting to know us as we did in learning from him, and we felt safe, welcomed, and almost like old friends. Rodrigo absolutely made the experience. This tour is a must-do in Rio!',
  },
  {
    name: 'Dunya', location: 'Copenhagen, Denmark', highlight: 'Once in a lifetime',
    tour: 'Complete Rocinha Favela Tour', date: 'July 2026', platform: 'airbnb', category: 'local',
    text: 'I booked a favela tour with this company, and it was honestly one of the best experiences of my life. Our guide, Gabriel, was absolutely amazing. He was incredibly kind, knowledgeable, and made sure we always knew what was happening throughout the tour. As a solo female traveler, safety is very important to me, and not once did I feel uncomfortable or unsafe. I learned so much about the favela, its history, culture, and daily life — things I could never have understood just by reading online. This tour exceeded all my expectations. It was authentic, eye-opening, and unforgettable.',
  },
  {
    name: 'Valerie', location: 'Ticino, Switzerland', highlight: 'Once in a lifetime',
    tour: 'Complete Rocinha Favela Tour', date: 'July 2026', platform: 'airbnb', category: 'local',
    text: 'Today’s tour was truly one of the highlights of our trip to Rio, and Gabriel is the reason why. From the very beginning he was punctual, kind, welcoming, and always made us feel safe and comfortable. His knowledge of the favelas, their history, and culture was outstanding. He answered every question with passion and clarity, and his excellent Spanish made communication effortless. By the end of the tour, it felt like we had spent the afternoon with a friend. Thank you for such an unforgettable experience!',
  },
  {
    name: 'Georgia', location: 'Midland, Canada', highlight: 'Once in a lifetime',
    tour: 'Complete Rocinha Favela Tour', date: 'July 2026', platform: 'airbnb', category: 'local',
    text: 'What an awesomely unique experience! Had such an amazing time with the tour guides and group. We explored the ins and outs of Rocinha and learned so much about the culture and history of the favela from Leroy and Marciel. They brought us to different local exhibitions like capoeira (which made me tear up) such a neat experience; we also had a samba lesson which was so cool! It is an absolute recommend!! It’s a once in a lifetime experience and you’ll 100% enjoy every second of it.',
  },
  {
    name: 'Liyan', location: 'Shanghai, China',
    tour: 'Complete Rocinha Favela Tour', date: 'July 2026', platform: 'airbnb', category: 'local',
    text: 'Truly unique experience and learned so much about the history and everything about community. The whole tour was safe and well organized. Will definitely have other tours guided by Tom and his colleagues in favela.',
  },
  {
    name: 'Susana', location: 'Yorba Linda, CA',
    tour: 'Complete Rocinha Favela Tour', date: 'May 2026', platform: 'airbnb', category: 'local',
    text: 'Leonardo lives in the Favela and knows all about it. He’s enthusiastic, a quick learner, and wants to please. By participating in these tours we are helping these young people find a better way to make a living. The tour involves a motorcycle ride which was very exciting and honestly the highlight! Walking through the favela, I never felt any threat. It felt very natural for me. Taking a Favela tour is a unique experience and certainly an opportunity to understand another part of the culture and a way of life in Rio. I highly recommend it.',
  },
  {
    name: 'Mikaela',
    tour: 'Complete Rocinha Favela Tour', date: 'March 2026', platform: 'airbnb', category: 'local',
    text: "We had an amazing experience with Tom's tour company and would highly recommend it to anyone visiting Rio! Both the Favela Tour and the Night Favela Party Tour were unforgettable — we booked the night tour twice because we loved it so much. Guilherme was incredible, so welcoming and fun. Kimberly (day tour) was an absolute angel — warm, welcoming, and incredibly knowledgeable.",
  },
  {
    name: 'Aldana',
    tour: 'Mini Rocinha Tour & Drone Video', date: 'September 2026', platform: 'airbnb', category: 'local',
    text: "The experience of touring the Rocinha favela with Leroy is unmatched. The guides spoke English and Spanish, and they even had a group who spoke French as well who was easily accommodated. Riding the moto taxi up the hills of the favela had my adrenaline pumping like never before! It's a bit scary but so much fun. The views at the top are absolutely breathtaking. After we all met up at the top of the hill, we went to the capoeira show. Our guide took the time to sit and answer our questions, not only about the favela itself but the culture and how everything works, and why the stereotypes are unfair and at times also untrue. This tour made me feel like a part of Brazil, and truly educated and amazed me in so many ways. Saúde, viajantes!",
  },
  {
    name: 'Alessandra',
    highlight: 'More Than a Tour — A Real Connection to Rocinha',
    tour: 'Mini Rocinha Tour & Drone Video', date: 'August 2026', platform: 'viator', category: 'local',
    text: 'This tour is absolutely fantastic! Emma, Leroy, and Mateus really take the time to make sure you have a great experience from start to finish. The drone video was such a wonderful keepsake — such a nice way to remember the day. I also really appreciated how available Leroy was to answer all our questions about the favela, its community, and the local lifestyle. You can tell they genuinely care about giving visitors an authentic and respectful experience. Highly recommend booking this tour!',
  },
  {
    name: 'Claire', location: 'Cade Street, United Kingdom', highlight: 'Once in a lifetime',
    tour: 'Brazilian “Cria” Hairstyle Makeover', date: 'August 2026', platform: 'airbnb', category: 'local',
    text: 'It was excellent. Felt completely safe the whole time. Learnt lots and ended up with a great haircut. Absolutely loved it and would definitely recommend',
  },
];
