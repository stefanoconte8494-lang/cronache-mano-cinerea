import sszaraImage from '../assets/characters/sszara.jpeg'

export const characters = [
  {
    id: 'jelly',
    name: 'Jelly',
    player: 'Mirko F.',
    race: 'Plasmoide',
    epithet: 'Figlio del grembo di vetro',
    status: 'Attivo',
    symbol: '◉',
  },
  {
    id: 'ian',
    name: 'Octavian “Ian” Ashvale',
    player: 'Luca M.',
    race: 'Umano',
    epithet: 'Guardiano seguito dall’eco',
    status: 'Attivo',
    symbol: '⚔',
  },
  {
    id: 'brewen',
    name: 'Brewen Dolce Mosto',
    player: 'Johnatan R.',
    race: 'Goliath',
    epithet: 'Muro di muscoli',
    status: 'Attivo',
    symbol: '⚒',
  },
  {
    id: 'zero',
    name: 'Zerion “Zero” Zauryl',
    player: 'Eugenio S.',
    race: 'Sconosciuta',
    epithet: 'Rinnegatore dello sciame',
    status: 'Attivo',
    symbol: '✦',
  },
  {
    id: 'sszara',
    name: 'Sszara Sweetlight',
    player: 'Stefano C.',
    race: 'Yuan-Ti',
    alignment: 'Neutrale Buona',
    classSummary: 'Druida 2 · Chierica 6',
    subclassSummary: 'Circolo delle Stelle · Dominio della Vita',
    background: 'Rovinato',
    epithet: 'Sacerdotessa delle stelle',
    status: 'Attivo',
    symbol: '✣',
    image: sszaraImage,
    quote:
      'Interpreto ogni evento come parte di uno schema più ampio che non sono ancora riuscita a decifrare.',
    biography:
      'Sszara Sweetlight è il nuovo sangue della Mano Cinerea: una Yuan-Ti legata al potere delle stelle, alla magia curativa e a forze più antiche e pericolose. Entra nella compagnia durante la Sessione 40, portando con sé una natura silenziosa, introversa e un potere capace di piegare la guarigione verso qualcosa di molto più rischioso.',
    stats: [
      { label: 'CA', value: '21' },
      { label: 'Iniziativa', value: '+2' },
      { label: 'PF massimi', value: '75' },
      { label: 'CD incantesimi', value: '16' },
      { label: 'Attacco incantesimi', value: '+8' },
      { label: 'Percezione passiva', value: '17' },
    ],
    abilityScores: [
      { label: 'Forza', value: 8, modifier: '-1' },
      { label: 'Destrezza', value: 14, modifier: '+2' },
      { label: 'Costituzione', value: 14, modifier: '+2' },
      { label: 'Intelligenza', value: 12, modifier: '+1' },
      { label: 'Saggezza', value: 18, modifier: '+4' },
      { label: 'Carisma', value: 10, modifier: '+0' },
    ],
    skills: [
      { name: 'Acrobazia', value: '+2' },
      { name: 'Addestrare Animali', value: '+4' },
      { name: 'Arcano', value: '+1' },
      { name: 'Atletica', value: '-1' },
      { name: 'Inganno', value: '+0' },
      { name: 'Storia', value: '+1' },
      { name: 'Intuizione', value: '+7' },
      { name: 'Indagare', value: '+1' },
      { name: 'Medicina', value: '+4' },
      { name: 'Natura', value: '+1' },
      { name: 'Percezione', value: '+7' },
      { name: 'Furtività', value: '+5' },
      { name: 'Sopravvivenza', value: '+7' },
    ],
    features: [
      {
        name: 'Incantesimi Serpentini',
        type: 'Razziale',
        description:
          'Conosce Spruzzo Velenoso. Può lanciare Amicizia con gli Animali sui serpenti e Suggestione tramite il tratto razziale. La caratteristica scelta è Saggezza.',
      },
      {
        name: 'Resistenza alla magia',
        type: 'Razziale',
        description:
          'Dispone di vantaggio ai tiri salvezza contro gli incantesimi.',
      },
      {
        name: 'Resistenza al Veleno',
        type: 'Razziale',
        description:
          'Ha vantaggio sui tiri salvezza contro la condizione avvelenato e possiede resistenza ai danni da veleno.',
      },
      {
        name: 'Scurovisione',
        type: 'Razziale',
        description:
          'Può vedere in condizioni di luce fioca e nell’oscurità fino a 18 metri.',
      },
      {
        name: 'Carta Celeste',
        type: 'Druido · Circolo delle Stelle',
        description:
          'La carta celeste funge da focus da incantatore. Concede Guida, Dardo Tracciante preparato e utilizzi gratuiti di Dardo Tracciante pari al bonus di competenza.',
      },
      {
        name: 'Forma Siderale',
        type: 'Druido · Circolo delle Stelle',
        description:
          'Può spendere un utilizzo di Forma Selvatica per assumere una forma stellare. Può scegliere tra Arciere, Calice e Drago.',
      },
      {
        name: 'Discepolo della Vita',
        type: 'Chierico · Dominio della Vita',
        description:
          'Gli incantesimi di guarigione di 1° livello o superiore ripristinano punti ferita aggiuntivi pari a 2 + il livello dell’incantesimo.',
      },
      {
        name: 'Incanalare Divinità · Preservare la Vita',
        type: 'Chierico',
        description:
          'Può usare Incanalare Divinità per distribuire energia curativa tra creature entro 9 metri.',
      },
      {
        name: 'Guaritore Benedetto',
        type: 'Chierico · Dominio della Vita',
        description:
          'Quando cura un’altra creatura con un incantesimo di 1° livello o superiore, recupera punti ferita pari a 2 + il livello dell’incantesimo.',
      },
      {
        name: 'Contaminazione Fatata',
        type: 'Talento / Tratto speciale',
        description:
          'L’esposizione alla magia fatata ha conferito nuovi incantesimi e un aumento di caratteristica.',
      },
      {
        name: 'Frammento frangi-trama · Sintonia',
        type: 'Oggetto speciale',
        description:
          'Focus arcano +1. Una volta al giorno permette di lanciare Controincantesimo, Dissolvi Magie e Scudo senza consumare slot.',
      },
      {
        name: 'Frammento Meteorico',
        type: 'Oggetto speciale',
        description:
          'Frammento instabile legato al non-luogo. Può potenziare gli effetti magici, ma comporta gravi rischi per il personaggio.',
      },
      {
        name: 'Il Giudizio del Calice · Potere del Visitatore',
        type: 'Potere speciale',
        description:
          'Quando viene lanciato un incantesimo di cura, può lanciare 1d10 e scegliere pari o dispari. Il valore ottenuto viene moltiplicato per 5 e aggiunto alla cura. Se il lancio viene sbagliato, il potere può attingere dalle energie vitali del bersaglio.',
      },
    ],
    spells: [
      {
        level: 'Trucchetti',
        list: [
          'Fiamma Sacra',
          'Frusta di spine',
          'Guida',
          'Luce',
          'Modellare Terra',
          'Randello Incantato',
          'Rintocco dei Morti',
          'Spruzzo Velenoso',
          'Taumaturgia',
        ],
      },
      {
        level: '1° livello',
        list: [
          'Assorbire Elementi',
          'Bacche benefiche',
          'Benedizione',
          'Cura Ferite',
          'Dardo Tracciante',
          'Dono dell’Alacrità',
          'Amicizia con gli animali · Serpenti',
          'Individuazione del magico',
          'Intralciare',
          'Parola Guaritrice',
          'Protezione dal bene e dal male',
          'Scudo',
          'Scudo della Fede',
        ],
      },
      {
        level: '2° livello',
        list: [
          'Aiuto',
          'Arma Spirituale',
          'Suggestione',
          'Passo Velato',
          'Preghiera di Guarigione',
          'Ristorare Inferiore',
          'Zona di Verità',
        ],
      },
      {
        level: '3° livello',
        list: [
          'Aura di Vitalità',
          'Controincantesimo',
          'Dissolvi Magie',
          'Faro di Speranza',
          'Guardiani Spirituali',
          'Parola Guaritrice di Massa',
          'Rinascita',
          'Fast Friend',
        ],
      },
    ],
    equipment: [
      'Bastone Ferrato dell’Alce',
      'Armatura Completa Leggera di Legnoferro',
      'Scudo di legnoferro',
      'Frammento Meteorico',
      'Frammento Frangi-Trama',
      'Medaglione della Torre Verde',
      'Mantello Invernale Caldo',
      'Vestito da sera',
      'Pozioni di cura normale',
    ],
  },
  {
    id: 'mia',
    name: 'Mia',
    player: 'Viola S.',
    race: 'Sconosciuta',
    epithet: 'Nuovo sangue della Mano Cinerea',
    status: 'Attivo',
    symbol: '☀',
  },
  {
    id: 'kaelthar',
    name: 'Kaelthar Lunachiara',
    player: 'Stefano C.',
    race: 'Sconosciuta',
    epithet: 'Scelto da Damocle',
    status: 'Ex membro',
    symbol: '✧',
  },
  {
    id: 'saphira',
    name: 'Saphira',
    player: 'Martina R.',
    race: 'Sconosciuta',
    epithet: 'Giovane avventuriera dalla spada affilata',
    status: 'Ex membro',
    symbol: '⚔',
  },
  {
    id: 'saariel',
    name: 'Saariel',
    player: 'Andrea C.',
    race: 'Sconosciuta',
    epithet: 'Giustiziere degli dèi',
    status: 'Ex membro',
    symbol: '☼',
  },
]

export const activeCharacters = characters.filter(
  (character) => character.status === 'Attivo',
)

export const inactiveCharacters = characters.filter(
  (character) => character.status !== 'Attivo',
)
