import possibilitiesData from "../../mockData/possibilitiesData.js";
import { possibilitiesTemplate } from "../templates/possibilitiesTemplate.js";

const initPossibilities = () => {
  const possibilitiesNode = document.querySelector(".limitless_possibilities");

  possibilitiesNode.insertAdjacentHTML(
    "beforeend",
    possibilitiesTemplate(possibilitiesData)
  );
};

export default initPossibilities;
