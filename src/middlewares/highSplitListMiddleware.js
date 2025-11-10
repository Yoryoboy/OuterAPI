import { validateList } from "./listValidator.js";
import { CCI_HS_LIST } from "../config/listsDetails.js";

export const validateHighSplitList = validateList(CCI_HS_LIST.id);
