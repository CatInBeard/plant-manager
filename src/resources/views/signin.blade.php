@extends('layouts.main')

@section('main')
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

@endsection