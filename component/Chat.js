import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import ChatComponent from "./ChatComponent";
import socket from "../utils/socket";


import Modal from "./Modal";
import { chatData } from "../utils/data";


const Chat = () => {
	const [visible, setVisible] = useState(false);
	const [chats, setChats] = useState(chatData)

	useLayoutEffect(() => {
		function fetchGroups() {
			fetch("http://13.213.35.217:3000")
				.then((res) => res.json())
				.then((data) => setChats(data))
				.catch((err) => console.error(err));
		}
		fetchGroups();
	}, []);

	useEffect(() => {
		socket.on("chatList", (rooms) => {
			setChats(rooms);
		});
	}, [socket]);

	const handleCreateGroup = () => setVisible(true);

	return (
		<View style={styles.container}>
			{chats.length > 0 ? (
				<FlatList
					data={chats}
					renderItem={({ item }) => <ChatComponent item={item} />}
					keyExtractor={(item) => item.id}
				/>
			) : (
				<View style={styles.chatemptyContainer}>
					<Text style={styles.chatemptyText}>No rooms created!</Text>
					<Text>Click the icon above to create a Chat room</Text>
				</View>
			)}
			{visible ? <Modal setVisible={setVisible} /> : ""}
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202C33'
	},
})
