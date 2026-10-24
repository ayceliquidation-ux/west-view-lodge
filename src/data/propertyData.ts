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
  { label: 'Bedrooms', value: '7 (6 Suites + Bunkroom)' },
  { label: 'Bathrooms', value: '4 Baths' },
  { label: 'Waterfront', value: 'Private Dock & Fleet' },
  { label: 'Relaxation', value: 'Lake-View Hot Tub' },
];

export const WATERCRAFT_FLEET = [
  {
    title: 'Private Moorage Dock',
    badge: 'Bring Your Own Boat',
    description:
      'Illuminated private lakefront dock with deep-water access—moor your own powerboat, wake boat, or wave runner steps from the lawn.',
    image: '/images/photo-01.jpg',
  },
  {
    title: '2 Lifetime Stand-Up Paddle Boards',
    badge: 'Included Fleet',
    description:
      'Glide across glass-calm morning waters on two stable Lifetime SUPs with adjustable paddles included.',
    image: '/images/photo-66.jpg',
  },
  {
    title: '4 Kayaks (2 Double + 2 Kids’ Kayaks)',
    badge: 'Included Fleet',
    description:
      'Explore the shoreline together with two tandem adult kayaks plus two dedicated kids’ kayaks for younger paddlers.',
    image: '/images/photo-55.jpg',
  },
  {
    title: '4-Person Canopy Paddle Boat with Cooler',
    badge: 'Included Fleet',
    description:
      'Cruise Big Lake in shaded comfort with a 4-seat pedal boat featuring a sun canopy and built-in beverage cooler.',
    image: '/images/photo-56.jpg',
  },
  {
    title: '6’×12’ Inflatable Dock + 5’×10’ Foam Play Pad',
    badge: 'Swim & Lounge',
    description:
      'Anchor the 6’×12’ inflatable sunbathing island alongside the 5’×10’ floating water play pad. Lake towels & adult/kids life jackets provided!',
    image: '/images/photo-57.jpg',
  },
];

export const FLOORPLAN_LEVELS: FloorplanLevel[] = [
  {
    id: 'upper',
    label: 'Upper Level',
    floorTitle: 'Private Primary Sanctuary & Lake-View Office',
    bathSummary: 'Detached Full Spa Bath (Soaking Tub + Walk-In Shower)',
    totalSleepsText: 'Sleeps 2 in Luxury Privacy',
    description:
      'Occupying the entire top level of the lodge, the Primary Wing offers complete tranquility above the group gathering areas—complete with a dedicated panoramic lake-view executive office.',
    rooms: [
      {
        id: 'primary-suite',
        name: 'Primary Lakefront Suite',
        subtitle: 'Upper Level · Entire Floor Privacy',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Panoramic Big Lake Views',
        image: '/images/photo-10.jpg',
        secondaryImage: '/images/photo-45.jpg',
        highlights: [
          'Plush King bed facing triple picture windows over Big Lake',
          'Private seating lounge for 2 with tufted wingback armchairs',
          'Large wall-mounted Roku Smart TV & full-length mirror',
          'Spacious walk-in closet with luggage racks',
        ],
      },
      {
        id: 'primary-office-bath',
        name: 'Private Lake-View Office & Detached Spa Bath',
        subtitle: 'Upper Level · En-Suite Wing',
        bedType: 'Executive Desk + Soaking Tub',
        sleeps: 'Primary Wing Exclusive',
        view: 'Elevated Lake & Foothill Views',
        image: '/images/photo-19.jpg',
        secondaryImage: '/images/photo-16.jpg',
        highlights: [
          'Wrap-around custom wood desk with external monitor & shelving',
          'Detached full bathroom with deep soaking tub & walk-in tile shower',
          'Stocked shampoo, conditioner, body wash & plush bath linens',
        ],
      },
    ],
  },
  {
    id: 'main',
    label: 'Main Level',
    floorTitle: 'Three Private Guest Suites Steps from the Great Room',
    bathSummary: 'Shares 1 Full Main-Level Bathroom',
    totalSleepsText: 'Sleeps 6 Across 3 Bedrooms (2 Kings, 1 Queen)',
    description:
      'Ideal for grandparents, couples, and adult guests who want single-level convenience right off the vaulted Great Room, main kitchen, and lakefront dining deck.',
    rooms: [
      {
        id: 'bedroom-1',
        name: 'Bedroom 1 · Lake-View King Suite',
        subtitle: 'Main Level',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Big Lake & Mountain View',
        image: '/images/photo-11.jpg',
        highlights: [
          'Plush King bed with crisp luxury linens',
          'Expansive picture window overlooking Big Lake',
          'Roku Smart TV & dedicated luggage racks',
          'Shares the Main Level Full Bath (photo-03)',
        ],
      },
      {
        id: 'bedroom-2',
        name: 'Bedroom 2 · Oar House King Suite',
        subtitle: 'Main Level',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Big Lake View',
        image: '/images/photo-12.jpg',
        highlights: [
          'King bed beneath vintage Pacific Northwest wooden oars',
          'Lake views, double mirrored closet & bedside lamps',
          'Roku Smart TV & luggage racks',
          'Easy access to Main Level Full Bath',
        ],
      },
      {
        id: 'bedroom-3',
        name: 'Bedroom 3 · Garden-View Queen Suite',
        subtitle: 'Main Level',
        bedType: '1 Queen Bed',
        sleeps: 'Sleeps 2',
        view: 'Quiet Garden View',
        image: '/images/photo-13.jpg',
        secondaryImage: '/images/photo-47.jpg',
        highlights: [
          'Queen bed with warm amber & olive lodge textiles',
          'Private reading armchair & hardwood flooring',
          'Roku Smart TV, mirrored closet & luggage racks',
          'Peaceful garden outlook away from lakeside activity',
        ],
      },
    ],
  },
  {
    id: 'lower',
    label: 'Lower Level',
    floorTitle: 'Walk-Out Lake Level Suites & Custom 8-Bed Fish Bunkroom',
    bathSummary: '1 Full Bath + 1 Three-Quarter (3/4) Bath',
    totalSleepsText: 'Sleeps 12 Across 3 Rooms (1 King, 1 Queen, 8 Custom Bunks)',
    description:
      'Connected directly to the Second Kitchen, 85" TV Rec Room, Pool Table, and walk-out Hot Tub patio—featuring two private suites plus the showstopping 8-bed Cedar Fish Bunkroom.',
    rooms: [
      {
        id: 'bedroom-4',
        name: 'Bedroom 4 · Shoreline King Suite',
        subtitle: 'Lower Walk-Out Level',
        bedType: '1 King Bed',
        sleeps: 'Sleeps 2',
        view: 'Water-Level Big Lake View',
        image: '/images/photo-14.jpg',
        highlights: [
          'King bed with knotty pine wainscot ledge',
          'Wide picture window looking right out to Big Lake',
          'Roku Smart TV, luggage racks & upholstered bench',
          'Steps from Lower Level Full Bath & 3/4 Bath',
        ],
      },
      {
        id: 'bedroom-5',
        name: 'Bedroom 5 · Lake-View Queen Suite',
        subtitle: 'Lower Walk-Out Level',
        bedType: '1 Queen Bed',
        sleeps: 'Sleeps 2',
        view: 'Lake View',
        image: '/images/photo-49.jpg',
        secondaryImage: '/images/photo-48.jpg',
        highlights: [
          'Queen bed with coastal blue throw & mirrored closet',
          'Roku Smart TV, lake views & luggage racks',
          'Optional privacy curtain connection to the Fish Bunkroom—ideal for parents or older siblings',
        ],
      },
      {
        id: 'bedroom-6-bunkroom',
        name: 'Bedroom 6 · Custom 8-Bed Fish Bunkroom',
        subtitle: 'Lower Walk-Out Level · Reunion Favorite',
        bedType: '8 Built-In Custom Bunk Beds',
        sleeps: 'Sleeps 8',
        view: 'Cozy Cedar Cabin Interior',
        image: '/images/photo-15.jpg',
        secondaryImage: '/images/photo-51.jpg',
        highlights: [
          '8 custom-built knotty pine bunks with trout & salmon pillows',
          'Every single bunk has its own battery-powered reading light & personal clip-on fan!',
          'Built-in storage caddies, coat hooks & handcrafted timber ladders',
          'Backed by 1 Full Bath + 1 Three-Quarter Bath on the same floor',
        ],
      },
    ],
  },
  {
    id: 'bonus',
    label: 'Bonus Sleeping',
    floorTitle: 'Flexible Overflow Sleeping for 20+ Guests & Infants',
    bathSummary: 'Access to All 4 Lodge Bathrooms',
    totalSleepsText: 'Up to +4 Additional Guests + Infant Pack ’n Play',
    description:
      'Every reunion has flexible group dynamics. West View Lodge includes comfortable bonus sleeping options so every guest has a dedicated place to rest.',
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
          'Plush emerald velvet fold-out sofa in the private gaming nook',
          'Large wall-mounted TV & retro gaming console access',
          'Sliding glass door leading directly to the covered hot tub patio',
        ],
      },
      {
        id: 'air-mattresses-pack-n-play',
        name: 'Queen & Twin Air Mattresses + Pack ’n Play',
        subtitle: 'Flexible Placement Across 4,300 Sq. Ft.',
        bedType: '1 Queen Air Mattress + 1 Twin Air Mattress + Pack ’n Play',
        sleeps: 'Sleeps 3 + Infant',
        view: 'Flexible Setup',
        image: '/images/photo-74.jpg',
        highlights: [
          '1 Queen air mattress + 1 Twin air mattress with extra linens & pillows',
          'Pack ’n Play portable crib for babies and toddlers',
          'Two distinct gaming & puzzle nooks for kids and teens to spread out',
        ],
      },
    ],
  },
];

export const GROUP_BENTO_FEATURES = [
  {
    id: 'kitchens',
    eyebrow: 'Culinary & Feasts for 20+',
    title: 'Two Full Kitchens + 4-Burner Blackstone Deck Griddle',
    description:
      'Never bottleneck meal prep again. The main gourmet kitchen is stocked for waffles, smoothies, coffee bars, and holiday turkeys, while the lower-level second kitchen adds a second full-size fridge, range, and microwave right by the rec room and lake patio.',
    bullets: [
      'Main Kitchen: French-door fridge, granite island, dual Cuisinart drip/pod coffee bar',
      'Lower Kitchen: 2nd full refrigerator, oven/range, microwave & drink prep',
      'Outdoor Deck: 4-burner Blackstone flat-top griddle + stainless Weber GS4 gas grill',
      'Dual dining room tables + island barstools + shaded lakefront deck dining',
    ],
    primaryImage: '/images/photo-39.jpg',
    secondaryImage: '/images/photo-36.jpg',
    tertiaryImage: '/images/photo-60.jpg',
  },
  {
    id: 'after-dark',
    eyebrow: 'Golden Hour & Starlight',
    title: 'Covered Lake-View Hot Tub & 14-Chair Waterfront Fire Pit',
    description:
      'Transition from afternoon paddleboarding to evening relaxation. Soak in the bubbling hot tub beneath string lights or gather your entire group around the lakeside brick wood-burning fire pit.',
    bullets: [
      'Covered lake-view hot tub looking straight down the private dock',
      'Waterfront wood-burning brick fire pit surrounded by 14 Adirondack chairs',
      'Woven basket of plush outdoor s’mores blankets by the patio door',
      'Illuminated private dock for stargazing over Big Lake',
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
      'Built so every generation has its own hangout zone—whether watching the big game on the 85" screen, playing 8-ball or Texas Hold’em, or battling in giant-scale Tetris.',
    bullets: [
      '85" Smart TV in the lakeview rec room with Xbox 360 Kinect & group games',
      'Regulation pool table + convertible Texas Hold’em poker felt & chip case',
      '2 dedicated gaming nooks: retro video games + under-stairs board game banquette',
      'Giant-scale Tetris & Guess Who, Huksie ring toss, cornhole & Roku TVs in bedrooms',
    ],
    primaryImage: '/images/photo-73.jpg',
    secondaryImage: '/images/photo-07.jpg',
    tertiaryImage: '/images/photo-35.jpg',
  },
  {
    id: 'parking',
    eyebrow: 'Rare Lakefront Logistics',
    title: 'Parking for 9 Vehicles + Dedicated EV Charger',
    description:
      'Unlike most narrow lakefront properties where group parking is a headache, West View Lodge accommodates up to 9 vehicles effortlessly across two driveways and a private 3-bay shop.',
    bullets: [
      '5-car paved main driveway right in front of the lodge entry',
      '3 covered garage bays directly across the street (guests have full access!)',
      '1 Level-2 EV Charger installed inside the across-the-street garage',
      '1 additional covered parking bay next to the across-the-street garage',
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
      'Leave the cars parked and stroll down to this beloved neighborhood landmark (Est. 1992) for burgers, fish & chips, cold drafts, and lively lake-town hospitality.',
    image: '/images/photo-28.jpg',
  },
  {
    timeBadge: '2 Mins Drive',
    title: 'Valley View Farm Stand',
    category: 'Skagit Valley Harvest',
    description:
      'Pick up crisp local produce, seasonal berries, fresh-cut flowers, and autumn pumpkins from our neighboring Skagit Valley farm stand.',
    image: '/images/photo-79.jpg',
  },
  {
    timeBadge: '5 Mins Drive',
    title: 'Walker Valley ORV Area & Forest Trails',
    category: 'Off-Road & Forest Adventure',
    description:
      'Explore towering evergreens and miles of DNR trails in Walker Valley State Forest—just five minutes from the lodge.',
    image: '/images/photo-75.jpg',
  },
  {
    timeBadge: '5 Mins Drive',
    title: 'Big Rock Grocery, Park, Golf & Pickleball',
    category: 'Provisions & Recreation',
    description:
      'Grab ice and provisions at Big Rock Grocery, hike Yudwasta Big Rock Park, play a round at Overlook Golf Course, or hit the Big Rock Pickleball courts.',
    image: '/images/photo-77.jpg',
  },
  {
    timeBadge: '10 Mins Drive',
    title: 'Big Lake Public Boat Launch & Lang’s Pony Farm',
    category: 'Boating & Family Outings',
    description:
      'Launch your trailer boat at the public ramp (10 mins) and pilot it straight to our private dock, or treat the kids to trail rides at Lang’s Horse & Pony Farm.',
    image: '/images/photo-76.jpg',
  },
  {
    timeBadge: '15–60 Mins',
    title: 'Nakashima Barn, La Conner & Mt. Baker',
    category: 'Day Trips & Alpine Skiing',
    description:
      'Walk the Centennial Trail at historic Nakashima Barn, explore downtown Mount Vernon (15m) and waterfront La Conner (30m), or hike & ski Mt. Baker (1 hr).',
    image: '/images/photo-78.jpg',
  },
];

export const HOUSE_ESSENTIALS_ACCORDION = [
  {
    id: 'stocked-starters',
    title: 'Complimentary Stocked Kitchen & Bath Starters',
    subtitle: 'Arrive and relax without an immediate grocery run for basics',
    items: [
      'Pantry Staples: Cooking oil, salt & pepper, taco seasoning, garlic powder, sugar, assorted teas, and honey.',
      'Coffee Bar: Ground coffee, coffee filters, and an assortment of Keurig pods for the dual Cuisinart coffee maker.',
      'Kitchen Wraps: Aluminum foil, Glad Press’n Seal, and Ziploc storage bags.',
      'Every Shower Stocked: Full-size pump dispensers of shampoo, conditioner, and body wash in all 4 bathrooms.',
      'Household Starters: Starter rolls of paper towels, toilet paper, trash bags, dish soap, dishwasher pods, and laundry detergent.',
    ],
  },
  {
    id: 'guest-access',
    title: 'Full Private Lodge, Dock & 3-Bay Shop Access',
    subtitle: '100% private resort grounds for your group',
    items: [
      'Complete private access to the 4,300 sq. ft., 3-level lodge, private dock, waterfront lawn, hot tub, and lakeside fire pit.',
      'Full guest access to the 3-bay covered shop/garage across the street (including the EV charger) plus the adjacent covered parking bay.',
      'All watercraft (2 paddle boards, 4 kayaks, 4-person paddle boat, 6’×12’ inflatable dock, 5’×10’ foam water pad, life jackets, and lake towels) are included at no extra charge.',
      'Only 3 clearly marked owner storage closets and the attached house garage remain locked.',
    ],
  },
  {
    id: 'house-policies',
    title: 'Clear House Rules & Good-Neighbor Policies',
    subtitle: 'Protecting the tranquility of Big Lake for everyone',
    items: [
      '1. No Smoking or Vaping Inside: Strictly prohibited anywhere inside the home or garages.',
      '2. No Parties or Undisclosed Events: Only registered guests on the reservation are permitted ($1,000 fine for undisclosed guests or unauthorized parties).',
      '3. No Pets Permitted: To maintain an allergen-free environment for all guests, pets are not allowed ($500 fee per undisclosed animal).',
      'Seasonal Waterfront Note: As an authentic Pacific Northwest lakefront property, natural beach, lake water levels, aquatic plant life, and weather conditions vary by season.',
    ],
  },
];
