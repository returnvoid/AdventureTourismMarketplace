db.operators.insert([
  {
    name: 'Vancouver Water Adventures',
    address1: '1812 Boatlift Ln',
    city: 'Vancouver',
    province: 'BC',
    phoneNumber: '604-859-9876',
    tags: [
      'Outdoor',
      'Water'
    ],
  },
  {
    name: 'Kayak Vancouver',
    address1: '1295 Richards St',
    city: 'Vancouver',
    province: 'BC',
    phoneNumber: '604-859-5555',
    tags: [
      'Outdoor',
      'Water'
    ]
  }
]);

db.tours.insert([
  {
    operator_id: db.operators.find({name: 'Sea Dragon Charters'})[0]._id,
    name: 'Snorkel and Kayak Adventure',
    prices: [
      {
        name: 'Adult',
        priceInCents: '9500'
      },
      {
        name: 'Senior',
        priceInCents: '7500'
      },
      {
        name: 'Child',
        priceInCents: '7500'
      },
      {
        name: 'Infant',
        priceInCents: '0'
      },
      {
        name: 'Sightseeing Only',
        priceInCents: '7500',
        primaryPrice: true
      },
    ],
    timing: [
      {
        dayOfWeek: 1,
        startHour: 9,
        startMinute: 0
      },
      {
        dayOfWeek: 2,
        startHour: 9,
        startMinute: 0
      },
      {
        dayOfWeek: 3,
        startHour: 9,
        startMinute: 0
      },
      {
        dayOfWeek: 4,
        startHour: 9,
        startMinute: 0
      },
      {
        dayOfWeek: 5,
        startHour: 9,
        startMinute: 0
      },
      {
        dayOfWeek: 6,
        startHour: 9,
        startMinute: 0
      },
      {
        dayOfWeek: 7,
        startHour: 9,
        startMinute: 0
      },
    ],
    lengthInMinutes: 300,
    highlights: [
      'Travel by boat and see the Pacific Northwest by water',
      'See native wildlife in their natural habitat',
      'Informative, friendly, and professional guides',
      'Snorkeling kit, wetsuit and all kayak gear included',
      'Hot drinks and snacks included',
      'Non-snorkeler ride along option available',
      'No experience necessary',
    ],
    requirements: [
      'Guests must be able to swim confidently',
      'Children must be accompanied by parent or guardian (including in-water)',
      'Minors under 19 must have waiver signed by parent or guardian before boarding',
      'Not recommended for participants with heart complaints or serious medical conditions',
      'Operates in all weather conditions, please dress appropriately',
    ],
    imageUrl: ''
  },
  {
    operator_id: db.operators.find({name: 'Vancouver Water Adventures'})[0]._id,
    name: '2 Hour Kayak Rental',
    prices: [
      {
        name: '2-person Kayak',
        priceInCents: '4000'
      },
      {
        name: '1-person Kayak',
        priceInCents: '3000'
        primaryPrice: true,
      },
    ],
    lengthInMinutes: 120,
    summaryDescription: 'The funnest 2 hours you will have in your life',
    imageUrl: '',
  }
]);

db.users.insert([
  {
    firstName: 'Jenny',
    lastName: 'Chan',
    email: 'jenny@jennychan.com',
    username: 'jenny',
    points: 1000,
    wishlistsCreated: [],
    wishlistsJoined: [],
  },
  {
    firstName: 'Mary',
    lastName: 'Poppins',
    email: 'mary@marypoppins.com',
    username: 'mary',
    points: 2000,
    wishlistsCreated: [],
    wishlistsJoined: [],
  }
]);

db.wishlists.insert([
  {
    name: 'Thanksgiving Weekend',
    users: [
      {
        creator: true,
        id: db.users.find({email: 'mary@marypoppins.com'})[0]._id
      },
      {
        id: db.users.find({email: 'jenny@jennychan.com'})[0]._id
      }
    ],
    tours: [
      db.tours.find({name: '2 Hour Kayak Rental'})[0]._id,
      db.tours.find({name: 'Snorkel and Kayak Adventure'})[0]._id,
    ]
  },
]);
