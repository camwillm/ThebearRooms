import React from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import './ScreenWrapper.scss';

interface ScreenWrapperProps {
    children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
    return (
        <div className="screen-wrapper">
            <DeviceFrameset device="iPhone X" color="black">
                {children}
            </DeviceFrameset>
        </div>
    );
};

export default ScreenWrapper;
