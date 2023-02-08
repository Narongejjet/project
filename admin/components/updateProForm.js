import Success from "./success"
import Bug from "./bug"
// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import Alert from "./Alert"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProForm({ProID}) {
  const [ProIMG, setProIMG] = useState('');
  const [Proname, setProname] = useState('');
  const [Price, setPrice] = useState('');
  const [Sale, setSale] = useState('');
  const [Flash, setFlash] = useState('');
  const [Description, setDescription] = useState('');
  const [Stock, setStock] = useState('');
  const [Status, setStatus] = useState('');
  const [updateStatus, setUpdateStatus] = useState(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (ProID) {
      fetchProduct();
    }
  }, [ProID]);

  useEffect(() => {
    if (product.ProID) {
      setProIMG(product.ProIMG);
      setProname(product.Proname);
      setPrice(product.Price);
      setSale(product.Sale);
      setFlash(product.Flash);
      setDescription(product.Description);
      setStock(product.Stock);
      setStatus(product.Status);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3001/product/update/${ProID}`, {
        ProID,
        ProIMG,
        Proname,
        Price,
        Sale,
        Flash,
        Description,
        Stock,
        Status,
      });
      if (response.status === 200) {
        setUpdateStatus({
          message: 'Update Successful',
          success: true,
        });
      } else {
        setUpdateStatus({
          message: 'Update Failed',
          success: false,
        });
      }
    } catch (error) {
      setUpdateStatus({
        message: 'Error',
        success: false,
      });
    }
  };

  useEffect(() => {
    if (updateStatus && updateStatus.success) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [updateStatus]);


// function UpdateProForm() {
//     const [ProID, setProID] = useState('');
//     const [ProIMG, setProIMG] = useState('');
//     const [Proname, setProname] = useState('');
//     const [Price, setPrice] = useState('');
//     const [Sale, setSale] = useState('');
//     const [Flash, setFlash] = useState('');
//     const [Description, setDescription] = useState('');
//     const [Stock, setStock] = useState('');
//     const [Status, setStatus] = useState('');
//     const [updateStatus, setUpdateStatus] = useState(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if(!ProID) {
    //         alert("Please enter product id") 
    //         return;
    //     }
    //     try {
    //         const response = await axios.put(`http://localhost:3001/product/update/${ProID}`, {
    //         ProID,
    //         ProIMG,
    //         Proname,
    //         Price,
    //         Sale,
    //         Flash,
    //         Description,
    //         Stock,
    //         Status
    //     });
    //         if(response.status === 200) {
    //             setUpdateStatus({
    //                 message: "Update Successful",
    //                 success: true
    //             });
    //         } else {
    //             setUpdateStatus({
    //                 message: "Update Failed",
    //                 success: false
    //             });
    //         }
    //     } catch (error) {
    //         setUpdateStatus({
    //             message: "Error",
    //             success: false
    //         });
    //     } 
        
    // }      

    // useEffect(() => {
    //     if (updateStatus && updateStatus.success) {
    //         // setProductList(productList.filter(item => item.ProID !== ProID));
    //         setTimeout(() => {
    //         window.location.reload();
    //       }, 1000); // 1 seconds
    //     }
    // }, [updateStatus]);

    return (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-1 w-4/6 gap-4">
            {/* <input type="text" value={ProID} onChange={e => setProID(e.target.value)} placeholder="Product ID" className="border w-full px-5 py-3 focus:outline-none rounded-md"/> */}
            <input type="text" value={ProIMG} onChange={e => setProIMG(e.target.value)} placeholder="Import Image" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={Proname} onChange={e => setProname(e.target.value)} placeholder="Name Product" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={Price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={Sale} onChange={e => setSale(e.target.value)} placeholder="Sale Percent" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={Flash} onChange={e => setFlash(e.target.value)} placeholder="Flashsale Price" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={Description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={Stock} onChange={e => setStock(e.target.value)} placeholder="Stock" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            {/* <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Role" /> */}
            <div className="input-type">
            <input type="radio" name="role" value="มีสินค้า" onChange={(event) => setStatus(event.target.value)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:boder-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
            <lable htmlFor="radioDefault1" className="inline-block tet-gray-800">มีสินค้า</lable>
            </div>
            <div className="input-type">
            <input type="radio" name="role" value="ไม่มีสินค้า" onChange={(event) => setStatus(event.target.value)}className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:boder-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
            <lable htmlFor="radioDefault1" className="inline-block tet-gray-800">ไม่มีสินค้า</lable>
</div>
        
<button type="submit" className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Update</button>
{updateStatus && updateStatus.success && <Success message={"Update Successful"} />}
{updateStatus && !updateStatus.success && <Bug message={"Update Failed"} />} 
{/* { updateStatus && updateStatus.alert === false && <Alert message={updateStatus.message} /> } */}
        </form>
        
    );
}
export default UpdateProForm;






//     return (
//         <form onSubmit={handleSubmit} className="grid lg:grid-cols-1 w-4/6 gap-4">
//             <input type="text" value={id} onChange={e => setID(e.target.value)} placeholder="Customer ID" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
//             <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
//             <input type="text" value={fname} onChange={e => setFname(e.target.value)} placeholder="First Name" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
//             <input type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Last Name" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
//             {/* <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Role" /> */}
//             <div className="input-type">
//             <input type="radio" name="role" value="admin" onChange={(event) => setRole(event.target.value)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:boder-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
//             <lable htmlFor="radioDefault1" className="inline-block tet-gray-800">Admin</lable>
//             </div>
//             <div className="input-type">
//             <input type="radio" name="role" value="user" onChange={(event) => setRole(event.target.value)}className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:boder-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
//             <lable htmlFor="radioDefault1" className="inline-block tet-gray-800">User</lable>
// </div>
        
// <button type="submit" className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Update</button>
// {updateStatus && updateStatus.success && <Success message={"Update Successful"} />}
// {updateStatus && !updateStatus.success && <Bug message={"Update Failed"} />} 
// {/* { updateStatus && updateStatus.alert === false && <Alert message={updateStatus.message} /> } */}
//         </form>
        
//     );
// }

