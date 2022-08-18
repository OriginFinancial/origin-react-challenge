import React from 'react';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {AppRoutes} from './router/AppRoutes';
import {PokemonListScreen} from './screens/PokemonListScreen';

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={AppRoutes.POKEMON_LIST}
            element={<PokemonListScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
