import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

// Mock data
import { subscriptionCardBody as cardBody, subscriptionCardProps } from '@Constants/mockData/card';

import SubscriptionCard from '.';

describe('SubscriptionCard', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<SubscriptionCard {...subscriptionCardProps}/>);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(subscriptionCardProps.className)).toBeTruthy();
    });

    it('Should render the label', () => {
        expect(component.find('.subscription-card__label').text().includes(subscriptionCardProps.label)).toBeTruthy();
    });

    it('Should render the channel display name', () => {
        expect(component.find('.subscription-card__channel-text').text().includes(subscriptionCardProps.channel.display_name)).toBeTruthy();
    });

    it('Should render the list in card body', () => {
        expect(component.find('.subscription-card__body-item--list')).toHaveLength(cardBody.list.length);
    });

    it('Should render the label value pairs in the card body', () => {
        expect(component.find('.subscription-card__body-header')).toHaveLength(cardBody.labelValuePairs.length);
    });

    it('Should render the description', () => {
        expect(component.find('.subscription-card__body-item').last().text().includes(subscriptionCardProps.description)).toBeTruthy();
    });
});
