export const uniqueId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  const combinedId = `${timestamp}${random}`;
  const numericId = parseInt(combinedId, 10) % 1000;
  // under 999
  return numericId;
};
