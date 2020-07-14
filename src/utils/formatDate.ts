import { format, parseISO } from 'date-fns';

const formatDate = (created_at: Date): string => {
  return format(parseISO(String(created_at)), 'dd/MM/yyyy');

  // const date = new Date(created_at);
  // const day = date.getDate();
  // const month = date.getMonth();
  // const year = date.getFullYear();
  // if (month.toString.length === 1) {
  //   return `${day}/0${month + 1}/${year}`;
  // }
  // return `${day}/${month + 1}/${year}`;
};

export default formatDate;
