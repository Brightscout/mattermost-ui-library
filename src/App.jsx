import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Components
import AutoSuggest from '@Components/AutoSuggest';
import MenuButtons from '@Components/Buttons/MenuButtons';
import BaseCard from '@Components/Card/Base';
import Checkbox from '@Components/Checkbox';
import SVGWrapper from '@Components/SvgWrapper';
import ToggleSwitch from '@Components/ToggleSwitch';

// Constants
import SVGIcons from '@Constants/icons';

// Don't include the below scss files in styles so that it isn't the part of build (as these are the files from mattermost-webapp);
import '@Styles/abstract/_cssVariables.scss';
import '@Styles/base/_flex.scss';
import '@Styles/main.scss';

// Mock data for props
const suggestions = [
    {
        suggestion: 'Suggestion 1',
    },
    {
        suggestion: 'Suggestion 2'
    },
    {
        suggestion: 'Suggestion 3',
    },
    {
        suggestion: 'Suggestion 4',
    },
    {
        suggestion: 'Suggestion 5'
    },
];

const App = () => {
    const [active, setActive] = useState(false);
    const [autoSuggestValue, setAutoSuggestValue] = useState('');

    // Mock data for menu buttons
    const buttons = [
        {
            text: 'Edit',
            icon: (
                <SVGWrapper
                    width={24}
                    height={24}
                    viewBox='0 0 26 26'
                >
                    {SVGIcons.edit}
                </SVGWrapper>
            ),
            onClick: () => '',
        },
        {
            text: 'Delete',
            icon: (
                <SVGWrapper
                    width={24}
                    height={24}
                    viewBox='0 0 26 26'
                >
                    {SVGIcons.delete}
                </SVGWrapper>
            ),
            onClick: () => '',
        }
    ]

    return (
        <div className='padding-20'>
            <h6>Toggle Switch</h6>
            <ToggleSwitch
                active={active}
                onChange={setActive}
            />
            <h6>AutoSuggest</h6>
            <AutoSuggest
                inputValue={autoSuggestValue}
                onInputValueChange={setAutoSuggestValue}
                placeholder='AutoSuggest Placeholder'
                suggestionConfig={{
                    suggestions,
                    renderValue: (s) => s.suggestion,
                }}
                onOptionClick={(suggest) => setAutoSuggestValue(suggest.suggestion)}
            />
            <h6>Menu Buttons</h6>
            <MenuButtons buttons={buttons}/>
            <BaseCard>Card content</BaseCard>
            <Checkbox
                checked={active}
                label='Checkbox Label'
                onChange={setActive}
            />
        </div>
    );
};

// Rendering the app here since we're using "src/index.tsx" to export library components
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
