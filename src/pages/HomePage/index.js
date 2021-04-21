import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//Components
import CharacterCard from '../../components/CharacterCard';
import Loading from '../../components/Loading';

//Tags Styleds
import {
  CharactersContainer
} from './styles';


export default function HomePage() {
  //Query graphql
  const CHARACTER = gql`
    query {
      characters(page: 1) {
        results {
          id
          image
          status
          name
          episode{name}
        }
      }
    }
  `;
  
  const { loading, error, data } = useQuery(CHARACTER);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error! {error.message}</p>;
  }

  if (data) {
    const { results } = data.characters;
    return (
      <CharactersContainer>
        {results.map(character => {
          return (
            <CharacterCard
              key={character.id}
              id={character.id}
              image={character.image}
              status={character.status}
              name={character.name}
            />
          )
        })}

      </CharactersContainer>
    );
  }
};
