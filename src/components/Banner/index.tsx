import { useEffect, useState } from "react";
import {
  Container,
  BannerContainer,
  Buttons,
  Description,
  Fade,
} from "./style";
import { requests } from "../../api/requests";
import { baseURL } from "../../api/baseUrl";

export const Banner = () => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await baseURL.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <BannerContainer>
        <h1>{movie?.title || movie?.name || movie?.originals_name}</h1>
        <div>
          <Buttons>Play</Buttons>
          <Buttons>My List</Buttons>
        </div>
        <Description>{movie?.overview}</Description>
      </BannerContainer>
      <Fade />
    </Container>
  );
};
