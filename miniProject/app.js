const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Product=require("./models/product");
const keys=require("./config/keys");
//body-parsermiddleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//accessing static files
app.use(express.static(__dirname+"/public"));

//connecting to Mlab servers
mongoose.connect(keys.mongo);

//mailgun
var api_key =keys.mailgun_apikey;
var domain = keys.mailgun_domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


// Product.insertMany({
//     name: "DVP-ES2/EX2 Series",
//     image: "https://i.postimg.cc/XqwNKVB0/DVP-ES2-M.jpg",
//     description: `•	MPU points: 16 / 20 / 24 / 32 / 40 / 60
//     •	Program capacity: 16k steps
//     •	Built-in with 3 COM ports: 1 RS-232 port and 2 RS-485 ports, all are able to operate independently (Master/Slave)
//     •	Max. I/O points: 256 input points + 16 output points, or 256 output points + 16 input points
//     •	DVP-EX2 MPU is built in with 12-bit 4AD/2DA and offers analog/temperature modules of 14-bit resolution.
//     •	Built-in with 8 high-speed input points (2 points for 100kHz, 6 points for 10kHz) and supports U/D, U/D Dir, A/B counting modes
//     •	New motion control instructions: Close loop control, alignment mark, shield, immediate variable speed, S-Curve acceleration/deceleration.`,
//     category:"PLC",
//     company:"DELTA"
// });

// Product.insertMany({
//     name: "DVP-ES2/EX2 Series Expansion Module",
//     image: "https://i.postimg.cc/SKvKk1bH/06-XA-E2-P-F-20090513-DVP-ES2-EX2-M.jpg",
//     description: `•	Digital modules (output/input/mix): 8,16, 32(AC power)
//     •	Analog modules (output/input/mix): 4 channel, 6 channel inputs (14-bit)
//     •	Temperature measurement modules: conversion time 200ms/channel, overall accuracy +/-0.6%, resolution RTD inputs Pt100 / Pt1000 / Ni100 / Ni1000, thermocouple inputs J, K, R, S, T, E, N type
//     •	Resolver modules: distance 50M, resolution 12-bits, 500rpm, disconnection detection is supported.`,
//     category:"PLC",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "DVP-EC3 Series",
//     image: "https://i.postimg.cc/jd4dLSrH/DVP-EC3-M.jpg",
//     description: `EC3 series is the most economical solution for sequential control and communication monitoring and can operate independently, allowing the user to achieve stand-alone monitor, e.g. monitoring phototransistor coupler, proximity switch, optical sensor, indicator and illumination switch. 
//     Through serial ports, EC3 is able to connect to control devices such as PLC, frequency inverter and temperature controller, which can be said to be a programmable application solution that is cost-friendly and highly reliable.`,
//     category:"PLC",
//     company:"DELTA"
// });

// Product.insertMany({
//     name: "FX3U SERIES",
//     image: "https://i.postimg.cc/RCjncF82/fx-3u.jpg",
//     description: `Memory : 64,000 step RAM memory built-in. Flash memory cassette can also be mounted. 
//     Processing speed : Basic instruction:- 0.065 μs/instruction (LD instruction) Application instruction: 0.642 to 100 μs/instruction. 
//     Device : Auxiliary relay:- 7,680 pts Timer: 512 pts Counter: 235 pts Data register: 8,000 pts Extension register: 32,768 pts Extension file register (optional memory): 32,768 pts`,
//     category:"PLC",
//     company:"MITSUBISHI"
// });

// Product.insertMany({
//     name: "FX3S SERIES",
//     image: "https://i.postimg.cc/52JYRrf3/fx-3s.jpg",
//     description: `Memory :
//     16,000 step EEPROM memory built-in. Battery-free and maintenance-free.
//     (Program capacity is 4,000 steps)
//     Processing speed :
//     Basic instruction: 0.21 μs/instruction
//     Application instruction: 0.5 to 100μs/instruction
//     Device : 
//     Auxiliary relay: 1,536 pts Timer: 138 pts Counter: 67 pts Data register: 3,000 pts
//     `,
//     category:"PLC",
//     company:"MITSUBISHI"
// });

// Product.insertMany({
//     name: "FX3G SERIES",
//     image: "https://i.postimg.cc/TYg5Qxv1/fx-3g.jpg",
//     description: `Memory :
//     32,000 step EEPROM memory built-in. Battery-free and maintenance-free.
//     Processing speed :
//     Basic instruction: 0.21μs/instruction (in standard mode) 0.42μs/instruction (in extension mode)
//     Application instruction: 0.5 to 100 μs/instruction (in standard mode) 1.2 to 100 μs/instruction (in extension mode)
//     Device :
//     Auxiliary relay: 7,680 pts Timer: 320 pts Counter: 235 pts Data register: 8,000 pts
//     Extension register: 24,000 pts Extension file register: 24,000 pts.    
//     `,
//     category:"PLC",
//     company:"MITSUBISHI"
// });

// Product.insertMany({
//     name: "Q Series",
//     image: "https://i.postimg.cc/0jg2J6Qf/q-series.jpg",
//     description: `With its nano-order speed basic command processes, the next generation MELSEC-Q Series dramatically improves system and machine performance.
//     As equipment and manufacturing facilities continue to evolve on a daily basis, the series enables high-speed, high-accuracy and large volume data processing and machine control.        
//     `,
//     category:"PLC",
//     company:"MITSUBISHI"
// });

// Product.insertMany({
//     name: "SIEMENS S7 300",
//     image: "https://i.postimg.cc/mgSzfSDG/s7300.jpg",
//     description: `The SIMATIC S7-300 universal controller saves on installation space and features a modular design.A wide range of modules can be used to expand the system centrally or to create decentralized structures according to the task at hand, and facilitates a cost-effective stock of spare parts. 
//     With its impressive array of innovations, the SIMATIC S7-300 universal controller is an integrated system that will save you additional investment and maintenance costs.        
//     `,
//     category:"PLC",
//     company:"SEIMENS"
// });

// Product.insertMany({
//     name: "Simentic s7-1200",
//     image: "https://i.postimg.cc/gJxnhFKY/s71200.jpg",
//     description: `As an interface to the machine or plant, a wide variety of signal modules for input and output as well as technology modules for special technological functions, such as counting, and communications modules are available both centrally or decentrally. 
//     The SIMATIC S7-1200 is approved for protection class IP20 and is intended for installation in a control cabinet.
//     `,
//     category:"PLC",
//     company:"SEIMENS"
// });

// Product.insertMany({
//     name: "OMRON- CP1E",
//     image: "https://i.postimg.cc/D0s0CrDH/download.jpg",
//     description: `The CP1E provide high cost performance to further reduce costs by allowing you to select the optimal CPU Unit from the E[][]S-type Basic Models or N/[][]S(1)-type Application Models.`,
//     category:"PLC",
//     company:"OMRON"
// });

// Product.insertMany({
//     name: "OMRON-CP1L",
//     image: "https://i.postimg.cc/hGyXhPTy/cp1l.jpg",
//     description: ` "CP1L-EM" and "CP1L-EL" have complete with a Ethernet port.
//     • Pulse output for two axes. Advanced power for high-precision positioning control.
//     • High-speed Counters. Single-phase for four axes.
//     • Six interrupt inputs are built in. Faster processing of instructions speeds up the entire system.
//     • Serial Communications. Two ports. Select Option Boards for either RS-232C or RS-485 communications.
//     • "CP1L-M" and "CP1L-L" have a peripheral USB port.
//     • The Structured Text (ST) Language. Makes math operations even easier.
//     • Can be used for the CP1W series Unit. The extendibility of it is preeminently good.
//     • LCD displays and settings. Enabled using Option Board.
//     `,
//     category:"PLC",
//     company:"OMRON"
// });

// Product.insertMany({
//     name: "OMRON-CP1H",
//     image: "https://i.postimg.cc/zB43StdT/cp1h.jpg",
//     description: `• Pulse output for 4 axes. Advanced power for high-precision positioning control.
//     • High-speed counters. Differential phases for 4 axes. Easily handles multi-axis control with a single unit.
//     • Eight interrupt inputs are built in. Faster processing of approximately 500 instructions speeds up the entire system.
//     • Serial communications. Two ports. Select Option Boards for either RS-232C or RS-485 communications.
//     • Ethernet Communications. Enabled by using an Option Board. Two ports can be used as an Ethernet port to perform. Ethernet communications between the CP1H and a host computer.
//     • Built-in Analog I/O. XA CPU Units provide 4 input words and 2 output words.
//     • USB Peripheral Port. Another standard feature.
//     • The structured text (ST) language. Makes math operations even easier.
//     • Can be used for the CP1W series and CJ series Unit. The extendibility of it is preeminently good.
//     • LCD displays and settings. Enabled using Option Board.
//     `,
//     category:"PLC",
//     company:"OMRON"
// });

// Product.insertMany({
//     name: "DOP 100 SERIES",
//     image: "https://i.postimg.cc/HW2R0vYX/DOP-107-WV-M.jpg",
//     description: `Delta’s Advanced Ethernet Human Machine Interface DOP-100 Series adopts the latest Cortex-A8 high-speed processor and display panel with high brightness, high contrast and high color. 
//     With the coming era of smart manufacturing, cloud applications are becoming more popular. For customers that are beginning to step into the cloud, DOP-100 Series features built-in Ethernet and other applicable network functions, including FTP, E-Mail, remote monitoring and control with VNC (Virtual Network Computing), and NTP (Network Time Protocols). 
//     The DOP-100 Series supports 16 languages input to achieve localized operation for global customers.
//     `,
//     category:"HMI",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "DOP-B SERIES",
//     image: "https://i.postimg.cc/FsC68fJK/DOP-B03-E211-M.jpg",
//     description: `The DOP Series Human Machine Interface (HMI) provides various touch screens with multiple dimensions and colors. It also offers fast and convenient control functions for industrial automation machines. 
//     In addition, Delta Windows-based and user-friendly DOPSoft Screen Editor and Programming Software configures the whole DOP Series. With DOPSoft, users can quickly edit images and graphs and easily set suitable communication protocol. 
//     More applications can be created, edited, downloaded and uploaded.
//     `,
//     category:"HMI",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "DOP-W Series",
//     image: "https://i.postimg.cc/L5XT3TD3/DOP-W105-B-M.jpg",
//     description: `The DOP-W Series is a large Human Machine Interface (HMI) that comes with a high resolution and high brightness touch screen in 10.4”, 12” and 15” sizes. With the latest Cortex-A8 processor for up to 1GHz pulse wave, the DOP-W Series delivers high performance with rapid response. 
//     Its rugged and CE-certified aluminum enclosure protects from vibration and changing ambient temperatures, and features an IP65 waterproof front panel for harsh environments. Built-in stereo speakers increase utility and flexibility. 
//     The DOP-W Series complies with CE and UL safety approvals and provides an efficient and competitive solution to meet customer needs for a wide range of high-end industrial automation applications.
//     `,
//     category:"HMI",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "TP Series",
//     image: "https://i.postimg.cc/VvVFGCHQ/TP-70P-M.jpg",
//     description: `The TP70P Series adopts a 65535 colors LCD touchscreen, supports Delta’s controllers, and can be connected to all series of Delta’s AC servo drives, AC motor drives, and temperature controllers. 
//     With four models providing different I/O configurations and supporting various output types, the TP70P Series’ high flexibility saves wiring cost and offers the best HMI and I/O control solution.
//     `,
//     category:"HMI",
//     company:"DELTA"
//});
// Product.insertMany({
//     name: "GOT1000 Series",
//     image: "https://i.postimg.cc/L4WCVJYB/download.jpg",
//     description: ``,
//     category:"HMI",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "GOT2000 Series",
//     image: "https://i.postimg.cc/T3VtGQkC/R8280529-01.jpg",
//     description: ``,
//     category:"HMI",
//     company:"MITSUBISHI"
// });

// Product.insertMany({
//     name: "ASDA-A",
//     image: "https://i.postimg.cc/d0qX7gph/ASDA-A.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "ASDA-A2",
//     image: "https://i.postimg.cc/VNDhXDPD/asda-a2.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "ASDA-AB",
//     image: "https://i.postimg.cc/FR6nBzRS/delta-asda-ab.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "ASDA-B",
//     image: "https://i.postimg.cc/SxL3xmT0/delta-asda-b.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "ASDA-B2",
//     image: "https://i.postimg.cc/wvMG2L6H/delta-asda-b2.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "All other servo drive",
//     image: "https://i.postimg.cc/wjYnz1kc/all-other-servo-drive.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"DELTA"
// });

// Product.insertMany({
//     name: "melservo-j3",
//     image: "https://i.postimg.cc/g04YrCcJ/melservo-j3.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "melservo-j4",
//     image: "https://i.postimg.cc/JnnRXptQ/melservo-j4.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "melservo-j5",
//     image: "https://i.postimg.cc/kM2b3cw8/melservo-j5.png",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "melservo-je",
//     image: "https://i.postimg.cc/8cfDKsRJ/melservo-je.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "melservo-jn",
//     image: "https://i.postimg.cc/nzPpGqDf/melservo-jn.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "All other servo drives",
//     image: "https://i.postimg.cc/jjRxxxbm/all-other-servo-drives.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "SINAMICS S2101FK2 SERIES",
//     image: "https://i.postimg.cc/J41t755P/SIEMENS-SINEMICS-S2101-FK2-SERIES.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "SINAMICS-S120",
//     image: "https://i.postimg.cc/fW7JhrmV/siemens-drive-sinamics-s120.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "All other servo drives",
//     image: "https://i.postimg.cc/prBTYmRf/all-other-servo-drive.jpg",
//     description: ``,
//     category:"SERVO DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "DELTA C2000 AC DRIVE",
//     image: "https://i.postimg.cc/CdpSJWzf/C2000-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "DELTA MS300 INVERTER DRIVE",
//     image: "https://i.postimg.cc/yxZ7mVYH/MS300-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "DELTA CP2000 INVERTER DRIVE",
//     image: "https://i.postimg.cc/Y2GFnYvp/CP2000-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "ALL OTHER DELTA VFD’S",
//     image: "https://i.postimg.cc/PxctvLHy/ALL-OTHER-DELTA-DRIVE.png",
//     description: `The TP70P Series adopts a 65535 colors LCD touchscreen, supports Delta’s controllers, and can be connected to all series of Delta’s AC servo drives, AC motor drives, and temperature controllers. 
//     With four models providing different I/O configurations and supporting various output types, the TP70P Series’ high flexibility saves wiring cost and offers the best HMI and I/O control solution.`,
//     category:"AC DRIVES",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "MITSUBISHI FR-A SERIES",
//     image: "https://i.postimg.cc/NjYdmBgv/MITSUBISHI-FR-A-SERIES.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "MITSUBISHI FR-A800 PLUS SERIES",
//     image: "https://www.betech.co.uk/assets/ProductImages/_resampled/PadWyI0MDAiLCIzMDAiLCJGRkZGRkYiLDBd/A800.jpg",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "MITSUBISHI FR-F SERIES",
//     image: "https://i.postimg.cc/2Sw2xM6b/FR-F-SERIES.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "MITSUBISHI FR-D SERIES",
//     image: "https://i.postimg.cc/9M4bCfBZ/FR-D-SERIES.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "MITSUBISHI FR-E SERIES",
//     image: "https://i.postimg.cc/ry0ZLfh3/FR-E-SERIES.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "MITSUBISHI FR-CS SERIES",
//     image: "https://i.postimg.cc/1RkCRD2t/FR-CS-SERIES.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "ALL OTHER MITSUBISHI DRIVES",
//     image: "https://i.postimg.cc/3R6LvGwt/ALL-OTHER.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "SIEMENS V20 AC DRIVE",
//     image: "https://i.postimg.cc/sX6NV8SG/V20-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "SIEMENS SINAMICS G120 DRIVE",
//     image: "https://i.postimg.cc/XYdmwsMt/G120-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "SIEMENS SINAMICS G130 SERIES",
//     image: "https://i.postimg.cc/5tJGp8by/G130-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "SIEMENS G110 SERIES",
//     image: "https://i.postimg.cc/jjh11CSX/G110-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "ALL OTHER SIEMENS AC DRIVES",
//     image: "https://i.postimg.cc/GhBZpcXL/ALLOTHER-DRIVE.png",
//     description: ``,
//     category:"AC DRIVES",
//     company:"SIEMENS"
// });
// Product.insertMany({
//     name: "VOLTMETER",
//     image: "https://i.postimg.cc/ZqBqJkXX/voltmeter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "AMPERE METER",
//     image: "https://i.postimg.cc/fRH3wfyS/ampere-meter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "RPM METER",
//     image: "https://i.postimg.cc/0yHQg5Xp/rpm-meter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "COUNTER METER",
//     image: "https://i.postimg.cc/P5qxFvyX/counter-meter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "TIMERS",
//     image: "https://i.postimg.cc/CLSdkQff/timer.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "PID CONTROLLER",
//     image: "https://i.postimg.cc/YqR03z1D/pid-controller.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "RPM METER",
//     image: "https://i.postimg.cc/0N412b7C/rpm-meter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "AMPERE METER",
//     image: "https://i.postimg.cc/zXY5gb6t/ampere-meter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "VOLTMETER",
//     image: "https://i.postimg.cc/yYK4dq32/voltmeter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "VOLT-AMP-FREQ METER",
//     image: "http://img.directindustry.com/images_di/photo-g/85325-11516825.jpg",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "PID CONTROLLER",
//     image: "https://i.postimg.cc/m2Sx1dQk/pid-controller.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "TIMERS",
//     image: "https://i.postimg.cc/NF134DSN/timer.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "COUNTER METER",
//     image: "https://i.postimg.cc/bJ2cGpTf/counter-meter.png",
//     description: ``,
//     category:"SWITCHGEARS",
//     company:"SELEC"
// });
// Product.insertMany({
//     name: "NO PUSH BUTTONS",
//     image: "https://i.postimg.cc/g2BFcGq6/NO-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "NC PUSH BUTTONS",
//     image: "https://i.postimg.cc/kg5Pd28m/NC-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "ILLUMINATED NC PUSH BUTTON",
//     image: "https://5.imimg.com/data5/WD/HH/RG/SELLER-4162494/illuminated-push-button-500x500.jpg",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "ILLUMINATED NO PUSH BUTTONS",
//     image: "https://5.imimg.com/data5/MY/HY/FK/SELLER-4584413/push-button-switches-illuminated-and-non-flush-500x500.jpg",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "EMERGENCY SWITCH",
//     image: "https://i.postimg.cc/hPsRwLXs/EMERGENCY-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"AUTONICS"
// });

// Product.insertMany({
//     name: "NO PUSH BUTTONS",
//     image: "https://i.postimg.cc/C10s8qwB/NO-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "NC PUSH BUTTONS",
//     image: "https://i.postimg.cc/hvP8yRzK/NC-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "ILLUMINATED NC PUSH BUTTON",
//     image: "https://i.postimg.cc/BndgqzyC/ILLUMINATED-NC-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "ILLUMINATED NO PUSH BUTTONS",
//     image: "https://i.postimg.cc/0QCd0yNt/ILLUMINATED-NO-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "EMERGENCY SWITCH",
//     image: "https://i.postimg.cc/J4YxF05v/EMERGENCY-PUSH-BUTTON.png",
//     description: ``,
//     category:"PUSH BUTTON",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "SELECTOR SWITCH (2 POSITION)",
//     image: "https://i.postimg.cc/d0FhWGDJ/selector-switch-2-position.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "SELECTOR SWITCH (3 POSITION)",
//     image: "https://i.postimg.cc/tTS7Cfkg/selector-switch-3-position.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "ILLUMINATED SELECTOR SWITCH (2 POSITION)",
//     image: "https://i.postimg.cc/Qd1Bkf86/illuminated-selector-swich.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "ILLUMINATED SELECTOR SWITCH (3 POSITION)",
//     image: "https://shop.industrialemart.com/image/cache/catalog/A204F-3G-800x800.jpg",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "KEY SELECTOR SWITCH",
//     image: "https://i.postimg.cc/pdBp3ynz/key-selector-switch.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"AUTONICS"
// });
// Product.insertMany({
//     name: "SELECTOR SWITCH (2 POSITION)",
//     image: "https://i.postimg.cc/Ss3dYZNy/2-position-selector-switch.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "SELECTOR SWITCH (3 WAY)",
//     image: "https://i.postimg.cc/05Kc1qcr/3-position-selector-switch.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "KEY SELECTOR SWITCH",
//     image: "https://i.postimg.cc/rF6g8YPj/key-selector-switch.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"SCHNEIDER"
// });
// Product.insertMany({
//     name: "ILLUMINATED SELECTOR SWITCH",
//     image: "https://i.postimg.cc/wMNVXh7D/illuminated-selector-switch.png",
//     description: ``,
//     category:"SELECTOR SWITCH",
//     company:"SCHNEIDER"
// });
// Product.find({},(err,products)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(products);
// });


// Routes
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/categories/:categorytype",(req,res)=>{
    const categoryType=req.params.categorytype;
    Product.find({category:categoryType},(err,products)=>{
        if(err){
            console.log(err);
        }
        res.render("categoryProd.ejs",{products:products,categoryType:categoryType});  
    })
});

app.get("/categories/:categorytype/:company/:prodId",(req,res)=>{
    const categoryType=req.params.categorytype;
    const prodId=req.params.prodId;
    Product.findById(prodId,(err,product)=>{
        if(err){
            console.log(err);
        }
        // console.log(product);
        res.render("product.ejs",{product:product});  
    })
})

app.post("/",(req,res)=>{
    var name=req.body.txtName;
    var email=req.body.txtEmail;
    var sub=req.body.txtSubject;
    var msg=req.body.txtMsg;
    console.log(email);
    console.log(msg);
    console.log(name);
    console.log(sub);
    var data = {
        from: name+ "<"+email+">",
        to: "evolteam86@gmail.com",
        subject: sub,
        text: msg
      };
       
      mailgun.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
            res.redirect("/");
            // alert("message not send due to technical issue!!!");
        }else{
            res.redirect("/");
            // alert("message send!");
            console.log(body);
        }
        
      });
})

app.listen(8000,()=>{
    console.log("server started on port 8000");
});