import { ObjectTypes } from "../../../@types/index.js";

export const AnalogEvent = {
    Csig_All_Audio_Volume: "Csig.All_Audio_Volume",
    Csig_Auto_Answer_Delay: "Csig.Auto_Answer_Delay",
    Csig_BlueLedBlinkTime: "Csig.BlueLedBlinkTime",
    Csig_BlueLedBlinkBrightness: "Csig.BlueLedBlinkBrightness",
    Csig_BlueStatusBarBlinkTime: "Csig.BlueStatusBarBlinkTime",
    Csig_BlueStatusBarBrightness: "Csig.BlueStatusBarBrightness",
    Csig_Button_Toolbar_Display_Edge: "Csig.Button_Toolbar_Display_Edge",
    Csig_Button_Toolbar_Display_Timeout: "Csig.Button_Toolbar_Display_Timeout",
    Csig_GreenLedBlinkTime: "Csig.GreenLedBlinkTime",
    Csig_GreenLedBlinkBrightness: "Csig.GreenLedBlinkBrightness",
    Csig_GreenStatusBarBlinkTime: "Csig.GreenStatusBarBlinkTime",
    Csig_GreenStatusBarBrightness: "Csig.GreenStatusBarBrightness",
    Csig_Hard_Button_Brightness: "Csig.Hard_Button_Brightness",
    Csig_Hard_Button_Brt_Auto_Thresh: "Csig.Hard_Button_Brt_Auto_Thresh",
    Csig_Key_Backlight_High: "Csig.Key_Backlight_High",
    Csig_Key_Backlight_Low: "Csig.Key_Backlight_Low",
    Csig_Key_Click_Volume: "Csig.Key_Click_Volume",
    Csig_Lcd_Brt: "Csig.Lcd_Brt",
    Csig_Lcd_Brt_Auto_Thresh: "Csig.Lcd_Brt_Auto_Thresh",
    Csig_LCD_Level_High: "Csig.LCD_Level_High",
    Csig_LCD_Level_Lo: "Csig.LCD_Level_Lo",
    Csig_LCD_Level_Med: "Csig.LCD_Level_Med",

    Csig_Poll_Interval: "Csig.Poll_Interval",
    Csig_RedLedBlinkTime: "Csig.RedLedBlinkTime",
    Csig_RedLedBlinkBrightness: "Csig.RedLedBlinkBrightness",
    Csig_RedStatusBarBlinkTime: "Csig.RedStatusBarBlinkTime",
    Csig_RedStatusBarBrightness: "Csig.RedStatusBarBrightness",
    Csig_Screensaver_Logo_Setting: "Csig.Screensaver_Logo_Setting",
    Csig_Standby_Timeout: "Csig.Standby_Timeout",
    Csig_System_Media_Volume: "Csig.System_Media_Volume",
} as const;

export type AnalogEvent = ObjectTypes<typeof AnalogEvent>;

export default AnalogEvent;
