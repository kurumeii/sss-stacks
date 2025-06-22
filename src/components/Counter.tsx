import { createSignal } from "solid-js";
import { Button } from "./ui/button";

export default function Counter() {
	const [count, setCount] = createSignal(0);
	return (
		<Button
			variant="secondary"
			size="lg"
			onClick={() => setCount((prev) => prev + 1)}
		>
			Clicks: {count()}
		</Button>
	);
}
