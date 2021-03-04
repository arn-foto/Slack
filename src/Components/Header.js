import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<HeaderLeft>
					<h1>yo</h1>
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
