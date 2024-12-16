
export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface StandingsTable {
    position: number;
    team: Team;
    playedGames: number;
    form: string | null;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export interface StandingResponse {
    filters: {
        season: string;
    };
    area: {
        id: number;
        name: string;
        code: string;
        flag: string;
    };
    competition: {
        id: number;
        name: string;
        code: string;
        type: string;
        emblem: string;
    };
    season: {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
        winner: string | null;
    };
    standings: Array<{
        stage: string;
        type: string;
        group: string | null;
        table: StandingsTable[];
    }>;
}
