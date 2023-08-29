
const storeUserToken = (userToken) => {
   localStorage.setItem('userToken', userToken);
};

export default storeUserToken;