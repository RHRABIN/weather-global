import CloudSvg from '../svg/CloudSvg';

const RecentLocation = () => {
    return (
        <div className=" mt-6">
            <small className="text-white">Recent Location</small>

            <div className="lg:flex gap-4 space-y-2 lg:space-y-0">
                <div className="flex justify-between lg:block h-12 w-[90vw] md:w-[70vw] lg:h-[133px]  lg:w-[160px] rounded p-4 bg-[rgba(0,0,0,.25)] text-white">
                    <div className="flex lg:flex-col flex-row items-center lg:items-start gap-2 lg:gap-0">
                        <h2>Uttara</h2>
                        <small>Bangladesh</small>
                    </div>
                    <div className="flex gap-x-2 items-center lg:flex-row flex-row  lg:mt-2 gap-2">
                        <span><CloudSvg color="#ffffff" size={24} /></span>
                        <span className="text-xl">
                            25°
                            <span className="">C</span>
                        </span>
                    </div>
                    <small>RealFeel* 25°</small>
                </div>
                <div className="flex justify-between lg:block h-12 w-[90vw] md:w-[70vw] lg:h-[133px]  lg:w-[160px] rounded p-4 bg-[rgba(0,0,0,.25)] text-white">
                    <div className="flex lg:flex-col flex-row items-center lg:items-start gap-2 lg:gap-0">
                        <h2>Mohakhali</h2>
                        <small>Bangladesh</small>
                    </div>
                    <div className="flex gap-x-2 items-center lg:flex-row flex-row  lg:mt-2 gap-2">
                        <span><CloudSvg color="#ffffff" size={24} /></span>
                        <span className="text-xl">
                            25°
                            <span className="">C</span>
                        </span>
                    </div>
                    <small>RealFeel* 25°</small>
                </div>
                <div className="flex justify-between lg:block h-12 w-[90vw] md:w-[70vw] lg:h-[133px]  lg:w-[160px] rounded p-4 bg-[rgba(0,0,0,.25)] text-white">
                    <div className="flex lg:flex-col flex-row items-center lg:items-start gap-2 lg:gap-0">
                        <h2>Sylhet</h2>
                        <small>Bangladesh</small>
                    </div>
                    <div className="flex gap-x-2 items-center lg:flex-row flex-row  lg:mt-2 gap-2">
                        <span><CloudSvg color="#ffffff" size={24} /></span>
                        <span className="text-xl">
                            25°
                            <span className="">C</span>
                        </span>
                    </div>
                    <small>RealFeel* 25°</small>
                </div>



            </div>
        </div>
    );
};

export default RecentLocation;