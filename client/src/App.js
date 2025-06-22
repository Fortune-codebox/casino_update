import React, {useEffect} from "react"

import { io } from 'socket.io-client'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/fonts.css"
import "./css/special_occasions.css"
import "./css/style.css"
import { WagmiProvider } from 'wagmi'
import { config } from './utils/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Page from "./components/pages/page"

const socket = io();

const queryClient = new QueryClient()

function App() {

  let my_console = function () {
    let oldConsole = null;
    function enable() {
      if (oldConsole == null) return;
      window['console']['log'] = oldConsole;
      window['console']['warn'] = oldConsole;
      window['console']['error'] = oldConsole;
    }
    function disable() {
      oldConsole = console.log;
      window['console']['log'] = function () {};
      window['console']['warn'] = function () {};
      window['console']['error'] = function () {};
    }
    return { enable, disable };
  }();

  useEffect(() => {
    my_console.disable()
    // Emit heartbeat every 15s ONLY after connected
    const interval = setInterval(() => {
      if (socket.connected) {
        socket.emit('heartbeat', { data: "ping" });
        console.log("Heartbeat sent ✅");
      }
    }, 15000);

    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, []);

  return (
    // Need to wrap our React App with Context so that our application is
    // aware of Wagmi & React Query's reactive state and in-memory caching.
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <Page socket={socket} />
      </QueryClientProvider>
    </WagmiProvider>
    );
}


export default App