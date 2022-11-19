import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/";

export const loginAuth = (email, password) => {
  return axios
      .post(API_URL + "user/login/", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.body.token) {
          localStorage.setItem("token", JSON.stringify(response.data.body.token));
          // console.log(response.data)
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error.message);
        return error
      })
};

export const loginName = (token) => {
  return axios
    .post(API_URL + "user/profile/", 
    {token},
    {headers: {
      'Authorization': `Bearer ${token}`
    } 
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      return error
    })
};

export const editName = (firstname, lastname) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios
    .put(API_URL + "user/profile/", 
    {
      firstName: firstname,
      lastName: lastname
    },
    {headers: {
      'Authorization': `Bearer ${token}`
    }   
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      return error
    })
};

export const logoutAuth = () => {
  localStorage.removeItem("token");
};
