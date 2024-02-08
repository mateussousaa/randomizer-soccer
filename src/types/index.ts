export type StandingData = {
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
    winner: null;
  };
  standings: {
    stage: string;
    type: string;
    group: null;
    table: TeamByTable[];
  }[];
};

export type TeamByTable = {
  position: number;
  team: TeamInfoByTable;
  playedGames: number;
  form: null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
};

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

export type RandomizerData = {
  requestDate: Date;
  teams: any;
};
