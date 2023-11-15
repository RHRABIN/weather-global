import CloudFillSvg from '../svg/CloudFillSvg';
import LightRainSvg from '../svg/LightRainSvg';
import OverCloudySvg from '../svg/OverCloudySvg';
import CloudSvg from '../svg/CloudSvg';

const WeatherInfo = () => {
    return (
        <div className="grid grid-cols-12 max-w-[1200px] mx-auto px-4 gap-4 mt-4">
            <div className="col-span-12 lg:col-span-7 border rounded p-4">
                <h2>CURRENT WEATHER</h2>
                <small>11.26 PM</small>
                <div className="grid grid-cols-12 gap-4 justify-center">
                    <div className="col-span-5">
                        <div className="flex gap-x-2 items-center">
                            <CloudSvg color="#BABABA" size={88} />
                            <span className="text-[4rem]">
                                25°
                                <span className="">C</span>
                            </span>
                        </div>
                        <small className="">RealFeel* 25°</small>
                    </div>
                    <div className="col-span-7">
                        <div className="flex justify-between border-b pb-2 mb-2">
                            <p>Air Quality</p>
                            <p className="text-pink-500">Very Unhealthy</p>
                        </div>
                        <div className="flex justify-between border-b pb-2 mb-2">
                            <p>Wind</p>
                            <p className="">NE 9km/h</p>
                        </div>
                        <div className="flex justify-between border-b pb-2 mb-2">
                            <p>Wind Gusts</p>
                            <p className="">12 km/h</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-5 border rounded p-4">
                <h2 className="font-bold text-black mb-6">5-day forecast</h2>
                <div className="flex justify-between   items-center text-sm text-black h-[40px]">
                    <div className="w-[50%]">Wed, Nov 15</div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center ">
                            <div><CloudFillSvg /></div>
                            <div>11 / 8°</div>
                        </div>
                        <small>scattered cloud</small>
                    </div>
                </div>
                <div className="flex justify-between   items-center text-sm text-black h-[40px]">
                    <div className="w-[50%]">Wed, Nov 15</div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center ">
                            <div>
                                <LightRainSvg />

                            </div>
                            <div>11 / 8°</div>
                        </div>
                        <small>light rain</small> </div>
                </div>
                <div className="flex justify-between   items-center text-sm text-black h-[40px]">
                    <div className="w-[50%]">Wed, Nov 15</div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center ">
                            <div>
                                <LightRainSvg />

                            </div>
                            <div>11 / 8°</div>
                        </div>
                        <small>light rain</small> </div>
                </div>
                <div className="flex justify-between   items-center text-sm text-black h-[40px]">
                    <div className="w-[50%]">Wed, Nov 15</div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center ">
                            <div>
                                <LightRainSvg />

                            </div>
                            <div>11 / 8°</div>
                        </div>
                        <small>light rain</small> </div>
                </div>
                <div className="flex justify-between   items-center text-sm text-black h-[40px]">
                    <div className="w-[50%]">Wed, Nov 15</div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center flex-grow">
                            <div>
                                <OverCloudySvg />
                            </div>
                            <div>11 / 8°</div>
                        </div>
                        <small>over clouds</small> </div>
                </div>
            </div>

        </div>
    );
};

export default WeatherInfo;