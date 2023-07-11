const toFirstUpperCase = (str: string, withSpacing = false) => {
  const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);

  return withSpacing
    ? capitalizedString.replace(/([A-Z])/g, " $1").trim()
    : capitalizedString;
};

export default toFirstUpperCase;
