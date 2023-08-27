const videoLength = ({ length }) => {
  const h = length > 3600 ? true : false;
  let hours = Math.floor(length / 3600);
  let minutes = Math.floor((length % 3600) / 60);
  let seconds = length % 60;

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return h ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};

export default videoLength;
