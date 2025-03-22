import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Qualities } from "./pages/Qualities";
import { Sectors } from "./pages/Sectors";
import { Contact } from "./pages/Contact";

// Sektör bileşenlerini içe aktar
import { AerospaceDefense } from "./pages/sectors/AerospaceDefense";
import { OilGas } from "./pages/sectors/OilGas";
import { Energy } from "./pages/sectors/Energy";
import { Automotive } from "./pages/sectors/Automotive";
import { Medical } from "./pages/sectors/Medical";
import { Food } from "./pages/sectors/Food";
import { MarineConstruction } from "./pages/sectors/MarineConstruction";

import { AppNavbar } from "./components/AppNavbar";
import { AppFooter } from "./components/AppFooter";
import { Quality1_4307 } from "./pages/qualities/Quality1_4307";
import { Quality1_4305 } from "./pages/qualities/Quality1_4305";
import { Quality1_4404 } from "./pages/qualities/Quality1_4404";
import { Quality1_4541 } from "./pages/qualities/Quality1_4541";
import { Quality1_4571 } from "./pages/qualities/Quality1_4571";
import { Quality1_4841 } from "./pages/qualities/Quality1_4841";
import { Quality1_4845 } from "./pages/qualities/Quality1_4845";
import { Quality1_4542 } from "./pages/qualities/Quality1_4542";
import { Quality15_5PH } from "./pages/qualities/Quality15_5PH";
import { Quality13_8PH } from "./pages/qualities/Quality13_8PH";
import { Quality1_4462 } from "./pages/qualities/Quality1_4462";
import { Quality1_4410 } from "./pages/qualities/Quality1_4410";
import { Quality1_4501 } from "./pages/qualities/Quality1_4501";
import { Quality1_4028 } from "./pages/qualities/Quality1_4028";
import { Quality1_4034 } from "./pages/qualities/Quality1_4034";
import { Quality1_4057 } from "./pages/qualities/Quality1_4057";
import { Quality1_4021 } from "./pages/qualities/Quality1_4021";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <main className="container mx-auto px-4">
        <AppNavbar />
        <div className="flex flex-col items-center justify-center">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/qualities" element={<Qualities />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="/sectors/aerospace-defense"
                element={<AerospaceDefense />}
              />
              <Route path="/sectors/oil-gas" element={<OilGas />} />
              <Route path="/sectors/energy" element={<Energy />} />
              <Route path="/sectors/automotive" element={<Automotive />} />
              <Route path="/sectors/medical" element={<Medical />} />
              <Route path="/sectors/food" element={<Food />} />
              <Route
                path="/sectors/marine-construction"
                element={<MarineConstruction />}
              />

              <Route
                path="/qualities/quality-1-4307"
                element={<Quality1_4307 />}
              />
              <Route
                path="/qualities/quality-1-4305"
                element={<Quality1_4305 />}
              />
              <Route
                path="/qualities/quality-1-4404"
                element={<Quality1_4404 />}
              />
              <Route
                path="/qualities/quality-1-4541"
                element={<Quality1_4541 />}
              />
              <Route
                path="/qualities/quality-1-4571"
                element={<Quality1_4571 />}
              />
              <Route
                path="/qualities/quality-1-4841"
                element={<Quality1_4841 />}
              />
              <Route
                path="/qualities/quality-1-4845"
                element={<Quality1_4845 />}
              />
              <Route
                path="/qualities/quality-1-4542"
                element={<Quality1_4542 />}
              />
              <Route
                path="/qualities/quality-15-5-ph"
                element={<Quality15_5PH />}
              />
              <Route
                path="/qualities/quality-13-8-ph"
                element={<Quality13_8PH />}
              />
              <Route
                path="/qualities/quality-1-4462"
                element={<Quality1_4462 />}
              />
              <Route
                path="/qualities/quality-1-4410"
                element={<Quality1_4410 />}
              />
              <Route
                path="/qualities/quality-1-4501"
                element={<Quality1_4501 />}
              />
              <Route
                path="/qualities/quality-1-4021"
                element={<Quality1_4021 />}
              />
              <Route
                path="/qualities/quality-1-4028"
                element={<Quality1_4028 />}
              />
              <Route
                path="/qualities/quality-1-4034"
                element={<Quality1_4034 />}
              />
              <Route
                path="/qualities/quality-1-4057"
                element={<Quality1_4057 />}
              />
            </Routes>
          </Router>
        </div>
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
