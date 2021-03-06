@extends('frontend.layouts.main')

@section('title')
    {{ __('75 Ball Bingo') }}
    @php($req = \Illuminate\Http\Request::createFromGlobals())
    @php($data = \App\Http\Middleware\ProxyAuthenticate::getHeaderCasinoData($req))
    <span style="font-size: 12px">{{ (isset($data['currency']['title']) ? '('.$data['currency']['title'].')':'') }}</span>
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
    <link rel="stylesheet" type="text/css" href="{{ mix('css/games/american-bingo/' . $settings->theme . '.css') }}">
@endpush

@push('scripts')
    <script src="{{ mix('js/games/american-bingo/game.js') }}"></script>
@endpush