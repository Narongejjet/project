
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

function UpdateUserForm() {
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [role, setRole] = useState('');
    const [updateStatus, setUpdateStatus] = useState(null);
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!id || !email || !fname || !lname || !role) {
            // setUpdateStatus({
            //     message: "Please fill out all fields.",
            //     alert: false
            // });
            alert("Please fill out all fields.") 
            
            return;
        }
        try {
            const response = await axios.put(`http://localhost:3001/customers/update/${id}`, {
                id,
                email,
                fname,
                lname,
                role
            });
            if(response.status === 200) {
                setUpdateStatus({
                    message: "Update Successful",
                    success: true
                });
            } else {
                setUpdateStatus({
                    message: "Update Failed",
                    success: false
                });
            }
        } catch (error) {
            setUpdateStatus({
                message: "Update Failed",
                success: false
            });
        } 
        
    }

    useEffect(() => {
        if (updateStatus && updateStatus.success) {
          setTimeout(() => {
            window.location.reload();
          }, 1000); // 1 seconds
        }
    }, [updateStatus]);

    return (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-1 w-4/6 gap-4">
            <input type="text" value={id} onChange={e => setID(e.target.value)} placeholder="Customer ID" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={fname} onChange={e => setFname(e.target.value)} placeholder="First Name" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            <input type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Last Name" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            {/* <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Role" /> */}
            <div className="input-type">
            <input type="radio" name="role" value="admin" onChange={(event) => setRole(event.target.value)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:boder-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
            <lable htmlFor="radioDefault1" className="inline-block tet-gray-800">Admin</lable>
            </div>
            <div className="input-type">
            <input type="radio" name="role" value="user" onChange={(event) => setRole(event.target.value)}className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:boder-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
            <lable htmlFor="radioDefault1" className="inline-block tet-gray-800">User</lable>
</div>
        
<button type="submit" className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Update</button>
{updateStatus && updateStatus.success && <Success message={"Update Successful"} />}
{updateStatus && !updateStatus.success && <Bug message={"Update Failed"} />} 
{/* { updateStatus && updateStatus.alert === false && <Alert message={updateStatus.message} /> } */}
        </form>
        
    );
}

export default UpdateUserForm;