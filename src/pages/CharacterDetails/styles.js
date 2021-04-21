import styled from 'styled-components';

export const CharacterDetailsContainer = styled.main`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #24282F;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 50px 0;
`
export const CharacterDetailContainer = styled.section`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 100px 1fr;
  background-color: #3C3E44;
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;

  @media(max-width: 768px) {
    width: 90%;
  }
`
export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`

export const NameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const CharacterName = styled.h2`
  color: #FFFFFF;
  margin: 5px 0 0 20px;
  line-height: 50px;
`
export const EpisodesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    margin: 0 auto;
  }
`
export const Title = styled.label`
  color: #FFFFFF;
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;

  @media(max-width: 768px) {
    font-size: 20px;
  }
`
export const OrderedList = styled.ul`
  width: 90%;
  padding: 0;
  margin: 10px auto 20px auto;

  @media(max-width: 768px) {
    padding-left: 5px;
  }
`
export const ItemsList = styled.li`
  color: #FFFFFF;
  font-size: 22px;
  font-weight: bold;
  list-style: none;

  @media(max-width: 768px) {
    font-size: 16px;
  }
`


