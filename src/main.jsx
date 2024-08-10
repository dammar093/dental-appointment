import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Doctor from './pages/doctor/Doctor.jsx'
import Profile from './pages/profile/Profile.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthLayout from './components/authLayout/AuthLayout.jsx'
import MyAppointment from './pages/my-appointment/MyAppointment.jsx'
import Service from './pages/service/Service.jsx'
import Contact from './pages/contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "my-appontment",
        element: <AuthLayout><MyAppointment /></AuthLayout>
      },
      {
        path: "service",
        element: < Service />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/doctor/:id",
        element: <Doctor />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
