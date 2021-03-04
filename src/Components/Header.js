import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "../Css/index.css";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<HeaderLeft>
					<HeaderAvatar />
					<AccessTimeIcon />
				</HeaderLeft>
			</HeaderContainer>
		</div>
	);
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	padding: 10px 0;
	background-color: var(--slack-color);
	color: white;
`;

// styles below
const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	flex: 0.3;
	margin-left: 20px;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`;

const HeaderRight = styled.div``;
