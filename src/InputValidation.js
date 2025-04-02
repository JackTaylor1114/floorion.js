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

  //Validate buildings
  input.buildings.forEach((building, buildingIndex) =>
  {
    if (typeof building.name !== "string" || building.name.trim() === "")
    {
      throw new Error(`building ${buildingIndex} has no valid name`);
    }
    if (typeof building.color !== "string" || building.color.trim() === "" || !CSS.supports('color', building.color))
    {
      throw new Error(`building ${buildingIndex} has no valid color`);
    }
    if (!Array.isArray(building.points))
    {
      throw new Error(`building ${buildingIndex} has no points`);
    }
    if (building.points.length < 4)
    {
      throw new Error(`building ${buildingIndex} has less than 4 points`);
    }
    building.points.forEach((point, pointIndex) =>
    {
      if (!Array.isArray(point) || point.length !== 2)
      {
        throw new Error(`point ${pointIndex} of building ${buildingIndex} has invalid coordinates`);
      }
      if (typeof point[0] !== "number" || point[0] < 0 || typeof point[1] !== "number" || point[1] < 0)
      {
        throw new Error(`point ${pointIndex} of building ${buildingIndex} has invalid coordinates`);
      }
    });
    if (!Array.isArray(building.levels))
    {
      throw new Error(`building ${buildingIndex} does not have array of levels`);
    }

    //Validate levels
    building.levels.forEach((level, levelIndex) =>
    {
      if (typeof level.name !== "string" || level.name.trim() === "")
      {
        throw new Error(`level ${levelIndex} of building ${buildingIndex} has no valid name`);
      }
      if (typeof level.color !== "string" || level.color.trim() === "" || !CSS.supports('color', level.color))
      {
        throw new Error(`level ${levelIndex} of building ${buildingIndex} has no valid color`);
      }
      if (!Array.isArray(level.points))
      {
        throw new Error(`level ${levelIndex} of building ${buildingIndex} has no points`);
      }
      level.points.forEach((point, pointIndex) =>
      {
        if (!Array.isArray(point) || point.length !== 2)
        {
          throw new Error(`point ${pointIndex} of level ${levelIndex} of building ${buildingIndex} has invalid coordinates`);
        }
        if (typeof point[0] !== "number" || point[0] < 0 || typeof point[1] !== "number" || point[1] < 0)
        {
          throw new Error(`point ${pointIndex} of level ${levelIndex} of building ${buildingIndex}has invalid coordinates`);
        }
      });
      if (!Array.isArray(level.rooms))
      {
        throw new Error(`level ${levelIndex} of building ${buildingIndex} does not have array of rooms`);
      }

      //Validate rooms
      level.rooms.forEach((room, roomIndex) =>
      {
        if (typeof room.name !== "string" || room.name.trim() === "")
        {
          throw new Error(`room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has no valid name`);
        }
        if (typeof room.color !== "string" || room.color.trim() === "")
        {
          throw new Error(`room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has no valid color`);
        }
        if (typeof room.fontsize !== "number" || room.fontsize < 1)
        {
          throw new Error(`room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has no valid fontsize`);
        }
        if (!Array.isArray(room.points))
        {
          throw new Error(`room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has invalid points`);
        }
        if (room.points.length < 4)
        {
          throw new Error(`room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has less than 4 points`);
        }

        //Validate room coordinates
        room.points.forEach((point, pointIndex) =>
        {
          if (!Array.isArray(point) || point.length !== 2)
          {
            throw new Error(`point ${pointIndex} of room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has invalid coordinates`);
          }
          if (typeof point[0] !== "number" || point[0] < 0 || typeof point[1] !== "number" || point[1] < 0)
          {
            throw new Error(`point ${pointIndex} of room ${roomIndex} in level ${levelIndex} of building ${buildingIndex} has invalid coordinates`);
          }
        });
      });
    });
  });

  //No problems founds
  return true;
}