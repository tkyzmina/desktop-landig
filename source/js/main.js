import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { initModals } from "./modules/init-modals";
import { swiper } from "./modules/init-slider";

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
