
import React from 'react';

// Icons
import {DeleteIcon, EditIcon} from '../Icons';

type CardProps = {
    cardHeader: string;
    cardSubHeader?: string;
    cardBody: CardBody[];
    onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    editIcon?: JSX.Element;
    deleteIcon?: JSX.Element;
    className?: string;
}

const Card = ({
    cardHeader,
    cardSubHeader,
    cardBody,
    onDelete,
    onEdit,
    editIcon,
    deleteIcon,
    className = '',
}: CardProps) => (
    <div className={`details-card border-radius-8 margin-bottom-15 ${className}`}>
        <div className='details-card__header padding-v-12 padding-h-25 sidebar-bg d-flex align-items-center justify-content-between'>
            <h3 className='details-card__header-text font-16 margin-0 wt-500 text-ellipsis'>
                {cardHeader}
                {cardSubHeader && <span className='details-card__sub-header margin-left-5'>{cardSubHeader}</span>}
            </h3>
            <div>
                {onEdit && (
                    <button
                        onClick={onEdit}
                        className='details-card__action-btn padding-0 margin-right-15 plugin-btn'
                    >
                        {editIcon ?? <EditIcon />}
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={onDelete}
                        className='details-card__action-btn padding-0 plugin-btn'
                    >
                        {deleteIcon ?? <DeleteIcon />}
                    </button>
                )}
            </div>
        </div>
        <div className='card-body padding-v-5'>
            {cardBody.map((body) => (
                <div
                    key={body.sectionHeading as string}
                    className='card-body__section margin-v-12 margin-h-25'
                >
                    <h3 className='card-body__section-heading wt-600 font-14 margin-bottom-5 text-ellipsis'>{body.sectionHeading}</h3>
                    <ul className='card-body__list padding-0 margin-bottom-10'>
                        {body.data.map((listItem) => (
                            <li
                                key={listItem.label as string}
                                className='body-item'
                            >
                                <p className='body-item__text font-14 text-ellipsis'>
                                    <span className='body-item__icon margin-right-10'>{listItem.icon}</span>
                                    <span>{listItem.label}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default Card;
