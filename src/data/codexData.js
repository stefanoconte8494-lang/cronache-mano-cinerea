export const codexCategories = [
  {
    id: 'luoghi',
    title: 'Luoghi',
    icon: '📍',
    description: 'Città, rovine, dimore, laboratori e territori attraversati dalla Mano Cinerea.',
    count: 4,
  },
  {
    id: 'fazioni',
    title: 'Fazioni',
    icon: '⚔',
    description: 'Casate, culti, compagnie, organizzazioni e poteri che muovono la storia.',
    count: 4,
  },
  {
    id: 'reliquie',
    title: 'Reliquie',
    icon: '📜',
    description: 'Oggetti magici, frammenti, artefatti e doni ottenuti durante la campagna.',
    count: 7,
  },
  {
    id: 'figure',
    title: 'Figure storiche',
    icon: '👑',
    description: 'Entità, patroni, nemici e personaggi non comuni che hanno segnato le Cronache.',
    count: 5,
  },
  {
    id: 'bestiario',
    title: 'Bestiario',
    icon: '📖',
    description: 'Creature, abomini, sciami, caduti e minacce incontrate dal gruppo.',
    count: 3,
  },
  {
    id: 'mappe',
    title: 'Mappe',
    icon: '🗺',
    description: 'Tracce, rotte, proprietà, dimore e luoghi da esplorare.',
    count: 2,
  },
  {
    id: 'documenti',
    title: 'Documenti',
    icon: '📚',
    description: 'Lettere, contratti, appunti, simboli e prove raccolte durante le sessioni.',
    count: 5,
  },
  {
    id: 'cronologia',
    title: 'Cronologia',
    icon: '⏳',
    description: 'Eventi cardine della Mano Cinerea, ordinati come storia del mondo e non solo come sessioni.',
    count: 6,
  },
  {
    id: 'misteri',
    title: 'Misteri irrisolti',
    icon: '◈',
    description: 'Eventi anomali, sparizioni e domande aperte che la Mano Cinerea non ha ancora chiarito.',
    count: 1,
  },
]

export const codexEntries = [
  {
    id: 'kaelthar-mago-disperso',
    category: 'misteri',
    title: 'Kaelthar, il Mago Disperso',
    type: 'Personaggio disperso',
    status: 'Aperto',
    description:
      'Kaelthar non è un ex membro: è scomparso durante l’anomalia del teletrasporto successiva al Raid Generale. Il suo destino è ancora ignoto.',
    links: ['Kaelthar Lunachiara', 'Sszara Sweetlight', 'Il Teletrasporto Fallito'],
  },
  {
    id: 'gertrude',
    category: 'figure',
    title: 'Gertrude',
    type: 'PNG importante',
    status: 'Viva',
    description:
      'Donna anziana dall’aspetto severo e autorevole, legata alle prime indagini della Mano Cinerea.',
    links: ['Faro di Cenere', 'Bosco dei ragni'],
  },
  {
    id: 'alucard-maximilian-silverhart-iii',
    category: 'figure',
    title: 'Alucard Maximilian Silverhart III',
    type: 'Casata Silverhart',
    status: 'Vivo',
    description:
      'Esponente della potente famiglia Silverhart, incontrato durante il ballo in maschera della Sessione 42.',
    links: ['Sessione 42', 'Famiglia Silverhart', 'Tulipano'],
  },
  {
    id: 'teletrasporto-fallito',
    category: 'misteri',
    title: 'Il Teletrasporto Fallito',
    type: 'Mistero irrisolto',
    status: 'Aperto',
    description:
      'Durante il ritorno dal Raid Generale, Kaelthar “Necros” Lunachiara scomparve e al suo posto apparve Sszara Sweetlight. L’origine dell’anomalia resta ignota.',
    links: ['Kaelthar Lunachiara', 'Sszara Sweetlight', 'Raid Generale'],
  },
  {
    id: 'magione-silverhart',
    category: 'luoghi',
    title: 'Magione Silverhart',
    type: 'Luogo',
    status: 'Attivo nelle cronache',
    description:
      'Dimora della potente famiglia Silverhart, teatro del ballo in maschera durante il quale la Mano Cinerea cerca informazioni sul Tulipano.',
    links: ['Sessione 42', 'Famiglia Silverhart', 'Tulipano'],
  },
  {
    id: 'laboratorio-jelly',
    category: 'luoghi',
    title: 'Laboratorio distrutto',
    type: 'Luogo',
    status: 'Origine personale',
    description:
      'Luogo della nascita di Jelly, segnato da teche frantumate, esperimenti falliti e frammenti di molte vite fuse insieme.',
    links: ['Jelly', 'Esperimento fallito'],
  },
  {
    id: 'cinderlight',
    category: 'luoghi',
    title: 'Cinderlight',
    type: 'Luogo',
    status: 'Da approfondire',
    description:
      'Nome ricorrente nelle cronache e collegato ad alcune figure del passato. La voce verrà ampliata con i riassunti mancanti.',
    links: ['Saariel', 'Kaelthar'],
  },
  {
    id: 'dimora-ian',
    category: 'mappe',
    title: 'Dimora di Ian',
    type: 'Mappa',
    status: 'Quest personale',
    description:
      'Una mappa misteriosa conduce verso la dimora di Ian, luogo potenzialmente legato al suo passato.',
    links: ['Ian', 'Quest personale'],
  },
  {
    id: 'mano-cinerea',
    category: 'fazioni',
    title: 'Mano Cinerea',
    type: 'Compagnia',
    status: 'Attiva',
    description:
      'La compagnia di avventurieri al centro delle Cronache. Ogni membro porta con sé una storia, un debito e una ferita.',
    links: ['Sszara', 'Ian', 'Jelly', 'Zero', 'Brewen', 'Mia'],
  },
  {
    id: 'famiglia-silverhart',
    category: 'fazioni',
    title: 'Famiglia Silverhart',
    type: 'Casata nobiliare',
    status: 'Da indagare',
    description:
      'Casata potente e prestigiosa che ospita il ballo in maschera legato all’indagine sul Tulipano.',
    links: ['Magione Silverhart', 'Sessione 42'],
  },
  {
    id: 'culto-perduto',
    category: 'fazioni',
    title: 'Culto Perduto',
    type: 'Culto',
    status: 'Misterioso',
    description:
      'Culto collegato all’anfora e al Frammento Frangi-Trama. La sua vera natura è ancora da chiarire.',
    links: ['Frammento Frangi-Trama', 'Anfora del Culto Perduto'],
  },
  {
    id: 'caduti-amniax',
    category: 'fazioni',
    title: 'Caduti di Amniax',
    type: 'Minaccia',
    status: 'Pericolosa',
    description:
      'Entità o forze legate ai frammenti meteoritici, al non-luogo e a una contaminazione gravissima.',
    links: ['Frammento Meteorico', 'Morbo Meteoritico'],
  },
  {
    id: 'frammento-meteorico',
    category: 'reliquie',
    title: 'Frammento Meteorico',
    type: 'Frammento instabile',
    status: 'Pericoloso',
    description:
      'Residuo instabile proveniente dal non-luogo. Conferisce potere immediato, ma può condurre al Morbo Meteoritico.',
    links: ['Sszara', 'Jelly', 'Caduti di Amniax'],
  },
  {
    id: 'frangi-trama',
    category: 'reliquie',
    title: 'Frammento Frangi-Trama',
    type: 'Reliquia',
    status: 'In sintonia',
    description:
      'Parte dell’anfora del Culto Perduto. Funziona come focus arcano e permette l’uso di magie difensive e di dissoluzione.',
    links: ['Sszara', 'Kaelthar', 'Culto Perduto'],
  },
  {
    id: 'giudizio-calice',
    category: 'reliquie',
    title: 'Il Giudizio del Calice',
    type: 'Dono del Visitatore',
    status: 'Attivo',
    description:
      'Potere concesso attraverso un desiderio del Viandante: amplifica la cura, ma può consumare le energie vitali del bersaglio.',
    links: ['Sszara', 'Visitatore', 'Viandante'],
  },
  {
    id: 'lama-ossidiana',
    category: 'reliquie',
    title: 'Lama di Ossidiana',
    type: 'Arma',
    status: 'In possesso di Jelly',
    description:
      'Arma distintiva legata al lato più silenzioso e oscuro di Jelly.',
    links: ['Jelly'],
  },
  {
    id: 'mantello-varyn',
    category: 'reliquie',
    title: 'Mantello di Varyn Ombrafredda',
    type: 'Reliquia',
    status: 'In possesso di Jelly',
    description:
      'Mantello legato a furtività, ombra e freddo. La voce sarà ampliata con le informazioni complete.',
    links: ['Jelly'],
  },
  {
    id: 'visitatore',
    category: 'figure',
    title: 'Il Visitatore',
    type: 'Entità',
    status: 'Ricorrente',
    description:
      'Entità misteriosa che concede doni e chiede un prezzo. Nella Sessione 42 chiede in prestito i cinque sensi del gruppo.',
    links: ['Sessione 42', 'Giudizio del Calice'],
  },
  {
    id: 'viandante',
    category: 'figure',
    title: 'Il Viandante',
    type: 'Figura enigmatica',
    status: 'Misterioso',
    description:
      'Figura legata ai desideri, ai doni e ad alcuni poteri ricevuti dalla compagnia.',
    links: ['Giudizio del Calice'],
  },
  {
    id: 'tulipano',
    category: 'figure',
    title: 'Il Tulipano',
    type: 'Mistero',
    status: 'Da indagare',
    description:
      'Nome attorno al quale si muove l’indagine che porta la Mano Cinerea al ballo dei Silverhart.',
    links: ['Sessione 42', 'Famiglia Silverhart'],
  },
  {
    id: 'damocle',
    category: 'figure',
    title: 'Damocle',
    type: 'Presenza superiore',
    status: 'Da approfondire',
    description:
      'Figura legata a Kaelthar e a Saariel. Verrà ampliata quando saranno integrati i riassunti mancanti.',
    links: ['Kaelthar', 'Saariel'],
  },
  {
    id: 'morbo-meteoritico',
    category: 'bestiario',
    title: 'Morbo Meteoritico',
    type: 'Contaminazione',
    status: 'Letale',
    description:
      'Effetto collaterale dei frammenti meteoritici: altera sangue, pelle, occhi e può condurre a una morte irreversibile.',
    links: ['Frammento Meteorico'],
  },
  {
    id: 'abomini-laboratorio',
    category: 'bestiario',
    title: 'Abomini del laboratorio',
    type: 'Esperimenti falliti',
    status: 'Origine di Jelly',
    description:
      'Resti deformati di avventurieri usati in esperimenti innominabili. Dalla loro fusione nasce Jelly.',
    links: ['Jelly', 'Laboratorio distrutto'],
  },
  {
    id: 'sessione-42-evento',
    category: 'cronologia',
    title: 'Il Ballo dei Silverhart',
    type: 'Evento',
    status: 'Sessione 42',
    description:
      'La Mano Cinerea partecipa a un ballo in maschera per cercare informazioni sul Tulipano dopo aver ceduto i propri sensi al Visitatore.',
    links: ['Sessione 42', 'Magione Silverhart', 'Visitatore'],
  },
]
