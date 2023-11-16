/* eslint-disable @typescript-eslint/no-explicit-any */
import bgImage from "../../assets/bg1.jpg";
import { useState } from "react";
import RecentLocation from "./RecentLocation";
import { GEO_API_URL, geoOptions } from "../../apis";
import { AsyncPaginate } from "react-select-async-paginate";
import { ICity } from "../../types";
interface HeaderSectionProps {
    onChange: (searchData: any) => void;
}
const HeaderSection: React.FC<HeaderSectionProps> = ({ onChange }) => {
    const [searchValue, setSearchValue] = useState("");
    const loadOptions = (inputValue: string) => {
        if (inputValue) {
            return fetch(`${GEO_API_URL}?namePrefix=${inputValue}`, geoOptions)
                .then(res => res.json())
                .then(response => {
                    return {
                        options: response.data.map((city: ICity) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                            };
                        }),
                    };
                })
                .catch(err => {
                    console.log(err)
                    return {
                        options: []
                    }
                })
        } else {
            return {
                options: []
            }
        }
    };

    const handleOnChange = (searchData: any) => {
        setSearchValue(searchData);
        onChange(searchData);
    };
    return (
        <div className="bg-cover bg-center h-[40vh]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex items-center justify-center h-full w-full flex-col">
                <div className="relative">
                    <AsyncPaginate
                        className="w-[90vw] md:w-[70vw] lg:w-[550px] h-12"
                        placeholder="Search for city"
                        debounceTimeout={600}
                        value={searchValue}
                        onChange={handleOnChange}
                        loadOptions={loadOptions}
                    />
                </div>
                {/* recent locations */}
                <RecentLocation />
            </div>
        </div>
    );
};

export default HeaderSection;