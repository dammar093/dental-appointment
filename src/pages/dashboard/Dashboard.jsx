import DashboardCard from "../../components/dashboard-card/DashboardCard"
import SideBar from "../../components/sidebar/SideBar"
import { FaRegFile, FaRegUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";


const Dashbaord = () => {

  return (
    <div className='w-full relative flex min-h-screen'>
      <div className="hidden md:block">
        <SideBar />
      </div>
      <div className='m-0 mt-4 mx-2 w-full '>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <DashboardCard color="text-red-600" bg="bg-red-100" bg1="bg-red-300" Icon={FaRegFile} count={100} title="total appointments" />
          <DashboardCard color="text-blue-600" bg="bg-blue-100" bg1="bg-blue-300" Icon={FaUserDoctor} count={100} title="total doctors" />
          <DashboardCard color="text-green-600" bg="bg-red-100" bg1="bg-green-300" Icon={FaRegUser} count={100} title="total patients" />
          <DashboardCard color="text-pink-600" bg="bg-pink-100" bg1="bg-pink-300" Icon={GrServices} count={100} title="total services" />

        </div>
      </div>
    </div>
  )
}

export default Dashbaord