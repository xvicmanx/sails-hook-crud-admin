const Service = (model) => ({
  fetchItems: (payload) => {
    return fetch(`/${model}`).then(r => r.json());
  },
  create: (item) => {
    return fetch(`/${model}`, {
      method: "POST",
      body: JSON.stringify(item),
    });
  },
  update: (data) => {
    return fetch(`/${model}/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
  delete: (data) => {
    return fetch(`/${model}/${data.id}`, {
      method: "DELETE",
    });
  },
});

export default Service;
