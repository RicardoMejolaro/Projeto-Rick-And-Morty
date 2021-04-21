import styled from 'styled-components';

export const CharactersContainer = styled.section`
  width: 95%;
  height: 200px;
  display: grid;
  grid-template-columns: 200px 1fr;
  background-color: #3C3E44;
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;
  cursor: pointer;
  
  &:hover{
    opacity: 0.9;
  }

  @media(max-width: 768px) {
    height: 500px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 30px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;

  @media(max-width: 768px) {
    border-radius: 10px 10px 0 0;
    max-height: 300px;
  }
`
export const InfosContainer = styled.div`
  min-width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media(max-width: 768px) {
    min-height: 100px;
  }
`
export const CharacterName = styled.h2`
  width: 100%;
  color: #FFFFFF;
`
export const StatusContainer = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0;
`
export const IndicatorStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.statusColor};
  color: ${props => props.statusColor};
  margin-right: 10px;
`
export const StatusText = styled.span`
  color: #FFFFFF;
`