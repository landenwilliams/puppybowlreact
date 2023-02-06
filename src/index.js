import { createRoot } from 'react-dom/client'
import RenderPuppies from "./components/renderpuppies";

const appElement = document.getElementById("app")
const root = createRoot(appElement)

root.render(<RenderPuppies />)