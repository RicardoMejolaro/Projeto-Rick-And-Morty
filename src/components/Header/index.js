import { Route, useHistory } from 'react-router-dom';

//Coordenador de rotas
import { goToHome } from '../../routes/coordinator';

//Imagens
import LogoImg from '../../assets/img/logo.jpg';

//Tags styleds
import {
  HeaderContainer,
  Nav,
  Logo,
  Backbutton,
  BackgroundContainer,
  Title
} from './styles';

//Imagens
import BackgroundImg from '../../assets/img/background-image.jpeg';

export default function Header() {
  const history = useHistory()

  return (
    <HeaderContainer>
      <Nav>
        <Logo src={LogoImg}  onClick={() => goToHome(history)}/>
        <Route exact path={'/character/:id'}>
          <Backbutton onClick={() => goToHome(history)}>Voltar</Backbutton>
        </Route>
      </Nav>
      <BackgroundContainer imgUrl={BackgroundImg}>
        <Title>The Rick and Morty</Title>
      </BackgroundContainer>      
    </HeaderContainer>
  );
}