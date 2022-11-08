import React from 'react';

import {MenuItem} from '@Components/MenuItem';

import {ListPropType} from './List';
import {Options} from './List.styles';

export const List = ({
	listItems,
	handleItemClick,
	value,
	isOpen,
	loading,
	isAutocomplete,
}: ListPropType) => (
	<Options open={isOpen} className="select__option-list">
		{loading ? <MenuItem label={'Loading ...'}/> : listItems.map((option) => (
			<MenuItem
				key={option.value}
				className={(option.label ?? option.value) === value && !isAutocomplete ? 'select__option-active' : ''}
				onClick={(event) => handleItemClick(event, option)}
				label={option.label ?? option.value}
				leadingIcon={option.icon}
				{...((option.label ?? option.value) === value && {trailingIcon: 'Check'})}
			/>
		))}
	</Options>
);
