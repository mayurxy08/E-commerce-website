import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!doctype html>
<html>
<head>
  <title>Forever Shopping </title>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- all the scripts-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript" ></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.min.js" type="text/javascript"></script>


  <!--Angular Scripts-->

  <script src="../node_modules/es6-shim/es6-shim-min.js"></script>
  <script src="../node_modules/systemjs/dist/system-pollyfills.js"></script>

  <script src="../node_modules/angular2/bundles/angular2-pollyfills.js"></script>
  <script src="../node_modules/systemjs/dist/system-src.js"></script>
  <script src="../node_modules/rxjs/bundles/Rx.js"></script>
  <script src="../node_modules/angular2/bundles/angular2-dev.js"></script>
  <script src="../node_modules/angular2/bundles/http.dev.js"></script>
  <script src="../node_modules/jquery/dist/jquery.min.js"></script>
  <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>



  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link href="./assets/css/style.css" rel="stylesheet" type="text/css"/>
  <link rel="stylesheet" href="./assets/css/carousel.css">
  <link rel="stylesheet" href="./assets/css/custom.css">
  <link href="./assets/css/album.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">forever Shopping</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">HOME</a></li>
        <li><a href="#/">About US</a></li>
        <li><a href="./assets/pages/listing.html">All Listings</a></li>

        <li><a href="./assets/pages/newuser_form.html">Register</a></li>
        <li><a href="#/">Contact US</a></li>
        <li><a href="./assets/pages/cartTest.html">my cart</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li role="separator" class="divider"></li>
            <li class="dropdown-header">My Account</li>
            <div id="navbar" class="navbar-collapse collapse">
              <form class="navbar-form">

                <input type="text" placeholder="Username" class="form-control">
                <input type="password" placeholder="Password" class="form-control my_littlepad">

                <button type="submit" class="btn btn-success my_littlepad">Sign in</button>
              </form>

            </div>

          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>


<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>

  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img class="first-slide" src="./assets/images/landing page/404image.jpg" alt="404Error" style="width:500px;height:550px;">
      <div class="container">
        <div class="carousel-caption">
          <h1>You just got 404'd</h1>
          <p>The page you are looking for does not exist</p>
        </div>
      </div>
    </div>

  </div><!-- /.carousel -->


  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span10 offset1">
        <div ng-view></div>
      </div>
    </div>
  </div>

  <script src="https://code.angularjs.org/1.3.15/angular.js"></script>
  <script src="https://code.angularjs.org/1.3.15/angular-route.min.js"></script>




  <h2>New Arrivals</h2>
  <div class="album text-muted">
    <div class="container">

      <div class="row">
        <div class="card">
          <img src="./assets/images/products/bose_headphone.jpg" alt="Card image cap" style="width:100;height:250px;">
          <p class="card-text">BOSE headphones</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/nike.jpg" alt="Card image cap" style="width:100;height:250px;">
          <p class="card-text">Nike shoes</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/ford_mustang.jpg" alt="Card image cap" style="width:100;height:250px;">
          <p class="card-text">Ford mustang</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>

        <div class="card">
          <img src="./assets/images/products/jbl_headphones.jpg" alt="Card image cap" style="width:100;height:250px;">
          <p class="card-text">JBL Headphones</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/rog.jpg" alt="Card image cap" style="width:100;height:250px;">
          <p class="card-text">ASUS ROG</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>
        <div class="card">
          <img src="./assets/images/products/puma.jpg" alt="Card image cap" style="width:100;height:250px;">
          <p class="card-text">Puma shoes</p>
          <div>
            <button class="btn btn-default btn-sm">
              <span class=" glyphicon-plus">Add to cart</span>
            </button>
          </div>
        </div>


      </div>
    </div>
  </div>
</div>



<footer>
  <p>Copyrighted by Hackstreet boyz</p>
  <p>Contact information: <a href="mailto:hackstreetboyz@gmail.com">
    hackstreetboyz@gmail.com</a>.</p>
</footer>

</body>
</html>
`
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
