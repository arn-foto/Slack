import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Sidebar() {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>dang ol, yo</h2>
					<h3>
						<FiberManualRecordIcon />
						Anthony Navarro
					</h3>
				</SidebarInfo>
			</SidebarHeader>
		</SidebarContainer>
	);
}

export default Sidebar;

const SidebarContainer = styled.div`
	background-color: var(--slack-color);
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
