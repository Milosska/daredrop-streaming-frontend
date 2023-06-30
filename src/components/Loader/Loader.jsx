import { createPortal } from 'react-dom';
import { Grid } from 'react-loader-spinner';
import { Container, LoaderThumb } from './Loader.styled';

const LoaderRoor = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <Container>
      <LoaderThumb>
        <Grid
          height="120"
          width="120"
          color="#ffffff"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderThumb>
    </Container>,
    LoaderRoor
  );
};
