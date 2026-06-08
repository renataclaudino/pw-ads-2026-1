import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import AuthorProfile from '../pages/AuthorProfile'
import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />
   <Route path="/sobre-a-autora" element={ <AuthorProfile /> } />

   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
  
 </Routes>
}