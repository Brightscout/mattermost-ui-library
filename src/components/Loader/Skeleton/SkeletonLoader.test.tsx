import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import SkeletonLoader from '.';

describe('Skeleton Loader', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<SkeletonLoader className='skeleton-loader-class' />);
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed className prop', () => {
        expect(component.hasClass('skeleton-loader-class')).toBeTruthy();
    });
});
