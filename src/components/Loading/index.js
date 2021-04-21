import React from 'react';

//Imagens
import LoadingImg from '../../assets/img/loading.gif';

/*Tags Styleds*/
import { LoadingContainer, Img } from './styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <Img src={LoadingImg} alt={'Imagem de loading'}/>
    </LoadingContainer>
  )
}