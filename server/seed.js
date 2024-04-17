import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    genre TEXT NOT NULL,
    imageurl TEXT NOT NULL,
    summary TEXT NOT NULL,
    rating INTEGER NOT NULL
)`);

const insertMessage = db.prepare(`
INSERT INTO movies (name, genre, imageurl, summary, rating) VALUES (?, ?, ? , ?, ?)`);

insertMessage.run(
  "Road House",
  "Action",
  "https://assets-prd.ignimgs.com/2024/03/09/rdhs-2024-digitalonesheet-faceoff-1944x2880-pre-nodimple-pv-final-en-us-cps-1710014260812.jpg",
  "Road House is a 2024 American action film directed by Doug Liman, written by Anthony Bagarozzi and Chuck Mondry and produced by Joel Silver. It is a remake of the 1989 film of the same name and stars Jake Gyllenhaal, Daniela Melchior, Conor McGregor (in his feature film debut), J. D. Pardo, Arturo Castro and Billy Magnussen.",
  "60%"
);

insertMessage.run(
  "Lift",
  "Comedy",
  "https://www.talonmarks.com/wp-content/uploads/2024/01/lift-movie-poster.jpeg",
  "Follows a master thief and his Interpol Agent ex-girlfriend who team up to steal $500 million in gold bullion being transported on an A380 passenger flight.",
  "29%"
);

insertMessage.run(
  "Captain Miller",
  "Action",
  "https://upload.wikimedia.org/wikipedia/en/1/1c/Captain_Miller_film_poster.jpg",
  "A renegade Captain and his unconventional outlaws execute daring heists in the 1930s and 1940s. Miller must decide whether to continue running or confront the challenges head-on.",
  "89%"
);

insertMessage.run(
  "Damsel",
  "Fantasy",
  "https://www.artofvfx.com/wp-content/uploads/2024/02/GIFxNWEXUAAwRGt-jpg.webp",
  "A young woman agrees to marry a handsome prince -- only to discover it was all a trap. She is thrown into a cave with a fire-breathing dragon and must rely solely on her wits and will to survive.",
  "56%"
);

insertMessage.run(
  "Dune: Part Two",
  "Sci-fi",
  "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
  "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
  "93%"
);

insertMessage.run(
  "Godzilla x Kong: The New Empire",
  "Sci-fi",
  "https://horrorcultfilms.b-cdn.net/wp-content/uploads/2024/04/godzilla-x-kong-e1712015180332.jpg",
  "This latest entry in the Monsterverse franchise follows up the explosive showdown of Godzilla vs. Kong with an all-new cinematic adventure, pitting the almighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence -- and our own. The epic new film will delve further into the histories of these Titans, their origins, and the mysteries of Skull Island and beyond, while uncovering the mythic battle that helped forge these extraordinary beings and tied them to humankind forever.",
  "54%"
);

insertMessage.run(
  "LaRoy, Texas",
  "Comedy",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRtR5BrfdQV_PJ63qemCTaEnmHAvpIBi4MUd7QRVHiQ&s",
  "Broke and depressed, Ray (John Magaro) is mistaken for a dangerous hitman and given an envelope of cash. Along with his P.I. friend Skip (Steve Zahn), he must escape the actual hitman to make it out of LaRoy alive. ",
  "100%"
);

insertMessage.run(
  "Monkey Man",
  "Action",
  "https://www.tvguide.com/a/img/catalog/provider/1/2/1-14178007973.jpg",
  "A young man ekes out a meager living in an underground fight club where, night after night, wearing a gorilla mask, he's beaten bloody by more popular fighters for cash. After years of suppressed rage, he discovers a way to infiltrate the enclave of the city's sinister elite. As his childhood trauma boils over, his mysteriously scarred hands unleash an explosive campaign of retribution to settle the score with the men who took everything from him.",
  "89%"
);

insertMessage.run(
  "Kung Fu Panda 4",
  "Kids & family",
  "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
  "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places.",
  "72%"
);

insertMessage.run(
  "The Monk And The Gun",
  "Drama",
  "https://upload.wikimedia.org/wikipedia/en/f/f7/The_Monk_and_the_Gun_poster.jpg",
  "An American travels to Bhutan in search of treasure and crosses paths with a young monk wandering the serene mountains and instructed by his teacher to make things right.",
  "92%"
);

insertMessage.run(
  "Ghostbusters: Frozen Empire",
  "Fantasy",
  "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_(2024)_poster.jpg",
  "In Ghostbusters: Frozen Empire, the Spengler family returns to where it all started -- the iconic New York City firehouse -- to team up with the original Ghostbusters, who've developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
  "43%"
);

insertMessage.run(
  "Scoop",
  "Biographical Drama",
  "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/405/211/thumb_EF939486-B29E-4059-865E-CC5FCE1E1B56.jpg",
  "Inspired by real events, SCOOP is the inside account of the tenacious journalism that landed an earthshattering interview -- Prince Andrew's infamous BBC Newsnight appearance. From the tension of producer Sam McAlister's high stakes negotiations with Buckingham Palace, all the way to Emily Maitlis' jaw-dropping, forensic showdown with the Prince, SCOOP takes us inside the story, with the women who would stop at nothing to get it. To get an interview this big, you have to be bold.",
  "78%"
);

insertMessage.run(
  "Civil War",
  "Action",
  "https://m.media-amazon.com/images/M/MV5BYTYyODhlODktYjUzNC00NjUyLWI1MzYtNmI0MTY3YTUxYjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
  "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
  "83%"
);

insertMessage.run(
  "One Life",
  "Biographical Drama",
  "https://m.media-amazon.com/images/M/MV5BNGU1OTFhMmItNDcyMS00ODEyLWE4NmQtMjFhZjExNmU1OTQ4XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_QL75_UX190_CR0,0,190,281_.jpg",
  "Sir Nicholas 'Nicky' Winton, a young London broker who, in the months leading up to World War II, rescued over 600 children from Nazi-occupied Czechoslovakia.",
  "90%"
);

insertMessage.run(
  "Poor Things",
  "Black Comedy",
  "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
  "From filmmaker Yorgos Lanthimos and producer Emma Stone comes the incredible tale and fantastical evolution of Bella Baxter (Stone), a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter (Willem Dafoe). Under Baxter's protection, Bella is eager to learn. Hungry for the worldliness she is lacking, Bella runs off with Duncan Wedderburn (Mark Ruffalo), a slick and debauched lawyer, on a whirlwind adventure across the continents. Free from the prejudices of her times, Bella grows steadfast in her purpose to stand for equality and liberation.",
  "92%"
);

insertMessage.run(
  "Spaceman",
  "Sci-fi",
  "https://m.media-amazon.com/images/M/MV5BMGMyNDg2ZjItMzk5MC00NzJmLTlmMDgtMmFjNjFmODg5ZTY5XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
  "Six months into a solo mission, a lonely astronaut confronts the cracks in his marriage with help from a mysterious creature he discovers on his ship.",
  "50%"
);
