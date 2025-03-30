<?php
use App\ExternalCatalogue\Course;

test('Expected fields for Course', function () {
    // mock data with the fields that should be there for course
    $data = [
        'contenttype' => 'course',
        'fullname' => 'Test Course',
        'badge' => 'Gold',
        'duration' => '2h',
        'tags' => [['id' => 1, 'name' => 'Laravel']],
        'timemodified' => 123456,
    ];

    $course = new Course($data);
    $output = $course->toArray();
    expect($output)->toHaveKeys(['badge', 'duration', 'tags', 'courseStart']);
});
