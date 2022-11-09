import moment from "moment";

export const getTimeFromNow = (date: string) => {
  const time = moment(date).fromNow();

  return time;
};