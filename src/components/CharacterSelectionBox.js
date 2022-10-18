import React from "react";

import CharacterIcon from "./CharacterIcon";

{
  /* <CharacterSelectionBox characters={characters} setGameStatus={setGameStatus}
    setSelectedCharacter={setSelectedCharacter}
    setSelectedCharLocation={setSelectedCharLocation}/> */
}

// export default function CharacterSelectionBox(props) {
//   const {
//     characters,
//     locations,
//     setSelectedCharacter,
//     setSelectedCharLocation,
//     setGameStatus,
//   } = props;

//   function getSelectedCharLocation(character) {
//     const selectedCharLocation = locations.find((location) => {
//       return location.name.toLowerCase() === character.name.toLowerCase();
//     });
//     return selectedCharLocation;
//   }

//   function handleCharacterSelect(id) {
//     const char = characters.find((character) => {
//       return character.id === id;
//     });
//     setSelectedCharacter(char);
//     const newSelectedCharLocation = getSelectedCharLocation(char);
//     setSelectedCharLocation(newSelectedCharLocation);
//     setGameStatus("searching");
//   }

//   const charactersNotFound = characters.map((character) => () => {
//     if (!character.isFound) {
//       return character;
//     }
//   });

//   return charactersNotFound.map((character) => {
//     <div className="character-selection-box">
//       <div
//         key={character.id}
//         className="selection-box"
//         onClick={() => {
//           if (!character.isFound) {
//             handleCharacterSelect(character.id);
//           }
//         }}
//       >
//         <CharacterIcon
//           name={character.name}
//           icon={character.icon}
//           isFound={character.isFound}
//           style={{
//             width: "65px",
//           }}
//         />
//         <p className="character-name">{character.name}</p>
//       </div>
//     </div>;
//   });
// }
