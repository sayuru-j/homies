import { buttonVariants } from '@/components/UI/button';
import React from 'react'





function LoginPage() {
    return (
     

         <div className='grid grid-cols-2 h-screen '>
            <div className='bg-slate-900 top-1'>

            </div>

            <div className="flex flex-col items-center py-4 gap-2 text-accent/60">
               
              
            <div className="flex flex-row items-center mt-60">
                <h1 className="text-3xl font-bold">Welcome</h1>
                 <h1 className="ml-2 font-medium text mt-2 "> back, log in here!</h1>
            </div>
            <div className="w-80 h-96 opacity-25 bg-gray-200 rounded-2xl">
            </div>

            <button className={`${buttonVariants()}`}>
                asdada
                
            </button>


             </div>
             
            
         </div>
  
            
           
            
            
        
    );
  }
  
  export default LoginPage;