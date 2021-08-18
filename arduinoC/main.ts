

//% color="#FFA800" iconWidth=40 iconHeight=40
namespace Potentiometer {
    //% block="Read PIN [PIN] Potentiometer" blockType="reporter"
    //% PIN.shadow="dropdown" PIN.options="PIN_Analog" 

    export function getPotentiometer(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        Generator.addSetup(`pinMode`, `pinMode(${pin}, INPUT);`);
        Generator.addCode(`analogRead(${pin})`);
    }
}
