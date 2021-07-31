export const formatNumber = (num) => {
  const formatNum = Number(num);

  if (formatNum > 10000) {

    if (formatNum >= 1000000) {

      return `${formatNum / 1000000}M`;
    }

    return Math.floor(formatNum);
  }

  if (formatNum.toString().split('.')[1]) {

    if (formatNum.toString().split('.')[1].length < 3) {

      return formatNum.toFixed(2);
    }

    return formatNum.toFixed(4);
  }

  return formatNum;
};
