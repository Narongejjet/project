import { useState } from "react";
import AddProForm from "./addProForm";
import UpdateProForm from "./updateProForm";

export default function ProForm(){

    const flag=true;  

    return(
        <div className='container mx-auto'>
            {flag?<AddProForm/>:<UpdateProForm/>}
        </div>
    )
}

// const [flag,setFlag]=useState(true); 
//     return(
//         <div className='container mx-auto'>
//             {flag?<AddProForm/>:<UpdateProForm/>}
//             <div className="left flex gap-3">
//               <button onClick={() => setFlag(true)} className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-lime-500 hover:text-gray-800">
//                 Add Product<span className='px-1'></span>
//               </button>
//             </div>
//             <div className="left flex gap-3">
//               <button onClick={() => setFlag(false)} className="flex bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-lime-500 hover:text-gray-800">
//                 Update Product<span className='px-1'></span>
//               </button>
//             </div>
//         </div>
//     )
// }