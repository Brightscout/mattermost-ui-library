import React, {useState, useRef, useEffect} from 'react';

import {CountdownProps} from './Countdown';
import {CountdownWrapper, TimeLabel, Timer, TimeLabelWrapper} from './Countdown.styles';

/**
 * Countdown component
 *
 * @example Correct usage for showing full time
 *
 * ```ts
 * <Countdown endTime={1675488600000} />
 * ```
 *
 * @example Correct usage when showing custom fields
 *
 * ```ts
 * <Countdown
 *    endTime={1675488600000}
 *    showHours={true}
 *    showMinutes={true}
 * />
 * ```
 *
 * @param props CountdownProps
 * @returns JSX.Element
 */
export const Countdown = (props: CountdownProps) => {
    const {endTime,
        showDays = false,
        showHours = false,
        showMinutes = false,
        showSeconds = false,
        className = '',
    } = props;

    // Check if full time is shown or not
    const showingFullTime = () => {
        return (showDays || showHours || showMinutes || showSeconds);
    };

    // Make time string
    const getTimeString = () => {
        const timerProps = [!showDays, !showHours, !showMinutes, !showSeconds].filter((value) => !value);
        const timerString = timerProps.join(' : ').replaceAll('false', '00');
        return timerString;
    };

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef<number>(0);

    // The state for our timer
    const [timer, setTimer] = useState(showingFullTime() ? getTimeString() : '00 : 00 : 00 : 00');

    // Remaining time for countdown
    const getTimeRemaining = (e: Date) => {
        const total = Date.parse(e.toUTCString()) - Date.now();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total, hours, minutes, seconds, days,
        };
    };

    // Update time every second
    const startTimer = (e: Date) => {
        const {total, hours, minutes, seconds, days} =
                    getTimeRemaining(e);

        if (total >= 0) {
            // if any of these is true show that
            if (showingFullTime()) {
                let timeArray = [(showDays) && days.toString().padStart(2, '0'),
                    (showHours) && hours.toString().padStart(2, '0'),
                    (showMinutes) && minutes.toString().padStart(2, '0'),
                    (showSeconds) && seconds.toString().padStart(2, '0'),
                ];

                // remove false values
                timeArray = timeArray.filter((value) => value);
                setTimer(timeArray.join(' : '));
            } else {
                // show full timer
                setTimer(
                    `${days.toString().padStart(2, '0')} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} `,
                );
            }
        }
    };

    const clearTimer = (e: Date) => {
        // reset initial time
        if (showingFullTime()) {
            setTimer(getTimeString());
        } else {
            setTimer('00 : 00 : 00 : 00');
        }

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) {
            clearInterval(Ref.current);
        }
        const id = window.setInterval(() => {
            startTimer(e);
        }, 1000);

        Ref.current = id;
    };

    // start the timer when component mounts
    useEffect(() => {
        clearTimer(new Date(endTime));
    }, [showDays, showHours, showMinutes, showSeconds]);

    return (
        <CountdownWrapper className={className}>
            <Timer>
                {timer}
            </Timer>
            <TimeLabelWrapper>
                {
                    (showingFullTime()) ? (
                        <>
                            {showDays && <TimeLabel>{'Days'}</TimeLabel>}
                            {showHours && <TimeLabel>{'Hrs'}</TimeLabel>}
                            {showMinutes && <TimeLabel>{'Mins'}</TimeLabel>}
                            {showSeconds && <TimeLabel>{'Sec'}</TimeLabel>}
                        </>
                    ) : (
                        <>
                            <TimeLabel>{'Days'}</TimeLabel>
                            <TimeLabel>{'Hrs'}</TimeLabel>
                            <TimeLabel>{'Mins'}</TimeLabel>
                            <TimeLabel>{'Sec'}</TimeLabel>
                        </>
                    )
                }

            </TimeLabelWrapper>
        </CountdownWrapper>
    );
};
