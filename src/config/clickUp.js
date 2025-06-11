import { apiKey } from "./config.js";
import Clickup from "@yoryoboy/clickup-sdk";

const clickUp = new Clickup(apiKey);

export default clickUp;
