import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { FactType } from "../src/FactType";

const seedDatabase = async (facts: FactType[]): Promise<void> => {
  await prisma.fact.deleteMany({});

  // Make facts
  await prisma.fact.createMany({ data: facts });
};

const michiganFacts = [
  { "content": "Michigan is known as the Great Lakes State.", "category": "General" },
  { "content": "Michigan consists of two peninsulas: the Upper and Lower.", "category": "General" },
  { "content": "Detroit, Michigan is known as the 'Motor City' due to its automobile heritage.", "category": "History" },
  { "content": "The Mackinac Bridge connects Michigan's Upper and Lower Peninsulas.", "category": "General" },
  { "content": "Michigan has the longest freshwater coastline in the US.", "category": "General" },
  { "content": "Michigan has over 11,000 lakes and 36,000 miles of streams.", "category": "General" },
  { "content": "Detroit is home to Motown Records, where artists like Stevie Wonder and The Supremes began.", "category": "Arts & Culture" },
  { "content": "The University of Michigan was founded in 1817 in Detroit before moving to Ann Arbor in 1837.", "category": "History" },
  { "content": "Michigan became the 26th state of the US on January 26, 1837.", "category": "History" },
  { "content": "The cereal capital of the world, Battle Creek, is located in Michigan.", "category": "History" },
  { "content": "Gerald Ford, the 38th US president, hailed from Grand Rapids, Michigan.", "category": "History" },
  { "content": "The Michigan State University Spartans and University of Michigan Wolverines have a longstanding football rivalry.", "category": "Sports" },
  { "content": "Isle Royale National Park is a remote island cluster in Lake Superior and is part of Michigan.", "category": "General" },
  { "content": "The Detroit Zoo was the first zoo in the US to feature open natural habitats.", "category": "History" },
  { "content": "The name 'Michigan' is derived from the Ojibwa word 'mishigamaa', meaning 'large water' or 'large lake'.", "category": "History" },
  { "content": "The Petoskey stone is Michigan's state stone and is fossilized ancient coral.", "category": "History" },
  { "content": "Michigan leads the US in tart cherry production.", "category": "General" },
  { "content": "The world’s largest limestone quarry is near Rogers City, Michigan.", "category": "General" },
  { "content": "In 1879, Detroit became the first city to have a phone number prefix.", "category": "History" },
  { "content": "Michigan’s state motto is 'Si quaeris peninsulam amoenam circumspice', meaning 'If you seek a pleasant peninsula, look about you'.", "category": "History" },
  { "content": "Vernors Ginger Ale, the country's oldest ginger ale brand, originated in Detroit.", "category": "History" },
  { "content": "The world's largest Christmas store, Bronner's CHRISTmas Wonderland, is located in Frankenmuth, Michigan.", "category": "Arts & Culture" },
  { "content": "Holland, Michigan, holds an annual Tulip Time Festival celebrating its Dutch heritage.", "category": "Arts & Culture" },
  { "content": "The Detroit-Windsor Tunnel is the first traffic tunnel between two nations (U.S. and Canada).", "category": "History" },
  { "content": "Sleeping Bear Dunes National Lakeshore boasts massive sand dunes on the shores of Lake Michigan.", "category": "General" },
  { "content": "Michigan's state wildflower, the Dwarf Lake Iris, can be found only in Michigan.", "category": "General" },
  { "content": "Greenfield Village in Dearborn is one of the largest outdoor museums in the US.", "category": "Arts & Culture" },
  { "content": "The Kellogg Company, world-famous for its cereals, was founded in Battle Creek, Michigan.", "category": "History" },
  { "content": "Michigan's highest point is Mount Arvon at 1,979 feet above sea level.", "category": "General" },
  { "content": "The Detroit Institute of Arts has one of the top six art collections in the United States.", "category": "Arts & Culture" },
  { "content": "The state tree of Michigan is the Eastern White Pine.", "category": "General" },
  { "content": "The first soda pop ever made in the U.S., 'Dr. Pepper', was created in Michigan.", "category": "History" },
  { "content": "Michigan's official mammal is the White-tailed Deer.", "category": "General" },
  { "content": "Colon, Michigan is known as the 'Magic Capital of the World'.", "category": "General" },
  { "content": "Michigan is home to the largest registered Holstein dairy herd in the U.S.", "category": "General" },
  { "content": "Detroit is the birthplace of Techno music.", "category": "Arts & Culture" },
  { "content": "The Detroit Lions, Detroit Red Wings and Detroit Tigers are among Michigan's beloved sports teams.", "category": "Sports" },
  { "content": "The Kalamazoo Mall, opened in 1959, was the nation’s first outdoor pedestrian shopping mall.", "category": "History" },
  { "content": "Belle Isle Park in Detroit is the largest city-owned island park in the U.S.", "category": "General" },
  { "content": "Michigan's Mackinac Bridge is the third-longest suspension bridge in the world.", "category": "General" },
  { "content": "Michigan's state reptile is the Painted Turtle.", "category": "General" },
  { "content": `Traverse City, Michigan, is often called the "Cherry Capital of the World".`, "category": "General" },
  { "content": "In 1929, Michigan's state police established the first state police radio system in the world.", "category": "History" },
  { "content": "The first underground railway tunnel between two nations was completed between Detroit and Windsor, Canada in 1910.", "category": "History" },
  { "content": "The world’s first international wildlife refuge was established in 1943 between Michigan and Ontario.", "category": "General" },
  { "content": "Sault Ste. Marie is the oldest town in Michigan, established in 1668.", "category": "History" },
  { "content": "Michigan is the only place in the world with a floating post office, the J.W. Westcott II.", "category": "General" },
  { "content": "The state bird of Michigan is the American Robin.", "category": "General" },
  { "content": "Alpena is the 'Cement Capital' due to its vast limestone quarries.", "category": "General" },
  { "content": "The Ford Model T, the first car for millions of Americans, was manucontentured in Detroit.", "category": "History" },
  { "content": "Binder Park Zoo in Battle Creek has one of the largest African exhibits in the U.S.", "category": "General" },
  { "content": "Michigan is home to the National Trout Memorial in Kalkaska.", "category": "General" },
  { "content": "The first established European settlement in the Midwest was in Michigan at Sault Ste. Marie in 1668.", "category": "General" },
  { "content": "Michigan's state gem, Chlorastrolite (also known as the Isle Royale Greenstone), is found mainly on Isle Royale.", "category": "General" },
  { "content": "The nation's largest ski jump is located in Ironwood, Michigan.", "category": "General" },
  { "content": "The Great Lakes account for about 84% of North America's fresh surface water – and Michigan borders four of those five lakes.", "category": "General" },
  { "content": "Faygo, a popular local soft drink, originated in Detroit in 1907.", "category": "History" },
  { "content": "Michigan has around 150 lighthouses, the most of any U.S. state.", "category": "General" },
  { "content": "Grand Rapids was the first city in the US to add fluoride to its drinking water in 1945.", "category": "General" },
  { "content": "Michigan has more than 400 golf courses and hosts more public golf courses than any other state.", "category": "General" },
  { "content": "Michigan is known as the Great Lakes State.", "category": "General" },
  { "content": "Michigan consists of two peninsulas: the Upper and Lower.", "category": "General" },
  { "content": "Detroit, Michigan is known as the 'Motor City' due to its automobile heritage.", "category": "History" },
  { "content": "The Mackinac Bridge connects Michigan's Upper and Lower Peninsulas.", "category": "General" },
  { "content": "Michigan has the longest freshwater coastline in the US.", "category": "General" },
  { "content": "Michigan has over 11,000 lakes and 36,000 miles of streams.", "category": "General" },
  { "content": "Detroit is home to Motown Records, where artists like Stevie Wonder and The Supremes began.", "category": "Arts & Culture" },
  { "content": "The University of Michigan was founded in 1817 in Detroit before moving to Ann Arbor in 1837.", "category": "History" },
  { "content": "Michigan became the 26th state of the US on January 26, 1837.", "category": "History" },
  { "content": "The cereal capital of the world, Battle Creek, is located in Michigan.", "category": "General" },
  { "content": "Gerald Ford, the 38th US president, hailed from Grand Rapids, Michigan.", "category": "Celebrity" },
  { "content": "The Michigan State University Spartans and University of Michigan Wolverines have a longstanding football rivalry.", "category": "Sports" },
  { "content": "Isle Royale National Park is a remote island cluster in Lake Superior and is part of Michigan.", "category": "General" },
  { "content": "The Detroit Zoo was the first zoo in the US to feature open natural habitats.", "category": "Weird" },
  { "content": "The name 'Michigan' is derived from the Ojibwa word 'mishigamaa', meaning 'large water' or 'large lake'.", "category": "History" },
  { "content": "The Petoskey stone is Michigan's state stone and is fossilized ancient coral.", "category": "General" },
  { "content": "Michigan leads the US in tart cherry production.", "category": "General" },
  { "content": "The world’s largest limestone quarry is near Rogers City, Michigan.", "category": "Weird" },
  { "content": "In 1879, Detroit became the first city to have a phone number prefix.", "category": "History" },
  { "content": "Michigan’s state motto is 'Si quaeris peninsulam amoenam circumspice', meaning 'If you seek a pleasant peninsula, look about you'.", "category": "History" },
  { "content": "Vernors Ginger Ale, the country's oldest ginger ale brand, originated in Detroit.", "category": "History" },
  { "content": "The world's largest Christmas store, Bronner's CHRISTmas Wonderland, is located in Frankenmuth, Michigan.", "category": "Weird" },
  { "content": "Holland, Michigan, holds an annual Tulip Time Festival celebrating its Dutch heritage.", "category": "Arts & Culture" },
  { "content": "The Detroit-Windsor Tunnel is the first traffic tunnel between two nations (U.S. and Canada).", "category": "History" },
  { "content": "Sleeping Bear Dunes National Lakeshore boasts massive sand dunes on the shores of Lake Michigan.", "category": "General" },
  { "content": "Michigan's state wildflower, the Dwarf Lake Iris, can be found only in Michigan.", "category": "General" },
  { "content": "Greenfield Village in Dearborn is one of the largest outdoor museums in the US.", "category": "Arts & Culture" },
  { "content": "The Kellogg Company, world-famous for its cereals, was founded in Battle Creek, Michigan.", "category": "History" },
  { "content": "Michigan's highest point is Mount Arvon at 1,979 feet above sea level.", "category": "General" },
  { "content": "The Detroit Institute of Arts has one of the top six art collections in the United States.", "category": "Arts & Culture" },
  { "content": "Madonna, the 'Queen of Pop', was born in Bay City, Michigan and raised in the Detroit suburb of Rochester Hills, Michigan.", "category": "Celebrity" },
  { "content": "Eminem, one of the best-selling music artists in the world, hails from Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Motown Records, founded by Berry Gordy Jr. in Detroit, Michigan, launched the careers of legends like Stevie Wonder, The Supremes, and The Jackson 5.", "category": "Arts & Culture" },
  { "content": "Ted Nugent, the rock musician, was born in Redford, Michigan and raised in metropolitan Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Actress Kristen Bell, known for 'Veronica Mars' and 'The Good Place', was born and raised in Huntington Woods, Michigan.", "category": "Celebrity" },
  { "content": "Tom Selleck, best known for 'Magnum, P.I.', was born in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Iggy Pop, the 'Godfather of Punk', grew up in Ann Arbor, Michigan.", "category": "Celebrity" },
  { "content": "Actor and comedian Tim Allen, known for 'Home Improvement' and as the voice of Buzz Lightyear, was raised in Birmingham, Michigan.", "category": "Celebrity" },
  { "content": "Singer and songwriter Kid Rock was born and raised in Romeo, Michigan.", "category": "Celebrity" },
  { "content": "Diana Ross, lead singer of The Supremes and a celebrated solo artist, hails from Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Magic Johnson, NBA legend, was born in Lansing, Michigan and played college basketball at Michigan State University.", "category": "Sports" },
  { "content": "Film director Francis Ford Coppola, known for 'The Godfather' series, was born in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Terry Crews, actor and former NFL player, was born in Flint, Michigan.", "category": "Celebrity" },
  { "content": "Jack White, of The White Stripes fame, was born and raised in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Sinbad, the comedian and actor, grew up in Benton Harbor, Michigan.", "category": "Celebrity" },
  { "content": "J.K. Simmons, Oscar-winning actor, was born in Grosse Pointe, Michigan.", "category": "Celebrity" },
  { "content": "Musician Bob Seger was born in Detroit, Michigan and is known for his classic 'Old Time Rock and Roll'.", "category": "Celebrity" },
  { "content": "The film '8 Mile', starring Eminem, is named after 8 Mile Road in Detroit, Michigan and tells a story inspired by his life.", "category": "Arts & Culture" },
  { "content": "Dax Shepard, actor and podcaster, hails from Milford, Michigan.", "category": "Celebrity" },
  { "content": "The 2016 film 'Batman v Superman: Dawn of Justice' featured scenes shot in Detroit, Michigan.", "category": "Arts & Culture" },
  { "content": "Selma Blair, known for her roles in 'Cruel Intentions' and 'Legally Blonde', was born in Southfield, Michigan.", "category": "Celebrity" },
  { "content": "Gilda Radner, the first cast member chosen for 'Saturday Night Live', was born in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "'RoboCop', the 1987 sci-fi action film, is set in a crime-ridden Detroit, Michigan in the near future.", "category": "Arts & Culture" },
  { "content": "The hit TV show 'Home Improvement' is set in a fictional suburb of Detroit, Michigan and often features Detroit sports and other local references.", "category": "Arts & Culture" },
  { "content": "Aretha Franklin, the 'Queen of Soul', was born in Memphis but was raised in Detroit, Michigan and began her singing career at the New Bethel Baptist Church in Detroit.", "category": "Celebrity" },
  { "content": "Bruce Campbell, iconic for his role as Ash in the 'Evil Dead' series, was born in Royal Oak, Michigan.", "category": "Celebrity" },
  { "content": "Keegan-Michael Key, of the comedy duo 'Key & Peele', was born in Southfield, Michigan.", "category": "Celebrity" },
  { "content": "Tony Goldwyn, known for his role as President Fitzgerald Grant III on 'Scandal', was born in Los Angeles but attended Interlochen Arts Academy in Interlochen, Michigan.", "category": "Celebrity" },
  { "content": "Ken Jeong, the comedian and actor known for 'The Hangover' and 'Community', completed his internal medicine residency in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Lily Tomlin, Emmy and Tony-winning comedian and actress, was born in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Danny DeVito produced and co-starred in the 1999 movie 'The Virgin Suicides', which was set in Grosse Pointe, Michigan.", "category": "Arts & Culture" },
  { "content": "Bill Mechanic, the film producer behind 'Hacksaw Ridge' and 'Coraline', was born in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "David Spade, the comedian and actor known for 'Saturday Night Live' and 'Joe Dirt', was born in Birmingham, Michigan.", "category": "Celebrity" },
  { "content": "Richard Kiel, best known for his role as the villain 'Jaws' in James Bond films, was born in Detroit, Michigan.", "category": "Celebrity" },
  { "content": "Gillian Anderson, celebrated for her portrayal of Dana Scully on 'The X-Files', was born in Chicago but grew up in Grand Rapids, Michigan.", "category": "Celebrity" },
  { "content": "Burt Reynolds, the legendary actor, attended Palm Beach Junior College on a football scholarship but was injured and later transferred to Michigan State University.", "category": "Celebrity" },
  { "content": "Jerry Bruckheimer, the producer behind blockbusters like 'Pirates of the Caribbean' and 'Top Gun', hails from Detroit, Michigan.", "category": "Celebrity" },
  { "content": "John Hughes, the iconic director of 'Ferris Bueller's Day Off' and 'The Breakfast Club', spent a portion of his early life in Grosse Pointe, Michigan.", "category": "Arts & Culture" },
  { "content": "Terry O'Quinn, who played John Locke on 'Lost', was born in Sault Ste. Marie, Michigan.", "category": "Celebrity" },
  { "content": "Taylor Lautner, known for his role as Jacob Black in the 'Twilight' series, was born in Grand Rapids, Michigan.", "category": "Celebrity" },
  { "content": "There's a town in Michigan named 'Hell'. Naturally, it's a favorite place for people to say they've been to 'Hell and back'.", "category": "Weird" },
  { "content": "It's illegal to kill a dog using a decompression chamber in Michigan.", "category": "Weird" },
  { "content": "In Harper Woods, Michigan, it's illegal to paint sparrows and sell them as parakeets.", "category": "Weird" },
  { "content": "Rochester, Michigan has a law that makes it illegal to mow your lawn on Sunday.", "category": "Weird" },
  { "content": "In Clawson, Michigan, it's a legal requirement to sound a horn or other warning signal before passing another car.", "category": "Weird" },
  { "content": "Detroit holds an annual 'Marche du Nain Rouge' where residents chase away a mythical red dwarf to ward off bad vibes for the rest of the year.", "category": "Weird" },
  { "content": "Bath, Michigan is home to the 'Hobo Pie Festival', celebrating the popular campfire treat.", "category": "Weird" },
  { "content": "In 1974, Grand Haven, Michigan held a mock funeral for 'The Dune Buggy'. The dune buggy era had ended due to regulations protecting the sand dunes.", "category": "Weird" },
  { "content": "The world's largest tire is in Allen Park, Michigan. Standing at 80 feet tall, it once served as a Ferris wheel in the 1964 New York World's Fair.", "category": "Weird" },
  { "content": "In Kalamazoo, Michigan, it is against the law to serenade your girlfriend.", "category": "Weird" },
  { "content": "Traverse City, Michigan, holds an annual 'Ugly Dog Contest' where the 'least visually appealing' dogs can win prizes.", "category": "Weird" },
  { "content": "Michigan has an 'Underwater Crucifix' in Petoskey, a submerged 11-foot tall statue of Jesus Christ, primarily used as a memorial for those who've lost their lives at sea.", "category": "Weird" },
  { "content": "Detroit residents in the 1940s reported sightings of the 'Detroit Nain Rouge', a small, red-faced creature causing mischief.", "category": "Weird" },
  { "content": "Colon, Michigan, proclaims itself the 'Magic Capital of the World' and hosts an annual 'Magic Get Together' for magicians from all over.", "category": "Weird" },
  { "content": "The town of Christmas, Michigan has a population of just over 400, and it boasts a Christmas-themed post office and street names like 'Rudolph Road'.", "category": "Weird" },
  { "content": "Michigan is the only U.S. state that touches four of the five Great Lakes: Superior, Michigan, Huron, and Erie.", "category": "General" },
  { "content": "Lake Michigan is the only one of the Great Lakes located entirely within the United States.", "category": "General" },
  { "content": "Michigan's name originates from the Ojibwe word 'mishigamaa' meaning 'large water' or 'large lake'.", "category": "General" },
  { "content": "Sleeping Bear Dunes on Lake Michigan has dunes that tower as much as 450 feet above the lake.", "category": "General" },
  { "content": "Isle Royale, located in Lake Superior, is the largest island in the largest freshwater lake in the world.", "category": "General" },
  { "content": "Lake Superior is the deepest of the Great Lakes, reaching depths of over 1,300 feet.", "category": "General" },
  { "content": "Lake Erie is the warmest and shallowest of the Great Lakes and has the most abundant fish population.", "category": "General" },
  { "content": "Torch Lake, located in Michigan, is often considered one of the state's most beautiful lakes due to its striking blue waters.", "category": "General" },
  { "content": "Lake Michigan and Lake Huron are hydrologically a single lake, connected by the Straits of Mackinac.", "category": "General" },
  { "content": "The five Great Lakes combined have a shoreline that spans over 10,000 miles, longer than the U.S. West and East Coasts combined.", "category": "General" },
  { "content": "Holland, Michigan, located on the shores of Lake Michigan, is famous for its annual Tulip Time Festival, celebrating the area's Dutch heritage.", "category": "General" },
  { "content": "Belle Isle, situated in the Detroit River between the U.S. and Canada, is the largest city-owned island park in the U.S.", "category": "General" },
  { "content": "Lake St. Clair, while not considered one of the 'Great Lakes', is situated between Lake Erie and Lake Huron and is an important waterway in Michigan.", "category": "General" },
  { "content": "The Great Lakes contain more than 35,000 islands, with the majority located in Lake Huron.", "category": "General" },
  { "content": "Grand Lake, located near Alpena in Michigan, is one of the state's largest natural inland lakes, covering over 5,660 acres.", "category": "General" },
  { "content": "The SS Edmund Fitzgerald, which sank in Lake Superior in 1975, is one of the most famous shipwrecks in the Great Lakes.", "category": "Historical" },
  { "content": "The world's largest limestone quarry, which spans over 8,000 acres, is located near Rogers City on the shores of Lake Huron.", "category": "Historical" },
  { "content": "The Great Lakes Shipwreck Museum, located at Whitefish Point on Lake Superior, commemorates the maritime casualties of the Great Lakes.", "category": "Historical" }
];

seedDatabase(michiganFacts)
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });