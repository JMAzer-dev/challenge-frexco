import React from 'react';
import loadImg from '../assets/load.svg';

const LoadState = ({ loading = false }) => {
  return (
    <>
      {loading && (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-cover bg-white/10 w-screen h-screen">
          <img src={loadImg} alt="loading" width={200} height={200} />
        </div>
      )}
    </>
  );
};

export default LoadState;
