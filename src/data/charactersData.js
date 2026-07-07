import sszaraBase from '../assets/characters/sszara/sszara-base.png'
import sszaraGala from '../assets/characters/sszara/sszara-gala.png'
import sszaraNotturna from '../assets/characters/sszara/sszara-notturna.png'
import sszaraStellare from '../assets/characters/sszara/sszara-stellare.png'
import sszaraArmaturaFinale from '../assets/characters/sszara/sszara-armatura-finale.png'

export const characters = [
  { id: 'jelly', name: 'Jelly', title: 'Figlio del grembo di vetro', subtitle: 'Figlio del grembo di vetro', role: 'Membro della Mano Cinerea', status: 'Attivo', symbol: '⊙', appearanceOrder: 1, quote: 'Ogni frammento nasconde una forma.', description: 'Presenza enigmatica della compagnia, legata a misteri ancora da decifrare.' },
  { id: 'ian', name: 'Octavian “Ian” Ashvale', title: 'Guardiano seguito dall’eco', subtitle: 'Guardiano seguito dall’eco', role: 'Membro della Mano Cinerea', status: 'Attivo', symbol: '⚔', appearanceOrder: 2, quote: 'Alcune strade non si scelgono: ti riconoscono.', description: 'Spadaccino e guardiano, inseguito da echi del passato e da una dimora ancora da ritrovare.' },
  { id: 'brewen', name: 'Brewen Dolce Mosto', title: 'Muro di muscoli', subtitle: 'Muro di muscoli', role: 'Membro della Mano Cinerea', status: 'Attivo', symbol: '⚒', appearanceOrder: 3, quote: 'Prima si regge il colpo. Poi si decide cosa farne.', description: 'Forza stabile della compagnia, tra alchimia, resistenza e istinto protettivo.' },
  { id: 'zero', name: 'Zerion “Zero” Zaulyl', title: 'Rinnegatore dello sciame', subtitle: 'Rinnegatore dello sciame', role: 'Membro della Mano Cinerea', status: 'Attivo', symbol: '✦', appearanceOrder: 4, quote: 'Ciò che mi ha creato non decide ciò che diventerò.', description: 'Protetto di Gertrude e figura legata a poteri alieni, sciami e segreti non ancora chiariti.' },
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
  { id: 'mia', name: 'Mia', title: 'Nuovo sangue della Mano Cinerea', subtitle: 'Nuovo sangue della Mano Cinerea', role: 'Membro della Mano Cinerea', status: 'Attiva', symbol: '☀', appearanceOrder: 6, quote: 'Ogni nuovo sangue cambia il battito della compagnia.', description: 'Mia entra nella Mano Cinerea durante la Sessione 40, portando una nuova presenza all’interno del gruppo.' },
  { id: 'kaelthar', name: 'Kaelthar Lunachiara', title: 'Scelto da Damocle', subtitle: 'Scelto da Damocle', role: 'Ex membro', status: 'Ex membro', symbol: '✧', appearanceOrder: 7, quote: 'Alcune strade restano nella cronaca anche quando chi le percorre si allontana.', description: 'Un tempo parte della Mano Cinerea, ora non più tra i membri attivi.' },
  { id: 'saphira', name: 'Saphira', title: 'Giovane avventuriera dalla spada affilata', subtitle: 'Giovane avventuriera dalla spada affilata', role: 'Ex membro', status: 'Ex membro', symbol: '⚔', appearanceOrder: 8, quote: 'La lama non dimentica il primo sangue.', description: 'Figura del passato della compagnia, ricordata tra gli ex membri.' },
  { id: 'saariel', name: 'Saariel', title: 'Giustiziere degli dèi', subtitle: 'Giustiziere degli dèi', role: 'Ex membro', status: 'Ex membro', symbol: '☼', appearanceOrder: 9, quote: 'Il giudizio non sempre arriva dall’alto.', description: 'Legato a misteri, lame e giudizi che ancora riverberano nella cronaca.' },
]

export const activeCharacters = characters.filter((character) => character.status === 'Attivo' || character.status === 'Attiva')
export const inactiveCharacters = characters.filter((character) => character.status !== 'Attivo' && character.status !== 'Attiva')

export default characters
