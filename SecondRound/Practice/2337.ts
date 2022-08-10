function canChange(start: string, target: string): boolean {
  const startObj = {
    L: [],
    R: [],
  };
  const targetObj = {
    L: [],
    R: [],
  };
  for (let i = 0; i < start.length; i++) {
    if (start[i] === "L") {
      startObj["L"].push(i);
    } else if (start[i] === "R") {
      startObj["R"].push(i);
    }
  }
  for (let i = 0; i < target.length; i++) {
    if (target[i] === "L") {
      targetObj["L"].push(i);
    } else if (target[i] === "R") {
      targetObj["R"].push(i);
    }
  }
  if (
    startObj["L"].length !== targetObj["L"].length ||
    startObj["R"].length !== targetObj["R"].length
  ) {
    return false;
  }
  if (start.split("_").join("") !== target.split("_").join("")) {
    return false;
  }
  for (let i = 0; i < startObj["L"].length; i++) {
    if (startObj["L"][i] < targetObj["L"][i]) {
      return false;
    }
  }
  for (let i = 0; i < startObj["R"].length; i++) {
    if (startObj["R"][i] > targetObj["R"][i]) {
      return false;
    }
  }
  return true;
}
