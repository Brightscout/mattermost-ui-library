import React from 'react';

// Mock data for "card" related component tests

// Mock data for "BaseCard"
export const BaseCardChildren = <div>{'Base card children'}</div>;

// Mock data for "SubscriptionCard"
export const editHandler = jest.fn();
export const deleteHandler = jest.fn();
export const subscriptionCardBody = {
    list: ['List Item 1', 'List Item 2', 'List Item 3'],
    labelValuePairs: [
        {label: 'Label 1', value: 'Value 1'},
        {label: 'Label 2', value: 'Value 2'},
        {label: 'Label 3', value: 'Value 3'},
        {label: 'Label 4', value: 'Value 4'},
    ],
};
// Mock Icons
export const EditIcon = <i className='fa fa-edit' />;
export const DeleteIcon = <i className='fa fa-delete' />;
// Mock channel data
export const channelData = {
    create_at: 19304124124,
    creator_id: 'klsioer239042',
    delete_at: 19304124124,
    display_name: 'Channel Display Name',
    extra_update_at: 19304124124,
    group_constrained: null,
    header: 'Channel Header',
    id: 'jw390r23iofs9032',
    last_post_at: 19304124124,
    last_root_post_at: 19304124124,
    name: 'Channel Name',
    policy_id: null,
    props: null,
    purpose: 'Channel Purpose',
    scheme_id: null,
    shared: null,
    team_display_name: 'Team Display Name',
    team_id: 'ior9823ijoiewro3w',
    team_name: 'Team Name',
    team_update_at: 19304124124,
    total_msg_count: 1,
    total_msg_count_root: 1,
    type: 'P',
    update_at: 19304124124,
};
export const subscriptionCardProps = {
    header: 'Subscription Card Header',
    label: 'Label',
    cardBody: subscriptionCardBody,
    description: 'Description',
    channel: channelData,
    editIcon: EditIcon,
    deleteIcon: DeleteIcon,
    onEdit: editHandler,
    onDelete: deleteHandler,
    className: 'subscription-card-custom-class',
};

// Mock data for "Card" component
export const cardBody = [{
    sectionHeading: 'Section Heading',
    data: [{
        icon: <i className='fa fa-edit' />,
        label: 'Label 1',
    }, {
        icon: <i className='fa fa-link' />,
        label: 'Label 2',
    }],
}];
export const cardProps = {
    cardHeader: 'Card Header',
    cardSubHeader: 'Card sub header',
    cardBody,
    onEdit: editHandler,
    onDelete: deleteHandler,
    editIcon: EditIcon,
    deleteIcon: DeleteIcon,
    className: 'card-custom-class',
};
