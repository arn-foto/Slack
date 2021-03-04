import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<h1>header</h1>
			</HeaderContainer>
		</div>
	);
}

export default Header;

const HeaderContainer = styled.div`
	color: red;
`;
