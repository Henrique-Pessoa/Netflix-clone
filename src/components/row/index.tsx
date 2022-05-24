import { useEffect, useState } from "react";
import { Container, PostsContainer, PostImg } from "./style";
import { baseURL } from "../../api/baseUrl";
import { FeatureData } from "../featureData";

interface Props {
  title: string;
  fetchURL: string;
}

type Movie = {
  movie: any;
};

export const Row = ({ title, fetchURL }: Props) => {
  const imgBaseURL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState<any[]>([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await baseURL.get(fetchURL);
      setMovies(request.data.results);

      const originals = request.data.results.filter(
        (i: any) => i.fetchURL === "requests.fetchNetflixOriginals"
      );
    }
    fetchData();
  }, []);

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoPlay: 1,
      https: "https://developers.google.com/yotube/players_parameters",
    },
  };

  return (
    <Container>
      {featureData && <FeatureData movie={featureData} />}
      <h2>{title}</h2>
      <PostsContainer>
        {movies.map((movie): any => {
          return (
            <PostImg
              key={movie.id}
              src={imgBaseURL + movie.poster_path}
              alt={movie.name}
            />
          );
        })}
      </PostsContainer>
    </Container>
  );
};
