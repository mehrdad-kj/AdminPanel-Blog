export const currentDate = () => {
    const time = new Date();
    const day = time.getDay() < 10 ? `0${time.getDay()}` : time.getDay();
    const month = time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth();
    const year = time.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
  