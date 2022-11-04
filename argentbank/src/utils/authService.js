import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/";

// const register = (email, password) => {
//   return axios.post(API_URL + "signup", {
//     email,
//     password,
//   });
// };

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
  console.log(token);
  return axios
    .post(API_URL + "user/profile/", 
    {token},
    {headers: {
      'Authorization': `Bearer ${token}`
      }   
    })
    .then((response) => {
      console.log(response);
      // if (response.data.body.token) {
      //   localStorage.setItem("token", JSON.stringify(response.data.body.token));
      // }
      return response.data;
    });
};

export const logoutAuth = () => {
  localStorage.removeItem("token");
};

// export default {
//   // register,
//   loginAuth,
//   logoutAuth,
// };