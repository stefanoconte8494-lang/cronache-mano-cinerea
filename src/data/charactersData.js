import sszaraBase from '../assets/characters/sszara/sszara-base.png'
import sszaraGala from '../assets/characters/sszara/sszara-gala.png'
import sszaraNotturna from '../assets/characters/sszara/sszara-notturna.png'
import sszaraStellare from '../assets/characters/sszara/sszara-stellare.png'
import sszaraArmaturaFinale from '../assets/characters/sszara/sszara-armatura-finale.png'
import ianArmatura from '../assets/characters/ian/ian-armatura.png'
import jellyCucina from '../assets/characters/jelly/jelly-cucina.png'
import jellyBase from '../assets/characters/jelly/jelly-base.png'
import jellyGala from '../assets/characters/jelly/jelly-gala.png'
import jellyCombattimento from '../assets/characters/jelly/jelly-combattimento.png'
import jellyOscuro from '../assets/characters/jelly/jelly-oscuro.png'
import jellyFormaNeutra from '../assets/characters/jelly/jelly-forma-neutra.png'
import jellyFormaAcquatica from '../assets/characters/jelly/jelly-forma-acquatica.png'
import jellyFormaProfonda from '../assets/characters/jelly/jelly-forma-profonda.png'
import jellyFormaArcana from '../assets/characters/jelly/jelly-forma-arcana.png'
import jellyFormaCremisi from '../assets/characters/jelly/jelly-forma-cremisi.png'
import jellyFormaFuriosa from '../assets/characters/jelly/jelly-forma-furiosa.png'
import jellyFormaTossica from '../assets/characters/jelly/jelly-forma-tossica.png'
import jellyFormaOmbra from '../assets/characters/jelly/jelly-forma-ombra.png'
import jellyFormaAbissale from '../assets/characters/jelly/jelly-forma-abissale.png'
import kaeltharImage from '../assets/characters/kaelthar/kaelthar-lunachiara.png'
import kaeltharCavaliere from '../assets/characters/kaelthar/kaelthar-cavaliere.png'
import kaeltharNecrosArmata from '../assets/characters/kaelthar/kaelthar-necros-armata.png'
import kaeltharDueArmi from '../assets/characters/kaelthar/kaelthar-due-armi.jpg'
import kaeltharLamaIncantata from '../assets/characters/kaelthar/kaelthar-cavaliere-lama-incantata.png'
import miaImage from '../assets/characters/mia/mia.png'
import miaBase from '../assets/characters/mia/mia-base.jpeg'
import miaCacciatriceBenedetta from '../assets/characters/mia/mia-cacciatrice-benedetta.jpeg'
import miaGala from '../assets/characters/mia/mia-gala.jpeg'
import zeroImage from '../assets/characters/zero/zero.png'
import brewenGiant from '../assets/characters/brewen/brewen-gigante.png'
import saphiraImage from '../assets/characters/saphira/saphira.png'
import saarielImage from '../assets/characters/saariel/saariel.png'
import saarielBase from '../assets/characters/saariel/saariel-base.png'

export const characters = [
  {
    id: 'jelly',
    name: 'Jelly',
    title: 'L’esperimento fallito',
    subtitle: 'L’esperimento fallito',
    role: 'Creatura psionica nata dalla fusione di molte coscienze',
    status: 'Attivo',
    symbol: '⊙',
    appearanceOrder: 1,
    player: 'Mirko F.',
    race: 'Plasmoide',
    classInfo: 'Ladro 8° livello · Lama dell’Anima',
    subclass: 'Lama dell’Anima',
    alignment: 'Neutrale Puro',
    firstAppearance: 'Da completare',
    image: jellyCombattimento,
    portrait: jellyBase,
    quote: 'Nato dalla morte di molti. Alla ricerca della pace di tutti.',
    description:
      'Jelly è una creatura nata da un esperimento fallito: un corpo impossibile, attraversato da molte memorie e da poteri psionici che prendono forma in lame di pura energia. Dentro la Mano Cinerea è insieme ombra, lama, cuoco e sopravvissuto.',
    identity: [
      { label: 'Giocatore', value: 'Mirko F.' },
      { label: 'Razza', value: 'Plasmoide' },
      { label: 'Classe', value: 'Ladro 8° livello' },
      { label: 'Sottoclasse', value: 'Lama dell’Anima' },
      { label: 'Allineamento', value: 'Neutrale Puro' },
      { label: 'Ruolo', value: 'Ombra psionica' },
    ],
    stats: {
      armorClass: 19,
      hitPoints: 52,
      level: 8,
      proficiencyBonus: '+3',
      initiative: '+5',
      speed: '9 m',
      passivePerception: 19,
      classes: [
        { name: 'Ladro', detail: 'Lama dell’Anima', level: 8 },
      ],
      skills: [
        { name: 'Acrobazia', value: '+10' },
        { name: 'Arcano', value: '+4' },
        { name: 'Indagare', value: '+7' },
        { name: 'Percezione', value: '+9' },
        { name: 'Rapidità di Mano', value: '+13' },
        { name: 'Furtività', value: '+13' },
      ],
      languages: ['Comune'],
    },
    abilities: [
      {
        name: 'Corpo Plasmoide',
        value: 'Identità mutabile',
        text: 'Jelly può alterare la propria consistenza e assumere colorazioni differenti. Ogni forma sembra riflettere un diverso stato emotivo, tattico o psionico.',
      },
      {
        name: 'Lame Psichiche',
        value: 'Poteri psionici',
        text: 'Le sue armi non sono sempre oggetti fisici: talvolta sono frammenti di pensiero condensato, lame viola che feriscono corpo e mente.',
      },
      {
        name: 'Teletrasporto Psichico',
        value: 'Movimento impossibile',
        text: 'Jelly può muoversi attraverso uno strappo psionico, apparendo dove il nemico non si aspetta di trovarlo.',
      },
      {
        name: 'Sussurri Psichici',
        value: 'Legame mentale',
        text: 'Le voci che abitano Jelly possono diventare ponte, messaggio e inquietudine condivisa.',
      },
      {
        name: 'Attacco Furtivo',
        value: 'Colpo decisivo',
        text: 'Quando trova una fessura nella guardia nemica, Jelly colpisce con precisione crudele.',
      },
      {
        name: 'Elusione',
        value: 'Sopravvivenza',
        text: 'Dove altri vengono travolti, Jelly scivola via come una macchia d’ombra viola.',
      },
    ],
    relics: [
      {
        name: 'Amplificatore Psichico +2',
        category: 'Focus psionico',
        origin: 'Da completare',
        effects: [
          'Potenzia le capacità psichiche di Jelly.',
          'Dettagli meccanici da completare con la scheda aggiornata.',
        ],
      },
      {
        name: 'Lama di Ossidiana',
        category: 'Arma distintiva',
        origin: 'Da completare',
        effects: [
          'Arma legata al lato più oscuro e silenzioso di Jelly.',
          'Dettagli narrativi e meccanici da completare.',
        ],
      },
      {
        name: 'Mantello di Varyn Ombrafredda',
        category: 'Reliquia',
        origin: 'Da completare',
        effects: [
          'Mantello legato a ombra, freddo e furtività.',
          'Dettagli da inserire quando il giocatore li condividerà.',
        ],
      },
      {
        name: 'Frammento Meteorico',
        category: 'Frammento instabile',
        origin: 'Ottenuto durante gli eventi legati ai Caduti e ai frammenti del non-luogo.',
        effects: [
          '+1 alla Classe Armatura se applicato ad armatura o pelle.',
          'Può essere attivato volontariamente per 3 round.',
          'Alla fine dell’effetto il portatore contrae automaticamente il Morbo Meteoritico.',
        ],
      },
    ],
    ultimate: {
      name: 'Distorsione del Vuoto',
      subtitle: 'Risonanza del Ladro',
      text: 'Quando Jelly sfrutta il frammento meteorico, il suo corpo e le sue lame sembrano piegarsi fuori dal mondo per pochi istanti.',
      effects: [
        'Vantaggio agli attacchi durante l’attivazione.',
        'Disimpegno gratuito.',
        'Possibilità di sfruttare un attacco furtivo aggiuntivo secondo le regole concordate al tavolo.',
      ],
    },
    backgroundSections: [
      {
        title: 'Il laboratorio',
        text: 'Jelly non nasce come gli altri. È il risultato di un esperimento, un tentativo di fondere coscienze e residui di avventurieri morti in qualcosa che nessuno avrebbe più dovuto chiamare persona.',
      },
      {
        title: 'Le mille memorie',
        text: 'Dentro di lui sopravvivono frammenti di altri: ricordi, paure, competenze, gusti, voci. Non tutto ciò che Jelly sa appartiene davvero a Jelly.',
      },
      {
        title: 'Le forme del Plasmoide',
        text: 'Le nuove immagini registrano le diverse colorazioni di Jelly. Per ora i nomi sono descrittivi e potranno essere sostituiti con quelli ufficiali scelti dal giocatore.',
      },
    ],
    forms: [
      {
        id: 'base',
        name: 'Forma base',
        subtitle: 'Cappuccio, occhi luminosi e lame psioniche',
        image: jellyBase,
        theme: 'night',
        description:
          'La forma più riconoscibile di Jelly: piccola, rapida, innaturale, con occhi luminosi e lame viola generate dal potere psichico.',
      },
      {
        id: 'neutra',
        name: 'Forma neutra',
        subtitle: 'Colore chiaro e massa stabile',
        image: jellyFormaNeutra,
        theme: 'ivory',
        description:
          'Una colorazione chiara e più leggibile, utile come riferimento per la forma non alterata.',
      },
      {
        id: 'acquatica',
        name: 'Forma acquatica',
        subtitle: 'Tono azzurro, consistenza fluida',
        image: jellyFormaAcquatica,
        theme: 'night',
        description:
          'Una variante azzurra che richiama acqua, adattamento e fluidità.',
      },
      {
        id: 'profonda',
        name: 'Forma profonda',
        subtitle: 'Blu intenso',
        image: jellyFormaProfonda,
        theme: 'night',
        description:
          'Una forma blu più scura e compatta, come se la massa plasmoide si addensasse.',
      },
      {
        id: 'arcana',
        name: 'Forma arcana',
        subtitle: 'Viola psionico',
        image: jellyFormaArcana,
        theme: 'night',
        description:
          'La variante più vicina all’identità psionica di Jelly: viola, instabile e luminosa.',
      },
      {
        id: 'cremisi',
        name: 'Forma cremisi',
        subtitle: 'Magenta acceso',
        image: jellyFormaCremisi,
        theme: 'gala',
        description:
          'Una forma più brillante, aggressiva e scenografica.',
      },
      {
        id: 'furiosa',
        name: 'Forma furiosa',
        subtitle: 'Rosso vivo',
        image: jellyFormaFuriosa,
        theme: 'gala',
        description:
          'La colorazione più violenta, adatta a rappresentare rabbia, pressione o istinto di sopravvivenza.',
      },
      {
        id: 'tossica',
        name: 'Forma tossica',
        subtitle: 'Verde luminescente',
        image: jellyFormaTossica,
        theme: 'night',
        description:
          'Una forma verde e inquietante, quasi velenosa, che potrebbe indicare una mutazione specifica.',
      },
      {
        id: 'ombra',
        name: 'Forma d’ombra',
        subtitle: 'Viola scuro',
        image: jellyFormaOmbra,
        theme: 'night',
        description:
          'Una variante più cupa, ideale per furtività, paura e presenza silenziosa.',
      },
      {
        id: 'abissale',
        name: 'Forma abissale',
        subtitle: 'Nero lucido',
        image: jellyFormaAbissale,
        theme: 'night',
        description:
          'La forma più oscura: una massa nera, lucida e quasi priva di volto, illuminata solo dagli occhi.',
      },
      {
        id: 'cucina',
        name: 'Jelly cuoco',
        subtitle: 'Porchetta, coltelli e troppe braccia',
        image: jellyCucina,
        theme: 'gala',
        description:
          'Una delle immagini più strane e memorabili di Jelly: non solo lama e ombra, ma anche creatura capace di trasformare la cucina in un campo di battaglia organizzato.',
      },
      {
        id: 'gala',
        name: 'Ballo in maschera',
        subtitle: 'Eleganza impossibile',
        image: jellyGala,
        theme: 'gala',
        description:
          'Durante il ballo, Jelly diventa una figura elegante e inquietante: maschera metallica, abiti viola e una presenza impossibile da ignorare.',
      },
      {
        id: 'combattimento',
        name: 'Assalto psionico',
        subtitle: 'La danza delle lame',
        image: jellyCombattimento,
        theme: 'night',
        description:
          'Jelly in battaglia è movimento, lama e scintilla psichica.',
      },
      {
        id: 'oscuro',
        name: 'Forma oscura',
        subtitle: 'La fame dietro il cappuccio',
        image: jellyOscuro,
        theme: 'night',
        description:
          'Quando il lato più feroce emerge, Jelly appare meno come un ladro e più come un incubo compatto.',
      },
    ],
    timeline: [
      {
        title: 'Distruzione del laboratorio',
        subtitle: 'Origine dell’esperimento',
        text: 'La nascita di Jelly è legata a un laboratorio, a un fallimento e alla morte di molti.',
      },
      {
        title: 'La Mano Cinerea',
        subtitle: 'Una nuova famiglia imperfetta',
        text: 'Jelly entra nella compagnia portando fame, lame psioniche, cucina e troppe memorie.',
      },
      {
        title: 'Forme registrate',
        subtitle: 'Archivio visivo',
        text: 'Il Codex inizia a registrare le diverse colorazioni e manifestazioni del corpo plasmoide di Jelly.',
      },
    ],
    gallery: [
      { id: 'base', title: 'Forma base', image: jellyBase, description: 'La forma classica con cappuccio e lame psioniche.' },
      { id: 'neutra', title: 'Forma neutra', image: jellyFormaNeutra, description: 'Colorazione chiara e stabile.' },
      { id: 'acquatica', title: 'Forma acquatica', image: jellyFormaAcquatica, description: 'Variante azzurra e fluida.' },
      { id: 'profonda', title: 'Forma profonda', image: jellyFormaProfonda, description: 'Blu intenso e massa compatta.' },
      { id: 'arcana', title: 'Forma arcana', image: jellyFormaArcana, description: 'Viola psionico.' },
      { id: 'cremisi', title: 'Forma cremisi', image: jellyFormaCremisi, description: 'Magenta acceso.' },
      { id: 'furiosa', title: 'Forma furiosa', image: jellyFormaFuriosa, description: 'Rosso vivo e aggressivo.' },
      { id: 'tossica', title: 'Forma tossica', image: jellyFormaTossica, description: 'Verde luminescente.' },
      { id: 'ombra', title: 'Forma d’ombra', image: jellyFormaOmbra, description: 'Viola scuro e furtivo.' },
      { id: 'abissale', title: 'Forma abissale', image: jellyFormaAbissale, description: 'Nero lucido e inquietante.' },
      { id: 'cucina', title: 'Jelly cuoco', image: jellyCucina, description: 'Jelly in cucina, tra fuoco, coltelli e porchetta.' },
      { id: 'gala', title: 'Ballo in maschera', image: jellyGala, description: 'Jelly in abito elegante durante una serata di gala.' },
      { id: 'combattimento', title: 'Assalto psionico', image: jellyCombattimento, description: 'Jelly combatte contro due scheletri con lame viola.' },
      { id: 'oscuro', title: 'Forma oscura', image: jellyOscuro, description: 'Jelly in una variante feroce, sanguinaria e inquietante.' },
    ],
    quotes: [
      'Piacere... Jelly.',
      'Nato dalla morte di molti. Alla ricerca della pace di tutti.',
      'Non tutte le voci nella mia testa sono mie.',
    ],
  },
  {
    id: 'ian',
    name: 'Octavian “Ian” Ashvale',
    title: 'Guardiano seguito dall’eco',
    subtitle: 'Il Guardiano seguito dall’Eco',
    role: 'Guerriero umano legato al misterioso potere dell’Eco',
    status: 'Attivo',
    symbol: '⚔',
    appearanceOrder: 2,
    player: 'Luca M.',
    race: 'Umano',
    classInfo: 'Guerriero 8 · Cavaliere dell’Eco',
    subclass: 'Cavaliere dell’Eco',
    alignment: 'Da definire',
    firstAppearance: 'Da completare',
    image: ianArmatura,
    portrait: ianArmatura,
    quote: 'Alcune strade non si scelgono: ti riconoscono.',
    description: 'Octavian “Ian” Ashvale è un guerriero umano della Mano Cinerea. Combatte in armatura pesante e porta con sé il misterioso potere dell’Eco, una presenza che lo segue e che sembra legata a frammenti non ancora chiariti della sua storia.',
    identity: [
      { label: 'Giocatore', value: 'Luca M.' },
      { label: 'Razza', value: 'Umano' },
      { label: 'Classe', value: 'Guerriero 8' },
      { label: 'Sottoclasse', value: 'Cavaliere dell’Eco' },
      { label: 'Stato', value: 'Attivo' },
      { label: 'Visione', value: 'Scurovisione 18 m' },
    ],
    stats: {
      armorClass: 21,
      hitPoints: 84,
      level: 8,
      passivePerception: 14,
      spellSaveDc: 13,
      classes: [
        { name: 'Guerriero', detail: 'Cavaliere dell’Eco', level: 8 },
      ],
      skills: [
        { name: 'Atletica', value: '' },
        { name: 'Intrattenere', value: '' },
        { name: 'Persuasione', value: '' },
        { name: 'Sopravvivenza', value: '' },
        { name: 'Percezione', value: '' },
      ],
      languages: ['Comune', 'Abissale', 'Elfico'],
    },
    abilities: [
      { name: 'Manifestare Eco', value: 'Cavaliere dell’Eco', text: 'Ian richiama sul campo una manifestazione di sé stesso, un riflesso guerriero che agisce come estensione della sua presenza in battaglia.' },
      { name: 'Scambio con l’Eco', value: 'Mobilità', text: 'Il legame con l’Eco gli permette di manipolare la propria posizione e cambiare il ritmo dello scontro.' },
      { name: 'Assalto dell’Eco', value: 'Pressione offensiva', text: 'La presenza dell’Eco aumenta la minaccia di Ian, rendendolo difficile da ignorare sul campo di battaglia.' },
    ],
    relics: [
      { name: 'Spadone gelido', category: 'Arma distintiva', origin: 'Da completare', effects: ['Arma principale di Ian.', 'Aspetto cristallino e innaturale, con richiami di gelo e tempesta.', 'Dettagli meccanici da aggiungere quando il giocatore li condividerà.'] },
      { name: 'Armatura dell’albero sacro', category: 'Equipaggiamento rilevante', origin: 'Da completare', effects: ['Armatura pesante decorata con motivi arborei.', 'Simbolo verde dell’albero sul petto.', 'Dettagli narrativi e meccanici da completare.'] },
    ],
    backgroundSections: [
      { title: 'Il guerriero e l’Eco', text: 'Ian è un guerriero umano che combatte accanto a una presenza speculare, un Eco che sembra rappresentare qualcosa di più profondo di una semplice tecnica marziale.' },
      { title: 'La dimora di Ian', text: 'Tra le trame personali aperte della campagna compare la Dimora di Ian: una mappa misteriosa conduce verso un luogo che potrebbe rivelare parti importanti del suo passato.' },
      { title: 'La Mano Cinerea', text: 'All’interno del gruppo Ian ricopre il ruolo di guardiano e combattente di prima linea, una presenza solida in mezzo a eventi sempre più oscuri.' },
    ],
    timeline: [
      { title: 'Cronologia in aggiornamento', subtitle: 'Archivio personale', text: 'Gli eventi principali di Ian verranno collegati alle sessioni man mano che saranno aggiunti riassunti e dettagli del giocatore.' },
      { title: 'Dimora di Ian', subtitle: 'Quest personale', text: 'Una mappa misteriosa conduce alla dimora di Ian. La quest è ancora da sviluppare nella cronaca.' },
    ],
    gallery: [
      { id: 'ian-armatura', title: 'Ian in armatura', image: ianArmatura, description: 'Octavian “Ian” Ashvale con armatura, mantello verde e spadone gelido.' },
    ],
    quotes: [
      'Alcune strade non si scelgono: ti riconoscono.',
      'L’Eco non è solo un riflesso. È una promessa rimasta indietro.',
    ],
  },
  {
    id: 'brewen',
    name: 'Brewen Dolce Mosto',
    title: 'Muro di muscoli',
    subtitle: 'Muro di muscoli',
    role: 'Membro della Mano Cinerea',
    status: 'Attivo',
    symbol: '⚒',
    appearanceOrder: 3,
    image: brewenGiant,
    portrait: brewenGiant,
    quote: 'Prima si regge il colpo. Poi si decide cosa farne.',
    description:
      'Brewen Dolce Mosto è una delle presenze più solide della Mano Cinerea. Nell’ultima sessione ha assunto una taglia enorme, diventando una vera forza d’urto sul campo.',
    identity: [
      { label: 'Stato', value: 'Attivo' },
      { label: 'Ruolo', value: 'Membro della Mano Cinerea' },
      { label: 'Aspetto noto', value: 'Taglia enorme' },
    ],
    backgroundSections: [
      {
        title: 'Archivio in aggiornamento',
        text: 'La pagina di Brewen è stata predisposta con la sua immagine e una prima sezione narrativa. Il giocatore potrà aggiungere classe, statistiche, capacità e background quando vorrà.',
      },
    ],
    forms: [
      {
        id: 'gigante',
        name: 'Forma enorme',
        subtitle: 'Brewen nella sua manifestazione più imponente',
        image: brewenGiant,
        theme: 'ivory',
        description: 'Una forma gigantesca e devastante, emersa nell’ultima sessione e già entrata nelle cronache della compagnia.',
      },
    ],
    gallery: [
      { id: 'gigante', title: 'Brewen enorme', image: brewenGiant, description: 'Brewen nella forma di taglia enorme.' },
    ],
    timeline: [
      {
        title: 'Ultima sessione',
        subtitle: 'Taglia enorme',
        text: 'Brewen manifesta una forma gigantesca, trasformandosi in un pilastro offensivo e difensivo del gruppo.',
      },
    ],
  },
  {
    id: 'zero',
    name: 'Zerion “Zero” Zaulyl',
    title: 'Rinnegatore dello sciame',
    subtitle: 'Rinnegatore dello sciame',
    role: 'Membro della Mano Cinerea',
    status: 'Attivo',
    symbol: '✦',
    appearanceOrder: 4,
    image: zeroImage,
    portrait: zeroImage,
    quote: 'Ciò che mi ha creato non decide ciò che diventerò.',
    description:
      'Zerion “Zero” Zaulyl è legato a sciami, presenze aliene e poteri che si muovono ai margini della comprensione. La sua figura unisce eleganza, inquietudine e una forza arcana ancora da raccontare.',
    identity: [
      { label: 'Stato', value: 'Attivo' },
      { label: 'Ruolo', value: 'Membro della Mano Cinerea' },
      { label: 'Tema', value: 'Sciame e potere viola' },
    ],
    backgroundSections: [
      {
        title: 'Archivio in aggiornamento',
        text: 'La pagina di Zero è stata predisposta con immagine, galleria e una prima identità narrativa. I dettagli tecnici e il background completo saranno aggiunti quando il giocatore li condividerà.',
      },
    ],
    forms: [
      {
        id: 'zero',
        name: 'Zero',
        subtitle: 'Lo sciame e la musica',
        image: zeroImage,
        theme: 'night',
        description: 'Zero appare come una figura elegante e pericolosa, circondata da energia viola e presenze simili a insetti.',
      },
    ],
    gallery: [
      { id: 'zero', title: 'Zero', image: zeroImage, description: 'Zerion “Zero” Zaulyl con arpa, mantello e scie viola.' },
    ],
    timeline: [
      {
        title: 'Cronologia in aggiornamento',
        subtitle: 'Voce provvisoria',
        text: 'Gli eventi principali di Zero verranno aggiunti man mano che saranno completati i riassunti mancanti.',
      },
    ],
  },
  {
    id: 'sszara',
    name: 'Sszara Sweetlight',
    title: 'Sacerdotessa delle stelle',
    subtitle: 'Sacerdotessa delle stelle',
    role: 'Yuan-Ti legata alla volta celeste, alla cura e ai presagi',
    status: 'Attiva',
    symbol: '✹',
    appearanceOrder: 5,
    player: 'Stefano C.',
    race: 'Yuan-Ti',
    classInfo: 'Druida · Circolo delle Stelle 2 / Chierica · Dominio della Vita 6',
    circle: 'Circolo delle Stelle · Dominio della Vita',
    alignment: 'Neutrale Buona',
    firstAppearance: 'Sessione 40',
    image: sszaraArmaturaFinale,
    portrait: sszaraArmaturaFinale,
    quote: 'Interpreto ogni evento come parte di uno schema più ampio che non sono ancora riuscita a decifrare.',
    description: 'Sszara Sweetlight è il nuovo sangue della Mano Cinerea: una Yuan-Ti legata al potere delle stelle, alla magia curativa e a forze più antiche e pericolose.',
    identity: [
      { label: 'Razza', value: 'Yuan-Ti' },
      { label: 'Classi', value: 'Druida 2 · Chierica 6' },
      { label: 'Circolo', value: 'Circolo delle Stelle' },
      { label: 'Dominio', value: 'Vita' },
      { label: 'Allineamento', value: 'Neutrale Buona' },
      { label: 'Prima apparizione', value: 'Sessione 40' },
    ],
    stats: {
      armorClass: 21,
      hitPoints: 75,
      wisdom: 18,
      proficiencyBonus: '+3',
      classes: [
        { name: 'Druida', detail: 'Circolo delle Stelle', level: 2 },
        { name: 'Chierica', detail: 'Dominio della Vita', level: 6 },
      ],
      skills: [
        { name: 'Percezione', value: '+7' },
        { name: 'Intuizione', value: '+7' },
        { name: 'Sopravvivenza', value: '+7' },
        { name: 'Furtività', value: '+5' },
      ],
    },
    abilities: [
      { name: 'Forma Selvatica', value: '2 utilizzi', text: 'Risorsa druidica usata anche come chiave per accedere alla Forma Siderale e ad alcune manifestazioni spirituali.' },
      { name: 'Incanalare Divinità', value: '2 utilizzi', text: 'Canale divino attraverso cui Sszara richiama la forza del Dominio della Vita nei momenti critici.' },
      { name: 'Preservare la Vita', value: '30 PF', text: 'Energia curativa distribuita tra gli alleati entro portata, pensata per riportare in piedi chi sta cedendo.' },
    ],
    relics: [
      {
        name: 'Frammento Frangi-Trama',
        category: 'Reliquia',
        attunement: 'Sintonia',
        origin: 'Parte dell’anfora del Culto Perduto.',
        previousOwner: 'Kaelthar Lunachiara',
        effects: ['Focus arcano +1.', 'Una volta al giorno può lanciare Controincantesimo senza usare slot.', 'Una volta al giorno può lanciare Dissolvi magie senza usare slot.', 'Una volta al giorno può lanciare Scudo senza usare slot.'],
      },
      {
        name: 'Il Giudizio del Calice',
        category: 'Dono del Visitatore',
        origin: 'Potere ottenuto tramite la realizzazione di un desiderio del Viandante.',
        longText: 'A volontà, quando viene lanciato un incantesimo di cura, Sszara può lanciare 1d10 e scegliere tra pari o dispari. Il valore ottenuto viene moltiplicato per 5 e aggiunto alla cura. Se il lancio viene indovinato il potere curativo si attiva normalmente; se viene sbagliato, il potere attinge alle energie vitali del soggetto diminuendo i suoi punti vita di un ammontare pari alla cura fatta dal lancio. Non può essere usato per curare Sszara. In caso di cure a più personaggi contemporaneamente, per ogni bersaglio si può scegliere se attivarlo o meno, ogni volta con un lancio e una scelta pari/dispari diversa.',
      },
      {
        name: 'Frammento Meteorico',
        category: 'Frammento instabile',
        origin: 'Ottenuto sconfiggendo esseri caduti dal cielo durante un raid.',
        effects: ['+1 alla Classe Armatura se applicato ad armatura o pelle.', 'Può essere attivato volontariamente per superare temporaneamente i limiti del portatore.', 'Durata dell’effetto: 3 round.', 'Alla fine dell’effetto il portatore contrae automaticamente il Morbo Meteoritico.'],
        disease: [
          { stage: 'Stato 1 — Contaminazione', text: 'Il sangue nelle vene diventa nero e la pelle assume il colorito di una persona gravemente malata. Tutte le prove sociali vengono effettuate con svantaggio.' },
          { stage: 'Stato 2 — Consunzione', text: 'Gli occhi diventano due sfere completamente nere. Tutti i test sociali falliscono automaticamente. Ogni giorno il personaggio deve effettuare 3 Tiri Salvezza contro Morte. Se muore in questo stato non può essere resuscitato e scompare letteralmente.' },
        ],
      },
    ],
    ultimate: {
      name: 'Risonanza Divina',
      subtitle: 'Chierico',
      text: 'Quando il frammento meteorico entra in risonanza con la natura divina di Sszara, la guarigione e la protezione raggiungono una forma estrema e pericolosa.',
      effects: ['Gli alleati entro 9 metri ottengono vantaggio ai tiri salvezza.', 'Gli incantesimi di cura guariscono il massimo.', 'Ogni incantesimo offensivo infligge 1d8 danni aggiuntivi.'],
    },
    backgroundSections: [
      { title: 'Origini', text: 'Sszara nasce come creatura di confine: abbastanza vicina alla natura serpentina degli Yuan-Ti da portarne il segno sulla pelle, ma abbastanza diversa da non sentirsi mai davvero parte di un solo mondo.' },
      { title: 'Rovina', text: 'Qualcosa ha spezzato la sua vita precedente e l’ha costretta a restare in piedi quando sarebbe stato più semplice cedere. Da quella frattura nasce la sua calma, la sua diffidenza e la tendenza a leggere ogni evento come un tassello di un disegno più grande.' },
      { title: 'La Mano Cinerea', text: 'Nella Mano Cinerea porta un equilibrio strano: cura, luce stellare, veleno, silenzio e presagi. Non cerca il centro della scena, ma osserva.' },
      { title: 'Le Stelle', text: 'Il cielo non è per lei una promessa di salvezza, ma un codice. Ogni costellazione è una ferita antica, ogni bagliore un indizio, ogni cura un prezzo che qualcuno dovrà pagare.' },
    ],
    forms: [
      { id: 'base', name: 'Inizio dell’avventura', subtitle: 'La selva, il bastone e il primo passo', image: sszaraBase, theme: 'verdant', description: 'La Sszara degli inizi: ancora vicina alla natura, ai sentieri umidi e alle ombre vive della foresta.' },
      { id: 'gala', name: 'Serata di gala', subtitle: 'Maschera, veleno e bellezza controllata', image: sszaraGala, theme: 'gala', description: 'Il viola scuro e il verde veleno richiamano la sua natura Yuan-Ti, mentre la maschera le permette di osservare senza essere davvero letta.' },
      { id: 'notturna', name: 'Forma Siderale · Cielo Notturno', subtitle: 'Quando il potere stellare oscura la pelle', image: sszaraNotturna, theme: 'night', description: 'Il corpo si scurisce e le stelle affiorano come punti di una mappa celeste. È una costellazione vivente che cammina.' },
      { id: 'stellare', name: 'Forma Siderale · Luna', subtitle: 'Capelli bianchi, pelle oscura e luce sulle giunture', image: sszaraStellare, theme: 'moon', description: 'La variante lunare è solenne e guerriera. La luce corre sull’armatura, sul bastone e sullo scudo.' },
      { id: 'armatura', name: 'Nuova armatura', subtitle: 'La sacerdotessa armata delle stelle', image: sszaraArmaturaFinale, theme: 'ivory', description: 'La nuova armatura fonde bianco, simbolismo serpentino e luce stellare. È l’immagine più compiuta di Sszara.' },
    ],
    timeline: [
      { title: 'Sessione 40', subtitle: 'Entra nella Mano Cinerea', text: 'Sszara si unisce al gruppo insieme a Mia, mentre la compagnia riprende il filo della propria storia.' },
      { title: 'Frammento Meteorico', subtitle: 'Il potere caduto dal cielo', text: 'Il frammento introduce una possibilità enorme e un rischio altrettanto grande: potere immediato, corruzione inevitabile.' },
      { title: 'Giudizio del Calice', subtitle: 'Il dono del Visitatore', text: 'La cura diventa scommessa, scelta e rischio. Ogni guarigione può salvare o consumare.' },
      { title: 'Risonanza Divina', subtitle: 'Il massimo della guarigione', text: 'Il potere divino risuona con il frammento e trasforma Sszara in un centro di protezione e devastazione sacra.' },
    ],
    gallery: [
      { id: 'base', title: 'Inizio dell’avventura', image: sszaraBase, description: 'Sszara nella selva, con il bastone.' },
      { id: 'gala', title: 'Serata di gala', image: sszaraGala, description: 'Abito viola scuro, richiami verdi e maschera elaborata.' },
      { id: 'notturna', title: 'Forma Siderale · Cielo Notturno', image: sszaraNotturna, description: 'Pelle scura, stelle vive e presenza cosmica.' },
      { id: 'stellare', title: 'Forma Siderale · Luna', image: sszaraStellare, description: 'Capelli bianchi, armatura scura e luce sulle giunture.' },
      { id: 'armatura', title: 'Nuova armatura', image: sszaraArmaturaFinale, description: 'La forma più completa della sacerdotessa delle stelle.' },
    ],
    quotes: ['Interpreto ogni evento come parte di uno schema più ampio che non sono ancora riuscita a decifrare.', 'La cura è una promessa. Il prezzo, invece, arriva sempre dopo.', 'Le stelle non mostrano solo il cammino: mostrano ciò che si tenta di ignorare.'],
  },
  {
    id: 'mia',
    name: 'Mia “La Piccola”',
    title: 'Cacciatrice della Mano Cinerea',
    subtitle: 'Cacciatrice delle Ombre 5 · Maestra di Battaglia 3',
    role: 'Esploratrice, arciera e ombra del gruppo',
    status: 'Attiva',
    symbol: '☀',
    appearanceOrder: 6,
    player: 'Viola S.',
    race: 'Umano Variante',
    classInfo: 'Ranger Cacciatrice delle Ombre 5 / Guerriera Maestra di Battaglia 3',
    subclass: 'Gloom Stalker 5 / Maestra di Battaglia 3',
    alignment: 'Caotica Buona',
    firstAppearance: 'Sessione 40',
    image: miaCacciatriceBenedetta,
    portrait: miaBase,
    quote: 'Prima vedo. Poi decido.',
    description:
      'Mia, detta “La Piccola”, è una cacciatrice silenziosa e attentissima, guidata da una curiosità innata verso l’altro e il diverso. Nella Mano Cinerea ricopre il ruolo di esploratrice, arciera e osservatrice: vede prima degli altri, si muove prima degli altri e, quando serve, colpisce prima che il pericolo possa reagire.',
    identity: [
      { label: 'Giocatrice', value: 'Viola S.' },
      { label: 'Razza', value: 'Umano Variante' },
      { label: 'Classe', value: 'Ranger Cacciatrice delle Ombre 5 / Guerriera Maestra di Battaglia 3' },
      { label: 'Background', value: 'Rewarded' },
      { label: 'Allineamento', value: 'Caotica Buona' },
      { label: 'Ruolo', value: 'Esploratrice e arciera' },
    ],
    stats: {
      armorClass: 17,
      hitPoints: 68,
      level: '8',
      hitDice: '8d10',
      proficiencyBonus: '+3',
      initiative: '+7',
      speed: '9 m',
      passivePerception: 24,
      spellcastingAbility: 'Saggezza',
      spellSaveDc: 14,
      spellAttack: '+6',
      classes: [
        { name: 'Ranger', detail: 'Cacciatrice delle Ombre', level: '5' },
        { name: 'Guerriera', detail: 'Maestra di Battaglia', level: '3' },
      ],
      abilities: [
        { name: 'Forza', value: 10 },
        { name: 'Destrezza', value: 18 },
        { name: 'Costituzione', value: 14 },
        { name: 'Intelligenza', value: 12 },
        { name: 'Saggezza', value: 16 },
        { name: 'Carisma', value: 8 },
      ],
      savingThrows: [
        { name: 'Forza', value: '+3' },
        { name: 'Destrezza', value: '+7' },
        { name: 'Costituzione', value: '+2' },
        { name: 'Intelligenza', value: '+1' },
        { name: 'Saggezza', value: '+3' },
        { name: 'Carisma', value: '-1' },
      ],
      skills: [
        { name: 'Arcano', value: '+4' },
        { name: 'Indagare', value: '+4' },
        { name: 'Percezione', value: '+9' },
        { name: 'Rapidità di Mano', value: '+7' },
        { name: 'Furtività', value: '+7' },
        { name: 'Sopravvivenza', value: '+6' },
      ],
      languages: ['Comune', 'Deep Speech', 'Sylvan'],
      armorProficiencies: ['Armature leggere', 'Armature medie', 'Scudi'],
      weaponProficiencies: ['Armi semplici', 'Armi marziali'],
      resources: [
        { name: 'Lucky Point', value: '3/3' },
        { name: 'Favored Foe', value: '3/3' },
        { name: 'Superiority Dice', value: '4/4' },
        { name: 'Second Wind', value: '1/1' },
        { name: 'Action Surge', value: '1/1' },
      ],
    },
    attacks: [
      { name: 'Longbow', bonus: '+9', damage: '1d8 + 4 perforante' },
      { name: 'Shortsword', bonus: '+7', damage: '1d6 + 4 perforante' },
      { name: 'Second Wind', bonus: '—', damage: '1d10 + 2 guarigione' },
    ],
    abilities: [
      {
        name: 'Lucky',
        value: '3 punti fortuna',
        text: 'Mia possiede una fortuna inspiegabile: può spendere punti fortuna per influenzare tiri per colpire, prove di caratteristica, tiri salvezza o attacchi subiti.',
      },
      {
        name: 'Observant',
        value: 'Occhio attentissimo',
        text: 'La sua attenzione ai dettagli le concede un enorme vantaggio nella percezione passiva e nella lettura dell’ambiente.',
      },
      {
        name: 'Favored Foe',
        value: 'Preda marcata',
        text: 'Quando colpisce una creatura può marcarla come nemico prescelto, infliggendo danni extra una volta per turno mentre mantiene la concentrazione.',
      },
      {
        name: 'Deft Explorer',
        value: 'Esploratrice esperta',
        text: 'Mia è una viaggiatrice e sopravvissuta superiore, capace di muoversi e orientarsi in ambienti difficili.',
      },
      {
        name: 'Favored Enemy',
        value: 'Aberrazioni',
        text: 'Ha sviluppato una particolare conoscenza e ostilità verso le aberrazioni.',
      },
      {
        name: 'Natural Explorer',
        value: 'Costa',
        text: 'Il suo addestramento da ranger la rende particolarmente efficace negli ambienti costieri.',
      },
      {
        name: 'Fighting Style',
        value: 'Archery',
        text: 'Ottiene +2 ai tiri per colpire con armi a distanza: il suo arco è la sua vera firma in combattimento.',
      },
      {
        name: 'Spellcasting',
        value: 'Magia da ranger',
        text: 'Mia usa la magia naturale del ranger, con Saggezza come caratteristica da incantatrice.',
      },
      {
        name: 'Primal Awareness',
        value: 'Sensi primordiali',
        text: 'La sua connessione con la natura le concede incantesimi aggiuntivi e una consapevolezza particolare del mondo vivente.',
      },
      {
        name: 'Extra Attack',
        value: 'Due attacchi',
        text: 'Quando compie l’azione di Attacco può attaccare due volte.',
      },
      {
        name: 'Gloom Stalker Magic',
        value: 'Magia delle ombre',
        text: 'La sottoclasse Gloom Stalker le concede incantesimi aggiuntivi come Disguise Self e Rope Trick.',
      },
      {
        name: 'Dread Ambusher',
        value: 'Prima dell’alba',
        text: 'All’inizio del combattimento diventa rapidissima: aggiunge la Saggezza all’iniziativa, aumenta la velocità e può effettuare un attacco aggiuntivo nel primo turno.',
      },
      {
        name: 'Umbral Sight',
        value: 'Invisibile nel buio',
        text: 'Ottiene scurovisione e, nell’oscurità, diventa invisibile alle creature che si affidano alla scurovisione.',
      },
      {
        name: 'Fighting Style',
        value: 'Defence',
        text: 'Quando indossa un’armatura ottiene +1 alla Classe Armatura.',
      },
      {
        name: 'Second Wind',
        value: 'Recupero rapido',
        text: 'Può usare un’azione bonus per recuperare punti ferita pari a 1d10 + il livello da guerriera.',
      },
      {
        name: 'Action Surge',
        value: 'Oltre il limite',
        text: 'Una volta per riposo può compiere un’azione aggiuntiva nel proprio turno.',
      },
    ],
    spells: {
      cantrips: [],
      level1: ['Hunter’s Mark', 'Detect Magic', 'Entangle', 'Disguise Self', 'Speak with Animals'],
      level2: ['Pass without Trace', 'Spike Growth', 'Rope Trick', 'Beast Sense'],
    },
    relics: [
      {
        name: 'Longbow',
        category: 'Arma principale',
        origin: 'Equipaggiamento',
        effects: ['+9 al tiro per colpire.', 'Infligge 1d8 + 4 danni perforanti.'],
      },
      {
        name: 'Shortsword',
        category: 'Arma secondaria',
        origin: 'Equipaggiamento',
        effects: ['+7 al tiro per colpire.', 'Infligge 1d6 + 4 danni perforanti.'],
      },
      {
        name: 'Studded Leather Armor',
        category: 'Armatura',
        origin: 'Equipaggiamento',
        effects: ['Contribuisce alla CA 17 insieme allo stile di combattimento Difesa.'],
      },
      {
        name: 'Bacche di Sszara',
        category: 'Risorsa curativa',
        origin: 'Dono di Sszara',
        effects: ['2 bacche conservate.', 'Ogni bacca cura +4 punti ferita.'],
      },
    ],
    equipment: [
      'Shortsword',
      'Explorer’s Pack',
      'Longbow',
      'Quiver',
      '20 Arrows',
      'Backpack',
      'Bedroll',
      'Mess Kit',
      'Tinderbox',
      '9 Torch',
      '10 Rations',
      'Waterskin',
      'Hempen Rope',
      'Studded Leather Armor',
      '42 monete d’oro',
    ],
    personality: {
      traits:
        'Attenta osservatrice, ha una innata curiosità verso l’altro e il diverso.',
      ideals:
        'Chiunque voglia imporre la propria volontà distruggendo ciò che lo circonda va fermato.',
      bonds:
        'È legata alla Fortuna, sua compagna invisibile ma presente.',
      flaws:
        'Se è “a caccia” o qualcuno la maldispone, diventa provocatoria anche quando la situazione richiederebbe cautela.',
    },
    backgroundSections: [
      {
        title: 'La Piccola',
        text: 'Mia è chiamata “La Piccola”, ma il nome non rende giustizia alla sua presenza sul campo. È minuta solo nell’apparenza: nello sguardo, nella mira e nella prontezza è una delle figure più pericolose della Mano Cinerea.',
      },
      {
        title: 'La Cacciatrice',
        text: 'Mia osserva prima di agire. Quando entra in caccia, il mondo si restringe: rumori, tracce, respiri e movimenti diventano segnali. Prima vede. Poi decide.',
      },
      {
        title: 'La Fortuna',
        text: 'Il suo legame con la Fortuna è quasi personale. Non è solo buona sorte: per Mia è una presenza invisibile ma concreta, una compagna che appare nel momento esatto in cui tutto potrebbe andare storto.',
      },
      {
        title: 'Il buio del Gloom Stalker',
        text: 'Nell’oscurità Mia non si limita a nascondersi: diventa parte del buio. Chi si affida alla scurovisione può guardare nella sua direzione e non vedere nulla, finché la freccia non è già partita.',
      },
    ],
    forms: [
      {
        id: 'base',
        name: 'Forma Base',
        subtitle: 'Mercati, porti e strade sporche',
        image: miaBase,
        theme: 'night',
        description:
          'Mia nella sua forma più quotidiana: mantello scuro, arco in spalla, sguardo attento e passo da sopravvissuta.',
      },
      {
        id: 'cacciatrice',
        name: 'Cacciatrice Benedetta',
        subtitle: 'Bosco, arco e compagna volpe',
        image: miaCacciatriceBenedetta,
        theme: 'night',
        description:
          'La forma più dinamica e selvaggia: Mia attraversa il bosco con una lama ricurva e una volpe al fianco, come se stesse inseguendo una preda invisibile.',
      },
      {
        id: 'gala',
        name: 'Abito da Gala',
        subtitle: 'Eleganza e controllo',
        image: miaGala,
        theme: 'gala',
        description:
          'Durante il ballo, Mia mostra un lato diverso: composta, elegante, quasi regale, ma con lo stesso sguardo vigile di sempre.',
      },
    ],
    gallery: [
      {
        id: 'base',
        title: 'Forma Base',
        image: miaBase,
        description: 'Mia nei mercati e nelle strade, con arco e mantello scuro.',
      },
      {
        id: 'cacciatrice',
        title: 'Cacciatrice Benedetta',
        image: miaCacciatriceBenedetta,
        description: 'Mia nel bosco, armata di lama ricurva e accompagnata da una volpe.',
      },
      {
        id: 'gala',
        title: 'Abito da Gala',
        image: miaGala,
        description: 'Mia durante una serata elegante, in abito da gala.',
      },
    ],
    timeline: [
      {
        title: 'Ingresso nella Mano Cinerea',
        subtitle: 'Nuovo sangue',
        text: 'Mia entra nella compagnia come una presenza giovane, rapida e difficile da ignorare.',
      },
      {
        title: 'La cacciatrice del gruppo',
        subtitle: 'Scout e arciera',
        text: 'Il suo ruolo diventa quello di osservare, anticipare e colpire con precisione.',
      },
      {
        title: 'Il Ballo dei Silverhart',
        subtitle: 'Maschere e controllo',
        text: 'Durante la serata di gala, Mia dimostra di poter essere letale anche quando deve indossare l’eleganza invece del fango.',
      },
    ],
    quotes: [
      'Prima vedo. Poi decido.',
      'Il bosco parla. Basta saper ascoltare.',
      'La fortuna aiuta chi è già pronto.',
    ],
  },
  {
    id: 'kaelthar',
    name: 'Kaelthar “Necros” Lunachiara',
    title: 'Il Mago Disperso',
    subtitle: 'Cantore della Lama · Scelto da Damocle',
    role: 'Mago disperso della Mano Cinerea',
    status: 'Disperso',
    symbol: '◈',
    appearanceOrder: 7,
    player: 'Stefano C.',
    race: 'Shadar-Kai',
    classInfo: 'Mago 7° livello · Cantore della Lama',
    subclass: 'Cantore della Lama',
    alignment: 'Neutrale Buono',
    firstAppearance: 'Prima formazione della Mano Cinerea',
    image: kaeltharLamaIncantata,
    portrait: kaeltharCavaliere,
    quote: 'Nessun limite. Niente può incatenare le infinite possibilità insite in ogni esistenza.',
    description:
      'Kaelthar “Necros” Lunachiara non è un ex membro nel senso comune del termine: è disperso. Dopo un Raid Generale, il ritorno al dungeon fallì e il teletrasporto non riportò indietro il mago Shadar-Kai. Al suo posto apparve Sszara Sweetlight. Da quel momento il destino di Kaelthar rimane un mistero aperto della Mano Cinerea.',
    identity: [
      { label: 'Stato', value: 'Disperso' },
      { label: 'Razza', value: 'Shadar-Kai' },
      { label: 'Classe', value: 'Mago 7° livello' },
      { label: 'Sottoclasse', value: 'Cantore della Lama' },
      { label: 'Background', value: 'Sapiente' },
      { label: 'Allineamento', value: 'Neutrale Buono' },
      { label: 'Legame', value: 'Damocle' },
    ],
    stats: {
      armorClass: 18,
      initiative: '+4',
      speed: '9 m',
      hitPoints: 44,
      level: 7,
      proficiencyBonus: '+3',
      passivePerception: 13,
      spellcastingAbility: 'Intelligenza',
      spellSaveDc: 17,
      spellAttack: '+9',
      classes: [
        { name: 'Mago', detail: 'Cantore della Lama', level: 7 },
      ],
      abilities: [
        { name: 'Forza', value: 8 },
        { name: 'Destrezza', value: 18 },
        { name: 'Costituzione', value: 14 },
        { name: 'Intelligenza', value: 18 },
        { name: 'Saggezza', value: 10 },
        { name: 'Carisma', value: 8 },
      ],
      skills: [
        { name: 'Acrobazia', value: '+4' },
        { name: 'Arcano', value: '+7' },
        { name: 'Storia', value: '+7' },
        { name: 'Indagare', value: '+7' },
        { name: 'Natura', value: '+4' },
        { name: 'Percezione', value: '+3' },
        { name: 'Religione', value: '+7' },
        { name: 'Furtività', value: '+4' },
      ],
      savingThrows: [
        { name: 'Forza', value: '-1' },
        { name: 'Destrezza', value: '+4' },
        { name: 'Costituzione', value: '+2' },
        { name: 'Intelligenza', value: '+7' },
        { name: 'Saggezza', value: '+3' },
        { name: 'Carisma', value: '-1' },
      ],
      languages: ['Comune', 'Elfico', 'altre lingue da completare'],
    },
    abilities: [
      {
        name: 'Melodia della Lama',
        value: 'Identità da Bladesinger',
        text: 'Kaelthar fonde scherma e magia elfica. Quando la Melodia della Lama è attiva, la sua difesa, la sua mobilità e la sua concentrazione diventano sovrannaturali.',
      },
      {
        name: 'Attacco Extra',
        value: 'Lama e trucchetto',
        text: 'Può attaccare due volte quando effettua l’azione di Attacco e può sostituire uno degli attacchi con un trucchetto da mago.',
      },
      {
        name: 'Recupero Arcano',
        value: 'Studio del grimorio',
        text: 'Recupera parte dell’energia magica studiando il libro degli incantesimi durante un riposo breve.',
      },
      {
        name: 'Benedizione della Regina dei Corvi',
        value: 'Retaggio Shadar-Kai',
        text: 'Può teletrasportarsi magicamente e, dal 3° livello, ottiene resistenza ai danni dopo questo spostamento, apparendo spettrale e traslucido.',
      },
      {
        name: 'Resistenza Necrotica',
        value: 'Sangue Shadar-Kai',
        text: 'La sua natura lo rende resistente ai danni necrotici.',
      },
      {
        name: 'Trance',
        value: 'Memoria elfica',
        text: 'Non ha bisogno di dormire e può acquisire temporaneamente competenze in armi o strumenti tramite la memoria elfica condivisa.',
      },
      {
        name: 'Il Teletrasporto Fallito',
        value: 'Mistero irrisolto',
        text: 'Durante il ritorno dal Raid Generale, il teletrasporto ebbe un’anomalia: Kaelthar scomparve e al suo posto apparve Sszara Sweetlight.',
      },
    ],
    spells: {
      cantrips: ['Lama Roboante', 'Lama Verdefiamma', 'Scheggia della Mente', 'Riparare'],
      level1: [
        'Aculei Argentei',
        'Allarme',
        'Armatura Magica',
        'Assorbire Elementi',
        'Coltello di Ghiaccio',
        'Comprensione dei Linguaggi',
        'Dardo Incantato',
        'Identificare',
        'Individuazione del Magico',
        'Scudo',
        'Trova Famiglio',
        'Vita Falsata',
      ],
      level2: [
        'Ghiaccio Vincolante di Rime',
        'Lama d’Ombra',
        'Scudiscio Mentale di Tasha',
        'Soffio del Drago',
        'Vedere Invisibilità',
        'Vincolo della Terra',
      ],
      level3: [
        'Animare i Morti',
        'Capanna di Leomund',
        'Controincantesimo',
        'Destriero Fantomatico',
        'Dissolvi Magie',
        'Lentezza',
        'Palla di Fuoco',
        'Velocità',
      ],
      level4: ['Lancia Psichica di Raulothim', 'Scolpire Pietra'],
    },
    relics: [
      {
        name: 'Grimorio di Damocle',
        category: 'Grimorio unico',
        origin: 'Legame da Mago',
        effects: [
          '+1 ai tiri per colpire con incantesimo e alla CD degli incantesimi.',
          'Una volta al giorno permette di lanciare un incantesimo necromantico contenuto nel libro senza usare slot.',
          'Può aumentare temporaneamente la potenza dei non morti evocati.',
        ],
      },
      {
        name: 'Frammento Frangi-Trama',
        category: 'Reliquia · Sintonia',
        origin: 'Parte dell’anfora del Culto Perduto',
        effects: [
          'Focus arcano +1.',
          'Una volta al giorno: Controincantesimo.',
          'Una volta al giorno: Dissolvi Magie.',
          'Una volta al giorno: Scudo.',
          'È appartenuto a Kaelthar prima di passare a Sszara Sweetlight.',
        ],
      },
      {
        name: 'Anello di Malachir Drenhal, Custode del Sigillo Nero',
        category: 'Artefatto senziente',
        origin: 'Frammento dell’anima',
        effects: [
          'Richiede sintonia con un Mago.',
          'Concede bonus a una caratteristica secondo il livello del personaggio.',
          'È legato ai frammenti dell’anima e a conoscenze degli anni ignoti.',
        ],
      },
      {
        name: 'Armatura di Cuoio Borchiato +2',
        category: 'Armatura',
        origin: 'Equipaggiamento di Kaelthar',
        effects: ['Parte della difesa che porta la sua CA a 18.'],
      },
      {
        name: 'La Folgore Scarlatta',
        category: 'Arma distintiva',
        origin: 'Equipaggiamento di Kaelthar',
        effects: ['Stocco o lama principale usata insieme alla magia del Cantore della Lama.'],
      },
      {
        name: 'Sfera del Jinn Roden Ramses',
        category: 'Oggetto misterioso',
        origin: 'Equipaggiamento',
        effects: ['Dettagli da sviluppare nel Codex quando verranno raccolte più informazioni.'],
      },
    ],
    backgroundSections: [
      {
        title: 'Il Sapiente',
        text: 'Kaelthar parla lentamente quando si rivolge agli idioti, vale a dire quasi tutti dal suo punto di vista. È legato a un antico testo i cui terribili segreti non devono cadere nelle mani sbagliate.',
      },
      {
        title: 'Nessun limite',
        text: 'Il suo ideale è la possibilità: niente deve incatenare le infinite potenzialità insite in ogni esistenza. Questo lo rende un personaggio affascinato dalla conoscenza, dal rischio e dai margini più pericolosi della magia.',
      },
      {
        title: 'Il Teletrasporto Fallito',
        text: 'Dopo un Raid Generale, il gruppo tentò di tornare al dungeon in cui si trovava. Qualcosa nell’incantesimo di teletrasporto fallì: Kaelthar Lunachiara non tornò con gli altri. Al suo posto apparve Sszara Sweetlight, proveniente da un luogo diverso. Da quel momento il destino del mago Shadar-Kai rimane sconosciuto.',
      },
      {
        title: 'Non un ex membro',
        text: 'Kaelthar non viene registrato come ex membro: non ha abbandonato la Mano Cinerea e non è morto in modo confermato. Nel Codex il suo stato corretto è Disperso.',
      },
    ],
    forms: [
      {
        id: 'lama-incantata',
        name: 'Cavaliere della Lama Incantata',
        subtitle: 'La forma più rappresentativa',
        image: kaeltharLamaIncantata,
        theme: 'night',
        description:
          'Kaelthar come Cantore della Lama: spada, grimorio e armatura attraversati da energia azzurra.',
      },
      {
        id: 'cavaliere',
        name: 'Cavaliere Arcano',
        subtitle: 'Destriero fantomatico e lama elettrica',
        image: kaeltharCavaliere,
        theme: 'night',
        description:
          'Una rappresentazione dinamica di Kaelthar a cavallo, evocativa del Destriero Fantomatico e della sua natura da mago combattente.',
      },
      {
        id: 'necros-armata',
        name: 'Necros e la sua armata',
        subtitle: 'Lato necromantico',
        image: kaeltharNecrosArmata,
        theme: 'night',
        description:
          'Kaelthar circondato da servitori non morti, sotto una pioggia di meteore: il volto più inquietante della sua magia.',
      },
      {
        id: 'due-armi',
        name: 'Doppia lama arcana',
        subtitle: 'Lama, ombra e libro',
        image: kaeltharDueArmi,
        theme: 'night',
        description:
          'Una versione concentrata sul duello arcano, tra lama fisica, lama evocata e grimorio sospeso.',
      },
      {
        id: 'ritratto-classico',
        name: 'Ritratto originale',
        subtitle: 'Archivio precedente',
        image: kaeltharImage,
        theme: 'ivory',
        description:
          'Il primo ritratto usato nel Codex, mantenuto come immagine d’archivio.',
      },
    ],
    gallery: [
      { id: 'lama-incantata', title: 'Cavaliere della Lama Incantata', image: kaeltharLamaIncantata, description: 'Spada, grimorio e armatura attraversati dalla magia.' },
      { id: 'cavaliere', title: 'Cavaliere Arcano', image: kaeltharCavaliere, description: 'Kaelthar su destriero, con lama elettrica e libro aperto.' },
      { id: 'necros-armata', title: 'Necros e la sua armata', image: kaeltharNecrosArmata, description: 'Kaelthar con un’armata di non morti sotto una pioggia di meteore.' },
      { id: 'due-armi', title: 'Doppia lama arcana', image: kaeltharDueArmi, description: 'Kaelthar con due lame e grimorio sospeso.' },
      { id: 'ritratto-classico', title: 'Ritratto originale', image: kaeltharImage, description: 'Immagine storica del personaggio nel Codex.' },
    ],
    timeline: [
      {
        title: 'Prima formazione della Mano Cinerea',
        subtitle: 'Mago della compagnia',
        text: 'Kaelthar accompagna la Mano Cinerea come mago Shadar-Kai e Cantore della Lama.',
      },
      {
        title: 'Legame con Damocle',
        subtitle: 'Grimorio e conoscenza proibita',
        text: 'Il suo percorso si lega al Grimorio di Damocle, ai segreti arcani e alla necromanzia.',
      },
      {
        title: 'Raid Generale',
        subtitle: 'Ultima apparizione conosciuta',
        text: 'Kaelthar partecipa al Raid Generale con la Mano Cinerea.',
      },
      {
        title: 'Il ritorno fallito',
        subtitle: 'Disperso',
        text: 'Il teletrasporto verso il dungeon fallisce: Kaelthar scompare e al suo posto compare Sszara Sweetlight.',
      },
    ],
    quotes: [
      'Nessun limite. Niente può incatenare le infinite possibilità insite in ogni esistenza.',
      'Il sapere non è pericoloso. Lo sono gli idioti che credono di possederlo.',
      'Non sono scomparso. Sono solo oltre il punto in cui potete vedermi.',
    ],
  },
  {
    id: 'saphira',
    name: 'Saphira',
    title: 'Giovane avventuriera dalla spada affilata',
    subtitle: 'Hexblade agli inizi',
    role: 'Ex membro',
    status: 'Ex membro',
    symbol: '⚔',
    appearanceOrder: 8,
    player: 'Da completare',
    race: 'Da verificare',
    classInfo: 'Warlock 1 · Hexblade',
    subclass: 'Hexblade',
    alignment: 'Da completare',
    firstAppearance: 'Prima formazione della Mano Cinerea',
    image: saphiraImage,
    portrait: saphiraImage,
    quote: 'La lama non dimentica il primo sangue.',
    description:
      'Saphira è una giovane avventuriera legata alla prima storia della Mano Cinerea. La sua scheda la mostra come una Warlock Hexblade di 1° livello, ancora agli inizi del proprio percorso, con una forte impronta da combattente carismatica.',
    identity: [
      { label: 'Stato', value: 'Ex membro' },
      { label: 'Classe', value: 'Warlock 1' },
      { label: 'Sottoclasse', value: 'Hexblade' },
      { label: 'Background', value: 'Celebrity Adventurer’s Scion' },
      { label: 'Competenza', value: '+2' },
      { label: 'Ruolo', value: 'Avventuriera della lama' },
    ],
    stats: {
      armorClass: 13,
      hitPoints: 9,
      level: 1,
      proficiencyBonus: '+2',
      initiative: '+2',
      speed: '9 m',
      passivePerception: 13,
      spellcastingAbility: 'Carisma',
      spellSaveDc: 13,
      spellAttack: '+5',
      classes: [
        { name: 'Warlock', detail: 'Hexblade', level: 1 },
      ],
      abilities: [
        { name: 'Forza', value: 8 },
        { name: 'Destrezza', value: 14 },
        { name: 'Costituzione', value: 13 },
        { name: 'Intelligenza', value: 13 },
        { name: 'Saggezza', value: 12 },
        { name: 'Carisma', value: 17 },
      ],
      savingThrows: [
        { name: 'Forza', value: '-1' },
        { name: 'Destrezza', value: '+2' },
        { name: 'Costituzione', value: '+1' },
        { name: 'Intelligenza', value: '+1' },
        { name: 'Saggezza', value: '+3' },
        { name: 'Carisma', value: '+5' },
      ],
      skills: [
        { name: 'Acrobazia', value: '+2' },
        { name: 'Arcano', value: '+3' },
        { name: 'Inganno', value: '+3' },
        { name: 'Storia', value: '+3' },
        { name: 'Intimidire', value: '+3' },
        { name: 'Natura', value: '+3' },
        { name: 'Percezione', value: '+3' },
        { name: 'Intrattenere', value: '+3' },
        { name: 'Persuasione', value: '+5' },
        { name: 'Religione', value: '+3' },
        { name: 'Furtività', value: '+2' },
      ],
      tools: ['Disguise Kit'],
    },
    abilities: [
      {
        name: 'Hexblade’s Curse',
        value: 'Maledizione della Lama',
        text: 'Come azione bonus può maledire una creatura entro 9 metri. Contro il bersaglio ottiene bonus ai danni pari alla competenza, critico con 19-20 e recupera punti ferita se il bersaglio muore.',
      },
      {
        name: 'Hex Warrior',
        value: 'Combattente del patrono',
        text: 'Ottiene competenza in armature medie, scudi e armi marziali. Può legare un’arma e usare il Carisma per attacchi e danni con essa.',
      },
      {
        name: 'Darkvision',
        value: 'Vista superiore',
        text: 'Può vedere in penombra entro 18 metri come fosse luce intensa e nell’oscurità come fosse penombra.',
      },
    ],
    spells: {
      cantrips: ['Eldritch Blast', 'Minor Illusion'],
      level1: ['Shield', 'Wrathful Smite', 'Unseen Servant', 'Comprehend Languages'],
    },
    relics: [
      {
        name: 'Longsword',
        category: 'Arma',
        origin: 'Equipaggiamento iniziale',
        effects: ['Arma principale legata all’identità Hexblade di Saphira.'],
      },
      {
        name: 'Leather Armor',
        category: 'Armatura',
        origin: 'Equipaggiamento iniziale',
        effects: ['Protezione base della prima scheda.'],
      },
    ],
    backgroundSections: [
      {
        title: 'La lama agli inizi',
        text: 'Saphira viene registrata nella prima fase della campagna come Warlock Hexblade di 1° livello. È una scheda ancora essenziale, ma già orientata verso il legame tra lama, Carisma e patrono.',
      },
      {
        title: 'Archivio incompleto',
        text: 'Le informazioni narrative di Saphira sono ancora da completare. Per ora il Codex conserva i dati tecnici disponibili dalla scheda.',
      },
    ],
    forms: [
      {
        id: 'saphira',
        name: 'Saphira',
        subtitle: 'Spada e mantello stellato',
        image: saphiraImage,
        theme: 'ivory',
        description: 'Saphira con spada e mantello, nella sua immagine d’archivio.',
      },
    ],
    gallery: [
      { id: 'saphira', title: 'Saphira', image: saphiraImage, description: 'Saphira con spada e mantello stellato.' },
    ],
  },
  {
    id: 'saariel',
    name: 'Saariel',
    title: 'Giustiziere degli dèi',
    subtitle: 'Radiant Soul · Hexblade · Divine Soul',
    role: 'Ex membro',
    status: 'Ex membro',
    symbol: '☼',
    appearanceOrder: 9,
    player: 'Da completare',
    race: 'Aasimar · Radiant Soul',
    classInfo: 'Divine Soul Sorcerer 3 / Warlock Hexblade',
    subclass: 'Divine Soul · Hexblade',
    alignment: 'Da completare',
    firstAppearance: 'Prima formazione della Mano Cinerea',
    image: saarielImage,
    portrait: saarielImage,
    quote: 'Non ho chiesto il mio potere, e a volte lo temo.',
    description:
      'Saariel è una figura sospesa tra luce e oscurità: un Aasimar Radiant Soul legato a un patrono oscuro e a una spada che è insieme dono, peso e responsabilità. La sua scheda unisce magia divina, potere da Hexblade e un forte tema di redenzione.',
    identity: [
      { label: 'Stato', value: 'Ex membro' },
      { label: 'Razza', value: 'Aasimar · Radiant Soul' },
      { label: 'Classe', value: 'Divine Soul Sorcerer 3 / Warlock Hexblade' },
      { label: 'Competenza', value: '+3' },
      { label: 'Tema', value: 'Luce, patto e redenzione' },
      { label: 'Legame', value: 'La Spada / Patrono' },
    ],
    stats: {
      armorClass: 20,
      hitPoints: 41,
      level: 'Da verificare',
      proficiencyBonus: '+3',
      initiative: '+2',
      speed: '9 m',
      passivePerception: 14,
      spellcastingAbility: 'Carisma',
      spellSaveDc: 15,
      spellAttack: '+7',
      sorceryPoints: 3,
      classes: [
        { name: 'Stregone', detail: 'Anima Divina', level: 3 },
        { name: 'Warlock', detail: 'Hexblade / Patto della Catena', level: 'da verificare' },
      ],
      abilities: [
        { name: 'Forza', value: 8 },
        { name: 'Destrezza', value: 14 },
        { name: 'Costituzione', value: 16 },
        { name: 'Intelligenza', value: 8 },
        { name: 'Saggezza', value: 12 },
        { name: 'Carisma', value: 16 },
      ],
      savingThrows: [
        { name: 'Forza', value: '-1' },
        { name: 'Destrezza', value: '+2' },
        { name: 'Costituzione', value: '+6' },
        { name: 'Intelligenza', value: '-1' },
        { name: 'Saggezza', value: '+1' },
        { name: 'Carisma', value: '+6' },
      ],
      skills: [
        { name: 'Acrobazia', value: '+2' },
        { name: 'Inganno', value: '+3' },
        { name: 'Intuizione', value: '+4' },
        { name: 'Intimidire', value: '+3' },
        { name: 'Medicina', value: '+1' },
        { name: 'Percezione', value: '+4' },
        { name: 'Intrattenere', value: '+3' },
        { name: 'Persuasione', value: '+6' },
        { name: 'Religione', value: '+2' },
        { name: 'Furtività', value: '+2' },
      ],
    },
    abilities: [
      {
        name: 'Celestial Resistance',
        value: 'Retaggio celestiale',
        text: 'Saariel ha resistenza ai danni necrotici e radianti.',
      },
      {
        name: 'Healing Hands',
        value: 'Guarigione celestiale',
        text: 'Può toccare una creatura e curarla lanciando un numero di d4 pari al bonus di competenza.',
      },
      {
        name: 'Light Bearer',
        value: 'Luce innata',
        text: 'Conosce il trucchetto Light; il Carisma è la caratteristica da incantatore.',
      },
      {
        name: 'Celestial Revelation · Radiant Soul',
        value: 'Ali di luce',
        text: 'Può liberare l’energia celestiale, ottenere velocità di volo pari alla velocità base e infliggere danni radianti extra una volta per turno.',
      },
      {
        name: 'Lucky',
        value: 'Fortuna inspiegabile',
        text: 'Dispone di 3 punti fortuna, forse legati al modo in cui il Patrono manipola il suo destino.',
      },
      {
        name: 'Hexblade’s Curse',
        value: 'Maledizione del patrono',
        text: 'Può maledire un bersaglio, aumentando danni, probabilità di critico e recupero di punti ferita alla morte del bersaglio.',
      },
      {
        name: 'Hex Warrior',
        value: 'Volontà nella lama',
        text: 'Può incanalare il proprio Carisma attraverso un’arma legata al patrono.',
      },
      {
        name: 'Favored by the Gods',
        value: 'Destino divino',
        text: 'Quando fallisce un tiro salvezza o manca un attacco, può aggiungere 2d4 al risultato.',
      },
      {
        name: 'Metamagia',
        value: 'Quickened Spell / Subtle Spell',
        text: 'Può modificare i propri incantesimi rendendoli più rapidi o più difficili da percepire.',
      },
      {
        name: 'Pact of the Chain',
        value: 'Famiglio del patto',
        text: 'Conosce Find Familiar come rituale e può evocare forme speciali come imp, pseudodrago, quasit o sprite.',
      },
      {
        name: 'Gift of the Ever-Living Ones',
        value: 'Invocazione occulta',
        text: 'Quando recupera punti ferita e il famiglio è vicino, la guarigione viene potenziata secondo l’invocazione.',
      },
    ],
    spells: {
      cantrips: [
        'Eldritch Blast',
        'Light',
        'Mind Sliver',
        'Guidance',
        'Chill Touch',
        'Blade Ward',
        'Minor Illusion',
        'Lightning Lure',
      ],
      level1: ['Shield', 'Healing Word', 'Bless', 'Silvery Barbs', 'Magic Missile', 'Cure Wounds', 'Find Familiar'],
      level2: ['Phantasmal Force', 'Warding Bond', 'Aid'],
    },
    relics: [
      {
        name: 'La Spada / Patrono',
        category: 'Legame centrale',
        origin: 'Sottratta a coloro che la cercavano',
        effects: [
          'È la sua unica compagnia e la sua più grande responsabilità.',
          'Il legame con essa definisce il conflitto tra luce interiore e potere oscuro.',
        ],
      },
      {
        name: 'Bloodwell Vial +1',
        category: 'Focus magico',
        origin: 'Equipaggiamento',
        effects: ['Focus da stregone che potenzia la magia di Saariel.'],
      },
      {
        name: 'Mezza Armatura Rara',
        category: 'Armatura',
        origin: 'Equipaggiamento',
        effects: ['Bonus indicato in scheda: +1 e +2 ad Atletica.'],
      },
    ],
    backgroundSections: [
      {
        title: 'Il potere non richiesto',
        text: 'Saariel non ha chiesto il proprio potere e a volte lo teme. Cerca un segno, un’istruzione divina, qualcosa che gli dica cosa dovrebbe farne.',
      },
      {
        title: 'Redenzione',
        text: 'Deve scoprire chi ha distrutto il santuario e perché. Il suo ideale è usare il potere oscuro affinché serva la luce che porta dentro, riscattando il sacrificio dei monaci.',
      },
      {
        title: 'La Spada e il Patrono',
        text: 'La Spada/Patrono è la sua unica compagnia e la sua più grande responsabilità. L’ha sottratta a coloro che la cercavano e ora i due sono legati.',
      },
      {
        title: 'La fortuna del Patrono',
        text: 'Saariel è incline alla superstizione e crede che la sua fortuna sia in realtà il Patrono che gioca con il suo destino.',
      },
    ],
    forms: [
      {
        id: 'base',
        name: 'Saariel base',
        subtitle: 'Prima della caduta',
        image: saarielBase,
        theme: 'ivory',
        description: 'Una forma più umana e trattenuta, ancora legata alla strada e alle rovine di Cinderlight.',
      },
      {
        id: 'giudiziere',
        name: 'Giustiziere degli dèi',
        subtitle: 'Ali nere e tempesta',
        image: saarielImage,
        theme: 'night',
        description: 'La forma più cupa e solenne: ali nere, armatura, lama e giudizio.',
      },
    ],
    gallery: [
      { id: 'base', title: 'Saariel base', image: saarielBase, description: 'Saariel presso Cinderlight.' },
      { id: 'giudiziere', title: 'Giustiziere degli dèi', image: saarielImage, description: 'Saariel con ali nere e armatura.' },
    ],
    quotes: [
      'Non ho chiesto il mio potere, e a volte lo temo.',
      'Devo usare questo potere oscuro in modo che serva la luce che è in me.',
      'La Spada è la mia unica compagnia e la mia più grande responsabilità.',
    ],
  },
]

export const activeCharacters = characters.filter((character) => character.status === 'Attivo' || character.status === 'Attiva')
export const inactiveCharacters = characters.filter((character) => character.status !== 'Attivo' && character.status !== 'Attiva')

export default characters
