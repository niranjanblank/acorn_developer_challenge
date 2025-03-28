<?php

class UnknownContent extends CatalogueItem
{
    public function toArray(): array
    {
        return $this->baseFields();
    }
}

