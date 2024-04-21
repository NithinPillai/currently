export class Reel {
    source_name: string; 
    title: string; 
    url: string;
    urlToImage: string;
    description: string;

    userLiked: boolean;

    likes: number;


    constructor() {
        this.source_name = '';
        this.title = '';
        this.urlToImage = '';
        this.url = '';
        this.description = '';
        this.userLiked = false;
        
        this.likes = 0;
    }
}