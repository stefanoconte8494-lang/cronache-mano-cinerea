import gertrudePortrait from '../assets/npcs/gertrude/gertrude.png'
import alucardPortrait from '../assets/npcs/alucard-silverhart/alucard-maximilian-silverhart-iii.png'

export const npcs = [
  {
    id: 'gertrude',
    name: 'Gertrude',
    role: 'Figura importante',
    faction: 'Faro di Cenere / Bosco dei ragni',
    status: 'Viva',
    firstAppearance: 'Sessioni 1+',
    portrait: gertrudePortrait,
    notes:
      'Donna anziana dall’aspetto severo ma autorevole. È legata a diverse prime indagini della Mano Cinerea e resta una presenza rispettata, pratica e difficile da intimidire.',
  },
  {
    id: 'alucard-maximilian-silverhart-iii',
    name: 'Alucard Maximilian Silverhart III',
    role: 'Esponente della casata Silverhart',
    faction: 'Famiglia Silverhart',
    status: 'Vivo',
    firstAppearance: 'Sessione 42',
    portrait: alucardPortrait,
    notes:
      'Nobile elegante e difficile da leggere, incontrato durante il ballo in maschera dei Silverhart. La sua posizione lo rende una figura potenzialmente centrale nell’indagine sul Tulipano.',
  },
]

export const npcsByFirstAppearance = [...npcs]
