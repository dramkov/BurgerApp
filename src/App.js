import React from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './containers/Layout/Layout';

const App = () => {
  return (
    <div className=''>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
