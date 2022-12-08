export function updateCoordinates(e) {
  let newRatioX;
  let newRatioY;
  newRatioX = (e.pageX - e.target.offsetLeft) / e.target.width;
  newRatioY = (e.pageY - e.target.offsetTop) / e.target.height;
  return {
    ratioX: newRatioX,
    ratioY: newRatioY,
    x: e.pageX,
    y: e.pageY,
  };
}

export function checkCorrectSelection(charLocation, clickCoordinates) {
  const correctXMin = charLocation.X_Min;
  const correctXMax = charLocation.X_Max;
  const correctYMin = charLocation.Y_Min;
  const correctYMax = charLocation.Y_Max;

  if (
    clickCoordinates.ratioX > correctXMin &&
    clickCoordinates.ratioX < correctXMax &&
    clickCoordinates.ratioY > correctYMin &&
    clickCoordinates.ratioY < correctYMax
  ) {
    return true;
  } else return false;
}

const locations = [
  { X_Min: 0.48, X_Max: 0.5, Y_Min: 0.4, Y_Max: 0.45, name: "wenda" },
  { X_Min: 0.83, X_Max: 0.88, Y_Min: 0.7, Y_Max: 0.78, name: "waldo" },
  { X_Min: 0.545, X_Max: 0.61, Y_Min: 0.345, Y_Max: 0.39, name: "scorpion" },
  { X_Min: 0.55, X_Max: 0.61, Y_Min: 0.6, Y_Max: 0.637, name: "ratchet" },
  { X_Min: 0.05, X_Max: 0.08, Y_Min: 0.74, Y_Max: 0.79, name: "whitebeard" },
  { X_Min: 0.26, X_Max: 0.32, Y_Min: 0.77, Y_Max: 0.81, name: "chell" },
  { X_Min: 0.54, X_Max: 0.6, Y_Min: 0.88, Y_Max: 0.93, name: "master chief" },
  { X_Min: 0.31, X_Max: 0.33, Y_Min: 0.62, Y_Max: 0.66, name: "odlaw" },
];

export function getSelectedCharLocation(character) {
  const selectedCharLocation = locations.find((location) => {
    return location.name.toLowerCase() === character.name.toLowerCase();
  });
  return selectedCharLocation;
}

export function getNewCharacterArray(oldArray, newCharacterId) {
  const newArray = oldArray.map((character) => {
    if (character.id === newCharacterId) {
      return { ...character, isFound: true };
    } else {
      return character;
    }
  });
  return newArray;
}
