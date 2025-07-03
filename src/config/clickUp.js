import ClickUpPkg from "@yoryoboy/clickup-sdk";
import { apiKey } from "./config.js";
const ClickUp = ClickUpPkg.default;

const clickUp = new ClickUp(apiKey);

export default clickUp;
