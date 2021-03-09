import styled from "styled-components";
import React from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
	return (
		<ChatContainer>
			<Header>
				<HeaderLeft>
					<h4>
						<strong>#Room-name</strong>
					</h4>
					<StarBorderOutlinedIcon />
				</HeaderLeft>
				<HeaderRight>
					<p>
						<InfoOutlinedIcon /> Details
					</p>
				</HeaderRight>
			</Header>
		</ChatContainer>
	);
}

export default Chat;

const ChatContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 60px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid lightgrey;
`;

const HeaderRight = styled.div``;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	> h4 {
		display: flex;
		text-transform: lowercase;
		margin-right: 10px;
	}
	> h4 > .MuiSvgIcon-root {
		margin-left: 20px;
		font-size: 18px;
	}
`;
