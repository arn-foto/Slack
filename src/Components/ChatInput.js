import styled from "styled-components";
import React from "react";

function ChatInput(channelName, channelId) {
	return (
		<ChatInputContainer>
			<form>
				<input placeholder={`Message #room`} />
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div``;
