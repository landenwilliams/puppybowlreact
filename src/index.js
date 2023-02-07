import { createRoot } from 'react-dom/client'
import RenderPuppies from "./components/renderpuppies";
// import {HashRouter, Routes, Route} from 'react-router';

const appElement = document.getElementById("app")
const root = createRoot(appElement)

root.render(<RenderPuppies />)

export default root;