export const apiLibs = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};

export const getNested = async (resource, object) => {
  const response = await apiLibs(resource);
  const nestedData = response.data.map((item) => item[object]);
  // Menggunakan concat untuk menggabungkan array yang dihasilkan dari map
  const flattenedData = [].concat(...nestedData);
  return flattenedData;
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};

export const nested = (data) => {
  const response = {
    data: data.slice(0, 15),
  };

  return response;
};