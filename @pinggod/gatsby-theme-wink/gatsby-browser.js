import "normalize.css";
import "remixicon/fonts/remixicon.css";
import "katex/dist/katex.min.css";
import "./styles/index.css";
import "./styles/fonts.css";

// reload when serviceworker updates - https://github.com/gatsbyjs/gatsby/issues/9087#issuecomment-459105021
export const onServiceWorkerUpdateReady = () => window.location.reload(true);
