import Routing from "@/pages/Routing";
import { useInitialCheckAuth } from "@/entities/user/hooks";
import { userModel } from "@/entities/user";

import "@/shared/styles/global.scss";

const App = () => {
  useInitialCheckAuth();

  return (
    <userModel.AuthProvider>
      <Routing />
    </userModel.AuthProvider>
  );
};

export default App;
