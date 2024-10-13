export default function Card() {

    const propertyList = [
        {
            "title": "2 BHK Apartment for sale",
            "location": "Vasai Mumbai",
            "price": 5500000,
            "flat_area": 675,
            "flat_status": "Ready to move",
            "year_old": "14 - 15 years old",
            "no_of_bathrooms": 2,
            "description": "2 BHK Property for sale in Vasai Mumbai: This spacious 3 bhk multistorey apartment is available for sale and is located in Rashmi Housing Rashmi Residency, one of the most prestigious projects of Vasai. It has an area of 925 sqft with a carpet area. Developed by Rashmi Housing"
        },
        {
            "title": "3 BHK Apartment for sale",
            "location": "Vasai Mumbai",
            "price": 5500000,
            "flat_area": 925,
            "flat_status": "Ready to move",
            "year_old": "14 - 15 years old",
            "no_of_bathrooms": 2,
            "description": "3 BHK Property for sale in Vasai Mumbai: This spacious 3 bhk multistorey apartment is available for sale and is located in Rashmi Housing Rashmi Residency, one of the most prestigious projects of Vasai. It has an area of 925 sqft with a carpet area. Developed by Rashmi Housing"
        },
        {
            "title": "1 BHK Apartment for sale",
            "location": "Vasai Mumbai",
            "price": 3200000,
            "flat_area": 560,
            "flat_status": "Ready to move",
            "year_old": "14 - 15 years old",
            "no_of_bathrooms": 2,
            "description": "1 BHK Property for sale in Vasai Mumbai: It has a built-up area of 560 sqft and is priced at Rs. 32.00 lac. The house is semi-furnished. It has lift available as well as power backup. The project also has children's play area, CCTV, intercom. Developed by Evershine Builders"
        },
        {
            "title": "1 BHK Apartment for sale",
            "location": "Vasai Mumbai",
            "price": 4800000,
            "flat_area": 650,
            "flat_status": "Ready to move",
            "year_old": "12 - 13 years old",
            "no_of_bathrooms": 1,
            "description": "1 BHK Property for sale in Vasai Mumbai: Near main road, near hospital, mall, dmart, lab, market, and other connectivity. Looking for a 1 BHK Apartment for sale in Mumbai? Your search ends here. Developed by Agarwal"
        },
        {
            "title": "2 BHK Apartment for sale",
            "location": "Vasai Mumbai",
            "price": 7500000,
            "flat_area": 930,
            "flat_status": "Ready to move",
            "year_old": "6 - 7 years old",
            "no_of_bathrooms": 2,
            "description": "2 BHK Property for sale in Vasai Mumbai: Well designed 2 bhk multistorey apartment is available at a prime location in Rajhans Group Kshitij. It has a built-up area of 930 sqft and is priced at Rs. 75.00 lac. The house is semi-furnished. Developed by Rajhans Group"
        }
    ];

    return (
        <>
        <h1 class="text-xl font-bold mb-4 p-4">
        {propertyList.length} Properties in Kandivali East Mumbai
      </h1>
          {propertyList.map((data, index) => (
            <div key={index} className="border p-4 mb-4 max-w-5xl mx-auto mt-10 shadow">
              <div className="flex">
                <img
                  alt="No photo available for this property"
                  className="w-1/4"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/LQNgmyacUI7xK9pRILLmkuV9fzlGiEbH6NKaKSDy9vIB7BzJA.jpg"
                  width="150"
                />
                <div className="ml-4 w-3/4">
                  <h2 className="text-lg font-bold">{data.title}</h2>
                  <p className="text-gray-600">{data.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-xl font-bold">₹ {data.price}</p>
                      <p className="text-gray-600">Price</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{data.flat_area}</p>
                      <p className="text-gray-600">Area in sq ft</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{data.flat_status}</p>
                      <p className="text-gray-600">Construction Status</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {data.no_of_bathrooms} Bathrooms | Resale
                  </p>
                  <p className="text-gray-600 mt-2">{data.description}</p>
                  <div className="flex items-center mt-4">
                    <button className="text-red-600 border border-red-600 rounded px-4 py-2">
                      View Phone
                    </button>
                    <button className="bg-red-600 text-white rounded px-4 py-2 ml-4">
                      Connect Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
    );
}
