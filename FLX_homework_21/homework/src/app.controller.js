import { MoviesService } from './common/services/movies.service';

export class AppController {
  constructor(moviesService) {
    this.moviesService = moviesService;
    this.button = null;
    this.user = {};
  }

  $onInit() {
    this.moviesService.getAllMovies().then(result => {
      this.movies = result;
    });

    this.button = 'Logout';
    this.user = {
      email: 'user@email.com',
      password: '3%2f43#}54f[st31'
    };
  }

  logout(event) {
    // if (event.userEmail === this.user.email) {
    //   console.log('>>>User has been logged out: ', { email: event.userEmail });
    // }
  }
}
AppController.$inject = [MoviesService.serviceName];
