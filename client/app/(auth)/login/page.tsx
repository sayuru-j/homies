import { buttonVariants } from '@/components/UI/button';
import { Icons } from '@/components/UI/icons';
import Link from 'next/link';
import React from 'react'





function LoginPage() {
    return (
        <div className='grid grid-cols-2 h-screen'>

          <div className='bg-slate-900'></div>
      
            <div className='w-[500px] mx-auto flex flex-col items-center text-2xl py-56'>
              <div className='flex items-center text-gray-900'>
              
               <h1>
                <strong>Welcome back!</strong>
               </h1>

              </div>
               <div className='text-xs '> 
                <p>Enter your Credentials to access your account</p>
               </div>

  {/* Email Text Field    */}

              <div className='pt-12 '>
                <div className='text-sm flex w-full pl-2 font-bold text-gray-900'>
                  <label>Email address</label>
                 </div>
               <input type='email'
                 className='rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 w-80 tracking-widest'
                 placeholder='Enter your email'
                 style={{ fontSize: '12px', paddingLeft:'10px'  }}/>
              </div>

    {/* Password Text Field */}

              <div className='pt-5'>
              <div className='text-sm flex w-full pl-2 font-bold text-gray-900'>
                  <label>Password</label>
                 </div>
               <input type='password'
                 className='rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 w-80 tracking-widest'
                 placeholder='Enter Your Password'
                 style={{ fontSize: '12px', paddingLeft:'10px'  }}/>
              </div>

              <div className='pt-12 '>
              <div className='tracking-widest  bg-slate-900 w-72 h-7 rounded-xl text-white text-xs text-center font-bold pt-1  '>
                <button>Login</button>
              </div>
              </div>

              <div className='border-b-2 w-full flex justify-center max-w-sm py-6  relative '>
                <p className='absolute inline-flex w-7 justify-center pt-4 text-sm bg-white text-center '>Or</p>
              </div>

            <div className='text-sm pt-5 items-center flex gap-2'>
            <p>Don`t have an account?</p>
            <Link className="underline" href="/register">Signup

            </Link>
            </div>

            <div className='w-full pt-20 pl-5 ' >
            <button className='inline-flex items-center justify-center gap-2 fill-black text-xs rounded-xl w-40 h-8 text-black border-slate-300 border '>
             <Icons.google size={20}/>
              Sign in with Google</button>
            </div>
          
           
 
           </div>

          
        </div>
      );
      
      
      
  }
  
  export default LoginPage;