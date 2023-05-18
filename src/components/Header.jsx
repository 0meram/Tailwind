import React from 'react'
import { ReactComponent as Avatar } from '../icons/avatar.svg'
import { ReactComponent as Info } from '../icons/info.svg'
import { ReactComponent as Bell } from '../icons/bell.svg'
import { ReactComponent as Search } from '../icons/search.svg'

const Header = () => {
  return (
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <span class=" flex items-center self-center sm:text-2xl whitespace-nowrap dark:text-white">
              <Search />
              <span class="ml-3">Search...</span>
            </span>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                >
                  <div>
                    {' '}
                    <Bell />
                  </div>
                  <div>
                    {' '}
                    <Info />
                  </div>
                  <div>
                    {' '}
                    <Avatar />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

{
  ;<div className="flex items-center"></div>
}
