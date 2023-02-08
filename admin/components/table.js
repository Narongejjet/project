import { BiEdit,BiTrashAlt } from "react-icons/bi"
import Axios from "axios";
import { useState, useEffect } from "react";
import UpdateUserForm from "./updateUserForm";




export default function Table(){

    const [customersList, setCustomersList] = useState([]);

    const getCustomers = () => {
        Axios.get('http://localhost:3001/customers').then((response) => {
            setCustomersList(response.data);
        });
    }

    useEffect(() => {
        getCustomers()
    }, [])

    
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">CustomerID</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">E-mail</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Firstname</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Lastname</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Types</span>
                    </th>
                    {/* <th className="px-16 py-2">
                        <span className="text-gray-200">Action</span>
                    </th> */}
                </tr>
            </thead>

            {customersList.map((val, key) => {
                return (
            <tbody className="bg-gray-200">
                <tr className="text-center">
                    <td className="px-16 py-2 flex-row items-center">
                        <img src="#" alt=""/>
                        <span className="text-center ml-2 font-semibold">{val.id}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.email}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.fname}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.lname}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.role}</span>
                    </td>
                    {/* <td className="px-16 py-2 flex justify-around gap-5">
                        <button className="cursor"><BiEdit size={25} color={"green"}></BiEdit></button>
                        <button className="cursor"><BiTrashAlt size={25} color={"red"}></BiTrashAlt></button>
                    </td> */}
                </tr>
            </tbody>
            )    
        })}
        </table>
    )
}