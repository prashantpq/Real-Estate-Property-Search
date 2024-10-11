export default function Navbar() {
    return (
        <>
            <header className="bg-red-600 p-4 flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    magicbricks
                </div>
                <nav className="flex space-x-4 text-white">
                    {['Buy', 'Rent', 'Sell', 'Home Loans'].map((item) => (
                        <div className="relative group" key={item}>
                            <button className="flex items-center space-x-1">
                                <span>{item}</span>
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg"></div>
                        </div>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-white">Login</button>
                    <i className="fas fa-heart text-white"></i>
                </div>
            </header>
            <div className="bg-white p-4 shadow-md">
                <div className="flex space-x-4">
                    {['Buy', 'Mumbai', 'Top Localities', 'Budget', 'Flat +1', '2, 3 BHK', 'Posted By', '7 More Filters'].map((item) => (
                        <div className="relative" key={item}>
                            <button className="flex items-center space-x-1 border border-gray-300 p-2 rounded">
                                <span>{item}</span>
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
