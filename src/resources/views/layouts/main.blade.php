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
                        @guest
                            <div>
                                <a href="{{ route('auth.show') }}" class="btn btn-primary">Sign in</a>
                                <a href="{{ route('reg.show') }}" class="btn btn-success">Sign up</a>
                            </div>
                        @endguest

                        @auth
                        <div>
                            <a href="{{ route('app') }}" class="btn btn-primary">App</a>
                        </div>
                        @endauth
                    </div>
                </div>
            </header>
            
            @yield("main")

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
