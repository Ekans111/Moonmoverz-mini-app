import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AptosWalletProvider } from "@razorlabs/wallet-kit"
import WebApp from "@twa-dev/sdk";
import "./index.css";
import '@razorlabs/wallet-kit/style.css';

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AptosWalletProvider>
    <App />
  </AptosWalletProvider>
);
