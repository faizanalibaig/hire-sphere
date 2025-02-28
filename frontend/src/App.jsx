import AuthHeader from '../components/auth/AuthHeader';
import Login from '../components/auth/Login';

export default function App() {
  return (
    // <main>
    //   <header className='h-[75px] rounded-2xl border-2 border-[#CBD5E1]/10 bg-[#FAFAF7] m-4 p-3 flex justify-between items-center font-sans'>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 w-auto h-full rounded-xl flex items-center justify-center'>
    //       Hire Sphere
    //     </h1>
    //     <nav className='flex items-center gap-2 h-full'>
    //       <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/30 text-sm w-auto px-6 font-medium h-[80%] rounded-full  flex items-center justify-center'>
    //         Dashboard
    //       </h3>
    //       <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/20 text-sm w-auto px-6 font-medium h-[80%] rounded-full  flex items-center justify-center'>
    //         Financials
    //       </h3>
    //       <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/20 text-sm w-auto px-6 font-medium h-[80%] rounded-full  flex items-center justify-center'>
    //         Schedule
    //       </h3>
    //       <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/20 text-sm w-auto px-6 font-medium h-[80%] rounded-full  flex items-center justify-center'>
    //         Employee
    //       </h3>
    //     </nav>
    //     <div className='flex items-center h-full'>
    //       <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/20 w-12 h-full rounded-[25px]  flex items-center justify-center'>
    //         a
    //       </h3>
    //       {/* <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/20 w-12 h-full rounded-[25px]  flex items-center justify-center'>
    //       a
    //     </h3>
    //     <h3 className='bg-[#FAFAF7] border-2 border-[#CBD5E1]/20 w-12 h-full rounded-[25px]  flex items-center justify-center'>
    //       a
    //     </h3> */}
    //     </div>
    //   </header>

    //   <div className='h-[590px] w-[250px] rounded-2xl border-2 border-[#CBD5E1]/10 bg-[#FAFAF7] m-4 p-3 flex flex-col gap-2 font-sans'>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-medium px-10 mb-8 h-[50px] w-auto rounded-xl flex items-center justify-start'>
    //       <img src='/sidebar/home-icon.png' className='h-5' />
    //       Home
    //     </h1>

    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Attendance
    //     </h1>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Projects
    //     </h1>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Tasks
    //     </h1>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Payroll
    //     </h1>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Requests
    //     </h1>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Helpdesk
    //     </h1>
    //     <h1 className='bg-[#FAFAF7] border-2 border-black/5 font-bold px-10 h-[50px] w-auto rounded-xl flex items-center justify-center'>
    //       Training Sessions
    //     </h1>
    //   </div>
    // </main>
    // <>
    //   <header className='h-[60px] flex justify-between items-center px-8'>
    //     {/* <img src='/sidebar/sidebar-icon.png' className='h-5 w-auto' /> */}
    //     <h1 className='font-bold text-lg'>Hire-Sphere</h1>
    //   </header>
    // </>px-5
    <aside className='bg-[#FAFAF7] border-r-2 border-[#CBD5E1]/20 h-screen w-[280px]  py-4 flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center px-5'>
          <h1 className='font-bold text-lg'>Hire-Sphere</h1>
          <div className='flex gap-4'>
            <img src='/sidebar/search-icon.png' className='h-5 w-auto' />
            <img src='/sidebar/sidebar-icon.png' className='h-5 w-auto' />
          </div>
        </div>
        {/* <input
        type='text'
        placeholder='Search'
        className='w-full h-10 px-3 text-sm rounded-lg mt-5 border-2 border-[#CBD5E1]/30 outline-none'
      /> */}
        <h1 className='text-base font-bold mt-10 mb-1 px-5'>Main Menu</h1>

        <div className='flex flex-col gap-1'>
          <h1 className='mt-1 text-base font-medium py-[6px] rounded-md mx-3 bg-black/5 px-2'>
            Dashboard
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Company News
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Attendance
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Leave
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Payroll
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Personal
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Employees
          </h1>
          <h1 className='text-base font-medium py-1 rounded-md mx-3 px-2'>
            Leave
          </h1>
        </div>
      </div>
      {/* <div className='w-full rounded-lg text-center'> */}
      {/* <div className='flex justify-end'>
          <img src='/sidebar/setting-icon.png' className='h-5 w-auto my-2' />
        </div> */}
      <div className='bg-black/5 h-12 rounded-ful flex items-center justify-center rounded-lg mx-4'>
        <div className='w-6 h-6 rounded-full bg-white'> </div>
        <h1 className='rounded-lg p-3'>riazfiaz@gmail.com</h1>
        <img src='/sidebar/drop-down-icon.png' className='h-6 w-auto' />
      </div>
    </aside>
  );
}
