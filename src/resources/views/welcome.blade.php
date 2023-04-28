@extends('layouts.main')

@section('main')
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
@endsection