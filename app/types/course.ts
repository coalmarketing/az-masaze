export type Term = {
  id: string;
  startDate: string;
  endDate: string;
  location: string;
  schedule: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  examPrice: {
    schoolAlumni: number;
    otherAlumni: number;
  };
  requirements: string[];
  items: string[];
  duration: string;
  note?: string;
  terms?: Term[];
};

export const courses: Course[] = [
  {
    id: "masersky-kurz-rekvalifikacni",
    title: "MASÉRSKÝ KURZ REKVALIFIKAČNÍ",
    description: "Základní masérský kurz. Masér pro sportovní a rekondiční masáže.",
    image: "/header_img.jpg",
    price: 9900,
    examPrice: {
      schoolAlumni: 2500,
      otherAlumni: 3000
    },
    requirements: [
      "věk min. 18 let",
      "ukončený 1 rok SŠ či učiliště",
      "dobrý zdravotní stav, bezinfekčnost"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník, mýdlo",
      "masérské oblečení (triko, tepláky a přezůvky)",
      "napínací prostěradlo (1 lůžko)"
    ],
    duration: "18 vyučovacích hodin",
    note: "POZOR! - pro evidované uchazeče o zaměstnání možnost úhrady kurzu úřadem práce! (po individuálním schválení vaším úřadem práce)",
    terms: [
      {
        id: "ct-1",
        startDate: "22. 2.",
        endDate: "6. 4. 2025",
        location: "Česká Třebová",
        schedule: "vždy so + ne (9:00 - 18:00), 2x pá (16:00 - 21:00)"
      },
      {
        id: "pardubice-1",
        startDate: "3. 5.",
        endDate: "8. 6. 2025",
        location: "Pardubice",
        schedule: "vždy so + ne (9:00 - 18:00), 2x pá (16:00 - 21:00)"
      },
      {
        id: "trutnov-1",
        startDate: "19. 7.",
        endDate: "24. 8. 2025",
        location: "Trutnov",
        schedule: "vždy so + ne (9:00 - 18:00), 2x pá (16:00 - 21:00)"
      },
      {
        id: "pardubice-2",
        startDate: "7. 10.",
        endDate: "20. 11. 2025",
        location: "Pardubice",
        schedule: "vždy so + ne (9:00 - 18:00), 2x pá (16:00 - 21:00)"
      },
      {
        id: "ct-2",
        startDate: "11. 10.",
        endDate: "16. 11. 2025",
        location: "Česká Třebová",
        schedule: "vždy so + ne (9:00 - 18:00), 2x pá (16:00 - 21:00)"
      }
    ]
  },
  {
    id: "zaklady-mekkych-a-trakcnich-tkani",
    title: "ZÁKLADY MĚKKÝCH A TRAKČNÍCH TKÁNÍ",
    description: "Kurz zaměřený na techniky měkkých tkání a trakční metody.",
    image: "/header_img.jpg",
    price: 4900,
    examPrice: {
      schoolAlumni: 1500,
      otherAlumni: 2000
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav, bezinfekčnost"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník, mýdlo",
      "pohodlné oblečení"
    ],
    duration: "12 vyučovacích hodin"
  },
  {
    id: "dornova-metoda",
    title: "DORNOVA METODA",
    description: "Manuální terapie pro úpravu posunutých obratlů a kloubů.",
    image: "/header_img.jpg",
    price: 3900,
    examPrice: {
      schoolAlumni: 1200,
      otherAlumni: 1800
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "pohodlné oblečení"
    ],
    duration: "8 vyučovacích hodin"
  },
  {
    id: "bankovani",
    title: "BAŇKOVÁNÍ",
    description: "Tradiční metoda používající podtlaku pro zlepšení cirkulace a uvolnění svalů.",
    image: "/header_img.jpg",
    price: 2900,
    examPrice: {
      schoolAlumni: 1000,
      otherAlumni: 1500
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "6 vyučovacích hodin"
  },
  {
    id: "reflexni-masaz-plosky-nohou",
    title: "REFLEXNÍ MASÁŽ PLOSKY NOHOU",
    description: "Technika zaměřená na reflexní body na chodidlech.",
    image: "/header_img.jpg",
    price: 3500,
    examPrice: {
      schoolAlumni: 1200,
      otherAlumni: 1700
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "10 vyučovacích hodin"
  },
  {
    id: "lymfomasaz",
    title: "LYMFOMASÁŽ",
    description: "Jemná masážní technika zaměřená na podporu lymfatického systému.",
    image: "/header_img.jpg",
    price: 3800,
    examPrice: {
      schoolAlumni: 1300,
      otherAlumni: 1800
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "12 vyučovacích hodin"
  },
  {
    id: "dechova-terapie",
    title: "DECHOVÁ TERAPIE A MASÁŽ MOLITANOVÝMI MÍČKY",
    description: "Techniky dechové terapie a speciální masáž pomocí molitanových míčků.",
    image: "/header_img.jpg",
    price: 3200,
    examPrice: {
      schoolAlumni: 1100,
      otherAlumni: 1600
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "pohodlné oblečení"
    ],
    duration: "8 vyučovacích hodin"
  },
  {
    id: "cviceni-podle-mojzisove",
    title: "CVIČENÍ PODLE L MOJŽÍŠOVÉ",
    description: "Rehabilitační cvičení podle metodiky Ludmily Mojžíšové.",
    image: "/header_img.jpg",
    price: 3500,
    examPrice: {
      schoolAlumni: 1200,
      otherAlumni: 1700
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "sportovní oblečení",
      "ručník nebo podložka na cvičení"
    ],
    duration: "10 vyučovacích hodin"
  },
  {
    id: "protimigrenova-masaz",
    title: "PROTIMIGRENOVÁ MASÁŽ",
    description: "Specializovaná masáž zaměřená na prevenci a úlevu od migrén.",
    image: "/header_img.jpg",
    price: 2800,
    examPrice: {
      schoolAlumni: 1000,
      otherAlumni: 1500
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "6 vyučovacích hodin"
  },
  {
    id: "lavove-kameny",
    title: "LÁVOVÉ KAMENY",
    description: "Relaxační masáž s použitím horkých lávových kamenů.",
    image: "/header_img.jpg",
    price: 3600,
    examPrice: {
      schoolAlumni: 1200,
      otherAlumni: 1700
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "8 vyučovacích hodin"
  },
  {
    id: "havajska-masaz",
    title: "HAVAJSKÁ MASÁŽ",
    description: "Tradiční havajská masáž Lomi Lomi s plynulými pohyby předloktí.",
    image: "/header_img.jpg",
    price: 3900,
    examPrice: {
      schoolAlumni: 1300,
      otherAlumni: 1800
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "10 vyučovacích hodin"
  },
  {
    id: "tehotenska-relaxacni-masaz",
    title: "TĚHOTENSKÁ RELAXAČNÍ MASÁŽ",
    description: "Jemná masáž určená pro těhotné ženy, zaměřená na uvolnění a relaxaci.",
    image: "/header_img.jpg",
    price: 3200,
    examPrice: {
      schoolAlumni: 1100,
      otherAlumni: 1600
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "8 vyučovacích hodin"
  },
  {
    id: "kinesiology-taping",
    title: "KINESIOLOGY TAPING",
    description: "Tejpovací metoda podporující pohybový aparát a proces hojení.",
    image: "/header_img.jpg",
    price: 2900,
    examPrice: {
      schoolAlumni: 1000,
      otherAlumni: 1500
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "pohodlné oblečení"
    ],
    duration: "6 vyučovacích hodin"
  },
  {
    id: "trigger-points",
    title: "TRIGGER POINTS – SPOUŠŤOVÉ BODY",
    description: "Technika zaměřená na uvolnění spoušťových bodů ve svalech.",
    image: "/header_img.jpg",
    price: 3400,
    examPrice: {
      schoolAlumni: 1200,
      otherAlumni: 1700
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "ručník",
      "pohodlné oblečení"
    ],
    duration: "8 vyučovacích hodin"
  },
  {
    id: "shiatsu-masazni-techniky",
    title: "SHIATSU - MASÁŽNÍ TECHNIKY",
    description: "Japonská terapeutická metoda pracující s energetickými drahami.",
    image: "/header_img.jpg",
    price: 3700,
    examPrice: {
      schoolAlumni: 1300,
      otherAlumni: 1800
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "pohodlné oblečení",
      "podložka na cvičení"
    ],
    duration: "10 vyučovacích hodin"
  },
  {
    id: "telo-bez-bolesti",
    title: "TĚLO BEZ BOLESTI",
    description: "Komplexní přístup k odstranění bolestí pohybového aparátu.",
    image: "/header_img.jpg",
    price: 3800,
    examPrice: {
      schoolAlumni: 1300,
      otherAlumni: 1800
    },
    requirements: [
      "věk min. 18 let",
      "dobrý zdravotní stav"
    ],
    items: [
      "sešit, psací potřeby",
      "pohodlné oblečení",
      "ručník nebo podložka na cvičení"
    ],
    duration: "12 vyučovacích hodin"
  }
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getAllCourses(): Course[] {
  return courses;
} 