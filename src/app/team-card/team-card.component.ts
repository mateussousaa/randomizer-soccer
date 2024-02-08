import { Component, Input } from '@angular/core';
import { TeamData } from '../../mocks/teamData';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css',
})
export class TeamCardComponent {
  @Input() teamData!: TeamData;
}
