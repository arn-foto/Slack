import styled from "styled-components";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput(channelName, channelId) {
	const [input, setInput] = useState("");

	const sendMessage = (e) => {
		e.preventDefault();

		console.log(channelId);

		if (!channelId) {
			return false;
		}
		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: "Hank Hill",
			userImage: "",
		});
		setInput("");
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #room`}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	> form > input {
		outline: none;
		padding: 20px;
		border-radius: 3px;
		border: 1px solid gray;
		width: 60%;
		bottom: 30px;
		position: fixed;
	}

	> form > button {
		display: none !important;
	}
`;
