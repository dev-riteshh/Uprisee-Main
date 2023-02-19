import React from "react";
import {Link} from 'react-router-dom';

const InvestorList = () => {

  return (
    <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
               <Link 
                  to={'/dashboard/proposal'}
                  className="font-medium text-blue-600 dark:text-blue-500">
                  Send Proposal
               </Link>
              </td>
            </tr>
  );
};

export default InvestorList;
