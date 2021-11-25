import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../Firebase";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Hello, i am OLUWADAMILARE JOSEPH ODULESI</Text>
			<Text>You are signed in as {auth.currentUser.email} </Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
