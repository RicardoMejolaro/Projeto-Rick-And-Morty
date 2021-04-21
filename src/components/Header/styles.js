import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-rows: 70px 1fr;
  background-color: #F0F0F0;
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  box-sizing: border-box;

  @media(max-width: 768px) {
    border-bottom: 1px solid #f1f1f1;
  }
`
export const Logo = styled.img`
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`
export const Backbutton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #000000;
  font-size: 25px;
  font-weight: bold;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
  }
`
export const BackgroundContainer = styled.div`
  width: 100%;
  background: url(${props => props.imgUrl}) center top no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 70px;

  @media(max-width: 768px) {
    font-size: 30px;
  }
`