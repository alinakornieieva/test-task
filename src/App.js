import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { SelectType } from './components/SelectType/SelectType.js'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/create" />} />
      <Route path='/create' Component={SelectType} />
    </Routes>
  </BrowserRouter>
}

export default App
