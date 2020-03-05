import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text } from "react-native";
import Loading from "../../components/Loading";
import UserGuest from "../Account/UserGuest";
import UserLogged from "../Account/UserLogged";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading text="Cargando" isVisible={true} />;
  }

  if (login) {
    return <UserLogged />;
  }

  return <UserGuest />;
}
