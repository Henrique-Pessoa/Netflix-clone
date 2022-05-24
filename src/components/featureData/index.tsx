import { Container } from "./style";

interface Movie {
  movie: string;
}

export const FeatureData = ({ movie }: Movie) => {
  console.log(movie);
  return (
    <Container>
      <div>
        <h1>hello world</h1>
      </div>
    </Container>
  );
};
