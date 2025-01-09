import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";

render(
	<MantineProvider forceColorScheme="dark">
		<App />
	</MantineProvider>,
	document.getElementById("app")!
);
