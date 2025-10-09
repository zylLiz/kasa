export default function Banner({ image, title }) {
    return (
        <div className="banner">
            <img className="banner__image" src={image} alt="" />
            {title && <h1 className="banner__title">{title}</h1>}
        </div>
    );
}