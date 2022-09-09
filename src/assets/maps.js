import masterChiefIcon from "./master_chief_icon.png";
import chellIcon from "./chell_icon.png";
import ratchetIcon from "./ratchet_icon.png";
import scorpionIcon from "./scorpion_icon.png";
import waldoIcon from "./waldo_icon.png";
import wendaIcon from "./wenda_icon.png";
import odlawIcon from "./odlaw_icon.png";
import wizardIcon from "./wizard_icon.jpeg";

import imageOne from "./pic_1.jpeg";
import imageTwo from "./pic_2.jpg";

//factory function to create character objects
const character = (name, icon, isFound, id) => {
  return { name, icon, isFound, id };
};

const masterChief = character("Master Chief", masterChiefIcon, false, 1);

const chell = character("Chell & Companion Cube", chellIcon, false, 2);

const ratchet = character("Ratchet & Clank", ratchetIcon, false, 3);

const scorpion = character("Scorpion", scorpionIcon, false, 4);

const waldo = character("Waldo", waldoIcon, false, 5);

const wenda = character("Wenda", wendaIcon, false, 6);

const odlaw = character("Odlaw", odlawIcon, false, 7);

const wizard = character("Wizard Whitebeard", wizardIcon, false, 8);

//factory function to create map objects
const map = (name, image, characters, id) => {
  return { name, image, characters, id };
};

export const mapOne = map(
  "Classic Where's Waldo",
  imageOne,
  [waldo, wenda, odlaw, wizard],
  1
);

export const mapTwo = map(
  "Video Game Characters",
  imageTwo,
  [masterChief, chell, ratchet, scorpion],
  1
);
