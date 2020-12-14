export default {
  home: 'Um mig',
  computerScientist: 'Tölvunarfræðingur',
  cv: {
    get: 'Hlaða niður ferilskrá',
    education: {
      title: 'Menntun',

      ru: {
        title: 'Háskólinn í Reykjavík',
        year: '2017-2020',
        body: 'BSc í tölvunarfræði. Áhersla valáfanga í vefforritun og bakendalausnum'
      },

      hi: {
        title: 'Háskóli Íslands',
        year: '2013-2015',
        body: 'Áfangavinna í tölvunarfræði'
      },

      ma: {
        title: 'Menntaskólinn á Akureyri',
        year: '2008-2012',
        body: 'Stúdentspróf í raungreinum með áherslu á stærðfræði'
      }
    },

    work: {
      title: 'Reynsla',

      showdeck: {
        title: 'Full Stack Developer hjá Showdeck',
        year: 'Júní 2020 - September 2020',
        body: 'Skrifaði NodeJS og Django server kóða. Setti upp og viðhélt GraphQL sem gagnaflutningslagi á milli bakendanna. Viðhélt og útfærði Vue framenda sem átti samskipti við GraphQL. Setti upp tréstrúktúr fyrir vensluð gögn sem leyfði endurkvæmar gagnaskilgreiningar'
      },

      assistant: {
        title: 'Aðstoðarkennari í tölvuhögun hjá HR',
        year: 'Ágúst 2018 - Desember 2018',
        body: 'Kenndi grunnvirkni tölva, hvernig og hví örgjörvar virka, lesa og kemba villur í x86_64 assembly, flæði forrita (register, cache, RAM o.sv.frv) og hvernig á að nota GNU/Linux skipanalínuna'
      }
    }
  },

  poemGenerator: {
    title: 'Ljóðaskapari',
    new: 'Nýtt ljóð',
    four: 'Jöfn ferskeytla',
    haiku: 'Haiku',
    syllables: 'atkvæði',
    aboutTitle: 'Um ljóðaskaparann',
    about: 'Ég skrapaði allar smásögurnar af huga.is með beautifulsoup. Þessum smásögum er síðan hlaðið inn í Markov-keðju \'generator\'. Fyrir ferskeytlurnar nota ég síðan rímorðaskriftuna mína til að bera kennsl á rímorð í enda setninga. Sökum uppruna efnisins verða ljóðin misgóð'
  },

  rhymingDictionary: {
    title: 'Rímorðabók',
    noComplete: 'Engin alrím fundust, sýni hálfrím',
    noResults: 'Engar niðurstöður',
    rhymeQuery: 'Rímorð',
    syllabl: 'sérhljóð',
    plur: 'ar',
    sing: 'i',
    aboutTitle: 'Um rímorðabókina',
    about: 'Sláðu inn orð til að finna rímorðin fyrir það. Ég skrifaði skriftu til að greina rætur orða m.t.t íslenskra sérhljóða. Ég setti síðan upp gagnagrunn með fyrirfram reiknuðum rótum. Þessar rætur eru bornar saman og þannig fást rímorð. Orðabókin sem ég notaði var fengin af foo.is/ord'
  },

  anagrams: {
    title: 'Endurumraðanir',
    nores: 'Engar niðurstöður',
    query: 'Finna endurumraðanir fyrir...',
    aboutTitle: 'Um endurumraðanir',
    about: 'Skrifaðu inn setningu að hámarki 30 stafir að lengd. Forritið mun reyna að búa til nýjar setningar sem innihalda alla sömu stafina. Útkomurými er stórt og þess vegna ræðst forritið á vandamálið á handahófskenndan máta. Hægt er að prófa aftur fyrir sömu setningu og fá mismunandi reiknaðar niðurstöður'
  },

  skills: {
    title: 'Hæfileikar',

    programming: 'Forritun',
    frameworks: 'Forritunarrammar',
    other: 'Annað',

    // Other talents after this comment
    Drums: 'Trommur',
    Piano: 'Píanó',
    DAW: 'DAW',
    VA: 'Raddleikur og upplestur',
    Stargazing: 'Stjörnuskoðunar-leiðsögumaður',
    Singing: 'Söngur',
    Bricking: 'Brikka tölvuna við að distrohoppa ;)',
    Server: 'Umsjón netþjóna'
  }
}
