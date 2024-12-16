export type TeamInfoByTable = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
};

export type TeamDto = TeamInfoByTable & {
    country: string,
    league: string,
    position: number
};