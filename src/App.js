// import library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Pages
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import MovieCards from "./Pages/MovieCards";
import SimpleCards from "./Pages/SimpleCards";
import { moviesApi } from "./API/MoviesApi";
import { Provider } from "react-redux";
import store from "./Redux/Store";
// import style pages
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movieCards",
        element: <MovieCards />,
        loader: moviesApi,
      },
      {
        path: "/simpleCards",
        element: <SimpleCards />,
      },
      // {
      //   element:<Home/>
      // }
    ],
  },
]);

// <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='movieCards' loader={moviesApi} element={<MovieCards />} />
//     </Route>
//       <Route path='*' element={<ErrorPage />} />
//   </Routes>
// </BrowserRouter>

//  App or Router Main Code
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
