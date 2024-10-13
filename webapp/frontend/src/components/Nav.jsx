export default function Nav() {
    return (
        <>
            <header class="flex items-center justify-between p-4 border-b shadow">
                <div class="flex items-center">
                    <img alt="Makaan logo" class="h-8" height="50" src="data:image/png;base64,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"/>
                    {/* <span class="ml-2 text-xl font-bold">
                        makaan
                    </span> */}
                </div>
                <div class="flex items-center space-x-4">
                    <button class="text-gray-600">
                        Buy
                    </button>
                    <input class="border rounded p-2 pr-40" placeholder="Pick Location, Builder Or Project" type="text" />
                </div>
            </header>
            <div class="flex items-center justify-between p-4 border-b mb-10">
                <div class="flex space-x-4">
                    <button class="text-gray-600">
                        FILTERS
                    </button>
                    <button class="text-gray-600">
                        BUDGET
                    </button>
                    <button class="text-gray-600">
                        BHK
                    </button>
                    <button class="text-gray-600">
                        PROPERTY TYPE
                    </button>
                    <button class="text-gray-600">
                        FURNISHING TYPE
                    </button>
                    <button class="text-gray-600">
                        MORE
                    </button>
                    <button class="text-gray-600">
                        RESET
                    </button>
                </div>
                <button class="text-gray-600">
                    SORT BY Relevance
                </button>
            </div>
        </>

    );
}