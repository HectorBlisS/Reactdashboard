
import axios from 'axios';
import FormData from 'form-data';


let debug = true;

let clientesUrl = 'http://dipra.planb.com.mx/api/clientes/';
let polizasUrl = 'http://dipra.planb.com.mx/api/polizas/';
let policysUrl = 'http://dipra.planb.com.mx/api/policys/';
let loginUrl = 'http://dipra.planb.com.mx//auth/token-auth/';
let usersUrl = 'http://dipra.planb.com.mx/api/profiles/';
let asesoresUrl = 'http://dipra.planb.com.mx/api/asesores/';
let selfProfileUrl = 'http://dipra.planb.com.mx/auth/myprofile/';
let vehiclesFilteredUrl = 'http://dipra.planb.com.mx/api/vehiculospoliza/';
let vehiclesUrl = 'http://dipra.planb.com.mx/api/vehicles/';
let perfilesUrl = 'http://dipra.planb.com.mx/api/perfiles/';
let matchUrl = 'http://dipra.planb.com.mx/api/match/';
let asesormatchUrl = 'http://dipra.planb.com.mx/api/asesormatch/';
let mispolizasUrl = 'http://dipra.planb.com.mx/api/mispolizas/';
let recibosUrl = 'http://dipra.planb.com.mx/api/recibos/';
let prospectosUrl = 'http://dipra.planb.com.mx/api/prospectos/';
let candidatosUrl = 'http://dipra.planb.com.mx/api/candidatos/';
let candidatoslistUrl = 'http://dipra.planb.com.mx/api/candidatoslist/';
let adminpolizasUrl = 'http://dipra.planb.com.mx/api/adminpolizas/';
let archivosUrl = 'http://dipra.planb.com.mx/api/archivos/';
let archivosasesorUrl = 'http://dipra.planb.com.mx/api/archivosasesor/';
let clavesUrl = 'http://dipra.planb.com.mx/api/claves/';
let citasUrl = 'http://dipra.planb.com.mx/api/citas/';
let cursosUrl = 'http://dipra.planb.com.mx/api/cursos/';


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
    asesormatchUrl = 'http://localhost:8000/api/asesormatch/';
    mispolizasUrl = 'http://localhost:8000/api/mispolizas/';
    recibosUrl = 'http://localhost:8000/api/recibos/';
    prospectosUrl = 'http://localhost:8000/api/prospectos/';
    candidatosUrl = 'http://localhost:8000/api/candidatos/';
    candidatoslistUrl = 'http://localhost:8000/api/candidatoslist/';
    adminpolizasUrl = 'http://localhost:8000/api/adminpolizas/';
    archivosUrl = 'http://localhost:8000/api/archivos/';
    archivosasesorUrl = 'http://localhost:8000/api/archivosasesor/';
    clavesUrl = 'http://localhost:8000/api/claves/';
    citasUrl = 'http://localhost:8000/api/citas/';
    cursosUrl = 'http://localhost:8000/api/cursos/';
}



const api = {
    //Cursos de Asesor

    newCurso:(clave)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));


        return new Promise(function (resolve, reject) {

            const instance = axios.create({
                baseURL: cursosUrl,
                //timeout: 2000,
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': 'Token ' + userToken},
                //data:data
            });
            instance.post('', clave)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    //Citas de Asesor

    newCita:(clave)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));


        return new Promise(function (resolve, reject) {

            const instance = axios.create({
                baseURL: citasUrl,
                //timeout: 2000,
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': 'Token ' + userToken},
                //data:data
            });
            instance.post('', clave)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    updateCita: (id,datos) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: citasUrl,
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
    //Claves de Asesor

    newClave:(clave)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));


        return new Promise(function (resolve, reject) {

            const instance = axios.create({
                baseURL: clavesUrl,
                //timeout: 2000,
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': 'Token ' + userToken},
                //data:data
            });
            instance.post('', clave)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    //Archivos de asesor
    getAsesorArchivos:(id)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: archivosasesorUrl,
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
    getArchivos:()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: archivosUrl,
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
    getArchivo:(id)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: archivosUrl,
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
    newArchivo:(archivo)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        console.log(archivo.archivo)

        return new Promise(function (resolve, reject) {
            let data = new FormData()

            data.append('archivo', archivo.archivo)
            data.append('nombre',archivo.nombre)
            data.append('tipo',archivo.tipo)
            data.append('asesor',archivo.asesor)
            const instance = axios.create({
                baseURL: archivosUrl,
                //timeout: 2000,
                headers: {
                    'Content-Type': undefined ,
                    'Authorization': 'Token ' + userToken},
                //data:data
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
    deleteArchivo:(id)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: archivosUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.delete(id)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    //Candidatos de asesor
    updateCandidato: (id,datos) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: candidatosUrl,
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
  getCandidato: (id) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: candidatoslistUrl,
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
  getCandidatos: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: candidatoslistUrl,
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
  newCandidato: (candidato) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: candidatosUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.post('',candidato)
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });
        });
    },
    //Prospectos de ciente
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
    //Recibos
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
    //Match cliente con usuario
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
    //match asesor con usuario
    matchAsesor: (datos) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: asesormatchUrl,
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
    //Asesores
  getAsesores: (url) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));
      if(url){
          asesoresUrl=url;
      }

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
    //Todos los usuarios
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
    //Vehiculos
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
    //polizas
  getPolicys: (url) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));
        if(url){
          policysUrl=url;
      }

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
      newAdminPolicy: (poliza) => {

            const userToken = JSON.parse(localStorage.getItem('userToken'));

            return new Promise(function (resolve, reject) {
                const instance = axios.create({
                    baseURL: adminpolizasUrl,
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
    updateAsesor: (id,asesor) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: asesoresUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken}
            });
            instance.patch(id+'/', asesor)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
//Clientes
  getClients: (url) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));
      if(url){
          clientesUrl=url;
      }

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
