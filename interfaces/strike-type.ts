export enum StrikeType {
    Counter = 'Counter',
    Stab = 'Stab',
    Strike = 'Strike',
}

export interface CardInfo {
    name: string;
    strikeType: StrikeType;
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Mythic';
    abilityText?: string;
    flavor?: string;
    power: number;
    imageUrl: string;
}