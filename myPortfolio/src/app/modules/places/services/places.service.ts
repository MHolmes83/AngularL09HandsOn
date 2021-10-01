import { Injectable } from '@angular/core';
import { Place } from 'src/app/shared/models/place';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  places: Place[] = [
    {
      id: 0,
      city: 'Paris',
      country: 'France',
      provinceState: 'Île-de-France',
      description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
    },
    {
      id: 1,
      city: 'Berlin',
      provinceState: 'Brandenburg',
      country: 'Germany',
      description: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963."
    },
    {
      id: 2,
      city: 'Hong Kong',
      provinceState: 'Hong Kong Special Administrative Region of the Peoples Republic of China',
      country: 'China',
      description: 'Hong Kong is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Pei’s Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market.'
    },
    {
      id: 3,
      city: 'Reykjavik',
      provinceState: 'Capital Region',
      country: 'Iceland',
      description: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik."
    },
    {
      id: 4,
      city: 'Tokyo',
      provinceState: 'Tokyo',
      country: 'Japan',
      description: 'Tokyo officially the Tokyo Metropolis (Japanese: 東京都, Tōkyō-to), is the capitaland most populous prefecture of Japan. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of the main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government. As of 2021, the prefecture has an estimated population of 13,960,236. The Greater Tokyo Area is the most populous metropolitan area in the world, with more than 37.393 million residents as of 2020.'
    },
    {
      id: 4,
      city: 'London',
      provinceState: 'Greater London Region',
      country: 'England/The United Kingdom',
      description: 'London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea. It has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval limits. Since the late 19th century, "London" has also referred to the metropolis around this, historically split between the counties of Middlesex, Essex, Surrey, Kent and Hertfordshire, which today largely comprises Greater London, the region governed by the Greater London Authority. The City of Westminster, to the west of the City, has for centuries held the national government and parliament.'
    },
    {
      id: 5,
      city: 'New York',
      provinceState: 'New York',
      country: 'The United States of America',
      description: 'New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area. With over 20 million people in its metropolitan statistical area and approximately 23 million in its combined statistical area, it is one of the most populous megacities in the world. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports, and is the most photographed city in the world. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and has sometimes been called the capital of the world.'
    },
    {
      id: 6,
      city: 'Seattle',
      provinceState: 'Washington',
      country: 'The United States of America',
      description: 'Seattle  is a seaport city on the West Coast of the United States. It is the seat of King County, Washington. With a 2020 population of 737,015, it is the largest city in both the state of Washington and the Pacific Northwest region of North America. The Seattle metropolitan areas population is 4.02 million, making it the 15th-largest in the United States. Its growth rate of 21.1% between 2010 and 2020 makes it one of the nations fastest-growing large cities. Seattle is situated on an isthmus between Puget Sound (an inlet of the Pacific Ocean) and Lake Washington. It is the northernmost major city in the United States, located about 100 miles (160 km) south of the Canadian border. A major gateway for trade with northern Asia, Seattle is the fourth-largest port in North America in terms of container handling as of 2015.  The Seattle area was inhabited by Native Americans for at least 4,000 years before the first permanent European settlers. Arthur A. Denny and his group of travelers, subsequently known as the Denny Party, arrived from Illinois via Portland, Oregon, on the schooner Exact at Alki Point on November 13, 1851. The settlement was moved to the eastern shore of Elliott Bay and named "Seattle" in 1852, in honor of Chief Si ahl of the local Duwamish and Suquamish tribes. Today, Seattle has high populations of Native, Scandinavian, Asian American and African American people, as well as a thriving LGBT community that ranks sixth in the United States by population.'
    },
    {
      id: 7,
      city: 'San Francisco',
      provinceState: 'California',
      country: 'The United States of America',
      description: 'San Francisco (Spanish for "Saint Francis"), officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city in the United States, and the fourth most populous in California, with 873,965 residents as of 2020. It covers an area of about 46.9 square miles (121 square kilometers), mostly at the north end of the San Francisco Peninsula in the San Francisco Bay Area, making it the second most densely populated large U.S. city, and the fifth most densely populated U.S. county, behind only four of the five New York City boroughs. San Francisco is the 12th-largest metropolitan statistical area in the United States with 4.7 million residents, and the fourth-largest by economic output, with a GDP of $592 billion in 2019. With San Jose, California, it forms the San Jose–San Francisco–Oakland, CA Combined Statistical Area, the fifth most populous combined statistical area in the United States, with 9.6 million residents as of 2019. Colloquial nicknames for San Francisco include SF, San Fran, The City, and Frisco.'
    },
    {
      id: 8,
      city: 'Los Angeles',
      provinceState: 'California',
      country: 'The United States of America',
      description: 'Los Angeles (Spanish: Los Ángeles; "The Angels"), often spoken and written as its initialism, L.A., is the largest city in California. With a 2020 population of 3,898,747, it is the second-largest city in the United States, after New York City, and the third-largest city in North America, after Mexico City and New York City. Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, Hollywood entertainment industry, and its sprawling metropolitan area. Los Angeles lies in a basin in southern California, adjacent to the Pacific Ocean, with mountains as high as 10,000 feet (3,000 m), and deserts. The city, which covers about 469 square miles (1,210 km2), is the seat of Los Angeles County, the most populous county in the United States. The Los Angeles metropolitan area (MSA) is home to a population of 13.1 million, making it the second-largest metropolitan area in the nation after that of New York. Greater Los Angeles includes metro Los Angeles as well as the Inland Empire and Ventura County. It is the second most populous U.S. combined statistical area, also after New York, with a 2015 estimate of 18.7 million people.'
    }
  ];

  getPlaces = (): Observable<Place[]> => {
    return of(this.places);
  }

  constructor() { }
}
