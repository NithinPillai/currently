export class Reel {
    source_name: string; 
    title: string; 
    url: string;
    urlToImage: string;
    description: string;

    likes: number;


    constructor() {
        this.source_name = '';
        this.title = '';
        this.urlToImage = '';
        this.url = '';
        this.description = '';
        
        this.likes = 0;
    }
}