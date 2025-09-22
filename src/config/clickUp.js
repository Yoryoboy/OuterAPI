import ClickUpPkg from "@yoryoboy/clickup-sdk";
import { apiKey } from "./config.js";
const createClickUpClient = ClickUpPkg.default;

const clickUp = new createClickUpClient(apiKey);

export default clickUp;
