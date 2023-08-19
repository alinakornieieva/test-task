import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { SelectType } from './components/SelectType/SelectType.js'
import { List } from './components/List/List'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/create" />} />
      <Route path='/create' Component={SelectType} />
      <Route path='/requests' Component={List} />
    </Routes>
  </BrowserRouter>
}

export default App
