import { render } from "react-dom";

import { Container } from "./ui";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");


render(
    <BrowserRouter>
<Container />
</BrowserRouter>
, container);
