import usaFlag from "../../../assets/flags/Flag_of_United_States-64x34.png";
import canadaFlag from "../../../assets/flags/Flag_of_Canada-64x32.png";
import brasilFlag from "../../../assets/flags/Flag_of_Brazil-64x45.png";
import mexicoFlag from "../../../assets/flags/Flag_of_Mexico-64x37.png";
import spainFlag from "../../../assets/flags/Flag_of_Spain-64x43.png";
import franceFlag from "../../../assets/flags/Flag_of_France-64x43.png";
import germanyFlag from "../../../assets/flags/Flag_of_Germany-64x38.png";
import swissFlag from "../../../assets/flags/Flag_of_Switzerland-64x64.png";
import chinaFlag from "../../../assets/flags/Flag_of_Peoples_Republic_of_China-64x43.png";
import indonesiaFlag from "../../../assets/flags/Flag_of_Indonesia-64x43.png";
import indiaFlag from "../../../assets/flags/Flag_of_India-64x43.png";
import bengaliFlag from "../../../assets/flags/Flag_of_Bangladesh-64x38.png";
import malayFlag from "../../../assets/flags/Flag_of_Malaysia-64x32.png";
import nepalFlag from "../../../assets/flags/Flag_of_Nepal-64x78.png";
import saudiFlag from "../../../assets/flags/Flag_of_Saudi_Arabia-64x43.png";
import africaFlag from "../../../assets/flags/Flag_of_South_Africa-64x43.png";
import nigeriaFlag from "../../../assets/flags/Flag_of_Nigeria-64x32.png";
import australiaFlag from "../../../assets/flags/Flag_of_Australia-64x32.png";
import newZelandFlag from "../../../assets/flags/Flag_of_New_Zealand-64x32.png";


const GlobalCommunity = () => {
    return (
        <div className="text-center p-20 bg-gradient-to-r from-cyan-100 to-blue-100">
            <h1 className="text-3xl font-bold mb-2">Join our global community</h1>
            <p className="text-md font-bold mb-2 text-gray-600">We provide the best service that comes with the best results.</p>
          
            <div className="grid grid-cols-2 lg:grid-cols-5 justify-center gap-10">
                <div className="continent flex flex-col gap-4">
                <h1 className="text-xl">America</h1>
                <div className="flex gap-2">
                    <img src={usaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>United States</p>
                </div>
                <div className="flex gap-2">
                    <img src={canadaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Canada</p>
                </div>
                <div className="flex gap-2">
                    <img src={brasilFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Brasil</p>
                </div>
                <div className="flex gap-2">
                    <img src={mexicoFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Mexico</p>
                </div>
                </div>
                <div className="continent flex flex-col gap-4">
                <h1 className="text-xl">Europe</h1>
                <div className="flex gap-2">
                    <img src={spainFlag} alt="" className="h-6 w-8 rounded"/>
                    <p>Spain</p>
                </div>
                <div className="flex gap-2">
                    <img src={franceFlag} alt="" className="h-6 w-8 rounded" />
                    <p>France</p>
                </div>
                <div className="flex gap-2">
                    <img src={germanyFlag} alt="" className="h-6 w-8 rounded"/>
                    <p>Germany</p>
                </div>
                <div className="flex gap-2">
                    <img src={swissFlag} alt="" className="h-6 w-8 rounded"/>
                    <p>Switzerland</p>
                </div>
                </div>
                <div className="continent flex flex-col gap-4">
                <h1 className="text-xl">Asia</h1>
                <div className="flex gap-2">
                    <img src={chinaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>China</p>
                </div>
                <div className="flex gap-2">
                    <img src={indonesiaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Indonesia</p>
                </div>
                <div className="flex gap-2">
                    <img src={indiaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>India</p>
                </div>
                <div className="flex gap-2">
                    <img src={bengaliFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Bangladesh</p>
                </div>
                <div className="flex gap-2">
                    <img src={malayFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Malaysia</p>
                </div>
                <div className="flex gap-2">
                    <img src={nepalFlag} alt="" className="h-6 w-8 rounded"/>
                    <p>Nepal</p>
                </div>
                <div className="flex gap-2">
                    <img src={saudiFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Saudi Arabia</p>
                </div>
                </div>
                <div className="continent flex flex-col gap-4">
                <h1 className="text-xl">Africa</h1>
                <div className="flex gap-2">
                    <img src={africaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>South Africa</p>
                </div>
                <div className="flex gap-2">
                    <img src={africaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>South Africa</p>
                </div>
                <div className="flex gap-2">
                    <img src={nigeriaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Nigeria</p>
                </div>
                <div className="flex gap-2">
                    <img  src={nigeriaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Nigeria</p>
                </div>
             
           
                </div>
                <div className="continent flex flex-col gap-4">
                <h1 className="text-xl">Australia</h1>
                <div className="flex gap-2">
                    <img src={australiaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Australia</p>
                </div>
                <div className="flex gap-2">
                    <img src={newZelandFlag} alt="" className="h-6 w-8 rounded" />
                    <p>New Zealand</p>
                </div>
                <div className="flex gap-2">
                    <img src={australiaFlag} alt="" className="h-6 w-8 rounded" />
                    <p>Australia</p>
                </div>
                <div className="flex gap-2">
                    <img  src={newZelandFlag} alt="" className="h-6 w-8 rounded" />
                    <p>New Zealand</p>
                </div>
             
           
                </div>
             
            </div>
        </div>
    );
};

export default GlobalCommunity;
