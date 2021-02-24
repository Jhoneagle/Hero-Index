type TElement
    = 'Fire'
    | 'Earth'
    | 'Air'
    | 'Water'
    | 'Plasma'
    | 'Physical'
    | 'Psychic'

export interface HeroAttributes {
    strength: number;
    intelligence: number;
    stamina: number;
    healthpoints: number;
    mana: number;
    agility: number;
    speed: number;
    resistance: TElement;
    weakness: TElement;
}

export interface Skill {
    name: string;
    damage: number;
    element: TElement;
}

export interface Hero {
    name
    imgUrl
    description
    backStory
    attributes: HeroAttributes;
    skills: Skill[];
}
