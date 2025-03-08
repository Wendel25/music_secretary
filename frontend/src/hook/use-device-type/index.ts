import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const getDeviceType = (width: number): DeviceType => {
    if (width < 768) return "mobile";
    if (width >= 768 && width < 1024) return "tablet";
    return "desktop";
};

const useDeviceType = (): DeviceType => {
    const [deviceType, setDeviceType] = useState<DeviceType>(
        getDeviceType(window.innerWidth)
    );

    useEffect(() => {
        const handleResize = () => setDeviceType(getDeviceType(window.innerWidth));

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceType;
};

export default useDeviceType;