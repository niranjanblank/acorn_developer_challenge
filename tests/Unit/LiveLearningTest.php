<?php

use App\ExternalCatalogue\LiveLearning;

test('LiveLearning includes the required fields', function () {
    $data = [
        'contenttype' => 'live learning',
        'fullname' => 'Live Event',
        'category' => 'workshop',
        'timemodified' => 123456,
        'tags'=>[['id' => 1, 'name' => 'Laravel']]
    ];

    $live = new LiveLearning($data);
    $output = $live->toArray();

    expect($output)->toHaveKeys(['category', 'liveStart']);
    expect($output)->not->toHaveKey('tags');
});
