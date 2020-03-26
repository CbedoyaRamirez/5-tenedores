import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

export default function Login(props) {
  const { navigation } = props;

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/Img/5-tenedores.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <Text>Form</Text>
        <CreateAccont navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <Text>Form facebook</Text>
      </View>
    </ScrollView>
  );
}

function CreateAccont(props) {
  const { navigation } = props;
  console.log(props);

  return (
    <Text style={styles.textRegister}>
      Aun no tiene una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Registrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold"
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  }
});
