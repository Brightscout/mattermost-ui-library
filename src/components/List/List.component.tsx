import React from 'react';

import {MenuItem} from '@Components/MenuItem';
import {extendClassname} from '@Utils';

import {ListPropType} from './List';
import {Options} from './List.styles';

/**
 * List Component
 *
 * @example Correct usage 
 * ```ts
 * <List
 * 	isOpen={true}
 * 	listItems={[
 * 		{label: 'label 1', value: 'value 1'},
 * 		{label: 'label 2', value: 'value 2'},
 * 	]}
 * 	handleItemClick={() => {}}
 * 	value='value'
 * />
 * ```
 *
 * @example Correct usage with AutoCorrect
 * ```ts
 * <List
 * 	isOpen={true}
 * 	listItems={[
 * 		{label: 'label 1', value: 'value 1'},
 * 		{label: 'label 2', value: 'value 2'},
 * 	]}
 *  handleItemClick={() => {}}
 * 	value='value'
 * 	loading={false}
 * 	isAutocomplete={true}
 * />
 * ```
 */
export const List = ({
	listItems,
	handleItemClick,
	value,
	isOpen,
	loading,
	isAutocomplete,
}: ListPropType) => (
	<Options open={isOpen} className='select__option-list'>
		{loading ? (
			<MenuItem label={'Loading ...'} />
		) : (
			listItems.map((option) => (
				<MenuItem
					key={option.value}
					className={extendClassname({
						'select__option-active':
							(option.label ?? option.value) === value && !isAutocomplete,
					})}
					onClick={(event) => handleItemClick(event, option)}
					label={option.label ?? option.value}
					leadingIcon={option.icon}
					{...((option.label ?? option.value) === value && {
						trailingIcon: 'Check',
					})}
				/>
			))
		)}
	</Options>
);
