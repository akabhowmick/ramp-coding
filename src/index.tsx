import ReactDOM from "react-dom/client"
import "./index.css"
import { App } from "./App"
import { AppContextProvider } from "./components/AppContextProvider"
import { StrictMode } from "react"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
)
