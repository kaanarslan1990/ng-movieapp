import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  error: string;

  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {
    if (title.value === '' || description.value === '' || imageUrl === "" || categoryId.value === "-1") {
      this.alertify.error("You must fill in all fields ");
      return;
    }

    if (title.value.length < 2) {
      this.alertify.error("Title must be at least 2 characters!")
      return;
    }
    if (description.value.length < 10 || description.value.length > 50) {
      this.alertify.error("Description must be between 10 and 50 characters!")
      return;
    }

    const extensions = ["jpeg", "png", "jpg", "gif"];
    const extension = imageUrl.value.split('.').pop();
    if (extensions.indexOf(extension) === -1) {
      this.alertify.error("You can only add 'jpeg', 'png', 'jpg', 'gif' format!");
      return;
    }


    const movie = {
      id: 0,
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: categoryId.value,
    };

    this.movieService.createMovie(movie).subscribe((data) => {
      this.router.navigate(['/movies', data.id]);
    });
  }
}
