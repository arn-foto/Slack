import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "../Css/index.css";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<HeaderLeft>
					<HeaderAvatar />
					<AccessTimeIcon />
				</HeaderLeft>

				<HeaderSearch>
					<SearchIcon />
					<input placeholder="Search" />
				</HeaderSearch>

				<HeaderRight>
					<HelpOutlineIcon />
				</HeaderRight>
			</HeaderContainer>
		</div>
	);
}

export default Header;

// styles for header container
const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	padding: 10px 0;
	background-color: var(--slack-color);
	color: white;
`;

//  left header styles below
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
// header right styles
const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;

// search styles
const HeaderSearch = styled.div`
	display: flex;
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	background-color: #421f44;
	text-align: center;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;
	// search input styles
	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		outline: none;
		color: white;
	}
`;
