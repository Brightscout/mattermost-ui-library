import React from 'react';
import {shallow} from 'enzyme';

import ModalSubtitleAndError from '.';

// Mock props data
const subTitle = 'Modal subtitle';
const error = 'Modal error';

describe('ModalSubtitleAndError', () => {
    it('Should render correctly and matches snapshot when only the subTitle is passed', () => {
        const component = shallow(<ModalSubtitleAndError subTitle={subTitle}/>);
        expect(component).toMatchSnapshot();
        expect(component.text().includes(subTitle)).toBeTruthy();
    });

    it('Should render correctly and matches snapshot when only the error is passed', () => {
        const component = shallow(<ModalSubtitleAndError error={error}/>);
        expect(component).toMatchSnapshot();
        expect(component.text().includes(error)).toBeTruthy();
    });

    it('Should render correctly and matches snapshot when both subTitle and error props are passed', () => {
        const component = shallow(
            <ModalSubtitleAndError
                subTitle={subTitle}
                error={error}
            />,
        );
        expect(component).toMatchSnapshot();
        expect(component.text().includes(error)).toBeTruthy();
    });
});
