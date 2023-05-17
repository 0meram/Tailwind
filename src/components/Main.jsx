import React from 'react';
import Charts from './Charts';
import Reports from './Reports';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import { ReactComponent as Schedule } from '../icons/schedule.svg';
import { ReactComponent as Settings } from '../icons/settings.svg';

const Main = () => {
    return (
        <main className="main">
            <div className="charts_wrapper">
                <h1 className="text-3xl">Today</h1>
                <div className="border-t my-4"></div>
                <Charts />
            </div>
            <div className="reports_wrapper">
                <h1 className="text-3xl">Reports overview</h1>
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
                <div className="border-t my-4"></div>
                <Reports />
            </div>
        </main>
    );
};

export default Main;
