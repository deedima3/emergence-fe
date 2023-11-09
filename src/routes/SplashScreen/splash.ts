import "../../styles.css";
import SplashScreen from "./SplashScreen.svelte";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";

const splash = new SplashScreen({
  target: document.getElementById("app"),
});

export default splash;
