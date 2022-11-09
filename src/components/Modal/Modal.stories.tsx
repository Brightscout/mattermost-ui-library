import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Modal} from './Modal.component';
import {ModalProps} from './Modal';

export default {
    title: 'Component/Modal',
    component: Modal,
    args: {
        backdrop: 'static',
        title: 'Modal Header',
        subtitle: 'Modal subheader',
    },
    argTypes: {
        backdrop: {
            options: ['static', true, false],
            control: {type: 'select'},
        },
    },
} as Meta<ModalProps>;

// Default
export const Default: Story<ModalProps> = (args) => {
    return (
        <Modal {...args}>
            {`
            Curabitur felis diam, viverra ac lorem et, laoreet placerat urna. Cras in
            feugiat mauris, vitae feugiat libero. Praesent euismod tempus diam non
            laoreet. Aliquam eu nisi in ante posuere faucibus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas finibus gravida ante. Nunc
            scelerisque nunc non mauris ornare egestas. Proin ut mi malesuada metus
            fermentum viverra. Proin cursus consequat massa, sit amet consectetur
            libero volutpat ac. Aliquam ultricies nisi sit amet velit sagittis
            finibus. Suspendisse tincidunt gravida sem id accumsan. Morbi eget enim
            quis mi scelerisque malesuada. In porttitor tempus massa, vel rutrum
            libero pretium nec. Donec eu eros finibus, rutrum felis eu, aliquet velit.
            `}
        </Modal>
    );
};
