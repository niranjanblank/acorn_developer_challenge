<?php
namespace App\ExternalCatalogue;

abstract class CatalogueContent
{

    protected array $data;

    public function __construct(array $data){
        $this -> data = $data;
    }

    // these base fields will be in each child of this class(e.g LiveLearning and Course)
    protected function baseFields(): array{
        return [
            'fullname' => $this->data['fullname'] ?? '',
            'summary' => $this->data['summary'] ?? '',
            'summaryText' => $this->data['summarytext'] ?? '',
            'contentType' => $this->data['contenttype'] ?? 'unknown',
            'url' => $this->data['url'] ?? '',
            'imageUrl' => $this->data['imageurl'] ?? '',
            'completionstatus' => $this->data['completionstatus'] ?? '',
            'cost' => $this->data['cost']?? 0,
            'timeCreated' => $this->data['timecreated'] ?? '',
            'customFields' => collect($this->data['customfields']??[])
                            -> map( function ($field){
                                return [
                                    'name' => $field['name'] ?? '',
                                    'data' => $field['data'] ?? '',
                                ];
                            }) -> toArray(),
            ];
    }

    // this function needs to be implented by the child classes so they have the common data and their type specific data
    abstract public function toArray(): array;
}
