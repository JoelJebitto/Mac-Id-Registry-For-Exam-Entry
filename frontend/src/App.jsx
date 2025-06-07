import Header from "./components/Header";
import Login from "./pages/Login";
import { usePageStore } from "./store/PageStore";
import { useUserStore } from "./store/UserStore";

function App() {
  const { username, role, isTokenExpired } = useUserStore();
  const { CurrentPage } = usePageStore();
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <Header isLoggedIn={!isTokenExpired} />
      <CurrentPage />
    </div>
  );
}

export default App;
