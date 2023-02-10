import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import NavBar from './components/navBar/NavBar';
import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/LeftBar';
import './style.scss'
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from 'react-router-dom';
import Profile from './pages/profile/Profile';

function App() {
  var currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    }
  ])
  return (
    <div style={{margin: 0, height: "100vh"}}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
