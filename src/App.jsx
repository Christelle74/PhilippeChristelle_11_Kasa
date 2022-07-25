import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AppartPage from './pages/AppartPage'
import SharedLayout from './components/SharedLayout'


/**
 * Fichier contenant le router du projet, création des chemins vers chaque pages
 * @returns Composant App
 */
const App = () => {
  return (
    <BrowserRouter> {/*connexion au browser*/}
      <Routes>  {/*parent de toutes les routes */}
        {/* remplace switch
        route avec 2 props : path pour l'url et element pour le render 
        {<Home/> est un composant */}
        <Route path="/"  element={<SharedLayout/>} > {/*route principale (parent), le composant ShareLayout sera passé à toutes les pages*/}
          <Route index    element = {<Home/>} /> {/* prop index du parent*/}
          <Route path="/about" element={<About />} />
          <Route path="/appartPage/:id"  element={<AppartPage />}/>
          {/* path ="*" fonctionne si l'url ne correspond à rien */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
