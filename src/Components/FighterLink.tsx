function FighterLink({image, link, altText}: {image: string, link: string, altText: string}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={altText} className="fighter-image" />
        </a>
    );
}

export default FighterLink; 