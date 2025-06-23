// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

const wrapper = document.getElementById("app");

if (!wrapper) throw new Error("Could not find #app element");

mount(() => <StartClient />, wrapper);
