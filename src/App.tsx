import { useEffect, useState } from "react";
import "./App.css";

import { TeamCard } from "./components/teamCard/teamCard";
import { firstTeamMock, secondTeamMock } from "./mock/teams";
import { StandingResponse } from "./types/standing";
import { TeamDto } from "./types/teams";
import { fetchLeagueData } from "./utils/fetch";
import { formatTeams } from "./utils/formatTeams";
import { availableLeagues } from "./utils/leagues";
import { randomTeams } from "./utils/randomTeams";

function App() {
  const [teams, setTeams] = useState<TeamDto[]>([]);
  const [firstTeam, setFirstTeam] = useState<TeamDto>(firstTeamMock);
  const [secondTeam, setSecondTeam] = useState<TeamDto>(secondTeamMock);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStandings = async () => {
      const localData = localStorage.getItem('data');
      const currentDate = new Date();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  
      try {
        if (localData) {
          const parsedData = JSON.parse(localData);
          const lastRequestDate = new Date(parsedData.requestDate);
  
          const timeDifference = currentDate.getTime() - lastRequestDate.getTime();
  
          if (timeDifference <= oneDayInMilliseconds) {
            setTeams(parsedData.teams);
            console.log('cache')
            return;
          }
        }
  
        const responses = await Promise.all(availableLeagues.map(x => fetchLeagueData(x.league)));
        const validResponses = responses.filter((response) => response.ok);
        const data: StandingResponse[] = await Promise.all(validResponses.map((response) => response.json()));

        console.log(data)
  
        const allTeams = data.flatMap((standing) => {
          const limit = availableLeagues.find(x => x.league === standing.competition.code)?.limit
          return formatTeams(standing, limit)
        });
  
        localStorage.setItem(
          'data',
          JSON.stringify({ requestDate: currentDate, teams: allTeams })
        );
  
        setTeams(allTeams);
  
      } catch (error: unknown) {
        console.error(error);
        setError("Erro ao buscar os dados das ligas.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchStandings();
  }, []);
  

  const randomizeTeams = () => {
    if (teams.length >= 2) {
      const [firstTeam, secondTeam] = randomTeams(teams)
      setFirstTeam(firstTeam);
      setSecondTeam(secondTeam);
    }
  };

  if (loading) return <h1>Carregando...</h1>;
  if (error) return <h1>Erro: {error}</h1>;

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src="assets/logo.png" alt="Randomizer Soccer Logo" className="app-logo" />
      </div>
      <div className="teams-container">
        <div className="team-half">
          <TeamCard team={firstTeam} />
        </div>
        <div className="team-half">
          <TeamCard team={secondTeam} />
        </div>
      </div>
      <button className="randomize-button" onClick={randomizeTeams}>
        Go
      </button>
    </div>
  );  
}

export default App;
