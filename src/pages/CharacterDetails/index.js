import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//Components
import Loading from '../../components/Loading';

//Tags Styleds
import {
  CharacterDetailsContainer,
  CharacterDetailContainer,
  ImgContainer,
  Img,
  NameContainer,
  CharacterName,
  EpisodesContainer,
  Title,
  OrderedList,
  ItemsList
} from './styles';

export default function CharacterDetails() {
  const { id } = useParams();
  //Query graphql
  const CHARACTER = gql`
    query {
      charactersByIds(ids: [${id}]) {
        name
        image
        episode{id, name}
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
    const { episode, image, name } = data.charactersByIds[0];
    return (
      <CharacterDetailsContainer>
        <CharacterDetailContainer>
          <ImgContainer>
            <Img src={image} alt={'Imagem do personagem'} />
          </ImgContainer>
          <NameContainer>
            <CharacterName>{name}</CharacterName>
          </NameContainer>
          <EpisodesContainer>
            <Title>{episode.length === 1 ? 'Participou do episódio:' : 'Participou dos episódios:'} </Title>
            <OrderedList>
              {episode.map(ep => {
                return <ItemsList key={ep.id}>{ep.id} - {ep.name}</ItemsList>
              })}
            </OrderedList>
          </EpisodesContainer>

        </CharacterDetailContainer>
      </CharacterDetailsContainer>
    );
  }

}