import React from 'react';
import { storiesOf } from '@storybook/react';

import { moduleName } from '../-info';
import ProductItem from '.';

storiesOf(`${moduleName}/ProductItem`, module).add('Default', () => (
  <ProductItem
    id="MLA844616745"
    title="Heladera Inverter No Frost Samsung Rt32k5070 Elegant Inox Con Freezer 330l 220v"
    price={{ currency: 'ARS', amount: 63999, decimals: 63999 }}
    picture="http://mla-s2-p.mlstatic.com/747429-MLA41133399707_032020-O.jpg"
    condition="new"
    category_id="MLA398582"
    free_shipping={false}
    sold_quantity={25}
    description={
      'Disfrutá de la frescura de tus alimentos y almacenalos de manera práctica y cómoda en tu heladera Samsung, la protagonista de tu cocina.\n\nComodidad para tu hogar\nSu sistema no frost evita la generación de escarcha y te permitirá conservar el sabor y las propiedades nutritivas de los productos. A su vez, su freezer cuenta con una capacidad de 79 litros, que facilitará la distribución y el orden de tus congelados para que no te preocupes por la falta de espacio.'
    }
    adress="Buenos Aires"
  />
));
