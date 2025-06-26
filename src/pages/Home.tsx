import { useUserStore } from "../store/useUserStore";
import Login from "./Login";
import Welcome from "./Welcome";

const Home = () => {
  const user = useUserStore.getState().userProfile;

  return user ? <Welcome /> : <Login />;
};

export default Home;