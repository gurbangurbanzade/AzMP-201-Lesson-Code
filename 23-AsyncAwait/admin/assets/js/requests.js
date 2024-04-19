export const getDatas = async (url) => {
  let res = await axios(url);
  let data = res.data;
  return data;
};

export const postDatas = async (url, obj) => {
  let res = await axios.post(url, obj);
  let data = res.data;
  return data;
};

export const getDataById = async (url, id) => {
  let res = await axios(url + "/" + id);
  let data = res.data;
  return data;
};

export const deleteById = async (url, id) => {
  let res = await axios.delete(url + "/" + id);
  let data = res.data;
  return data;
};

export const putById = async (url, id, obj) => {
  let res = await axios.put(url + "/" + id, obj);
  let data = res.data;
  return data;
};

export const patchById = async (url, id, obj) => {
  let res = await axios.patch(url + "/" + id, obj);
  let data = res.data;
  return data;
};
