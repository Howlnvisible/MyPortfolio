type BorderProps = {
    children?: React.ReactNode;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    center?: boolean;
    rounded?: boolean;
    className?: string
    style?: any;
}
const Border = ({
    children,
    top,
    right,
    bottom,
    left,
    center,
    rounded,
    className,
    style
}:BorderProps) => {
    return (
        <div
            className={className}
            style={{
                width: `98%`,
                margin: `0 auto`,
                position: `relative`,
                padding: `40px 0`,
                borderTop: top ? `2px solid rgb(204, 183, 151, 1)` : ``,
                borderRight: right ? `2px solid rgb(204, 183, 151, 1)` : ``,
                borderBottom: bottom ? `2px solid rgb(204, 183, 151, 1)` : ``,
                borderLeft: left ? `2px solid rgb(204, 183, 151, 1)` : ``,
                display: center ? `flex` : `inherit`,
                justifyContent: center ? `center` : ``,
                borderRadius: rounded ? `8px` : ``,
                ...style
            }}
        >
            {children}
        </div>
    )
}

export default Border;