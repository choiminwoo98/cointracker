import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Coin from "./routes/coin";
import Coins from "./routes/coins";
interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}
function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav toggleDark={toggleDark} isDark={isDark} />
      <Routes>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
