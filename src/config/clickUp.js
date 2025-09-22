import ClickUp from "@yoryoboy/clickup-sdk";
import { apiKey } from "./config.js";
const clickUp = new ClickUp(apiKey);

export default clickUp;
