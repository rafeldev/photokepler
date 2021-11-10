import React from 'react';
// import { SemipolarLoading } from 'react-loadingg';
import { LoaderContainer, Div } from './Styles';

/* Componente loader de carga  */
/*
 * @param  {} isLoading: Contiene el estado de si está o no cargando
 */
const FullPageLoader = ({ isLoading }) => {
  return (
    isLoading
      ? <LoaderContainer>
        <Div>
          {/* <SemipolarLoading size='large' color='#FFF' /> */}
          <h1>loader</h1>
        </Div>
      </LoaderContainer>
      : null
  );
};

export default FullPageLoader;
