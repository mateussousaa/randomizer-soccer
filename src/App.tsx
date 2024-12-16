import { useEffect, useState } from 'react';

import './App.css';

import { standingMock } from './mock/standing';
import { StandingResponse } from './types/standing';

// PD - Espanha
// PL - Inglaterra
// SA - Italia
// FL1 - França
// PPL - Portugal
// BL1 - Alemanha
// DED - Holanda

function App() {
  const [standings, setStandings] = useState<StandingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const CORS_URL = import.meta.env.VITE_CORS_URL
        // const API_URL = import.meta.env.VITE_API_URL
        // const API_TOKEN = import.meta.env.VITE_API_TOKEN

        // await fetch(`${CORS_URL}${API_URL}competitions/PL/standings`, {
        //   headers: {
        //     'X-Auth-Token': API_TOKEN, // Substitua com seu token
        //   },
        // });

        const response = {
          ok: true, // Indica que a resposta foi bem-sucedida
          json: async () => standingMock, // Retorna o mock como resposta JSON
        };

        // Em vez de fazer o fetch real, usamos o objeto response simulado
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }

        const data = await response.json();
        setStandings(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Carregando...</h1>;
  if (error) return <h1>Erro: {error}</h1>;

  return (
    <>
      <h1>Randomizer Soccer</h1>
      <pre>{JSON.stringify(standings, null, 2)}</pre>
    </>
  );
}

export default App;
