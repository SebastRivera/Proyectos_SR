interface Photo{
    src: string;
    alt: string;
    title: string;

}

interface Data{
    src: string;
    alt: string;
    title: string;
}


interface Fish{
    "Species Name": string;
    "Scientific Name": string;
    Quote: string;
    Population: string;   
    Protein: string;
    Sodium: string;
    "Health Benefits": string;
    "Species Illustration Photo": Photo;
    "Taste": string;
    Color: string;
    Texture: string; 
    "Image Gallery":Data[];
}

export{Photo,Fish,Data}