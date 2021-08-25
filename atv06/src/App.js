import Routes from "./routes";
import { AuthenticationProvider } from "./hooks/useAuthentication";
import { GlobalStyle } from "./global/GlobalStyle";

function App() {
  return (
    <AuthenticationProvider>
      <GlobalStyle />
      <Routes />
    </AuthenticationProvider>
  );
}

export default App;
