import { drawElements } from "./removeCategories.mjs";
import { getCategories } from "./fetch/fetch.mjs";
console.log('hola mundo');

const data = await getCategories();
drawElements(data);