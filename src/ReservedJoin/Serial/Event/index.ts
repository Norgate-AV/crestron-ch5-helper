import { ObjectTypes } from "../../../@types/index.js";

export const SerialEvent = {
    Csig_Admin_Account_Username: "Csig.Admin_Account_Username",
    Csig_App_Data_URI: "Csig.App_Data_URI",
    Csig_Browser_Homepage: "Csig.Browser_Homepage",
    Csig_Browser_URL: "Csig.Browser_URL",
    Csig_CameraSnapshotName: "Csig.CameraSnapshotName",

    Csig_CameraStreamName: "Csig.CameraStreamName",

    Csig_Check_Time: "Csig.Check_Time",

    Csig_Manifest_URL: "Csig.Manifest_URL",
    Csig_MulticastAddress: "Csig.MulticastAddress",
    Csig_Occupancy_Sensor_IP_Address: "Csig.Occupancy_Sensor_IP_Address",
    Csig_Room_Name: "Csig.Room_Name",
    Csig_Screensaver_Image_URL: "Csig.Screensaver_Image_URL",
    Csig_Screensaver_Logo_URL: "Csig.Screensaver_Logo_URL",
    Csig_Screensaver_Video_URL: "Csig.Screensaver_Video_URL",

    Csig_User_Login_Password: "Csig.User_Login_Password",

    Csig_Vnc_Client_Url: "Csig.Vnc_Client_Url",
} as const;

export type SerialEvent = ObjectTypes<typeof SerialEvent>;

export default SerialEvent;
