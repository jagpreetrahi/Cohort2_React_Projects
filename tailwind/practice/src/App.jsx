import { NavBar } from "./component/NavBar"
import { OrderSearch } from "./component/OrderSearch"
import { Revenue } from "./component/Revenue"
import { SideBar } from "./component/SideBar"
import { TransactionDetail } from "./component/TransactionDetail"


function App() {
  

  return (
      <div className="flex flex-col">
        <SideBar/>
        <NavBar title={"Payouts"} description={"How it works"}></NavBar>
        <div className="flex justify-between">
          <h1 className="font-semibold ml-100 text-3xl mt-14">Overview</h1>
          <div className="flex ">
             <a href="">This Month</a>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </div>
        
        <div className="grid grid-cols-4 sm:col-end-3 md:col-end-1 mt-14 ml-100">
          <div className="bg-blue-700 ">
            <Revenue heading = {"Next Payment Date:"}  time = {"Today, 4:30 PM"} title={"Next Payout"} amount={"21,4533.23"} orderCount={"23"}></Revenue>
          </div>
          <div className="ml-10">
            <Revenue title = {"Amount Pending"} amount = {"21,4533.23"} orderCount= {"13"}></Revenue>
          </div>
              
          <div className="ml-10">
            <Revenue title = {"Amount Pending"} amount = {"21,4533.23"} ></Revenue>
          </div>
        </div>

        <div>
           <TransactionDetail transaction={"Transaction"} time={"This Month"}/>
        </div>
        <div className="">
          <OrderSearch/>
        </div>
      </div>
   
  )
}

export default App
