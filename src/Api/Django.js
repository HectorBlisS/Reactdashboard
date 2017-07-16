import $ from "jquery";
import axios from 'axios';
import FormData from 'form-data'


let polizasUrl = 'http://localhost:8000/api/polizas/';


const api = {
  getPolicys: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: polizasUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token' + userToken}
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
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token' + userToken}
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
}

export default api;
