import { TeamDto } from "../types/teams";

const randomTeams = (teams: TeamDto[]) => {

    const teamsQtd = teams.length;
    const firstTeamIndex = Math.floor(Math.random() * teamsQtd);
    
    let secondTeamIndex;
    
    do {
      secondTeamIndex = Math.floor(Math.random() * teamsQtd);
    } while (secondTeamIndex === firstTeamIndex);
    
    
    return [teams[firstTeamIndex], teams[secondTeamIndex]]
}

export { randomTeams }