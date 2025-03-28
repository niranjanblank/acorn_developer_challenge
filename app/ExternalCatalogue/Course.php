<?php

namespace App\ExternalCatalogue;

class Course extends CatalogueContent {

    public function toArray(): array{
        # merge and return the base fields and content specific fields
        return array_merge(
            $this->baseFields(), [
                'badge' => $this->data['badge'] ?? '',
                'duration' => $this->data['duration'] ?? '',
                'tags' => collect($this->data['tags']??[])
                        -> map( function ($field){
                            return [
                                'id' => $field['id'] ?? '',
                                'name' => $field['name'] ?? '',
                            ];
                        }) -> toArray(),
                'courseStart' => $this->data['timemodified'] ?? '',
            ]
            );
    }
}
