// To be removed, used for testing
type TypographyProps = {
    children: JSX.Element | string;
}

const Typography = ({children}: TypographyProps): JSX.Element => {
    return <p>{children}</p>;
};

export default Typography;
