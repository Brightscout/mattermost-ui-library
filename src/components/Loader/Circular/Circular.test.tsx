import React from 'react';
import {shallow} from 'enzyme';

import CircularLoader from '.';

describe('Circular Loader', () => {
    it('Should render correctly', () => {
        const component = shallow(<CircularLoader/>);
        expect(component).toMatchSnapshot();
    });
});
