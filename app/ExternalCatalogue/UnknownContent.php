<?php

namespace App\ExternalCatalogue;

class UnknownContent extends CatalogueContent
{
    public function toArray(): array
    {
        return $this->baseFields();
    }
}

