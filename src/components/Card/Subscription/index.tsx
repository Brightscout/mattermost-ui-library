import React, {useMemo} from 'react';

// Components
import BaseCard from '@Components/Card/Base';
import Popover from '@Components/Popover';
import MenuButtons from '@Components/Buttons/MenuButtons';

// Constants
import {General as MMConstants} from 'mattermost-redux/constants';

type SubscriptionCardProps = {
    header: string | JSX.Element;
    label?: string;
    cardBody?: SubscriptionCardBody;
    description?: string;
    channel?: ChannelData | null;
    onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    editIcon?: JSX.Element;
    deleteIcon?: JSX.Element;
    className?: string;
}

const SubscriptionCard = ({
    header,
    label,
    cardBody,
    description,
    onDelete,
    onEdit,
    channel,
    editIcon,
    deleteIcon,
    className = '',
}: SubscriptionCardProps) => {
    const buttonMenuPopover = useMemo(() => (
        <Popover
            popoverBody={
                <MenuButtons
                    buttons={[
                        {
                            icon: editIcon ?? 'fa fa-pencil-square-o',
                            text: 'Edit',
                            onClick: onEdit,
                        },
                        {
                            icon: deleteIcon ?? 'fa fa-trash-o',
                            text: 'Delete',
                            onClick: onDelete,
                        },
                    ]}
                />
            }
            className='subscription-card__popover'
        >
            <button className='style--none subscription-card__menu-btn'>
                <i className='fa fa-ellipsis-v'/>
            </button>
        </Popover>
    ), [onEdit, onDelete]);

    return (
        <BaseCard className={`subscription-card margin-bottom-15 ${className}`}>
            <>
                <div className='margin-bottom-10 d-flex justify-content-between'>
                    <p className='margin-0 wt-500'>{header}</p>
                    {buttonMenuPopover}
                </div>
                {channel && (
                    <div className='subscription-card__channel margin-bottom-12 padding-h-15 d-flex align-items-center'>
                        <i className={`channel-icon margin-right-5 ${channel.type === MMConstants.PRIVATE_CHANNEL ? 'icon icon-lock-outline' : 'icon icon-globe'}`}/>
                        <span className='subscription-card__channel-text font-14 text-ellipsis'>{channel.display_name}</span>
                    </div>
                )}
                {label && <div className='subscription-card__label padding-v-2 padding-h-5 text-capitalize font-size-10 wt-600 margin-bottom-10 channel-text d-inline-block border-radius-4'>{label}</div>}
                {(cardBody || description) && (
                    <ul className='subscription-card__body padding-0 margin-0 font-size-14'>
                        {cardBody?.list?.map((listItem: string | JSX.Element, index: number) => (
                            <li
                                key={index}
                                className='subscription-card__body-item margin-bottom-5 margin-left-15 subscription-card__body-item--list font-12'
                            >
                                {listItem}
                            </li>
                        ))}
                        {cardBody?.labelValuePairs?.map((bodyItem, index: number) => (
                            <li
                                key={bodyItem.label}
                                className={`text-ellipsis subscription-card__body-item margin-bottom-10 ${cardBody?.list?.length && !index && 'margin-top-15'}`}
                            >
                                <span className='subscription-card__body-header wt-600 margin-right-10'>{bodyItem.label + ':'}</span>
                                <span className='subscription-card__body-text'>{bodyItem.value}</span>
                            </li>
                        ))}
                        {description && (
                            <li
                                className='subscription-card__body-item'
                            >
                                {description}
                            </li>
                        )}
                    </ul>
                )}
            </>
        </BaseCard>
    );
};

export default SubscriptionCard;
