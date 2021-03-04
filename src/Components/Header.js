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

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div``;

const HeaderAvatar = styled(Avatar)``;
