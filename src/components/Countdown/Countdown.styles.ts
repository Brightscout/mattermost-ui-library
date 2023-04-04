import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

// Styles from card wrapper
export const CountdownWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    background: Colors.centerChannel_4,
    borderRadius: '4px',
    padding: 16,
    minWidth: 'fit-content',
});

// Styles for timer
export const Timer = styled.h2({
    fontWeight: 600,
    fontSize: '22px',
    lineHeight: '28px',
    color: Colors.centerChannel,
    letterSpacing: '1.4px',
    marginBottom: '4px',
    minWidth: 'max-content',
    minHeight: '28px',
});

// Styles for time label
export const TimeLabel = styled.p({
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    color: Colors.centerChannel_72,
    minWidth: '22px',
    margin: 0,
});

// Styles for time label wrapper
export const TimeLabelWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: 30,
});
