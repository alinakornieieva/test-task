import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { SelectType } from './components/SelectType/SelectType.js'
import { List } from './components/List'
import Form from './components/Form'
import { RequestForm } from './components/Form'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/create" />} />
      <Route path='/create' Component={SelectType} />
      <Route path='/create/:type' Component={RequestForm} />
      <Route path='/requests' Component={List} />
    </Routes>
  </BrowserRouter>
}

export default App
