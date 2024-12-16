import { StandingResponse } from "../types/standing"

const json = JSON.stringify({
  "filters": {
    "season": "2024"
  },
  "area": {
    "id": 2072,
    "name": "England",
    "code": "ENG",
    "flag": "https://crests.football-data.org/770.svg"
  },
  "competition": {
    "id": 2021,
    "name": "Premier League",
    "code": "PL",
    "type": "LEAGUE",
    "emblem": "https://crests.football-data.org/PL.png"
  },
  "season": {
    "id": 2287,
    "startDate": "2024-08-16",
    "endDate": "2025-05-25",
    "currentMatchday": 15,
    "winner": null
  },
  "standings": [
    {
      "stage": "REGULAR_SEASON",
      "type": "TOTAL",
      "group": null,
      "table": [
        {
          "position": 1,
          "team": {
            "id": 64,
            "name": "Liverpool FC",
            "shortName": "Liverpool",
            "tla": "LIV",
            "crest": "https://crests.football-data.org/64.png"
          },
          "playedGames": 14,
          "form": null,
          "won": 11,
          "draw": 2,
          "lost": 1,
          "points": 35,
          "goalsFor": 29,
          "goalsAgainst": 11,
          "goalDifference": 18
        },
        {
          "position": 2,
          "team": {
            "id": 61,
            "name": "Chelsea FC",
            "shortName": "Chelsea",
            "tla": "CHE",
            "crest": "https://crests.football-data.org/61.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 9,
          "draw": 4,
          "lost": 2,
          "points": 31,
          "goalsFor": 35,
          "goalsAgainst": 18,
          "goalDifference": 17
        },
        {
          "position": 3,
          "team": {
            "id": 57,
            "name": "Arsenal FC",
            "shortName": "Arsenal",
            "tla": "ARS",
            "crest": "https://crests.football-data.org/57.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 8,
          "draw": 5,
          "lost": 2,
          "points": 29,
          "goalsFor": 29,
          "goalsAgainst": 15,
          "goalDifference": 14
        },
        {
          "position": 4,
          "team": {
            "id": 65,
            "name": "Manchester City FC",
            "shortName": "Man City",
            "tla": "MCI",
            "crest": "https://crests.football-data.org/65.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 8,
          "draw": 3,
          "lost": 4,
          "points": 27,
          "goalsFor": 27,
          "goalsAgainst": 21,
          "goalDifference": 6
        },
        {
          "position": 5,
          "team": {
            "id": 351,
            "name": "Nottingham Forest FC",
            "shortName": "Nottingham",
            "tla": "NOT",
            "crest": "https://crests.football-data.org/351.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 7,
          "draw": 4,
          "lost": 4,
          "points": 25,
          "goalsFor": 19,
          "goalsAgainst": 18,
          "goalDifference": 1
        },
        {
          "position": 6,
          "team": {
            "id": 58,
            "name": "Aston Villa FC",
            "shortName": "Aston Villa",
            "tla": "AVL",
            "crest": "https://crests.football-data.org/58.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 7,
          "draw": 4,
          "lost": 4,
          "points": 25,
          "goalsFor": 23,
          "goalsAgainst": 23,
          "goalDifference": 0
        },
        {
          "position": 7,
          "team": {
            "id": 397,
            "name": "Brighton & Hove Albion FC",
            "shortName": "Brighton Hove",
            "tla": "BHA",
            "crest": "https://crests.football-data.org/397.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 6,
          "draw": 6,
          "lost": 3,
          "points": 24,
          "goalsFor": 25,
          "goalsAgainst": 22,
          "goalDifference": 3
        },
        {
          "position": 8,
          "team": {
            "id": 1044,
            "name": "AFC Bournemouth",
            "shortName": "Bournemouth",
            "tla": "BOU",
            "crest": "https://crests.football-data.org/bournemouth.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 7,
          "draw": 3,
          "lost": 5,
          "points": 24,
          "goalsFor": 23,
          "goalsAgainst": 20,
          "goalDifference": 3
        },
        {
          "position": 9,
          "team": {
            "id": 402,
            "name": "Brentford FC",
            "shortName": "Brentford",
            "tla": "BRE",
            "crest": "https://crests.football-data.org/402.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 7,
          "draw": 2,
          "lost": 6,
          "points": 23,
          "goalsFor": 31,
          "goalsAgainst": 28,
          "goalDifference": 3
        },
        {
          "position": 10,
          "team": {
            "id": 63,
            "name": "Fulham FC",
            "shortName": "Fulham",
            "tla": "FUL",
            "crest": "https://crests.football-data.org/63.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 6,
          "draw": 5,
          "lost": 4,
          "points": 23,
          "goalsFor": 22,
          "goalsAgainst": 20,
          "goalDifference": 2
        },
        {
          "position": 11,
          "team": {
            "id": 73,
            "name": "Tottenham Hotspur FC",
            "shortName": "Tottenham",
            "tla": "TOT",
            "crest": "https://crests.football-data.org/73.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 6,
          "draw": 2,
          "lost": 7,
          "points": 20,
          "goalsFor": 31,
          "goalsAgainst": 19,
          "goalDifference": 12
        },
        {
          "position": 12,
          "team": {
            "id": 67,
            "name": "Newcastle United FC",
            "shortName": "Newcastle",
            "tla": "NEW",
            "crest": "https://crests.football-data.org/67.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 5,
          "draw": 5,
          "lost": 5,
          "points": 20,
          "goalsFor": 19,
          "goalsAgainst": 21,
          "goalDifference": -2
        },
        {
          "position": 13,
          "team": {
            "id": 66,
            "name": "Manchester United FC",
            "shortName": "Man United",
            "tla": "MUN",
            "crest": "https://crests.football-data.org/66.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 5,
          "draw": 4,
          "lost": 6,
          "points": 19,
          "goalsFor": 19,
          "goalsAgainst": 18,
          "goalDifference": 1
        },
        {
          "position": 14,
          "team": {
            "id": 563,
            "name": "West Ham United FC",
            "shortName": "West Ham",
            "tla": "WHU",
            "crest": "https://crests.football-data.org/563.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 5,
          "draw": 3,
          "lost": 7,
          "points": 18,
          "goalsFor": 20,
          "goalsAgainst": 28,
          "goalDifference": -8
        },
        {
          "position": 15,
          "team": {
            "id": 62,
            "name": "Everton FC",
            "shortName": "Everton",
            "tla": "EVE",
            "crest": "https://crests.football-data.org/62.png"
          },
          "playedGames": 14,
          "form": null,
          "won": 3,
          "draw": 5,
          "lost": 6,
          "points": 14,
          "goalsFor": 14,
          "goalsAgainst": 21,
          "goalDifference": -7
        },
        {
          "position": 16,
          "team": {
            "id": 338,
            "name": "Leicester City FC",
            "shortName": "Leicester City",
            "tla": "LEI",
            "crest": "https://crests.football-data.org/338.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 3,
          "draw": 5,
          "lost": 7,
          "points": 14,
          "goalsFor": 21,
          "goalsAgainst": 30,
          "goalDifference": -9
        },
        {
          "position": 17,
          "team": {
            "id": 354,
            "name": "Crystal Palace FC",
            "shortName": "Crystal Palace",
            "tla": "CRY",
            "crest": "https://crests.football-data.org/354.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 2,
          "draw": 7,
          "lost": 6,
          "points": 13,
          "goalsFor": 14,
          "goalsAgainst": 20,
          "goalDifference": -6
        },
        {
          "position": 18,
          "team": {
            "id": 349,
            "name": "Ipswich Town FC",
            "shortName": "Ipswich Town",
            "tla": "IPS",
            "crest": "https://crests.football-data.org/349.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 1,
          "draw": 6,
          "lost": 8,
          "points": 9,
          "goalsFor": 14,
          "goalsAgainst": 27,
          "goalDifference": -13
        },
        {
          "position": 19,
          "team": {
            "id": 76,
            "name": "Wolverhampton Wanderers FC",
            "shortName": "Wolverhampton",
            "tla": "WOL",
            "crest": "https://crests.football-data.org/76.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 2,
          "draw": 3,
          "lost": 10,
          "points": 9,
          "goalsFor": 23,
          "goalsAgainst": 38,
          "goalDifference": -15
        },
        {
          "position": 20,
          "team": {
            "id": 340,
            "name": "Southampton FC",
            "shortName": "Southampton",
            "tla": "SOU",
            "crest": "https://crests.football-data.org/340.png"
          },
          "playedGames": 15,
          "form": null,
          "won": 1,
          "draw": 2,
          "lost": 12,
          "points": 5,
          "goalsFor": 11,
          "goalsAgainst": 31,
          "goalDifference": -20
        }
      ]
    }
  ]
})

const standingMock: StandingResponse = JSON.parse(json)

export { standingMock }