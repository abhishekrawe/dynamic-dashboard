import React, { useEffect, useState } from 'react';
import { HiOutlineSearch, HiFilter, HiArrowNarrowUp} from 'react-icons/hi';
import Pagination from './Pagination'

export default function SampleData() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    
    const itemsPerPage = 4;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredData = userData.filter((user) => {
        const searchData = `${user.name} ${user.username} ${user.email} ${user.phone} ${user.website}`;
        return searchData.toLowerCase().includes(searchQuery.toLowerCase());
    });


    const displayedData = filteredData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);


    return (
        <div className="bg-white px-4 pt-5 pb-4 rounded-lg border border-gray-200 flex-1">
            <strong className="text-gray-700 font-plus-jakarta-sans font-semibold text-2xl leading-3xl">
                Sample data
            </strong>
            <div className="mt-5">
                <div className="flex justify-between items-center">
                    <div className="relative">
                        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            className="text-lg focus:outline-none active:outline-none border border-gray-300 w-[60rem] h-10 pl-11 pr-4 rounded-md"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-4'>
                        <button className="text-gray-500 px-8 py-2 border border-gray-300 rounded-md relative">
                            <HiFilter fontSize={20} className="text-black-700 absolute top-1/2 left-3 -translate-y-1/2" />
                            Filter
                        </button>
                        <button className="text-gray-500 px-8 py-2 border border-gray-300 rounded-md relative">
                            <HiArrowNarrowUp fontSize={20} className="text-black-700 absolute top-1/2 left-3 -translate-y-1/2" />
                            Export
                        </button>
                    </div>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <table className='w-full text-gray-700'>
                            <tbody>
                                {displayedData.map((user) => (
                                    <tr key={user.id} className="border-b text-gray-500 border-gray-300 py-8">
                                        <td className='py-3 pr-5'><input value="test" type="checkbox" /></td>
                                        <td className="py-3">{user.name}</td>
                                        <td className="py-3">{user.username}</td>
                                        <td className="py-3">{user.email}</td>
                                        <td className="py-3">{user.phone}</td>
                                        <td className="py-3">
                                            {user.address.street}, {user.address.city}, {user.address.zipcode}
                                        </td>
                                        <td className="py-3">{user.website}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-4">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    handlePageChange={handlePageChange}
                                />  
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
