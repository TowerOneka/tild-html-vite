import Routing from "@/pages/Routing";
import { userModel } from "@/entities/user";

import "@/shared/styles/global.scss";

const App = () => {
  return (
    <userModel.AuthProvider>
      <Routing />
    </userModel.AuthProvider>
  );
};

export default App;
