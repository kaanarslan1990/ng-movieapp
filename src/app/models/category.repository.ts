import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = 
            [
                {id:1, name: "Adventure"},
                {id:2, name: "Romance"},
                {id:3, name: "Comedy"},
                {id:4, name: "Science Fiction"},
              
        ];

    }

    getCategories(): Category[] {
        return this.categories;
    }
}