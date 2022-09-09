import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import SubscriptionCard from '.';

// Mock functions
const editHandler = jest.fn();
const deleteHandler = jest.fn();

// Mock data for cardBody props
const cardBody = {
    list: ['List Item 1', 'List Item 2', 'List Item 3'],
    labelValuePairs: [
        {label: 'Label 1', value: 'Value 1'},
        {label: 'Label 2', value: 'Value 2'},
        {label: 'Label 3', value: 'Value 3'},
        {label: 'Label 4', value: 'Value 4'},
    ]
};

// Mock Icons
const EditIcon = <i className='fa fa-edit' />;
const DeleteIcon = <i className='fa fa-delete' />;

// Mock channel data
const channelData = {
    create_at: 19304124124,
    creator_id: "klsioer239042",
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
    update_at: 19304124124
};

// Mock Props
const subscriptionCardProps = {
    header: 'Subscription Card Header',
    label: 'Label',
    cardBody,
    description: 'Description',
    channel: channelData,
    editIcon: EditIcon,
    deleteIcon: DeleteIcon,
    onEdit: editHandler,
    onDelete: deleteHandler,
    className: 'subscription-card-custom-class',
}

describe('SubscriptionCard', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => {
        component = shallow(<SubscriptionCard {...subscriptionCardProps} />);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass(subscriptionCardProps.className)).toBeTruthy();
    })

    it('Should render the label', () => {
        expect(component.find('.subscription-card__label').text().includes(subscriptionCardProps.label)).toBeTruthy();
    })

    it('Should render the channel display name', () => {
        expect(component.find('.subscription-card__channel-text').text().includes(subscriptionCardProps.channel.display_name)).toBeTruthy();
    })

    it('Should render the list in card body', () => {
        expect(component.find('.subscription-card__body-item--list')).toHaveLength(cardBody.list.length);
    })

    it('Should render the label value pairs in the card body', () => {
        expect(component.find('.subscription-card__body-header')).toHaveLength(cardBody.labelValuePairs.length);
    })

    it('Should render the description', () => {
        expect(component.find('.subscription-card__body-item').last().text().includes(subscriptionCardProps.description)).toBeTruthy();
    })
})
