type TabData = {
    title: string;
    tabPanel: JSX.Element;
}

type ChannelData = {
    create_at: number;
    creator_id: string;
    delete_at: number;
    display_name: string;
    extra_update_at: number;
    group_constrained: null | string;
    header: string;
    id: string;
    last_post_at: number;
    last_root_post_at: number;
    name: string;
    policy_id: null | unknown;
    props: null | unknown;
    purpose: string;
    scheme_id: null | string;
    shared: null | string;
    team_display_name: string;
    team_id: string;
    team_name: string;
    team_update_at: number;
    total_msg_count: number;
    total_msg_count_root: number;
    type: string;
    update_at: number;
};

type DropdownOptionType = {
    label?: string | JSX.Element;
    value: string;
}

type CardBody = {
    sectionHeading: string | JSX.Element;
    data: Array<{
        icon: JSX.Element;
        label: string | JSX.Element;
    }>;
}

type ToggleSwitchLabelPositioning = 'left' | 'right';

type SubscriptionCardBody = {
    list?: Array<string | JSX.Element>;
    labelValuePairs?: Array<{label: string; value: string}>;
}

type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';
