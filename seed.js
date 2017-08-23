const mongoose = require('./mongoose');
const Athlete = require('./mongo-models/Athlete');
const Performance = require('./mongo-models/Performance');

const athletes = [
  {
    firstname: 'Christian',
    lastname: 'Coleman',
    country: 'USA',
    birth: new Date(1996, 02, 06),
    sb: [
      {field: '100m', perf: 9.82},
      {field: '200m', perf: 19.85}
    ],
    pb: [
      {field: '100m', perf: 9.82},
      {field: '200m', perf: 19.85}
    ],
  },
  {
    firstname: 'Yohan',
    lastname: 'Blake',
    country: 'JAM',
    birth: new Date(1989, 11, 26),
    sb: [
      {field: '100m', perf: 9.90}
    ],
    pb: [
      {field: '100m', perf: 9.69},
      {field: '200m', perf: 19.26},
      {field: '400m', perf: 46.49}
    ]
  },
  {
    firstname: 'Akani',
    lastname: 'Simbine',
    country: 'RSA',
    birth: new Date(1993, 08, 21),
    sb: [
      {field: '100m', perf: 9.92}
    ],
    pb: [
      {field: '100m', perf: 9.89},
      {field: '200m', perf: 19.95}
    ]
  },{
    firstname: 'Isaac',
    lastname: 'Makwala',
    country: 'BOT',
    birth: new Date(1986, 08, 29),
    sb: [
      {field: '200m', perf: 19.77},
      {field: '400m', perf: 43.84}
    ],
    pb: [
      {field: '100m', perf: 10.20},
      {field: '200m', perf: 19.77},
      {field: '300m', perf: 31.44},
      {field: '400m', perf: 43.72}
    ]
  },
  {
    firstname: 'Wayde',
    lastname: 'Van Niekerk',
    country: 'RSA',
    birth: new Date(1992, 06, 15),
    sb: [
      {field: '200m', perf: 19.84},
      {field: '400m', perf: 43.62}
    ],
    pb: [
      {field: '100m', perf: 9.94},
      {field: '200m', perf: 19.84},
      {field: '300m', perf: 30.81},
      {field: '400m', perf: 43.03}
    ]
  },
  {
    firstname: 'Fred',
    lastname: 'Kerley',
    country: 'USA',
    birth: new Date(1995, 04, 07),
    sb: [
      {field: '400m', perf: 43.70}
    ],
    pb: [
      {field: '200m', perf: 20.24},
      {field: '400m', perf: 43.70}
    ]
  }
];

Athlete.insertMany(athletes).then(athls => {
  const perfsOfTheYear = athls.reduce((acc, athl) => {
    for (const perf of athl.sb) {
      const field = perf['field'];
      if (!acc[field]) {
        acc[field] = [athl._id];
      } else {
        acc[field].push(athl._id);
      }
    }
    return acc;
  }, {});

  console.log(perfsOfTheYear);

  for (const perf in perfsOfTheYear) {
    const p = new Performance({'field': perf, 'athletes': perfsOfTheYear[perf]});
    p.save().catch(err => console.log(err));
  }
}).catch(err => console.log(err));

process.exit(0);
