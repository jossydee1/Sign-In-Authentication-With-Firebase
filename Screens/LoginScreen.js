import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { auth, provider, provider1 } from "../Firebase";
import Google from "./Icons/Google.png";
import Facebook from "./Icons/Facebook.png";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigation = useNavigation();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.navigate("Home");
			}
		});
	}, []);

	const handleSignUp = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log(user.email);
			})
			.catch((error) => alert(error.message));
	};

	const signInWithGmail = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};

	const signInWithFacebook = () => {
		auth
			.signInWithPopup(provider1)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.inputContainer}>
				<View style={styles.text}>
					<Text style={styles.text1}>Create</Text>
					<Text style={styles.text1}>an account</Text>
					<Text style={styles.text2}>
						Fill the details & create your account
					</Text>
				</View>
				<TextInput
					placeholder="Username/Email ID"
					value={email}
					onChangeText={(text) => setEmail(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					style={styles.input}
					secureTextEntry
				/>
				<TextInput
					placeholder="Confirm Password"
					value={confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
					style={styles.input}
					secureTextEntry
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={handleSignUp} style={styles.button}>
					<Text style={styles.buttonOutlineText}>continue</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.text3}>or sign in with</Text>
			<View style={styles.icons}>
				<TouchableOpacity onPress={signInWithFacebook} style={styles.iconsimg}>
					<Image source={Facebook} style={{ width: 40, height: 40 }} />
				</TouchableOpacity>
				<TouchableOpacity onPress={signInWithGmail} style={styles.iconsimg}>
					<Image source={Google} style={{ width: 40, height: 40 }} />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},

	inputContainer: {
		width: "80%",
	},
	text: {
		marginTop: 200,
		marginBottom: 40,
	},
	text1: {
		color: "white",
		fontWeight: "700",
	},
	text2: {
		color: "white",
	},
	input: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderColor: "white",
		borderRadius: 10,
		marginTop: 5,
		color: "black",
	},
	buttonContainer: {
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
	},
	button: {
		backgroundColor: "orange",
		marginTop: 5,
		borderColor: "yellow",
		borderRadius: 20,
		width: "100%",
		padding: 15,
		alignItems: "center",
	},

	buttonOutlineText: {
		fontWeight: "600",
		fontSize: 20,
	},
	icons: {
		display: "flex",
		flex: 1,
		flexDirection: "row",
		paddingTop: 5,
	},
	text3: {
		color: "white",
		paddingTop: 30,
	},
	iconsimg: {
		paddingRight: 15,
	},
});
