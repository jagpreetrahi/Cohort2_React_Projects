import { useState } from "react";

export function TransactionDetail({
    
     transaction,
     time
}){

    const [pay , setPay] = useState(2);
    const [refund , setRefund] = useState(6);

    return <div>
        <div className="font-semibold text-2xl mt-5 ml-100 text-black-100">
            {transaction} | {time}
        </div>
        <div className="flex justify-stretch mt-3 ml-100">
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{`Payouts (${pay})`}</button>
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{`Refund (${refund})`}</button>
            
        </div>
    </div>
}