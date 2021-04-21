import { useHistory } from 'react-router-dom';

//Coordenador de rotas
import { goToCharacterDetails } from '../../routes/coordinator';

//Tags styleds
import {
  CharactersContainer,
  Img,
  InfosContainer,
  CharacterName,
  StatusContainer,
  IndicatorStatus,
  StatusText
} from './styles';

export default function CharacterCard(props) {
  const history = useHistory()

  return (
    <CharactersContainer onClick={() => goToCharacterDetails(history, props.id)}>
      <Img src={props.image} alt={'Imagem do personagem'}/>
      <InfosContainer>
        <CharacterName>{props.name}</CharacterName>
        <StatusContainer>
          <IndicatorStatus statusColor={props.status === 'Alive' ? 'green' : (props.status === 'Dead' ?'red' : 'gray')}>''</IndicatorStatus>
          <StatusText>{props.status}</StatusText>
        </StatusContainer>
      </InfosContainer>
    </CharactersContainer>
  );
}