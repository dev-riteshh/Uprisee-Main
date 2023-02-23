import React from "react";
import {Link} from 'react-router-dom';

const InvestorList = () => {

  return (
    <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                John Doe
              </th>
              <td class="px-6 py-4">Abc compny</td>
              <td class="px-6 py-4">Mumbai</td>
              <td class="px-6 py-4">Technology</td>
              <td class="px-6 py-4">Seed</td>
              <td class="px-6 py-4">Up to $2999</td>
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
