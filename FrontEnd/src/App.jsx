import { useEffect } from "react";
import Content from "./components/contentPages";
import Header from "./components/Header";
import { useUserStore } from "./store/UserStore";

function App() {
  const { decodeToken, exp } = useUserStore();
  useEffect(() => decodeToken(), [exp, decodeToken]);
  return (
    <div className="flex h-screen flex-col ">
      <Header />
      <Content />
    </div>
  );
}

export default App;
