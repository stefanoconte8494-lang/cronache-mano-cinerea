import sszaraBase from '../assets/characters/sszara/sszara-base.png'
import sszaraGala from '../assets/characters/sszara/sszara-gala.png'
import sszaraNotturna from '../assets/characters/sszara/sszara-notturna.png'
import sszaraStellare from '../assets/characters/sszara/sszara-stellare.png'
import sszaraArmaturaFinale from '../assets/characters/sszara/sszara-armatura-finale.png'

export const characters = [
  { id: 'jelly', name: 'Jelly', title: 'Figlio del grembo di vetro', subtitle: 'Figlio del grembo di vetro', status: 'Attivo', symbol: '⊙', appearanceOrder: 1, description: 'Presenza enigmatica della compagnia, legata a misteri ancora da decifrare.', quote: 'Ogni frammento nasconde una forma.' },
  { id: 'ian', name: 'Octavian “Ian” Ashvale', title: 'Guardiano seguito dall’eco', subtitle: 'Guardiano seguito dall’eco', status: 'Attivo', symbol: '⚔', appearanceOrder: 2, description: 'Spadaccino e guardiano, inseguito da echi del passato e da una dimora ancora da ritrovare.', quote: 'Alcune strade non si scelgono: ti riconoscono.' },
  { id: 'brewen', name: 'Brewen Dolce Mosto', title: 'Muro di muscoli', subtitle: 'Muro di muscoli', status: 'Attivo', symbol: '⚒', appearanceOrder: 3, description: 'Forza stabile della compagnia, tra alchimia, resistenza e istinto protettivo.', quote: 'Prima si regge il colpo. Poi si decide cosa farne.' },
  { id: 'zero', name: 'Zerion “Zero” Zaulyl', title: 'Rinnegatore dello sciame', subtitle: 'Rinnegatore dello sciame', status: 'Attivo', symbol: '✦', appearanceOrder: 4, description: 'Protetto di Gertrude e figura legata a poteri alieni, sciami e segreti non ancora chiariti.', quote: 'Ciò che mi ha creato non decide ciò che diventerò.' },
  {
    id: 'sszara', name: 'Sszara Sweetlight', title: 'Sacerdotessa delle stelle', subtitle: 'Sacerdotessa delle stelle', status: 'Attiva', symbol: '✹', appearanceOrder: 5, player: 'Stefano C.', race: 'Yuan-Ti', classInfo: 'Druida 2 · Chierica 6', circle: 'Circolo delle Stelle · Dominio della Vita', alignment: 'Neutrale Buona', firstAppearance: 'Sessione 40', image: sszaraArmaturaFinale, portrait: sszaraArmaturaFinale,
    quote: 'Interpreto ogni evento come parte di uno schema più ampio che non sono ancora riuscita a decifrare.',
    description: 'Sszara Sweetlight è il nuovo sangue della Mano Cinerea: una Yuan-Ti legata al potere delle stelle, alla magia curativa e a forze più antiche e pericolose. Entra nella compagnia durante la Sessione 40, portando con sé una natura silenziosa, introversa e un potere capace di piegare la guarigione verso qualcosa di molto più rischioso.',
    identity: [
      { label: 'Razza', value: 'Yuan-Ti' }, { label: 'Cammino', value: 'Druida · Chierica' }, { label: 'Circolo', value: 'Circolo delle Stelle' }, { label: 'Dominio', value: 'Vita' }, { label: 'Allineamento', value: 'Neutrale Buona' }, { label: 'Prima apparizione', value: 'Sessione 40' },
    ],
    background: [
      'Sszara nasce come creatura di confine: abbastanza vicina alla natura serpentina degli Yuan-Ti da portarne il segno sulla pelle, ma abbastanza diversa da non sentirsi mai davvero parte di un solo mondo.',
      'Il suo background è quello di una sopravvissuta rovinata: qualcosa ha spezzato la sua vita precedente e l’ha costretta a restare in piedi quando sarebbe stato più semplice cedere. Da quella frattura nasce la sua calma, la sua diffidenza e la tendenza a leggere ogni evento come un tassello di un disegno più grande.',
      'Nella Mano Cinerea porta un equilibrio strano: cura, luce stellare, veleno, silenzio e presagi. Non cerca il centro della scena, ma osserva. E quando agisce, sembra farlo come se avesse già visto il riflesso dell’evento in una costellazione lontana.',
    ],
    personality: { traits: 'Introversa, pensierosa, attenta ai segni e agli schemi nascosti.', ideal: 'Ognuno deve contribuire al benessere di tutti.', bond: 'Solo di passaggio.', flaw: 'Tende a chiudersi nel silenzio e a interpretare tutto come parte di un disegno più grande.' },
    forms: [
      { id: 'base', name: 'Inizio dell’avventura', subtitle: 'La selva, il bastone e il primo passo', image: sszaraBase, theme: 'verdant', description: 'La Sszara degli inizi: ancora vicina alla natura, ai sentieri umidi e alle ombre vive della foresta.' },
      { id: 'gala', name: 'Serata di gala', subtitle: 'Maschera, veleno e bellezza controllata', image: sszaraGala, theme: 'gala', description: 'Durante una serata formale, Sszara assume un aspetto più sottile e sociale. Il viola scuro e il verde veleno richiamano la sua natura Yuan-Ti.' },
      { id: 'notturna', name: 'Forma Siderale · Cielo Notturno', subtitle: 'Quando il potere stellare oscura la pelle', image: sszaraNotturna, theme: 'night', description: 'Quando attiva il potere druidico, il corpo si scurisce e le stelle affiorano come punti di una mappa celeste.' },
      { id: 'stellare', name: 'Forma Siderale · Luna', subtitle: 'Capelli bianchi, pelle oscura e luce sulle giunture', image: sszaraStellare, theme: 'moon', description: 'La variante lunare della sua forma stellare è più solenne e guerriera. La luce corre sull’armatura, sul bastone e sullo scudo.' },
      { id: 'armatura', name: 'Nuova armatura', subtitle: 'La sacerdotessa armata delle stelle', image: sszaraArmaturaFinale, theme: 'ivory', description: 'La nuova armatura fonde l’eleganza bianca della sua forma normale con il simbolismo serpentino e stellare.' },
    ],
    powers: [
      { name: 'Forma Siderale', text: 'La luce delle stelle si manifesta sul corpo di Sszara, trasformandola in una mappa celeste vivente.' },
      { name: 'Giudizio del Calice', text: 'La guarigione diventa una scommessa mistica: il potere del Calice può amplificare la cura, ma porta sempre con sé il rischio di un prezzo.' },
      { name: 'Preservare la Vita', text: 'Sszara incanala energia divina per tenere in piedi chi sta cedendo, distribuendo la vita come una riserva preziosa.' },
      { name: 'Carta Celeste', text: 'Il suo legame con le costellazioni non è solo simbolico: la carta celeste è il fulcro attraverso cui interpreta traiettorie, presagi e luce stellare.' },
      { name: 'Dardo Tracciante', text: 'La luce diventa direzione. Un colpo radioso non serve soltanto a ferire: serve a indicare un bersaglio.' },
    ],
    timeline: [
      { title: 'Sessione 40 · La caccia continua', text: 'Sszara si unisce alla Mano Cinerea insieme a Mia, mentre il gruppo riprende il filo della propria storia.' },
      { title: 'La nuova armatura', text: 'Il suo aspetto si definisce: la figura della sacerdotessa stellare diventa più chiara e solenne.' },
      { title: 'Il potere druidico', text: 'Le forme stellari rivelano la doppia natura di Sszara: cura e cielo antico, luce e rischio.' },
    ],
    gallery: [
      { id: 'base', title: 'Inizio dell’avventura', image: sszaraBase, description: 'Sszara nella sua forma iniziale, nella selva, con il bastone.' },
      { id: 'gala', title: 'Serata di gala', image: sszaraGala, description: 'Abito viola scuro, richiami verdi e maschera elaborata.' },
      { id: 'notturna', title: 'Forma Siderale · Cielo Notturno', image: sszaraNotturna, description: 'Pelle scura, stelle vive e presenza quasi cosmica.' },
      { id: 'stellare', title: 'Forma Siderale · Luna', image: sszaraStellare, description: 'Capelli bianchi, armatura scura e luce sulle giunture.' },
      { id: 'armatura', title: 'Nuova armatura', image: sszaraArmaturaFinale, description: 'La forma più completa e iconica della sacerdotessa delle stelle.' },
    ],
    quotes: ['Interpreto ogni evento come parte di uno schema più ampio che non sono ancora riuscita a decifrare.', 'Le stelle non mostrano solo il cammino: mostrano ciò che si tenta di ignorare.', 'La cura è una promessa. Il prezzo, invece, arriva sempre dopo.'],
  },
  { id: 'mia', name: 'Mia', title: 'Nuovo sangue della Mano Cinerea', subtitle: 'Nuovo sangue della Mano Cinerea', status: 'Attiva', symbol: '☀', appearanceOrder: 6, description: 'Mia entra nella Mano Cinerea durante la Sessione 40.', quote: 'Ogni nuovo sangue cambia il battito della compagnia.' },
  { id: 'kaelthar', name: 'Kaelthar Lunachiara', title: 'Scelto da Damocle', subtitle: 'Scelto da Damocle', status: 'Ex membro', symbol: '✧', appearanceOrder: 7, description: 'Un tempo parte della Mano Cinerea, ora non più tra i membri attivi.', quote: 'Alcune strade restano nella cronaca anche quando chi le percorre si allontana.' },
  { id: 'saphira', name: 'Saphira', title: 'Giovane avventuriera dalla spada affilata', subtitle: 'Giovane avventuriera dalla spada affilata', status: 'Ex membro', symbol: '⚔', appearanceOrder: 8, description: 'Figura del passato della compagnia, ricordata tra gli ex membri.', quote: 'La lama non dimentica il primo sangue.' },
  { id: 'saariel', name: 'Saariel', title: 'Giustiziere degli dèi', subtitle: 'Giustiziere degli dèi', status: 'Ex membro', symbol: '☼', appearanceOrder: 9, description: 'Legato a misteri, lame e giudizi che ancora riverberano nella cronaca.', quote: 'Il giudizio non sempre arriva dall’alto.' },
]

export const activeCharacters = characters.filter((character) => character.status === 'Attivo' || character.status === 'Attiva')
export const inactiveCharacters = characters.filter((character) => character.status !== 'Attivo' && character.status !== 'Attiva')
export default characters
