import { View, Text, Image, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import defaultAvatar from '../assets/defaultAvatar.png'
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';


const ChatComponent = ({ item }) => {
	// const navigation = useNavigation();
	// const [messages, setMessages] = useState({});

	// const [user, setUser] = useState("");

	const navigation = useNavigation();

	const handleChatPress = () => {
		// Navigate to the message screen, passing necessary data if required
		// navigation.navigate('Messaging', {
		// 	id: item.id,
		// 	name: item.name,
		// 	by: item.by,
		// });
	};



	// const getUsername = async () => {
	// 	try {
	// 		const value = await AsyncStorage.getItem("username");
	// 		if (value !== null) {
	// 			setUser(value);
	// 		}
	// 	} catch (e) {
	// 		console.error("Error while loading username!");
	// 	}
	// };


	// useLayoutEffect(() => {
	// 	getUsername();
	// 	setMessages(item.messages[item.length - 1]);
	// }, []);

	// const handleNavigation = () => {
	// 	navigation.navigate("Messaging", {
	// 		id: item.id,
	// 		name: item.name,
	// 		by: item.by
	// 	});
	// };


	return (
		<Ripple
			onPress={handleChatPress}
			rippleColor="#fff"
			rippleContainerBorderRadius={50}
			rippleDuration={400}
		>
			<View style={styles.chatStrip}>
				<View style={styles.chatContainer}>
					<Image
						source={item.photo ? item.photo : defaultAvatar}
						style={styles.image}
					/>
					<View style={styles.chatContent}>
						<View style={styles.chatHeader}>
							<Text style={styles.chatName}>{item.name}</Text>
							<Text
								style={{
									...styles.chatTime,
									color: item.totalUnread > 0 ? '#05A884' : '#A0A09E',
								}}
							>
								{item.time}
							</Text>
						</View>
						<View style={styles.messages}>
							<Text style={styles.chatMessage} numberOfLines={1}>
								{item.lastMessage}
							</Text>
							{item.totalUnread > 0 && (
								<View style={styles.unreadContainer}>
									<Text style={styles.totalUnread}>{item.totalUnread}</Text>
								</View>
							)}
						</View>
					</View>
				</View>
			</View>
		</Ripple>
	);
};

export default ChatComponent;

const styles = StyleSheet.create({
	chatStrip: {
		backgroundColor: '#111B21',
	},
	chatContainer: {
		flexDirection: 'row',
		paddingLeft: 12,
		paddingTop: 12,
		paddingRight: 10,
		paddingBottom: 4,
	},
	image: {
		width: 45,
		height: 45,
		backgroundColor: '#91a3b0',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 4,
		zIndex: 500
	},
	chatContent: {
		flex: 1,
		borderBottomWidth: 0,
		marginLeft: 16,
		marginBottom: 16,
	},
	chatHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 2,
		marginTop: 4
	},
	chatName: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	chatTime: {
		fontSize: 12,
	},
	messages: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	chatMessage: {
		fontSize: 14,
		color: '#A0A09E',
		width: '90%',
	},
	unreadContainer: {
		height: 20,
		width: 25,
		borderRadius: 20,
		backgroundColor: '#05A884',
		alignItems: 'center',
		justifyContent: 'center'
	},
	totalUnread: {
		fontSize: 10,
		color: '#fff',
		fontWeight: '600'
	}
})
