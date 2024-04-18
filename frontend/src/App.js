import {CssBaseline,ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import {useSelector} from 'react-redux';
import {BrowserRouter,Navigate,Route,Router,Routes} from "react-router-dom";
import Layout from "./components/Layout";
import { themeSettings } from "./components/theme";
import Home from "./pages/home/Home";


function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout />}>
<Route path="/" element={<Home/>}/>
          </Route>

        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

