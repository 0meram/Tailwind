import React from 'react'
import Charts from './Charts'
import Reports from './Reports'
import Header from './Header'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { ReactComponent as Schedule } from '../icons/schedule.svg'
import { ReactComponent as Settings } from '../icons/settings.svg'

const Main = () => {
    return (
        <div class="p-4 sm:ml-64">
            <Header />
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <h1 className="text-lg">Today</h1>
                <div class="grid grid-cols-1 gap-4 mb-4">
                    <div class="flex h-52 rounded bg-gray-50 dark:bg-gray-800">
                        <Charts />
                    </div>
                </div>
                <h1 className="text-lg">Reports overview</h1>
                <div class="flex justify-between rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <div className="p-2 bg-white shadow rounded-l">
                                Last 12 months <Arrow className="icon_right" />
                            </div>
                            <div className="p-2 bg-white shadow rounded-r">
                                <Schedule className="icon_left" />1 Aug 2020-7 Jul
                            </div>
                        </div>
                        <div className="flex">
                            <div className="compare_to">compared to</div>
                            <div className="p-2 bg-white shadow">
                                Previous period <Arrow className="icon_right" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="p-2 bg-white shadow">
                            Monthly <Arrow className="icon_right" />
                        </div>
                        <div className="p-2 bg-white shadow">
                            <Settings className="icon_left" />
                            Edit charts
                        </div>
                    </div>
                </div>
                <div class="h-full mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <Reports />
                </div>
            </div>
        </div>
    )
}

export default Main
