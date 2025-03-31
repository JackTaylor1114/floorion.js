/**
 * Validate the user input data
 * @param {*} input The input data
 * @returns true if the input was valid or throws error
 */
export function validateInputData(input)
{
  if (!input || typeof input !== "object")
  {
    throw new Error("invalid input format");
  }

  if (!Array.isArray(input.buildings))
  {
    throw new Error("no array of buildings found");
  }

  input.buildings.forEach((building, buildingIndex) =>
  {
    if (typeof building.name !== "string" || building.name.trim() === "")
    {
      throw new Error(`building ${buildingIndex + 1} has no valid name`);
    }

    if (!Array.isArray(building.levels))
    {
      throw new Error(`building ${buildingIndex + 1} does not have array of levels`);
    }

    building.levels.forEach((level, levelIndex) =>
    {
      if (typeof level.name !== "string" || level.name.trim() === "")
      {
        throw new Error(`level ${levelIndex + 1} of building ${buildingIndex + 1} has no valid name`);
      }

      if (!Array.isArray(level.rooms))
      {
        throw new Error(`level ${levelIndex + 1} of building ${buildingIndex + 1} does not have array of rooms`);
      }

      level.rooms.forEach((room, roomIndex) =>
      {
        if (typeof room.name !== "string" || room.name.trim() === "")
        {
          throw new Error(`room ${roomIndex + 1} in level ${levelIndex + 1} of building ${buildingIndex + 1} has no valid name`);
        }

        ["x", "y", "width", "height"].forEach((key) =>
        {
          if (typeof room[key] !== "number" || room[key] < 0)
          {
            throw new Error(`room ${roomIndex + 1} in level ${levelIndex + 1} of building ${buildingIndex + 1} has invalid key '${key}'.`);
          }
        });
      });
    });
  });

  //No problems founds
  return true;
}