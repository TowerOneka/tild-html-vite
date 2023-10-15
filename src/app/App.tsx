import Routing from "@/pages/Routing";
// import { useInitialCheckAuth } from "@/entities/user/hooks";
// import { userModel } from "@/entities/user";

import "@/shared/styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthSettingsWrapper from "@/entities/user/hoc/AuthSettingsWrapper";

const App = () => {
  return (
    // <userModel.AuthProvider>
    // <Provider
    <Provider store={store}>
      <AuthSettingsWrapper>
        <Routing />
      </AuthSettingsWrapper>
    </Provider>
    // </userModel.AuthProvider>
  );
};

export default App;
