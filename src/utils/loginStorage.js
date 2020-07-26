function setUserStorage(configs) {
  if(configs.email)
    localStorage.setItem('email', configs.email);
  if(configs.password)
    localStorage.setItem('password', configs.password);
  if(configs.name)
    localStorage.setItem('username', configs.name);

}

function getUserStorage() {
  return({
    "email": localStorage.getItem('email'),
    "password": localStorage.getItem('password'),
    "username": localStorage.getItem('name')
  })
}

function clearUserStorage() {
  localStorage.clear()
}

export { setUserStorage, getUserStorage, clearUserStorage }