<?php
use Illuminate\Support\Facades\Http;

it('has catalogueapi page', function () {

    uses()->beforeEach(function () {
        config(['database.default' => 'array']);
    });

    Http::fake([
        '*' => Http::response([
            'data' => [
                'items' => [
                    [
                        'contenttype' => 'course',
                        'fullname' => 'Test Course',
                        'badge' => 'Gold',
                        'duration' => '1h',
                        'tags' => [['id' => 1, 'name' => 'PHP']],
                        'timemodified' => 123456,
                    ],
                    [
                        'contenttype' => 'live learning',
                        'fullname' => 'Live Session',
                        'category' => 'Workshop',
                        'timemodified' => 789012,
                    ],
                    [
                        'contenttype' => 'webinar',
                        'fullname' => 'Webinar Series',
                        'summary' => 'Catch up on the latest trends.',
                        'timemodified' => 345678,
                    ]
                ]
            ]
        ])
    ]);

    $response = $this->getJson('/api/catalogue');
    $response->assertOk();

    //  get only the items inside 'data'
    $items = collect($response->json('data'));

    // filter by type
    $courseItem = $items->firstWhere('contentType', 'course');
    $liveItem = $items->firstWhere('contentType', 'live learning');
    $unknownItem = $items->first(function ($item) {
        return !isset($item['contentType']) || !in_array(strtolower($item['contentType']), ['course', 'live learning']);
    });

    //  make assertions
    expect($courseItem)->toHaveKey('courseStart');
    expect($liveItem)->toHaveKey('liveStart');
    expect($unknownItem)->toHaveKey('contentType');

    $response->assertStatus(200);
});
