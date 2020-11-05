export interface Pokemon {
    id              : number;
    name            : string;
    image           : string;
    description     : string;
    height          : number;
    weight          : number;
    species         : string;
    types           : string[];
    training        : Training;
    breedings       : Breedings;
    baseStats       : BaseStats;
    typeDefences    : { [key: string]: number | null };
}

export interface BaseStats {
    hp              : number[];
    attack          : number[];
    defence         : number[];
    specialAttack   : number[];
    specialDefence  : number[];
    speed           : number[];
}

export interface Breedings {
    eggGroups       : string[];
    gender          : Gender;
    eggCycles       : EggCycles;
}

export interface EggCycles {
    value           : number;
    text            :string;
}

export interface Gender {
    male            : number;
    female          : number;
}

export interface Training {
    evYield         : string;
    catchRate       : EggCycles;
    baseFriendship  : EggCycles;
    baseExp         : number;
    growthRate      : string;
}
