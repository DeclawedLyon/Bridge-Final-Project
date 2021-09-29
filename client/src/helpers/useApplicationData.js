import { useState, useEffect } from "react";
import axios from "axios"

export default function useApplicationData () {
  const [state, setState] = useState({
    packages: [],
    thisPackage: {},
    currentUser: 1,
    currentUserObj: {},
    currentCourier: 1,
    currentCourierObj: {}
  });
  
  useEffect(() => {
    Promise.all([
      axios.get("/packages"),
      axios.get(`/api/users/${state.currentUser}`),
      axios.get(`/api/couriers/${state.currentCourier}`)
    ]).then((response) => {
      setState(prev => ({
        ...prev,
        packages: response[0].data,
        currentUser: response[1].data.user.id,
        currentUserObj: response[1].data,
        currentCourier: response[2].data.courier.id,
        currentCourierObj: response[2].data
      }))
    });
  }, [state.currentUser, state.currentCourier])


  const deletePackage = (id) => {
    return axios.delete(`/api/packages/${id}`)
    .then(() => {
      const packages = {
        ...state.packages[id] = null
      }
      setState(prev => ({ ...prev, packages}))
    })
    .catch(e => console.log(e))
  }

  const selectedPackage = () => {
    console.log("hello")
  }

  return {
    state,
    setState,
    deletePackage,
    selectedPackage
  }
}