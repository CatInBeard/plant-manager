<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Plant manager helps you keep track of your plants watering">
        <title>Plant-manager</title>
        @vite('resources/sass/app.scss')
    </head>
    <body>
        <div class="container pt-3">
            <header class="border-bottom text-center pb-1">
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <h1>
                            Plant-manager
                        </h1>
                    </div>
                    <div class="col justify-content-end d-flex">
                        <div>
                            <a href="{{ route('app') }}" class="btn btn-primary">Log in</a>
                        </div>
                    </div>
                </div>
            </header>
            <div class="card mt-5 text-center">
                <div class="card-header">
                    <h2 class="card-title text-center">Manage your plants</h2>
                </div>
                <div class="d-flex justify-content-center">
                    <div>
                        <img class="card-img-top" src="/images/laptop-screenshot-feed.png" style="max-width:800px" alt="Plant manager">
                    </div>
                </div>
                <div class="card-body">
                    
                    <p class="card-text">All your plants in one place. You can add photos of them, leave care information, make notes, mark watering.</p>
                    <a href="{{ route('app') }}" class="btn btn-primary">Try now</a>
                </div>
                <div class="card-footer text-muted">
                    
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="card mt-5 col-12 col-sm-6 text-center">
                    <div class="card-header">
                        <h2 class="card-title text-center">Use app on your phone</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div>
                            <img class="card-img-top" src="/images/phone-screenshot-portrait.png" style="max-width:400px" alt="Plant manager">
                        </div>
                    </div>
                    <div class="card-body">
                        
                        <p class="card-text">You can use plant manager on your phone. Add information immediately after watering. Take photos of your plants and add photos to the plant card.</p>
                        <a href="{{ route('app') }}" class="btn btn-primary">Try now</a>
                    </div>
                    <div class="card-footer text-muted">
                    
                    </div>
                </div>
            </div>

            <footer class="border-bottom text-center pb-1 mt-3">
                <div class="row">
                    <div class="col">
                        <a class="text-muted" href="https://github.com/catInBeard/plant-manager">github</a>
                    </div>
                </div>
            </footer>
        </div>
    </body>
</html>
