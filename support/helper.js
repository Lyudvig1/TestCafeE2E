import { ClientFunction,t } from "testcafe";
import utils from "./utils";
import { dynamicData } from "../data/dynamicData";

export const getTitle = ClientFunction(() => document.title);
export const getUrl = ClientFunction(() => window.location.href);

class Helper{
async selectOption(el){
    await t
    .click(el)
    let length = await el.child('option').count;
    let index = await  utils.randomIndex(length)
    let select = await el.child('option').nextSibling(index)
    await t.click(select)
}


async setEmailAndPassDynamicData(){
    dynamicData.email = utils.email
    dynamicData.password = utils.paswword
}

}
export default new Helper();
