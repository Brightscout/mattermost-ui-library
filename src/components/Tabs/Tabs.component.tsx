import React from 'react';
import { Tab } from 'react-bootstrap';

import { StyledTabs } from './Tabs.styles';
import { TabsConfig, TabsProps } from './Tabs';

export const Tabs = ({
	tabsConfig,
	justified = false,
	mountOnEnter = true,
	unmountOnExit = true,
	stickyHeader = true,
	className = '',
}: TabsProps) => {
	return (
		<StyledTabs
			stickyHeader={stickyHeader}
			justified={justified}
			mountOnEnter={mountOnEnter}
			unmountOnExit={unmountOnExit}
			className={`mm-tabs ${className}`}
		>
			{tabsConfig.map(({ key, title, content }: TabsConfig) => (
				<Tab key={key} eventKey={key} title={title} tabClassName="nav-item">
					{content}
				</Tab>
			))}
		</StyledTabs>
	);
};
