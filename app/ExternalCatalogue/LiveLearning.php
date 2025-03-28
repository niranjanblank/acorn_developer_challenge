<?php

namespace app\ExternalCatalogue;

class LiveLearning extends CatalogueContent {

    public function toArray(): array{
        # merge and return the base fields and content specific fields
        return array_merge(
            $this->baseFields(), [
                'category' => $this->data['category'] ?? '',
            ]
            );
    }
}
