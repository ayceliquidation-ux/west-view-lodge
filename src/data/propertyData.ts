export interface FloorplanRoom {
  id: string;
  name: string;
  subtitle: string;
  bedType: string;
  sleeps: string;
  view: string;
  image: string;
  secondaryImage?: string;
  highlights: string[];
}

export interface FloorplanLevel {
  id: 'upper' | 'main' | 'lower' | 'bonus';
  label: string;
  floorTitle: string;
  bathSummary: string;
  totalSleepsText: string;
  description: string;
  rooms: FloorplanRoom[];
}

export const HERO_STATS = [
  { label: 'Living Space', value: '4,300 Sq. Ft.' },
  { label: 'Capacity', value: 'Sleeps 20+' },
  { label: 'Bedrooms', value: '7 (6 + Bunkroom)' },
  { label: 'Bathrooms', value: '4 Baths' },
  { label: 'Waterfront', value: 'Private Dock & Watercraft' },
  { label: 'Relaxation', value: 'Lake-View Hot Tub' },
];

export const WATERCRAFT_LIST = [
  {
    title: 'Private Moorage Dock',
    badge: 'Bring Your Boat',
    description:
      'Illuminated private dock with moorage for your powerboat, wake boat, or wave runner steps from the lawn.',
    image: '/images/photo-02.jpg',
  },
  {
    title: 'Kayaks, Paddle Boards & Shoreline',
    badge: 'Included Watercraft',
    description:
      'Launch straight from the shoreline with our included double kayaks, kids’ kayaks, and stand-up paddle boards beside the dock and lakeside fire pit.',
    image: '/images/photo-66.jpg',
  },
  {
    title: 'Life Jackets, Wetsuits & Paddles',
    badge: 'Watercraft Gear',
    description:
      'Selection of youth and adult life jackets, wetsuits, kayak paddles, and SUP paddles neatly organized under the deck and ready for the lake.',
    image: '/images/photo-56.jpg',
  },
  {
    title: 'Panoramic Outdoor Dining',
    badge: 'Lakeview Deck',
    description:
      'Enjoy outdoor meals and morning coffee on the upper deck featuring a shaded patio table and sweeping views of Big Lake.',
    image: '/images/photo-21.jpg',
  },
  {
    title: '5’×10’ Water Pad, Cornhole & Extra Seating',
    badge: 'Swim & Lawn Gear',
    description:
      'Under-deck gear bay stocked with the 5’×10’ floating foam water play pad, cornhole boards, extra lakeside chairs, and water gear.',
    image: '/images/photo-57.jpg',
  },
];

export const FLOORPLAN_LEVELS: FloorplanLevel[] = [
  {
    id: 'upper',
    label: 'Upper Level',
    floorTitle: 'Upper Level Primary Suite — The Heron’s Nest',
    bathSummary: 'Detached Full Bath (Soaking Tub + Walk-In Shower)',
    totalSleepsText: 'Sleeps 2 in Complete Privacy',
    description:
      'Occupying the entire top level of the lodge, the Heron’s Nest offers complete tranquility above the group gathering areas—featuring a King bedroom, private seating lounge, lake-view office, and detached full bath.',
    rooms: [
      {
        id: 'primary-suite',
        name: 'Primary Suite — The Heron’s Nest',
        subtitle: 'Upper Level · Entire Floor Privacy',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Panoramic Big Lake Views',
        image: '/images/photo-10.jpg',
        secondaryImage: '/images/photo-45.jpg',
        highlights: [
          'King bed facing triple picture windows over Big Lake',
          'Private seating area for 2 with tufted wingback armchairs',
          'Roku Smart TV, full-length mirror & walk-in closet',
        ],
      },
      {
        id: 'primary-office-bath',
        name: 'Heron’s Nest Lake-View Office & Detached Bath',
        subtitle: 'Upper Level · Primary Suite',
        bedType: 'Private Office + Soaking Tub',
        sleeps: 'Primary Suite Exclusive',
        view: 'Elevated Lake & Foothill Views',
        image: '/images/photo-19.jpg',
        secondaryImage: '/images/photo-16.jpg',
        highlights: [
          'Wrap-around built-in desk with external monitor & shelving',
          'Detached full bath with deep soaking tub & walk-in tile shower',
          'Stocked shampoo, conditioner, body wash & fresh bath linens',
        ],
      },
    ],
  },
  {
    id: 'main',
    label: 'Main Level',
    floorTitle: 'Three Guest Bedrooms Steps from the Great Room',
    bathSummary: 'Shares 1 Main Level Full Bath',
    totalSleepsText: 'Sleeps 6 Across 3 Bedrooms (2 Kings, 1 Queen)',
    description:
      'Convenient single-level access right off the vaulted knotty pine Great Room, main kitchen, and lakefront dining deck.',
    rooms: [
      {
        id: 'bedroom-1',
        name: 'Bedroom 1 · Lake-View King Bedroom',
        subtitle: 'Main Level',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Big Lake & Mountain View',
        image: '/images/photo-11.jpg',
        highlights: [
          'King bed with crisp white linens',
          'Picture window overlooking Big Lake',
          'Roku Smart TV & luggage racks',
          'Shares the Main Level Full Bath (photo-17)',
        ],
      },
      {
        id: 'bedroom-2',
        name: 'Bedroom 2 · Lake-View King Bedroom',
        subtitle: 'Main Level',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Big Lake View',
        image: '/images/photo-12.jpg',
        highlights: [
          'King bed beneath decorative wooden oars',
          'Lake views, mirrored closet & bedside lamps',
          'Roku Smart TV & luggage racks',
          'Easy access to the Main Level Full Bath',
        ],
      },
      {
        id: 'bedroom-3',
        name: 'Bedroom 3 · Garden-View Queen Bedroom',
        subtitle: 'Main Level',
        bedType: '1 Queen Bed',
        sleeps: 'Sleeps 2',
        view: 'Garden View',
        image: '/images/photo-13.jpg',
        secondaryImage: '/images/photo-47.jpg',
        highlights: [
          'Queen bed with warm lodge textiles',
          'Reading armchair & hardwood flooring',
          'Roku Smart TV, mirrored closet & luggage racks',
          'Quiet outlook away from lakeside activity',
        ],
      },
    ],
  },
  {
    id: 'lower',
    label: 'Lower Level',
    floorTitle: 'Walk-Out Lake Level Bedrooms & Custom Fish-Themed Bunkroom',
    bathSummary: '1 Full Bath + 1 Three-Quarter (3/4) Bath',
    totalSleepsText: 'Sleeps 12 Across 3 Rooms (1 King, 1 Queen, 8 Bunks)',
    description:
      'Steps from the Second Kitchen, 85" TV Rec Room, Pool Table, and walk-out Hot Tub patio—with two private bedrooms plus the 8-bed Custom Fish-Themed Bunkroom.',
    rooms: [
      {
        id: 'bedroom-4',
        name: 'Bedroom 4 · Lake-View King Bedroom',
        subtitle: 'Lower Walk-Out Level',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Water-Level Big Lake View',
        image: '/images/photo-80.jpg',
        highlights: [
          'King bed with framed feather artwork above the headboard',
          'Knotty pine wainscot detailing, warm bedside lighting & wide lakefront window',
          'Roku Smart TV, mirrored closet & luggage racks',
          'Served by the Lower Level Full Bath (photo-18) & 3/4 Bath (photo-03)',
        ],
      },
      {
        id: 'bedroom-5',
        name: 'Bedroom 5 · Lake-View Queen Bedroom',
        subtitle: 'Lower Walk-Out Level',
        bedType: '1 Queen Bed',
        sleeps: 'Sleeps 2',
        view: 'Lake View',
        image: '/images/photo-14.jpg',
        secondaryImage: '/images/photo-49.jpg',
        highlights: [
          'Queen bed with knotty pine wainscot ledge & wide lakefront window',
          'Mirrored closet, Roku Smart TV & luggage racks',
          'Double-layered privacy curtain connecting to the Fish-Themed Bunkroom',
        ],
      },
      {
        id: 'bedroom-6-bunkroom',
        name: 'Bedroom 6 · Custom 8-Bed Fish-Themed Bunkroom',
        subtitle: 'Lower Walk-Out Level',
        bedType: '8 Built-In Custom Bunk Beds',
        sleeps: 'Sleeps 8',
        view: 'Cozy Knotty Pine Interior',
        image: '/images/photo-15.jpg',
        secondaryImage: '/images/photo-51.jpg',
        highlights: [
          '8 custom-built knotty pine bunks with trout & salmon pillows',
          'Each bunk has its own battery-powered reading light & personal fan',
          'Built-in storage caddies, hooks & handcrafted pine ladders',
          'Backed by 1 Full Bath + 1 Three-Quarter Bath on the same floor',
        ],
      },
    ],
  },
  {
    id: 'bonus',
    label: 'Bonus Sleeping',
    floorTitle: 'Flexible Additional Sleeping & Infant Gear',
    bathSummary: 'Access to All 4 Lodge Bathrooms',
    totalSleepsText: 'Up to +4 Additional Guests + Pack ’n Play',
    description:
      'Extra sleeping options for larger family groups, kids, and infants.',
    rooms: [
      {
        id: 'gaming-nook-sofa',
        name: 'Gaming Nook Fold-Out Sofa Bed',
        subtitle: 'Lower Level Lounge',
        bedType: '1 Fold-Out Sofa Bed',
        sleeps: 'Sleeps 1–2',
        view: 'Patio & Hot Tub Access',
        image: '/images/photo-25.jpg',
        highlights: [
          'Velvet fold-out sofa in the retro gaming nook',
          'Wall-mounted TV & gaming console access',
          'Sliding glass door leading out to the hot tub patio',
        ],
      },
      {
        id: 'air-mattresses-pack-n-play',
        name: 'Queen & Twin Air Mattresses + Pack ’n Play',
        subtitle: 'Flexible Setup',
        bedType: '1 Queen + 1 Twin Air Mattress + Pack ’n Play',
        sleeps: 'Sleeps 3 + Infant',
        view: 'Flexible Placement',
        image: '/images/photo-74.jpg',
        highlights: [
          '1 Queen air mattress + 1 Twin air mattress with extra linens',
          'Pack ’n Play portable crib for babies and toddlers',
          'Two gaming and puzzle nooks for kids and teens to spread out',
        ],
      },
    ],
  },
];

export const GROUP_BENTO_FEATURES = [
  {
    id: 'kitchens',
    eyebrow: 'Cooking & Dining for 20+',
    title: 'Two Full Kitchens + 4-Burner Blackstone Deck Griddle',
    description:
      'The main kitchen is stocked for waffles, smoothies, coffee bars, and holiday meals, while the lower-level second kitchen adds a second full-size fridge and oven/range right off the rec room and lake patio.',
    bullets: [
      'Main Kitchen: French-door fridge, granite island, dual Cuisinart drip/pod coffee bar',
      'Lower Kitchen: 2nd full refrigerator, oven/range, sink & generous prep counters',
      'Outdoor Deck: 4-burner Blackstone flat-top griddle + Weber GS4 gas grill',
      'Two dining room tables + island barstools + shaded lakefront deck dining',
    ],
    primaryImage: '/images/photo-39.jpg',
    secondaryImage: '/images/photo-36.jpg',
    tertiaryImage: '/images/photo-60.jpg',
  },
  {
    id: 'after-dark',
    eyebrow: 'Evenings by the Water',
    title: 'Covered Lake-View Hot Tub & Lakeside Fire Pit',
    description:
      'Unwind in the bubbling hot tub beneath string lights or gather around the lakeside brick wood-burning fire pit as the sun sets over Big Lake.',
    bullets: [
      'Covered lake-view hot tub looking out toward the private dock',
      'Lakeside wood-burning fire pit with seating for 16 (8 chairs lakeside + extra chairs stored under the deck)',
      'Cozy outdoor blankets in the lakeside basket and hall closet',
      'Illuminated private dock for evening stargazing',
    ],
    primaryImage: '/images/photo-24.jpg',
    secondaryImage: '/images/photo-58.jpg',
    tertiaryImage: '/images/photo-20.jpg',
  },
  {
    id: 'entertainment',
    eyebrow: 'All-Weather Fun',
    title: 'Pool Table, 85" Movie Lounge, Xbox Kinect & 2 Gaming Nooks',
    description:
      'Spread out across dedicated hangout spaces—watch the game on the 85" screen, play 8-ball or Texas Hold’em, or challenge the family to giant-scale Tetris.',
    bullets: [
      '85" TV in the lakeview rec room with Xbox 360 Kinect & group games',
      'Pool table + convertible Texas Hold’em poker felt & chip case',
      '2 gaming nooks: retro video games + cushioned under-stairs board game banquette',
      'Giant Tetris & Guess Who, Huksie ring toss, cornhole & Roku TVs in bedrooms',
    ],
    primaryImage: '/images/photo-73.jpg',
    secondaryImage: '/images/photo-07.jpg',
    tertiaryImage: '/images/photo-35.jpg',
  },
  {
    id: 'parking',
    eyebrow: 'Easy Group Arrival',
    title: 'Parking for 9 Vehicles + Dedicated EV Charger',
    description:
      'West View Lodge accommodates up to 9 vehicles across its level main driveway and private 3-bay garage across the street.',
    bullets: [
      '5-car paved main driveway right at the front entry',
      '3 covered garage bays directly across the street with full guest access',
      '1 EV Charger installed inside the across-the-street garage',
      '1 additional covered parking space next to the across-the-street garage',
    ],
    primaryImage: '/images/photo-65.jpg',
    secondaryImage: '/images/photo-23.jpg',
  },
];

export const LOCAL_GUIDE_PLACES = [
  {
    timeBadge: 'Short Walk',
    title: 'Big Lake Bar & Grill',
    category: 'Lakeside Dining & Tavern',
    description:
      'Stroll down to this neighborhood favorite (Est. 1992) for burgers, fish & chips, cold drafts, and casual lake-town dining.',
    image: '/images/photo-28.jpg',
  },
  {
    timeBadge: '2 Mins Drive',
    title: 'Valley View Farm Stand',
    category: 'Skagit Valley Harvest',
    description:
      'Pick up local produce, seasonal berries, fresh-cut flowers, and autumn pumpkins just down the road.',
    image: '/images/photo-79.jpg',
  },
  {
    timeBadge: '5 Mins Drive',
    title: 'Big Rock Grocery, Park, Golf & Pickleball',
    category: 'Provisions & Recreation',
    description:
      'Grab ice and essentials at Big Rock Grocery, hike Yudwasta Big Rock Park, play Overlook Golf Course, or visit the Big Rock Pickleball courts.',
    image: '/images/photo-77.jpg',
  },
  {
    timeBadge: '10 Mins Drive',
    title: 'Walker Valley ORV Area & Forest Trails',
    category: 'Off-Road & Forest Trails',
    description:
      'Explore forested trails and off-road recreation in Walker Valley State Forest just 10 minutes from the lodge.',
    image: '/images/photo-75.jpg',
  },
  {
    timeBadge: '10 Mins Drive',
    title: 'Big Lake Public Boat Launch & Lang’s Pony Farm',
    category: 'Boating & Family Outings',
    description:
      'Launch your boat at the public ramp (10 mins) and pilot it to our private dock, or book trail rides at Lang’s Horse & Pony Farm.',
    image: '/images/photo-76.jpg',
  },
  {
    timeBadge: '15–60 Mins',
    title: 'Nakashima Barn, La Conner & Mt. Baker',
    category: 'Day Trips & Alpine Skiing',
    description:
      'Walk the Centennial Trail at Nakashima Barn, visit Mount Vernon (15m) and waterfront La Conner (30m), or hike and ski Mt. Baker (1 hr).',
    image: '/images/photo-78.jpg',
  },
];

export const HOUSE_ESSENTIALS_ACCORDION = [
  {
    id: 'stocked-starters',
    title: 'Complimentary Stocked Kitchen & Bath Starters',
    subtitle: 'Settle in right away with stocked kitchen and bath basics',
    items: [
      'Pantry Basics: Cooking oil, salt & pepper, taco seasoning, garlic powder, sugar, tea, and honey.',
      'Coffee Bar: Ground coffee, filters, and an assortment of pods for the dual Cuisinart coffee maker.',
      'Kitchen Wraps: Aluminum foil, Glad Press’n Seal, and Ziploc bags.',
      'Every Shower Stocked: Shampoo, conditioner, and body wash dispensers in all 4 bathrooms.',
      'Household Starters: Starter paper towels, toilet paper, trash bags, dish soap, dishwasher pods, and laundry detergent.',
    ],
  },
  {
    id: 'guest-access',
    title: 'Private Lodge, Dock & 3-Bay Shop Access',
    subtitle: 'Full access to the home, waterfront, and across-the-street parking',
    items: [
      'Full private access to the 4,300 sq. ft. lodge, private dock, waterfront lawn, hot tub, and lakeside fire pit.',
      'Full guest access to the 3-bay covered shop/garage across the street (including the EV charger) plus the adjacent covered parking space.',
      'All watercraft (2 paddle boards, 4 kayaks, 4-person paddle boat, 6’×12’ inflatable dock, 5’×10’ foam water pad, life jackets, and lake towels) are included.',
      'Only 3 owner closets and the attached house garage remain locked.',
    ],
  },
  {
    id: 'house-policies',
    title: 'Clear House Rules & Good-Neighbor Policies',
    subtitle: 'Straightforward guidelines for a smooth stay on Big Lake',
    items: [
      '1. No Smoking or Vaping Inside: Strictly prohibited inside the home and garages.',
      '2. No Parties: Only registered guests are permitted ($1,000 fine for undisclosed guests or unauthorized parties).',
      '3. No Pets: Pets are not permitted ($500 fee per undisclosed animal).',
      'Seasonal Note: Natural beach, lake water levels, aquatic plant life, and weather conditions vary by season.',
    ],
  },
];
