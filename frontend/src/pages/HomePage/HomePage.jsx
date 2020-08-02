import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import BasicRouter from '@UI/Templates/BasicRouter';
import ProducList from '@UI/Organisms/ProducList';
import { ProductsProvider } from '@Hooks/store/productsStoreContext';
import '@brainhubeu/react-carousel/lib/style.css';
import ImagenOne from '@Static/images/slider-1.png';
import ImagenTwo from '@Static/images/slider-2.png';

import { CarouselBox, Imagen } from './HomePage.module.scss';

function HomePage() {
  return (
    <ProductsProvider>
      <BasicRouter>
        <div className={CarouselBox}>
          <Carousel
            arrows
            keepDirectionWhenDragging
            autoPlay={4000}
            animationSpeed={1500}
            slides={[
              <img key="slider-1" className={Imagen} src={ImagenOne} alt="slider" />,
              <img key="slider-2" className={Imagen} src={ImagenTwo} alt="slider" />,
              <img key="slider-3" className={Imagen} src={ImagenOne} alt="slider" />,
              <img key="slider-4" className={Imagen} src={ImagenTwo} alt="slider" />,
            ]}
          />
        </div>
        <section>
          <h2>Productos Populares</h2>
          <ProducList />
        </section>
      </BasicRouter>
    </ProductsProvider>
  );
}

export default HomePage;
