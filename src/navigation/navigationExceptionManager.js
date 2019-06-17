const navigationExceptionManager = (error, pos, wanted) => {
  switch (error.message) {
    case "NAVIGATION_ORDER_INVALID": {
      console.log("Invalid Navigation Order");
      break;
    }
    case "CURRENT_STATE_NOT_FOUND": {
      console.log(`your current state |${pos}| has not been found`);
      break;
    }
    case "NO_WAY_AHEAD_FOUND": {
      console.log(
        `your wanted state |${wanted}| has not been found, going ahead`
      );
      break;
    }
    case "NO_WAY_BEHIND_FOUND": {
      console.log(
        `your wanted state |${wanted}| has not been found, going behind`
      );
      break;
    }
    default: {
      console.log("Oops, something wrong happen");
    }
  }
};

module.exports = {
  navigationExceptionManager
};
