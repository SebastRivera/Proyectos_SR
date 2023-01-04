interface Photo{
    src: string;
    alt: string;
    title: string;

}

interface Fish{
    "Species Name": string;
    "Scientific Name": string;
    Quote: string;
    Population: string;
    Color: string;
    Texture: string;    
    Protein: string;
    Sodium: string;
    "Health Benefits": string;
    "Fishing rate": string;
    "Species Illustration Photo": Photo;
}

export{Photo,Fish}