export const goodData = {
  startDate: '2017-01-28',
  endDate: '2017-01-30',
  minCount: 110,
  maxCount: 170
};

export const emptyData = {
  startDate: '',
  endDate: '',
  minCount: '',
  maxCount: '',
};

export const getData = args => ({
  ...goodData,
  ...args
});
