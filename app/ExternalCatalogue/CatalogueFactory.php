<?php

namespace App\ExternalCatalogue;

class CatalogueFactory{

    // this will convert the data that we receive from the api to either course or live learning or just the base fields if something else
    public static function make(array $data): CatalogueContent{
        $type = strtolower($data['contenttype']??'');

        return match($type){
            'course' => new Course($data),
            'live learning' => new LiveLearning($data),
            default => new UnknownContent($data)
        };
    }
}
