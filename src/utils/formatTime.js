export const pad0 = (num) => {
  if(num > 9) return num;
  else return `0${num}`;
};

export const formatTime = (time) => {
  if(!time || typeof time !== 'number' || time < 0 ) return null;

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - (hours * 3600)) / 60);
  const seconds = time - (hours * 3600) - (minutes * 60); 

  return `${pad0(hours)}:${pad0(minutes)}:${pad0(seconds)}`;
};