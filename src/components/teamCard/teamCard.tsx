import { TeamDto } from "../../types/teams";
import './teamCard.css';

type TeamCardProps = {
    team: TeamDto;
};

export function TeamCard({ team }: TeamCardProps) {
    return (
        <div className="card-container">
            <div className="card-header">
                <img 
                    src={team.crest} 
                    alt={`${team.name} crest`} 
                    className="team-crest" 
                />
            </div>
            <div className="card-body">
                <h2 className="team-name">{team.name}</h2>
                <p className="team-league">{team.league}</p>
                <p className="team-country">{team.country}</p>
                <p className="team-position">Position: {team.position}</p>
            </div>
        </div>
    );
}
