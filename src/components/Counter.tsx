import { createSignal } from "solid-js";
import { Button } from "./ui/button";

export default function Counter() {
	const [count, setCount] = createSignal(0);
	return (
		<Button
			class="w-[200px] rounded-full border-2 px-[2rem] py-[1rem]"
			onClick={() => setCount(count() + 1)}
		>
			Clicks: {count()}
		</Button>
	);
}
