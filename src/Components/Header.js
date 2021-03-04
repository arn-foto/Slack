import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

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
`;

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

const HeaderRight = styled.div``;

const HeaderAvatar = styled(Avatar)``;
