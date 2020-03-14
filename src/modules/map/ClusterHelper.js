export default function returnClusterStyle(points) {
  if (points >= 40) {
    return {
      width: 70,
      height: 102,
      top: -26,
      fontSize: 19,
    };
  }

  if (points >= 30) {
    return {
      width: 64,
      height: 94,
      top: -34,
      fontSize: 18,
    };
  }

  if (points >= 20) {
    return {
      width: 58,
      height: 84,
      top: -24,
      fontSize: 17,
    };
  }

  if (points >= 10) {
    return {
      width: 52,
      height: 76,
      top: -21,
      fontSize: 17,
    };
  }

  if (points >= 4) {
    return {
      width: 46,
      height: 68,
      top: -18,
      fontSize: 16,
    };
  }

  return {
    width: 40,
    height: 60,
    top: -15,
    fontSize: 15,
  };
}
