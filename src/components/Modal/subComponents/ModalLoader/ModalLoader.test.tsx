import React from 'react';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';

import LinearLoader from '@Components/Loader/Linear';

// Mock data
import {ModalLoaderClassName} from '@Constants/mockData/modal';

import ModalLoader from '.';

describe('Modal Body', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ModalLoader className={ModalLoaderClassName}/>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('Should render correctly when loading is false', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(ModalLoaderClassName)).toBeTruthy();
    });
});

describe('Modal Loader - loading state', () => {
    let shallowRenderedComponent: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        shallowRenderedComponent = shallow(<ModalLoader loading={true}/>);
    });

    it('Should render correctly when "loading" is true', () => {
        expect(shallowRenderedComponent).toMatchSnapshot();
    });

    it('Should render the linear loader when "loading" is true', () => {
        expect(shallowRenderedComponent.contains(<LinearLoader />)).toBeTruthy();
    });
});
