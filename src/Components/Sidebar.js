import React from "react";
import styled from "styled-components";

function Sidebar() {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>dang ol, yo</h2>
				</SidebarInfo>
			</SidebarHeader>
		</SidebarContainer>
	);
}

export default Sidebar;

const SidebarContainer = styled.div``;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
