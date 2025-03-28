<?php

namespace App\ExternalCatalogue;

class UnknownContent extends CatalogueContent
{
    //  if the content isnt course or live learning, it will be assigned to this class
    public function toArray(): array
    {
        return $this->baseFields();
    }
}

