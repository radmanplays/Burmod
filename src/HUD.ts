import { clientName } from "./util/clientName.ts";
ModAPI.require("settings");
ModAPI.settings.hud24h = false
ModAPI.settings.hudCoords = false
ModAPI.settings.hudFps = false
ModAPI.settings.hudPlayer = false
ModAPI.settings.hudStats = false
ModAPI.settings.hudWorld = false
ModAPI.settings.reload();
export function inithud(){
  ModAPI.addEventListener("drawhud", function() {
    let sr = ModAPI.ScaledResolution
    //@ts-ignore
    let gsm = ModAPI.GlStateManager
    gsm.pushMatrix();
    gsm.translate (4, 4, 0);
    gsm.scale(1.5, 1.5, 1);
    gsm.translate(-4, -4, 0); 
    ModAPI.drawStringWithShadow({msg: clientName, x: 4,y: 4,color: -1});
    gsm.popMatrix();
  });
}