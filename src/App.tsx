import { Button, Select } from "@mantine/core";
import { signal } from "@preact/signals";

const s = signal("t");

function App() {
	return (
		<div>
			Hello
			<Button>Click me</Button>
			<div style={{ display: "flex" }}>
				<Select data={["React", "Vue", "Angular"]} />
			</div>
		</div>
	);
}

export default App;
