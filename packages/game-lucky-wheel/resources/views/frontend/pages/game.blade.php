@extends('frontend.layouts.main')

@section('title')
    {{ __(config('game-lucky-wheel.variations')[$index]->title) }}
@endsection

@section('title_extra')
    <button class="btn btn-sm btn-primary float-right mt-2" type="button" data-toggle="collapse" data-target="#provably-fair-form" aria-expanded="false" aria-controls="provably-fair-form">
        {{ __('Provably fair') }}
    </button>
@endsection

@section('content')
    <div id="game-container" data-options="{{ json_encode($options, JSON_NUMERIC_CHECK) }}"></div>
@endsection

@push('styles')
    <link rel="stylesheet" type="text/css" href="{{ mix('css/games/lucky-wheel/' . $settings->theme . '.css') }}">
@endpush

@push('scripts')
    <script src="{{ mix('js/games/lucky-wheel/game.js') }}"></script>
@endpush