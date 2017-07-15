import $ from "jquery";
import axios from 'axios';
import FormData from 'form-data'


let debug = true;

let polizasUrl = 'https://ronchon-choucroute-16574.herokuapp.com/polizas/';
let loginUrl = 'https://ronchon-choucroute-16574.herokuapp.com/auth/token-auth/'

if (debug){
    polizasUrl = 'http://localhost:8000/api/polizas/';
    loginUrl = 'http://localhost:8000/auth/token-auth/';
}





const api = {
  getPolicys: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: polizasUrl,
                timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken}
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    newPolicy: (poliza) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: polizasUrl,
                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + userToken}
              });
              instance.post('', poliza)
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },
    
    tokenLogin: (auth) => {
      
         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: loginUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                     }
              });
              instance.post('', auth)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
        
    },
    
} // api

export default api;
