type ICloud = {
    color: string;
    size: number
}

const CloudSvg = (props: ICloud) => {
    return (
        <svg className="weather-icon" viewBox="0 0 288 288" width={props.size} height={props.size}><path d="M264 157.15a57.5 57.5 0 0 0-57.5-57.5h-9.75c-18.372-21.63-47.985-30.027-74.977-21.26-26.99 8.767-46.018 32.963-48.173 61.26H61.55c-20.71 0-37.5 16.79-37.5 37.5s16.79 37.5 37.5 37.5h145c31.737-.028 57.45-25.763 57.45-57.5Z" stroke={props.color} stroke-width="10" fill="none" fill-rule="evenodd"></path></svg>
    );
};

export default CloudSvg;


