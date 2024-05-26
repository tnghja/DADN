import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Tran Duy Truong",
    email: "tdt3112@gmail.com",
    age: 20,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    email: "bnv2@gmail.com",
    age: 22,
    phone: "(421)314-2288",
    access: "admin",
  },
  {
    id: 3,
    name: "Nguyen Thi D",
    email: "ntd1@gmail.com",
    age: 21,
    phone: "(422)982-6739",
    access: "manager",
  },
  {
    id: 4,
    name: "Nguyen Van C",
    email: "nvc2@gmail.com",
    age: 20,
    phone: "(921)425-6742",
    access: "manager",
  },
  {
    id: 5,
    name: "Vu Thi H",
    email: "vth@gmail.com",
    age: 21,
    phone: "(421)445-1189",
    access: "admin",
  },
  {
    id: 6,
    name: "Le Thi A",
    email: "lta2@gmail.com",
    age: 20,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Tran Ba D",
    email: "tbd2@gmail.com",
    age: 24,
    phone: "(543)124-0123",
    access: "manager",
  },
  {
    id: 8,
    name: "Nguyen Huu A",
    email: "nha2@gmail.com",
    age: 26,
    phone: "(222)444-5555",
    access: "manager",
  },
  {
    id: 9,
    name: "Tran Van D",
    email: "tvd2@gmail.com",
    age: 25,
    phone: "(444)555-6239",
    access: "manager",
  },
];

export var mockDataContacts = [];

// const contactsApi = 'http://localhost:4000/devices';

// fetch(contactsApi)
//   .then(resp => resp.json())
//   .then(data => {
//     mockDataContacts = data; // Assign fetched data to mockDataContacts
//   })
//   .catch(error => console.error('Error fetching data:', error));

export var mockDataCalendar = [
    {
    id: "12315",
    title: "H1-306: PPL",
    date: "2024-04-21T12:00:00",
    room: 306,
    building:"H1"
  },
  {
    id: "5123",
    title: "H1-310: LTW",
    date: "2024-04-13T10:00:00",
    room: 310,
    building:"H1"
  },
  {
    id: "5143",
    title: "H1-301: DSA",
    date: "2024-04-15T07:00:00",
    room: 301,
    building:"H1"
  }
  ];

// const calendarApi = 'http://localhost:3000/events';

// fetch(calendarApi)
//   .then(resp => resp.json())
//   .then(data => {
//     mockDataCalendar = data; 
//   })
//   .catch(error => console.error('Error fetching data:', error));



  export var mockDataRoom = [ { id: "1",building: "H1" ,roomNumber: 310 ,detail: "info" },
    { id: 2, building: "H1", roomNumber: 301, detail: "info" },
    { id: 3,building: "H1" ,roomNumber: 306 ,detail: "info"}];

// const roomApi = 'http://localhost:3000/rooms';

// fetch(roomApi)
//   .then(resp => resp.json())
//   .then(data => {
//     mockDataRoom = data; 
//   })
//   .catch(error => console.error('Error fetching data:', error));

// export const mockDataContacts = [
  // {
  //   id: 1,
  //   name: "Jon Snow",
  //   email: "jonsnow@gmail.com",
  //   age: 35,
  //   phone: "(665)121-5454",
  //   address: "0912 Won Street, Alabama, SY 10001",
  //   city: "New York",
  //   zipCode: "10001",
  //   registrarId: 123512,
  // },
//   {
//     id: 2,
//     name: "Cersei Lannister",
//     email: "cerseilannister@gmail.com",
//     age: 42,
//     phone: "(421)314-2288",
//     address: "1234 Main Street, New York, NY 10001",
//     city: "New York",
//     zipCode: "13151",
//     registrarId: 123512,
//   },
//   {
//     id: 3,
//     name: "Jaime Lannister",
//     email: "jaimelannister@gmail.com",
//     age: 45,
//     phone: "(422)982-6739",
//     address: "3333 Want Blvd, Estanza, NAY 42125",
//     city: "New York",
//     zipCode: "87281",
//     registrarId: 4132513,
//   },
//   {
//     id: 4,
//     name: "Anya Stark",
//     email: "anyastark@gmail.com",
//     age: 16,
//     phone: "(921)425-6742",
//     address: "1514 Main Street, New York, NY 22298",
//     city: "New York",
//     zipCode: "15551",
//     registrarId: 123512,
//   },
//   {
//     id: 5,
//     name: "Daenerys Targaryen",
//     email: "daenerystargaryen@gmail.com",
//     age: 31,
//     phone: "(421)445-1189",
//     address: "11122 Welping Ave, Tenting, CD 21321",
//     city: "Tenting",
//     zipCode: "14215",
//     registrarId: 123512,
//   },
//   {
//     id: 6,
//     name: "Ever Melisandre",
//     email: "evermelisandre@gmail.com",
//     age: 150,
//     phone: "(232)545-6483",
//     address: "1234 Canvile Street, Esvazark, NY 10001",
//     city: "Esvazark",
//     zipCode: "10001",
//     registrarId: 123512,
//   },
//   {
//     id: 7,
//     name: "Ferrara Clifford",
//     email: "ferraraclifford@gmail.com",
//     age: 44,
//     phone: "(543)124-0123",
//     address: "22215 Super Street, Everting, ZO 515234",
//     city: "Evertin",
//     zipCode: "51523",
//     registrarId: 123512,
//   },
//   {
//     id: 8,
//     name: "Rossini Frances",
//     email: "rossinifrances@gmail.com",
//     age: 36,
//     phone: "(222)444-5555",
//     address: "4123 Ever Blvd, Wentington, AD 142213",
//     city: "Esteras",
//     zipCode: "44215",
//     registrarId: 512315,
//   },
//   {
//     id: 9,
//     name: "Harvey Roxie",
//     email: "harveyroxie@gmail.com",
//     age: 65,
//     phone: "(444)555-6239",
//     address: "51234 Avery Street, Cantory, ND 212412",
//     city: "Colunza",
//     zipCode: "111234",
//     registrarId: 928397,
//   },
//   {
//     id: 10,
//     name: "Enteri Redack",
//     email: "enteriredack@gmail.com",
//     age: 42,
//     phone: "(222)444-5555",
//     address: "4123 Easer Blvd, Wentington, AD 142213",
//     city: "Esteras",
//     zipCode: "44215",
//     registrarId: 533215,
//   },
//   {
//     id: 11,
//     name: "Steve Goodman",
//     email: "stevegoodmane@gmail.com",
//     age: 11,
//     phone: "(444)555-6239",
//     address: "51234 Fiveton Street, CunFory, ND 212412",
//     city: "Colunza",
//     zipCode: "1234",
//     registrarId: 92197,
//   },
// ];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "Fan",
    date: "2023-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "Lightpub",
    date: "2023-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "Air-cond",
    date: "2023-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "Lightpub",
    date: "2023-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "Air-cond",
    date: "2023-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "Projector",
    date: "2023-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "Projector",
    date: "2024-03-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "Desktop",
    date: "2024-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "H1",
    "T1": 137,
    "T1Color": "hsl(229, 70%, 50%)",
    T2: 96,
    T2Color: "hsl(296, 70%, 50%)",
    T3: 72,
    T3Color: "hsl(97, 70%, 50%)",
    T4: 140,
    T4Color: "hsl(340, 70%, 50%)",
  },
  {
    country: "H2",
    "T1": 55,
    "T1Color": "hsl(307, 70%, 50%)",
    T2: 28,
    T2Color: "hsl(111, 70%, 50%)",
    T3: 58,
    T3Color: "hsl(273, 70%, 50%)",
    T4: 29,
    T4Color: "hsl(275, 70%, 50%)",
  },
  {
    country: "H3",
    "T1": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    T2: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    T3: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    T6: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "H6",
    "T1": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    T5: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    T3: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    T4: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "H1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Jan",
        y: 101,
      },
      {
        x: "Feb",
        y: 75,
      },
      {
        x: "Mar",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "Aug",
        y: 232,
      },
      {
        x: "Sep",
        y: 281,
      },
      {
        x: "Oct",
        y: 1,
      },
      {
        x: "Nov",
        y: 35,
      },
      {
        x: "Dec",
        y: 14,
      },
    ],
  },
  {
    id: "H2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Jan",
        y: 212,
      },
      {
        x: "Feb",
        y: 190,
      },
      {
        x: "Mar",
        y: 270,
      },
      {
        x: "April",
        y: 9,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 175,
      },
      {
        x: "July",
        y: 33,
      },
      {
        x: "Aug",
        y: 189,
      },
      {
        x: "Sep",
        y: 97,
      },
      {
        x: "Oct",
        y: 87,
      },
      {
        x: "Nov",
        y: 299,
      },
      {
        x: "Dec",
        y: 251,
      },
    ],
  },
  {
    id: "H3",
    color: tokens("dark").redAccent[200],
    data: [
       {
        x: "Jan",
        y: 230,
      },
      {
        x: "Feb",
        y: 150,
      },
      {
        x: "Mar",
        y: 220,
      },
      {
        x: "April",
        y: 20,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 165,
      },
      {
        x: "July",
        y: 53,
      },
      {
        x: "Aug",
        y: 139,
      },
      {
        x: "Sep",
        y: 120,
      },
      {
        x: "Oct",
        y: 47,
      },
      {
        x: "Nov",
        y: 199,
      },
      {
        x: "Dec",
        y: 151,
      },
    ],
  },
  {
    id: "H6",
    color: tokens("dark").redAccent[500],
    data: [
      {
        x: "Jan",
        y: 123,
      },
      {
        x: "Feb",
        y: 251,
      },
      {
        x: "Mar",
        y: 26,
      },
      {
        x: "April",
        y: 39,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 58,
      },
      {
        x: "July",
        y: 130,
      },
      {
        x: "Aug",
        y: 250,
      },
      {
        x: "Sep",
        y: 133,
      },
      {
        x: "Oct",
        y: 187,
      },
      {
        x: "Nov",
        y: 263,
      },
      {
        x: "Dec",
        y: 15,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
