import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/";

export const loginAuth = (email, password) => {
  // console.log(email, password);
  return axios
    .post(API_URL + "user/login/", {
      email,
      password,
    })
    .then((response) => {
      // console.log(response.data.body.token);
      if (response.data.body.token) {
        localStorage.setItem("token", JSON.stringify(response.data.body.token));
      }
      return response.data;
    });
};

export const loginName = (token) => {
  // const token = localStorage.getItem("token");
  // console.log(token);
  return axios
    .post(API_URL + "user/profile/", 
    {token},
    {headers: {
      'Authorization': `Bearer ${token}`
    } 
    })
    .then((response) => {
      // console.log(response);
      return response.data;
    });
};

export const editName = (firstname, lastname) => {
  const token = JSON.parse(localStorage.getItem("token"));
  // console.log(firstname);
  // console.log(lastname);
  // console.log(token);
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
      // console.log(response);orage.setItem("token", JSON.stringify(response.data.body.token));
      // }
      return response.data;
    });
};

export const logoutAuth = () => {
  localStorage.removeItem("token");
};
