@extends('layouts.master')

@section('body')

	<div class="container">
		@include('flash::message')
		@yield('content')
	</div>

@stop
