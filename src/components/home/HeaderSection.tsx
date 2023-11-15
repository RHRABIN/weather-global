import { Select } from "antd";
import bgImage from "../../assets/bg1.jpg";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { IDropdown } from "../../types";
import SearchSvg from "../svg/SearchSvg";
import CloudSvg from "../svg/CloudSvg";
const HeaderSection = () => {
    const [value, setValue] = useState("");
    const debouncedSearch = useDebounce((v) => {
        setValue(v)
    }, 500);
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    let categoryOption: IDropdown[] = [{
        value: "current location",
        label: "Current Location"
    }
    ];
    return (
        <div className="bg-cover bg-center h-[40vh]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex items-center justify-center h-full w-full flex-col">
                <div className="relative">

                    <Select
                        className="w-[550px] h-12"
                        showSearch
                        placeholder={`Search`}
                        defaultActiveFirstOption={false}
                        suffixIcon={null}
                        filterOption={false}
                        onSearch={(value) => debouncedSearch(value)}
                        // onChange={handleInvoice}
                        // notFoundContent={catLoading ? <Spin size="small" /> : null}
                        options={categoryOption}
                    />
                    <SearchSvg />
                </div>

                {/* recent locations */}
                <div className=" mt-6">
                    <small className="text-white">Recent Location</small>

                    <div className="flex gap-4">
                        <div className="h-[133px] w-[160px] rounded p-4 bg-[rgba(0,0,0,.25)] text-white">
                            <h2>Uttara</h2>
                            <small>Bangladesh</small>
                            <div className="flex gap-x-2 items-center">
                                <span><CloudSvg color="rgba(255,255,255,1)" size={18} /></span>
                                <span className="text-xl">
                                    25°
                                    <span className="">C</span>
                                </span>
                            </div>
                            <small>RealFeel* 25°</small>
                        </div>
                        <div className="h-[133px] w-[160px] rounded p-4 bg-[rgba(0,0,0,.25)] text-white">
                            <h2>Uttara</h2>
                            <small>Bangladesh</small>
                            <div className="flex gap-x-2 items-center">
                                <span><CloudSvg color="rgba(255,255,255,1)" size={18} /></span>
                                <span className="text-xl">
                                    25°
                                    <span className="">C</span>
                                </span>
                            </div>
                            <small>RealFeel* 25°</small>
                        </div>
                        <div className="h-[133px] w-[160px] rounded p-4 bg-[rgba(0,0,0,.25)] text-white">
                            <h2>Uttara</h2>
                            <small>Bangladesh</small>
                            <div className="flex gap-x-2 items-center">
                                <span><CloudSvg color="rgba(255,255,255,1)" size={18} /></span>
                                <span className="text-xl">
                                    25°
                                    <span className="">C</span>
                                </span>
                            </div>
                            <small>RealFeel* 25°</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;