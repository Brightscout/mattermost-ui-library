import React from 'react';
import {Story, Meta} from '@storybook/react';

import {useState} from '@storybook/addons';

import {Button} from '@Components/Button';

import {Modal, ModalBody, ModalFooter, ModalHeader} from '@Components/Modal';

import {ModalProps} from './Modal';

export default {
    title: 'Component/Modal',
    component: Modal,
    argTypes: {
        backdrop: {
            options: ['static', true, false],
            control: {type: 'select'},
        },
    },
} as Meta<typeof Modal>;

// Default
export const Default = (args: ModalProps) => {
    const [show, setShow] = useState(false);
    const onHideHandler = () => {
        setShow(false);
    };
    const onOpenModalHandler = () => {
        setShow(true);
    };

    return (<>
        <Button onClick={onOpenModalHandler}>{'Open Modal'}</Button>
        <Modal
            show={show}
            {...args}
            onCloseHandler={onHideHandler}
        >
            <ModalHeader
                title='Modal Header'
                subtitle='Diam viverra donec nisi in lorem dictum'
                onCloseHandler={onHideHandler}
            />
            <ModalBody>
                {
                    'Curabitur felis diam, viverra ac lorem et, laoreet placerat urna. Cras in feugiat mauris, vitae feugiat libero. Praesent euismod tempus diam non laoreet. Aliquam eu nisi in ante posuere faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus gravida ante. Nunc scelerisque nunc non mauris ornare egestas. Proin ut mi malesuada metus fermentum viverra. Proin cursus consequat massa, sit amet consectetur libero volutpat ac. Aliquam ultricies nisi sit amet velit sagittis finibus. Suspendisse tincidunt gravida sem id accumsan. Morbi eget enim quis mi scelerisque malesuada. In porttitor tempus massa, vel rutrum libero pretium nec. Donec eu eros finibus, rutrum felis eu, aliquet velit. '
                }
            </ModalBody>
            <ModalFooter
                primary={<Button variant='primary'>{'Submit'}</Button>}
                secondary={<Button variant='tertiary'>{'Close'}</Button>}
            />
        </Modal>
    </>);
};

Default.args = {
    backdrop: 'static',
};
