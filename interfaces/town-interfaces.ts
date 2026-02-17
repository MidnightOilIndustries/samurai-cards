export interface TownCardInfo {
    name: string;
    visitOptions: VisitOption[],
    flavor?: string;
    imageUrl: string;
}

export interface VisitOption {
    description: string;
}