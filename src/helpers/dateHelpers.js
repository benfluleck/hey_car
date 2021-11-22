import formatISO9075 from 'date-fns/formatISO9075';

export const convertDateFormat = (date) =>
  formatISO9075(new Date(date), { representation: 'date' });
