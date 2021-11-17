import React from 'react';
import ReactLoading from 'react-loading';
import { LoaderContainer, Div } from './Styles';

/* Componente loader de carga  */
/*
 * @param  {} isLoading: Contiene el estado de si está o no cargando
 */
const FullPageLoader = ({isLoading}) => {
  return (
    isLoading
      ? <LoaderContainer>
        <Div>
          <ReactLoading type='cylon' size='large' color='#E7127A' />
        </Div>
      </LoaderContainer>
      : null
  );
};

export default FullPageLoader;
