
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CurrentWeather: React.FC<any> = ({ data, weatherLoading }) => {

    const { main, weather, name, wind } = data || {};
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    let content = null;
    if (weatherLoading) {
        content =
            <div className=''>
                <div className='w-20 rounded h-[20px] mt-2 bg-gray-300 animate-pulse'> </div>
                <div className='w-28 rounded h-[20px] mt-2 bg-gray-300 animate-pulse'> </div>
                <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
                <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
                <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
                <div className='w-full rounded h-[25px] mt-2 bg-gray-300 animate-pulse'> </div>
            </div>

    } else {
        content = <>
            <h2>CURRENT WEATHER</h2>
            <h2>{name}</h2>
            <small>{currentTime}</small>
            <div className="grid grid-cols-12 gap-4 justify-center">
                <div className="col-span-5">
                    <div className="flex gap-x-2 items-center">
                        {/* <CloudSvg color="#BABABA" size={88} /> */}
                        <div className='h-20 w-20'>
                            <img
                                alt="weather"
                                className="w-full h-full"
                                src={`icons/${weather?.[0]?.icon}.png`}
                            />
                        </div>
                        <span className="text-[4rem]">
                            {Math.round(main?.feels_like)}°C
                        </span>
                    </div>
                    <small className="">RealFeel* {Math.round(main?.temp)}°C</small>
                </div>
                <div className="col-span-7">
                    <div className="flex justify-between border-b pb-2 mb-2">
                        <p>Air Quality</p>
                        <p className="text-pink-500">{weather?.[0]?.description}</p>
                    </div>
                    <div className="flex justify-between border-b pb-2 mb-2">
                        <p>Wind Speed</p>
                        <p className="">NE {wind?.speed}km/h</p>
                    </div>
                    <div className="flex justify-between border-b pb-2 mb-2">
                        <p>Wind Deg</p>
                        <p className="">{wind?.deg}km/h</p>
                    </div>
                </div>
            </div>
        </>
    }
    return (
        <div className="col-span-12 lg:col-span-7 border rounded p-4">
            {content}
        </div>
    );
};

export default CurrentWeather;