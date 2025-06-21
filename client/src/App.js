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

// let localUuid = getCookie('casino_uuid')

// 		if(!localUuid) {
// 			localUuid = uuidv4(
// 				setCookie('casino_uuid', localUuid)
// 			)
// 		}

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


    // socket.connect();

		// Log connection events
		socket.on('connect', () => {
			console.log('Socket connected:', socket.id);
			socket.emit('client_connected', { clientId: socket.id });
		});

		socket.on('disconnect', () => {
			console.log('Socket disconnected');
		});


    // Emit heartbeat every 15s ONLY after connected
    const interval = setInterval(() => {
      if (socket.connected) {
        socket.emit('heartbeat', { data: "ping" });
        console.log("Heartbeat sent ✅");
      }
    }, 15000);

    return () => {
      clearInterval(interval);
			socket.off('connect');    // Remove event listeners
    	socket.off('disconnect');
      socket.disconnect();
    };
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <Page socket={socket} />
      </QueryClientProvider>
    </WagmiProvider>
    );
}


export default App