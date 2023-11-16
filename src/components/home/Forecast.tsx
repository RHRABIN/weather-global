/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast: React.FC<any> = ({ data, forecastLoading }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    let content = null;
    if (forecastLoading) {
        content = <div className='flex flex-col'>
            <div className='w-20 rounded h-[20px] mt-2 bg-gray-300 animate-pulse'> </div>
            <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
            <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
            <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
            <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
            <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
        </div>
    } else {
        content = <>
            <h2 className="font-bold text-black mb-6">5-day forecast</h2>
            {/* <div className="flex justify-between   items-center text-sm text-black h-[40px]">
                <div className="w-[50%]">Wed, Nov 15</div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center ">
                        <div><CloudFillSvg /></div>
                        <div>11 / 8°</div>
                    </div>
                    <small>scattered cloud</small>
                </div>
            </div> */}
            <Accordion allowZeroExpanded>
                {data?.list?.splice(0, 5).map((item: any, idx: number) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="bg-gray-100  rounded h-10 my-1 flex items-center cursor-pointer text-base px-5">
                                    <img src={`icons/${item.weather[0].icon}.png`} className="w-[40px]" alt="weather" />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="cursor-inherit flex-1 mr-4 text-right">{item.weather[0].description}</label>
                                    <label className="text-black">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="grid gap-y-0 gap-x-4 md:gap-x-6 lg:gap-x-8 sm:grid-cols-2 py-1 px-4 md:px-6 lg:px-8">
                                <div className="flex items-center h-[30px] justify-between">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="flex items-center h-[30px] justify-between">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="flex items-center h-[30px] justify-between">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="flex items-center h-[30px] justify-between">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="flex items-center h-[30px] justify-between">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="flex items-center h-[30px] justify-between">
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    }
    return (
        <div className="col-span-12 lg:col-span-5 border rounded p-4">
            {content}

        </div>
    );
};

export default Forecast;