import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { SelectType } from './components/SelectType/SelectType.js'
import { List } from './components/List'
import { RequestForm } from './components/Form'
import { useSelector } from 'react-redux'
import { Modal } from './components/Modal/Modal'

//new something 

const App = () => {
  const { modal } = useSelector(state => state.requests)
  return <BrowserRouter>
    <Navbar />
    {modal && <Modal item={modal} />}
    <Routes>
      <Route path="/" element={<Navigate to="/create" />} />
      <Route path='/create' Component={SelectType} />
      <Route path='/create/:type' Component={RequestForm} />
      <Route path='/requests' Component={List} />
    </Routes>
  </BrowserRouter>
}

export default App
