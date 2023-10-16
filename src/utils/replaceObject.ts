const replaceObject = (object: any, fields: string[], reverse?: boolean) => {
  let filteredObject = {};

  Object.keys(object).forEach((key) => {
    if (!reverse && !fields.includes(key)) {
      filteredObject = { ...filteredObject, [key]: object[key] };
    } else if (reverse && fields.includes(key)) {
      filteredObject = { ...filteredObject, [key]: object[key] };
    }
  });

  return filteredObject;
};

export default replaceObject;
