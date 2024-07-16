export const formatTime = (hours, minutes, seconds) => {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const listChecking = (list, id) => {
  return list?.includes(id)
    ? list?.filter((item) => item !== id)
    : [...list, id];
};
