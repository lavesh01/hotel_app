import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Layout from '../components/Layout'
import Login from './pages/Login'
import PostHotel from './pages/PostHotel';
import Signup from './pages/Signup'
import axios from "axios"

axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="hotel/edit" element={<PostHotel />} />
        </Route>
    </Routes>
  )
}

