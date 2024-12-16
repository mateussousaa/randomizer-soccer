import { StandingResponse } from "../types/standing";
import { TeamDto, TeamInfoByTable } from "../types/teams";

export function formatTeams(standing: StandingResponse, limit: number = 5): TeamDto[] {
    const teams = standing.standings[0].table.slice(0, limit);
    const league = standing.competition.name;
    const country = standing.area.name;

    console.log(limit)

    return teams.map((x) =>
      teamDto({
        teamPayload: x.team,
        standingPayload: { position: x.position, league, country },
      })
    );
  }

function teamDto(payload: {
    teamPayload: TeamInfoByTable;
    standingPayload: { position: number; league: string; country: string };
  }): TeamDto {
    const { teamPayload, standingPayload } = payload;

    return {
      ...teamPayload,
      ...standingPayload,
    };
  }