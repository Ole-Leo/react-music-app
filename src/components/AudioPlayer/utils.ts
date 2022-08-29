const toggleHandler = (
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  state: boolean
) => {
  setState(!state);
};

function getRandomIndex(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { toggleHandler, getRandomIndex };
