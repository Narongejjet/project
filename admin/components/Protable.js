import { BiEdit, BiTrashAlt } from "react-icons/bi";
import Axios from "axios";
import { useState, useEffect } from "react";
import UpdateProForm from "./updateProForm";

export default function ProTable() {
  const [selectedProID, setSelectedProID] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [productList, setProductList] = useState([]);

  const getProduct = () => {
    Axios.get("http://localhost:3001/product").then((response) => {
      setProductList(response.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleEdit = (ProID) => {
    console.log(ProID)
    setSelectedProID(ProID);
    setFormVisible(true);
    setFormVisible(!formVisible)
  };

  function handleDelete(ProID) {
    Axios.delete(`http://localhost:3001/product/delete/${ProID}`)
      .then((response) => {
        console.log(response.data);
        setProductList(productList.filter((item) => item.ProID !== ProID));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {formVisible && selectedProID ? (
        <UpdateProForm ProID={selectedProID} />
      ) : null}
      <table className="min-w table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">ProductID</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Image</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Price</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Sale</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Flashsale</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Description</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Stock</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Action</span>
                    </th> 
                </tr>
            </thead>

            {productList.map((val) => {
                return (
                    <tbody className="bg-gray-200">
                      {formVisible && selectedProID ? (
                        <UpdateProForm ProID={selectedProID} />
                      ) : null}
                      <tr className="text-center" key={val.ProID}>
                        <td className="px-16 py-2 flex-row items-center">
                        <span className="text-center ml-2 font-semibold">{val.ProID}</span>
                    </td>
                    <td className="px-16 py-2">
                    <img src={val.ProIMG} alt=""/>
                        <span></span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Proname}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Price}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Sale}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Flash}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Description}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Stock}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{val.Status}</span>
                    </td>
                    {/* <td className="px-16 py-2">
                        <button className="cursor"><span>{val.role}</span></button>
                    </td> */}
                    <td className="px-16 py-2 flex justify-around gap-5">
                    <button onClick={() => handleEdit(val.ProID)} className="cursor">
                    <BiEdit size={25} color={"green"} />
                  </button>
                        <button onClick={() => handleDelete(val.ProID)} className="cursor"><BiTrashAlt size={25} color={"red"} /></button>
                    </td>
                </tr>
            </tbody>
            )    
        })}
        </table>
   </div>
    )
    }
    