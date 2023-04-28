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
            @if($errors->count())
                @foreach ($errors->all() as $error)
                    <div class="alert alert-warning p-2 m-2">{{ $error }}</div>
                @endforeach
            @endif
            <form method="post">
                @csrf
                <div class="form-group">
                    <label for="username">Username or Email</label>
                    <input type="text" name="username" id="username" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="form-control">
                </div>
                <div class="form-group mt-2">
                    <input type="submit" class="btn btn-primary" value="Login">
                </div>
            </form>

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
