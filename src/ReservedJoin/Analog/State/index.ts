import { ObjectTypes } from "../../../@types/index.js";

export const AnalogState = {
    Csig_All_Audio_Volume_fb: "Csig.All_Audio_Volume_fb",
    Csig_Battery_Level_fb: "Csig.Battery_Level_fb",

    Csig_BlueLedBlinkTime_fb: "Csig.BlueLedBlinkTime_fb",
    Csig_BlueLedBrightness_fb: "Csig.BlueLedBrightness_fb",
    Csig_BlueStatusBarBlinkTime_fb: "Csig.BlueStatusBarBlinkTime_fb",
    Csig_BlueStatusBarBrightness_fb: "Csig.BlueStatusBarBrightness_fb",
    Csig_Button_Toolbar_Display_Edge_fb: "Csig.Button_Toolbar_Display_Edge_fb",
    Csig_Button_Toolbar_Display_Timeout_fb:
        "Csig.Button_Toolbar_Display_Timeout_fb",
    Csig_Camera_Preset_fb: "Csig.Camera_Preset_fb",
    Csig_Capture_color_mode_fb: "Csig.Capture_color_mode_fb",
    Csig_Conf_Mic_Vol_fb: "Csig.Conf_Mic_Vol_fb",
    Csig_Conf_Spkr_Vol_fb: "Csig.Conf_Spkr_Vol_fb",
    Csig_Default_Spkr_Vol_fb: "Csig.Default_Spkr_Vol_fb",
    Csig_Display_Orientation_Config_fb: "Csig.Display_Orientation_Config_fb",
    Csig_Docked_Standby_Timeout_fb: "Csig.Docked_Standby_Timeout_fb",
    Csig_GreenLedBlinkTime_fb: "Csig.GreenLedBlinkTime_fb",
    Csig_GreenLedBrightness_fb: "Csig.GreenLedBrightness_fb",
    Csig_GreenStatusBarBlinkTime_fb: "Csig.GreenStatusBarBlinkTime_fb",
    Csig_GreenStatusBarBrightness_fb: "Csig.GreenStatusBarBrightness_fb",
    Csig_Hard_Button_Brightness_fb: "Csig.Hard_Button_Brightness_fb",
    Csig_Hard_Button_Brt_Auto_Thresh_fb: "Csig.Hard_Button_Brt_Auto_Thresh_fb",
    Csig_Huddly_Room_Occupant_Count_fb: "Csig.Huddly_Room_Occupant_Count_fb",
    Csig_Image_Mode_fb: "Csig.Image_Mode_fb",
    Csig_Key_Backlight_High_fb: "Csig.Key_Backlight_High_fb",
    Csig_Key_Backlight_Low_fb: "Csig.Key_Backlight_Low_fb",
    Csig_Key_Click_Volume_fb: "Csig.Key_Click_Volume_fb",
    Csig_Lcd_Brt_fb: "Csig.Lcd_Brt_fb",
    Csig_Lcd_Brt_Auto_Thresh_fb: "Csig.Lcd_Brt_Auto_Thresh_fb",
    Csig_LCD_Level_High_fb: "Csig.LCD_Level_High_fb",
    Csig_LCD_Level_Lo_fb: "Csig.LCD_Level_Lo_fb",
    Csig_LCD_Level_Med_fb: "Csig.LCD_Level_Med_fb",
    Csig_Light_Sensor_Value_fb: "Csig.Light_Sensor_Value_fb",
    Csig_Poll_Interval_fb: "Csig.Poll_Interval_fb",
    Csig_Polycom_TT_Enable_Analog__fb: "Csig.Polycom_TT_Enable_Analog__fb",
    Csig_Polycom_TT_Frame_Size_Analog__fb:
        "Csig.Polycom_TT_Frame_Size_Analog__fb",
    Csig_Polycom_TT_Sensitivity_Analog_fb:
        "Csig.Polycom_TT_Sensitivity_Analog_fb",
    Csig_Power_Timeout_fb: "Csig.Power_Timeout_fb",
    Csig_RedLedBlinkTime_fb: "Csig.RedLedBlinkTime_fb",
    Csig_RedLedBrightness_fb: "Csig.RedLedBrightness_fb",
    Csig_RedStatusBarBlinkTime_fb: "Csig.RedStatusBarBlinkTime_fb",
    Csig_RedStatusBarBrightness_fb: "Csig.RedStatusBarBrightness_fb",
    Csig_Screensaver_Logo_Setting_fb: "Csig.Screensaver_Logo_Setting_fb",
    Csig_Standby_Timeout_fb: "Csig.Standby_Timeout_fb",
    Csig_System_Media_Volume_fb: "Csig.System_Media_Volume_fb",
    Csig_System_WiFi_Link_Status_fb: "Csig.System_WiFi_Link_Status_fb",
    Csig_System_WiFi_Signal_Strength_fb: "Csig.System_WiFi_Signal_Strength_fb",
    Csig_TIMEZONE_INDEX_fb: "Csig.TIMEZONE_INDEX_fb",
    Csig_UCENGINE_auto_zoom_mode_fb: "Csig.UCENGINE_auto_zoom_mode_fb",
    Csig_UCENGINE_auto_zoom_speed_fb: "Csig.UCENGINE_auto_zoom_speed_fb",
    Csig_Voice_Recording_dB_fb: "Csig.Voice_Recording_dB_fb",
} as const;

export type AnalogState = ObjectTypes<typeof AnalogState>;

export default AnalogState;
