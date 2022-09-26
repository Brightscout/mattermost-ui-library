import React from 'react';
import {shallow} from 'enzyme';

// Mock data
import {subTitle, error} from '@Constants/mockData/modal';

import ModalSubtitleAndError from '.';

describe('ModalSubtitleAndError', () => {
    it('Should render correctly when only the subTitle is passed', () => {
        const component = shallow(<ModalSubtitleAndError subTitle={subTitle} />);
        expect(component).toMatchSnapshot();
        expect(component.text().includes(subTitle)).toBeTruthy();
        expect(component.text().includes(error)).toBeFalsy();
    });

    it('Should render correctly when only the error is passed', () => {
        const component = shallow(<ModalSubtitleAndError error={error} />);
        expect(component).toMatchSnapshot();
        expect(component.text().includes(error)).toBeTruthy();
        expect(component.text().includes(subTitle)).toBeFalsy();
    });

    it('Should render correctly when both subTitle and error props are passed', () => {
        const component = shallow(
            <ModalSubtitleAndError
                subTitle={subTitle}
                error={error}
            />,
        );
        expect(component).toMatchSnapshot();
        expect(component.text().includes(error)).toBeTruthy();
        expect(component.text().includes(subTitle)).toBeTruthy();
    });
});
