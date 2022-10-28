type MetaProps = {
    title: string;
    description: string;
}
const Meta = ({
    title,
    description
}:MetaProps) => {
    return (
        <head>
            <title>{title}</title>
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content='/Social/youtubeBunner.png' />
        </head>
    )
}

export default Meta;