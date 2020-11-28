export default {
  home: 'About me',
  computerScientist: 'Computer scientist',
  cv: {
    get: 'Download my cv',
    education: {
      title: 'Education',

      ru: {
        title: 'Reykjavík University',
        year: '2017-2020',
        body: 'BSc in Computer Science. Elective focus on courses in web application development and backend solutions'
      },

      hi: {
        title: 'University of Iceland',
        year: '2013-2015',
        body: 'Coursework in Computer Science'
      },

      ma: {
        title: 'Akureyri Junior College',
        year: '2008-2012',
        body: 'Matriculation examination in Natural Sciences with a focus on mathematics'
      }
    },

    work: {
      title: 'Work Experience',

      showdeck: {
        title: 'Full Stack Developer at Showdeck',
        year: 'June 2020 - September 2020',
        body: 'Wrote NodeJS and Django server code. Configured and maintained GraphQL as a data transfer layer between the two backends. Maintained and extended a Vue frontend that consumed the GraphQL endpoints. Configured a tree structure for relational data to allow recursive data definitions'
      },

      assistant: {
        title: 'Teacher\'s Assistant in Computer Architechture at RU',
        year: 'August 2018 - December 2018',
        body: 'Taught fundamental operations of a computer, how and why the CPU works, reading and debugging x86_64 assembly code, program flow (register, cache, RAM etc) and finally how to operate the GNU/Linux command line'
      }
    }
  },

  poemGenerator: {
    title: 'Poem generator',
    new: 'New poem',
    four: 'Four bars',
    haiku: 'Haiku',
    syllables: 'syllables'
  },

  rhymingDictionary: {
    title: 'Rhyming dictionary',
    noComplete: 'No complete rhymes found, showing half-rhymes',
    noResults: 'No results',
    rhymeQuery: 'Rhyme query',
    syllabl: 'syllable',
    plur: 's',
    sing: ''
  },

  anagrams: {
    title: 'Anagrams',
    nores: 'No results',
    query: 'Find anagrams for...',
    aboutTitle: 'About anagrams',
    about: 'Write a sentence, max 30 characters long. The program will attempt to create new sentences that contain all the same letters. The search space becomes large quickly and therefore the program handles results in a random manner. This means that you can try again for the same sentence and get different results.'
  }
}
