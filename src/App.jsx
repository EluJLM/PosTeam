

import { AuthProvider } from "./store/AuthContext";
import { MyRouters } from "./Routers/routes";

function App() {
  return (
    <AuthProvider>
        <MyRouters />
    </AuthProvider>
  );
}

export default App;
