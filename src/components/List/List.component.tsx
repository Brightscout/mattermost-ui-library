import React, {forwardRef} from 'react';

import {MenuItem} from '@Components/MenuItem';
import {extendClassname} from '@Utils';

import {ListPropType} from './List';
import {Options} from './List.styles';
import { Icon } from '@Components/Icon';

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
export const List = forwardRef<HTMLUListElement, ListPropType>(
    (
        {
            listItems,
            handleItemClick,
            value,
            isOpen,
            loading,
            isAutocomplete,
            activeItem = 0,
            secondaryLabelPosition = null,
        },
        ref,
    ) => (
        <Options
            open={isOpen}
            className='select__option-list'
            ref={ref}
        >
            {loading ? (
                <MenuItem label={'Loading ...'}/>
            ) : (
                listItems.map((option, index) => (
                    <MenuItem
                        key={option.value}
                        className={extendClassname({
                            active:
								((option.label ?? option.value) === value && !isAutocomplete) ||
								activeItem === index,
                        })}
                        onClick={(event) => handleItemClick(event, option, index)}
                        label={option.label ?? option.value}
                        leadingElement={option.icon && <Icon name={option.icon} />}
                        {...((option.label ?? option.value) === value &&
							!isAutocomplete && {
                            trailingIcon: 'Check',
                        })}
                        secondaryLabelPosition={secondaryLabelPosition}
                        secondaryLabel={secondaryLabelPosition ? option.secondaryLabel : ''}
                        showBeforeLabelElement={option.showBeforeLabelElement}
                    />
                ))
            )}
        </Options>
    ),
);

List.displayName = "List";
