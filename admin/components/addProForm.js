
// import {MdOutlineSystemUpdateAlt} from 'react-icons/bi'
import Success from "./success"
import Bug from "./bug"
// import getCustomers from "./table"
// import customersList from "./table"
// import setCustomersList from "./table"
// import { data } from 'autoprefixer';
import axios from 'axios';
import { useState,useEffect } from 'react';
// import Alert from "./Alert"

function AddProForm() {
    const [ProID, setProID] = useState('');
    const [ProIMG, setProIMG] = useState('');
    const [Proname, setProname] = useState('');
    const [Price, setPrice] = useState('');
    const [Sale, setSale] = useState('');
    const [Flash, setFlash] = useState('');
    const [Description, setDescription] = useState('');
    const [Stock, setStock] = useState('');
    const [Status, setStatus] = useState('');
    const [addStatus, setAddStatus] = useState(null);
   
    // const handlerSubmitFlash = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(`http://localhost:3001/product/add/flash`, {
    //             Flash,
    //             Description
    //         });
    //         if(response.status === 200) {
    //             setAddStatus({
    //                 message: "Add Successful",
    //                 success: true
    //             });
    //         } else {
    //             setAddStatus({
    //                 message: "Add Failed",
    //                 success: false
    //             });
    //         }
    //     } catch (error) {
    //         setAddStatus({
    //             message: "Add Failed",
    //             success: false
    //         });
    //     } 
        
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!ProID || !ProIMG || !Proname || !Price || !Description || !Stock || !Status) {
            // setUpdateStatus({
            //     message: "Please fill out all fields.",
            //     alert: false
            // });
            alert("Please fill out all fields.") 
            
            return;
        }
        try {
            
            const response = await axios.post(`http://localhost:3001/product/add`, {
                ProID,
                ProIMG,
                Proname,
                Price,
                Sale,
                Flash,
                Description,
                Stock,
                Status
            });
            if(response.status === 200) {
                setAddStatus({
                    message: "Add Successful",
                    success: true
                });
            } else {
                setAddStatus({
                    message: "Add Failed",
                    success: false
                });
            }
        } catch (error) {
            setAddStatus({
                message: "Add Failed",
                success: false
            });
        } 
        
    }

    useEffect(() => {
        if (addStatus && addStatus.success) {
          setTimeout(() => {
            window.location.reload();
          }, 1000); // 1 seconds
        }
    }, [addStatus]);

    return (

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-1 w-4/6 gap-4">
            <input type="text" value={ProID} onChange={e => setProID(e.target.value)} placeholder="Product ID" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
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
        
<button type="submit" className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>
{addStatus && addStatus.success && <Success message={"Add Successful"} />}
{addStatus && !addStatus.success && <Bug message={"Add Failed"} />} 
{/* { updateStatus && updateStatus.alert === false && <Alert message={updateStatus.message} /> } */}
        </form>
        
    );
}

export default AddProForm;