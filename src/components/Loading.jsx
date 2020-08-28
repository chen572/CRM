import React from 'react';
import Loader from 'react-loader-spinner';

function Loading() {
  return (
    <>
      <Loader
        type='Oval'
        style={{ position: 'absolute', left: '47vw', top: '47vh' }}
        color='#00BFFF'
        height={150}
        width={150}
      />
      ;
    </>
  );
}

export default Loading;
