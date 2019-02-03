const generatePrice = rating => {
  if (rating < 1) {
    return 0;
  } else if (rating <= 3) {
    return 3500;
  } else if (rating <= 6) {
    return 8250;
  } else if (rating <= 8) {
    return 16350;
  } else if (rating <= 10) {
    return 21250;
  }
};

export default generatePrice;
