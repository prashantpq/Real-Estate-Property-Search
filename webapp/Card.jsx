export default function Card() {
    return (
        <div className="flex">
            <img
                alt="Interior view of a flat with modern design"
                className="w-1/4 rounded"
                height="150"
                src="https://storage.googleapis.com/a1aa/image/dwZ22ejWhtRvWyRcCBx4eRv2zdfca28dPUaoHHVQtgMraLLnA.jpg"
                width="150"
            />
            <div className="w-3/4 pl-4">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">
                            POPULAR PROJECT
                        </span>
                        <h2 className="text-lg font-semibold mt-2">
                            2 BHK Flat for Sale in Kanakia Silicon Valley, Pow...
                        </h2>
                        <p className="text-gray-600">
                            Kanakia Silicon Valley
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-xl font-semibold text-red-600">
                            ₹ 2.68 Cr
                        </div>
                        <div className="text-gray-600">
                            ₹ 34,359 per sqft
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 text-gray-600">
                    <div>
                        <div className="font-semibold">CARPET AREA</div>
                        <div>666 sqft</div>
                    </div>
                    <div>
                        <div className="font-semibold">UNDER CONSTRUCTION</div>
                        <div>Poss. by Sep '26</div>
                    </div>
                    <div>
                        <div className="font-semibold">TRANSACTION</div>
                        <div>New Property</div>
                    </div>
                    <div>
                        <div className="font-semibold">FURNISHING</div>
                        <div>Unfurnished</div>
                    </div>
                    <div>
                        <div className="font-semibold">SOCIETY</div>
                        <div>Kanakia Silicon Valley</div>
                    </div>
                    <div>
                        <div className="font-semibold">BATHROOM</div>
                        <div>2</div>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Kanakia Silicon Valley is strategically located at Powai with a seamless connectivity to the prominent areas of Mumbai. The residential units in Kanakia Silicon Valley...
                </p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-shield-alt text-gray-600"></i>
                        <div>
                            <div className="font-semibold">Crisil Bronze Agent</div>
                            <div className="text-gray-600">Agent: Shri Niketan Prop...</div>
                            <div className="text-gray-600">Operating Since: 2010</div>
                            <div className="text-gray-600">10500+ Buyers Served</div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="bg-red-600 text-white px-4 py-2 rounded">Get Phone No.</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded">Contact Agent</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
