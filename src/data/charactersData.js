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
    race: 'Da completare',
    classInfo: 'Ladro · Lama dell’Anima',
    subclass: 'Lama dell’Anima',
    alignment: 'Da definire',
    firstAppearance: 'Da completare',
    image: jellyCombattimento,
    portrait: jellyBase,
    quote: 'Nato dalla morte di molti. Alla ricerca della pace di tutti.',
    description:
      'Jelly è una creatura nata da un esperimento fallito: un corpo impossibile, attraversato da molte memorie e da poteri psionici che prendono forma in lame di pura energia. Dentro la Mano Cinerea è insieme ombra, lama, cuoco e sopravvissuto.',
    identity: [
      { label: 'Giocatore', value: 'Mirko F.' },
      { label: 'Classe', value: 'Ladro' },
      { label: 'Sottoclasse', value: 'Lama dell’Anima' },
      { label: 'Stato', value: 'Attivo' },
      { label: 'Ruolo', value: 'Ombra psionica' },
      { label: 'Tema', value: 'Memorie fuse' },
    ],
    stats: {
      armorClass: 21,
      hitPoints: 'Da completare',
      level: 'Da completare',
      proficiencyBonus: 'Da completare',
      initiative: 'Da completare',
      speed: 'Da completare',
      passivePerception: 'Da completare',
      classes: [
        { name: 'Ladro', detail: 'Lama dell’Anima', level: 'Da completare' },
      ],
      skills: [
        { name: 'Rapidità di Mano', value: '+13' },
        { name: 'Furtività', value: '+13' },
        { name: 'Percezione', value: '+9' },
        { name: 'Indagare', value: '+7' },
        { name: 'Acrobazia', value: '+10' },
        { name: 'Intuizione', value: 'Da completare' },
      ],
      languages: ['Da completare'],
    },
    abilities: [
      {
        name: 'Modellare sé stesso',
        value: 'Identità mutabile',
        text: 'Jelly non è una creatura del tutto stabile. La sua forma può piegarsi, contrarsi e adattarsi come se il corpo fosse ancora in cerca di una versione definitiva.',
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
        disease: [
          {
            stage: 'Distorsione del Vuoto',
            text: 'Quando il frammento risuona con la natura da ladro di Jelly, la sua presenza diventa più difficile da seguire: attacchi più letali, movimenti impossibili e aperture improvvise.',
          },
          {
            stage: 'Morbo Meteoritico',
            text: 'Il potere del frammento non è mai gratuito. Dopo l’attivazione resta il rischio della contaminazione e della consunzione.',
          },
        ],
      },
      {
        name: 'Bacchetta Cura Ferite',
        category: 'Oggetto magico',
        origin: 'Da completare',
        effects: [
          'Risorsa di supporto e sopravvivenza.',
          'Dettagli meccanici da completare.',
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
        title: 'Il barile',
        text: 'Per molto tempo è stato trattato come un’anomalia da nascondere, trasportare, vendere o temere. La sua libertà non è stata concessa: è stata strappata.',
      },
      {
        title: 'L’incontro con Ian',
        text: 'Ian è stato il primo a incontrarlo non soltanto come mostro o oggetto, ma come qualcuno a cui rivolgere una parola. Da lì nasce una delle radici più importanti della sua presenza nella Mano Cinerea.',
      },
    ],
    forms: [
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
        id: 'base',
        name: 'Forma base',
        subtitle: 'Cappuccio, occhi luminosi e lame psioniche',
        image: jellyBase,
        theme: 'night',
        description:
          'La forma più riconoscibile di Jelly: piccola, rapida, innaturale, con occhi luminosi e lame viola generate dal potere psichico.',
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
          'Jelly in battaglia è movimento, lama e scintilla psichica. Colpisce dove la guardia è più debole e scompare prima che il nemico capisca cosa sia accaduto.',
      },
      {
        id: 'oscuro',
        name: 'Forma oscura',
        subtitle: 'La fame dietro il cappuccio',
        image: jellyOscuro,
        theme: 'night',
        description:
          'Quando il lato più feroce emerge, Jelly appare meno come un ladro e più come un incubo compatto, sporco di sangue e luce viola.',
      },
    ],
    timeline: [
      {
        title: 'Distruzione del laboratorio',
        subtitle: 'Origine dell’esperimento',
        text: 'La nascita di Jelly è legata a un laboratorio, a un fallimento e alla morte di molti.',
      },
      {
        title: 'Le memorie',
        subtitle: 'Coscienze fuse',
        text: 'La creatura che emerge non è una singola voce, ma un insieme instabile di ricordi e istinti.',
      },
      {
        title: 'La cattura',
        subtitle: 'Il barile',
        text: 'Jelly viene nascosto, trasportato e trattato come qualcosa da contenere.',
      },
      {
        title: 'Ian',
        subtitle: 'Il primo legame',
        text: 'L’incontro con Ian segna il passaggio da mostro trovato a compagno possibile.',
      },
      {
        title: 'La Mano Cinerea',
        subtitle: 'Una nuova famiglia imperfetta',
        text: 'Jelly entra nella compagnia portando fame, lame psioniche, cucina e troppe memorie.',
      },
      {
        title: 'Raid meteorico',
        subtitle: 'Il frammento',
        text: 'Il potere dei Caduti e del non-luogo aggiunge un nuovo rischio alla sua natura già instabile.',
      },
    ],
    gallery: [
      { id: 'cucina', title: 'Jelly cuoco', image: jellyCucina, description: 'Jelly in cucina, tra fuoco, coltelli e porchetta.' },
      { id: 'base', title: 'Forma base', image: jellyBase, description: 'La forma classica con cappuccio e lame psioniche.' },
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
    quote: 'Prima si regge il colpo. Poi si decide cosa farne.',
    description: 'Forza stabile della compagnia, tra alchimia, resistenza e istinto protettivo.',
    identity: [
      { label: 'Stato', value: 'Attivo' },
      { label: 'Ruolo', value: 'Membro della Mano Cinerea' },
      { label: 'Informazioni', value: 'Da completare' },
    ],
    backgroundSections: [
      { title: 'Archivio incompleto', text: 'La pagina di Brewen è stata predisposta. Il giocatore potrà aggiungere background, capacità, oggetti, cronologia e galleria quando vorrà condividere nuove informazioni.' },
    ],
    timeline: [
      { title: 'Cronologia in aggiornamento', subtitle: 'Voce provvisoria', text: 'Gli eventi principali verranno collegati alle sessioni quando saranno disponibili le informazioni del giocatore.' },
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
    quote: 'Ciò che mi ha creato non decide ciò che diventerò.',
    description: 'Protetto di Gertrude e figura legata a poteri alieni, sciami e segreti non ancora chiariti.',
    identity: [
      { label: 'Stato', value: 'Attivo' },
      { label: 'Ruolo', value: 'Membro della Mano Cinerea' },
      { label: 'Informazioni', value: 'Da completare' },
    ],
    backgroundSections: [
      { title: 'Archivio incompleto', text: 'La pagina di Zero è stata predisposta. Il giocatore potrà aggiungere background, capacità, oggetti, cronologia e galleria quando vorrà condividere nuove informazioni.' },
    ],
    timeline: [
      { title: 'Cronologia in aggiornamento', subtitle: 'Voce provvisoria', text: 'Gli eventi principali verranno collegati alle sessioni quando saranno disponibili le informazioni del giocatore.' },
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
    name: 'Mia',
    title: 'Nuovo sangue della Mano Cinerea',
    subtitle: 'Nuovo sangue della Mano Cinerea',
    role: 'Membro della Mano Cinerea',
    status: 'Attiva',
    symbol: '☀',
    appearanceOrder: 6,
    quote: 'Ogni nuovo sangue cambia il battito della compagnia.',
    description: 'Mia entra nella Mano Cinerea durante la Sessione 40, portando una nuova presenza all’interno del gruppo.',
    identity: [
      { label: 'Stato', value: 'Attiva' },
      { label: 'Ruolo', value: 'Membro della Mano Cinerea' },
      { label: 'Informazioni', value: 'Da completare' },
    ],
    backgroundSections: [
      { title: 'Archivio incompleto', text: 'La pagina di Mia è stata predisposta. Il giocatore potrà aggiungere background, capacità, oggetti, cronologia e galleria quando vorrà condividere nuove informazioni.' },
    ],
    timeline: [
      { title: 'Sessione 40', subtitle: 'Ingresso nella Mano Cinerea', text: 'Mia entra nel gruppo insieme a Sszara.' },
    ],
  },
  { id: 'kaelthar', name: 'Kaelthar Lunachiara', title: 'Scelto da Damocle', subtitle: 'Scelto da Damocle', role: 'Ex membro', status: 'Ex membro', symbol: '✧', appearanceOrder: 7, quote: 'Alcune strade restano nella cronaca anche quando chi le percorre si allontana.', description: 'Un tempo parte della Mano Cinerea, ora non più tra i membri attivi.' },
  { id: 'saphira', name: 'Saphira', title: 'Giovane avventuriera dalla spada affilata', subtitle: 'Giovane avventuriera dalla spada affilata', role: 'Ex membro', status: 'Ex membro', symbol: '⚔', appearanceOrder: 8, quote: 'La lama non dimentica il primo sangue.', description: 'Figura del passato della compagnia, ricordata tra gli ex membri.' },
  { id: 'saariel', name: 'Saariel', title: 'Giustiziere degli dèi', subtitle: 'Giustiziere degli dèi', role: 'Ex membro', status: 'Ex membro', symbol: '☼', appearanceOrder: 9, quote: 'Il giudizio non sempre arriva dall’alto.', description: 'Legato a misteri, lame e giudizi che ancora riverberano nella cronaca.' },
]

export const activeCharacters = characters.filter((character) => character.status === 'Attivo' || character.status === 'Attiva')
export const inactiveCharacters = characters.filter((character) => character.status !== 'Attivo' && character.status !== 'Attiva')

export default characters
