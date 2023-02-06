import { createRoot } from 'react-dom/client'
import RenderPuppies from "./components/renderpuppies";

const appElement = document.getElementById("app")
const root = createRoot(appElement)

const BasicComponentNameHere = () => { return ( <div> <p>Hello World!</p> </div> ) }

root.render(<RenderPuppies />)