<?php


use App\ExternalCatalogue\CatalogueFactory;
use App\ExternalCatalogue\Course;
use App\ExternalCatalogue\LiveLearning;
use App\ExternalCatalogue\UnknownContent;

test('factory returns Course instance', function () {
    $data = ['contenttype' => 'course'];
    $instance = CatalogueFactory::make($data);
    expect($instance)->toBeInstanceOf(Course::class);
});

test('factory returns LiveLearning instance', function () {
    $data = ['contenttype' => 'live learning'];
    $instance = CatalogueFactory::make($data);
    expect($instance)->toBeInstanceOf(LiveLearning::class);
});

test('factory returns UnknownContent for unknown type', function () {
    $data = ['contenttype' => 'podcast'];
    $instance = CatalogueFactory::make($data);
    expect($instance)->toBeInstanceOf(UnknownContent::class);
});
