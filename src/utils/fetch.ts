const fetchLeagueData = async (league: string) => {
    const CORS_URL = import.meta.env.VITE_CORS_URL
    const API_URL = import.meta.env.VITE_API_URL
    const API_TOKEN = import.meta.env.VITE_API_TOKEN

    console.log('league', league)

    return fetch(`${CORS_URL}${API_URL}competitions/${league}/standings`, {
      headers: {
        'X-Auth-Token': API_TOKEN,
      },
    });
}

export { fetchLeagueData }