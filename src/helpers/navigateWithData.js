export const pushAndNavigate = (key, data, history, url) => {
  localStorage.setItem(key, data);
  if (url) {
    history.push(url);
    return;
  }
  history.goBack();
}

export const pop = key => {
  const data = localStorage.getItem(key);
  localStorage.removeItem(key);
  return data;
}
