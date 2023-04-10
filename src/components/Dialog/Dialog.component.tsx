import React from 'react';

import {Icon} from '@Components/Icon';
import {Button} from '@Components/Button';
import {extendClassname} from '@Utils';

import {DialogProps} from './Dialog';
import {
    DialogActions,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogWrapper,
    IconButton,
} from './Dialog.styles';

/**
 * Dialog Component
 *
 * @example Correct usage
 * ```ts
 * <Dialog
 *  onCloseHandler={() => {}}
 *  onSubmitHandler={() => {}}
 *  title="Dialog Header"
 *  primaryActionText="Submit"
 *  />
 * ```
 *
 * @example usage with description
 * ```ts
 * <Dialog
 *  onCloseHandler={()=>{}}
 *  onSubmitHandler={()=>{}}
 *  title="Dialog Header"
 *  primaryActionText="Submit"
 *  description="Dialog Description"
 * />
 * ```
 *
 * @example usage with custom jsx element as content
 * ```ts
 * <Dialog
 *  onCloseHandler={()=>{}}
 *  onSubmitHandler={()=>{}}
 *  title="Dialog Header"
 *  primaryActionText="Submit"
 * >
 * <OtherComponent />
 * </Dialog>
 * ```
 */
export const Dialog = (props: DialogProps) => {
    const {
        children,
        title,
        description,
        primaryActionText,
        secondaryActionText,
        onCloseHandler,
        onSubmitHandler,
        className = '',
        destructive = false,
        ...restProps
    } = props;

    return (
        <DialogWrapper
            onHide={onCloseHandler}
            className={`mm-dialog ${className}`}
            {...restProps}
        >
            <DialogHeader>
                <IconButton onClick={onCloseHandler}>
                    <Icon
                        name='Close'
                        size={20}
                    />
                </IconButton>
            </DialogHeader>
            <DialogContent>
                {title && <DialogTitle>{title}</DialogTitle>}
                {description && <DialogDescription>{description}</DialogDescription>}
                {children}
                <DialogActions>
                    <Button
                        variant='tertiary'
                        onClick={onCloseHandler}
                        className={`${extendClassname({
                            destructiveBtnSecondary: destructive,
                        })}`}
                    >
                        {secondaryActionText ?? 'Close'}
                    </Button>
                    {(onSubmitHandler && primaryActionText) && (
                        <Button
                            variant='primary'
                            className={`${extendClassname({
                                destructiveBtnPrimary: destructive,
                            })}`}
                            onClick={onSubmitHandler}
                        >
                            {primaryActionText ?? 'Submit'}
                        </Button>
                    )}
                </DialogActions>
            </DialogContent>
            <DialogFooter/>
        </DialogWrapper>
    );
};
