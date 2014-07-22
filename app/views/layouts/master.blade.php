<!DOCTYPE html>
<html lang="{{ App::getLocale() }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	{{-- Bootstrap --}}
	{{ HTML::style('assets/css/app.css') }}

	@include('partials.head')
</head>
<body>

@yield('body')

{{ HTML::script('assets/js/app.js') }}

@include('partials.bottom')

</body>
</html>
