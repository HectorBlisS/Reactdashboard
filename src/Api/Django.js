
import axios from 'axios';
import FormData from 'form-data'


let debug = false;

let clientesUrl = 'http://dipra.planb.com.mx/api/clientes/';
let polizasUrl = 'http://dipra.planb.com.mx/api/polizas/';
let policysUrl = 'http://dipra.planb.com.mx/api/policys/';
let loginUrl = 'http://dipra.planb.com.mx//auth/token-auth/'
let usersUrl = 'http://dipra.planb.com.mx/api/profiles/'
let asesoresUrl = 'http://dipra.planb.com.mx/api/asesores/'
let selfProfileUrl = 'http://dipra.planb.com.mx/auth/myprofile/'
let vehiclesFilteredUrl = 'http://dipra.planb.com.mx/api/vehiculospoliza/';
let vehiclesUrl = 'http://dipra.planb.com.mx/api/vehicles/';
let perfilesUrl = 'http://dipra.planb.com.mx/api/perfiles/';
let matchUrl = 'http://dipra.planb.com.mx/api/match/';
let mispolizasUrl = 'http://dipra.planb.com.mx/api/mispolizas/';
let recibosUrl = 'http://dipra.planb.com.mx/api/recibos/';
let prospectosUrl = 'http://dipra.planb.com.mx/api/prospectos/';

if (debug){
    clientesUrl = 'http://localhost:8000/api/clientes/';
    polizasUrl = 'http://localhost:8000/api/polizas/';
    policysUrl = 'http://localhost:8000/api/policys/';
    loginUrl = 'http://localhost:8000/auth/token-auth/';
    usersUrl = 'http://localhost:8000/api/profiles/';
    selfProfileUrl = 'http://localhost:8000/auth/myprofile/';
    vehiclesFilteredUrl = 'http://localhost:8000/api/vehiculospoliza/';
    vehiclesUrl = 'http://localhost:8000/api/vehicles/';
    asesoresUrl = 'http://localhost:8000/api/asesores/';
    perfilesUrl = 'http://localhost:8000/api/perfiles/';
    matchUrl = 'http://localhost:8000/api/match/';
    mispolizasUrl = 'http://localhost:8000/api/mispolizas/';
    recibosUrl = 'http://localhost:8000/api/recibos/';
    prospectosUrl = 'http://localhost:8000/api/prospectos/';
}





const api = {
  getProspects: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: prospectosUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
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
  newProspect: (prospect) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: prospectosUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.post('',prospect)
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });
        });
    },
  updateRecibo: (id,datos) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: recibosUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.patch(id+'/',datos)
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  getMisPolizas: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: mispolizasUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
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
  matchClient: (datos) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: matchUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.post('',datos)
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  updateTipo: (id,datos) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: perfilesUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.patch(id+'/',datos)
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  getAsesores: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: asesoresUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
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
  getUsers: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: usersUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
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
    getU: (id) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: usersUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.get(id+'/')
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },
  postVehicles: (vehicle) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: vehiclesUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.post('',vehicle)
                .then(function (response) {
                        console.log(response)
                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  getVehicles: (id) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: vehiclesFilteredUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.get(id+'/')
                .then(function (response) {
                        console.log(response)
                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  getPolicys: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: policysUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
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
    getPolicy: (id) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: policysUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.get(id+'/')
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
                      'Authorization': 'Token ' + userToken}
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
      updatePolicy: (id,poliza) => {

            const userToken = JSON.parse(localStorage.getItem('userToken'));

            return new Promise(function (resolve, reject) {
                const instance = axios.create({
                    baseURL: polizasUrl,
                    //timeout: 2000,
                    headers: {'Content-Type': 'application/json',
                        'Authorization': 'Token ' + userToken}
                });
                instance.patch(id+'/', poliza)
                    .then(function (response) {

                            resolve(response.data);
                    })
                    .catch(function (error) {
                        console.log(error.response);
                        reject(error);
                    });


            });
        },

  getClients: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: clientesUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
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
    getClient: (id) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: clientesUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.get(id+'/')
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },
    newClient: (poliza) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: clientesUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
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

    createUser: (nuevo) => {

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: usersUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                     }
              });
              instance.post('', nuevo)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

    updateUser: (id, data) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: usersUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.patch(id + '/', data)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

     updateProfile: (data) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: selfProfileUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.post('', data)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

    getProfile: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: selfProfileUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
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


} // api

export default api;
