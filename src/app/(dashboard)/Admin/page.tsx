import UserCard from "@/components/UserCard";
import CountCharts from "@/components/CountCharts";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalender from "@/components/EventCalender";

const Admin = () => {
  return (
    <div className="p-2 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className=" w-full lg:w-2/3 bg-gray-200 p-2  rounded-md" >
        {/* USERS-CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="parents" />
          <UserCard type="teachers" />
          <UserCard type="staff" />
        </div>
        <div className="flex flex-col items-center justify-evenly lg:flex-row flex-nowrap bg-transparent mt-2" >
          {/* COUNT CHART */}
          <div className="w-full lg:w-[33%] text-[7px]  lg:text-xs">
            <CountCharts />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full p-2 lg:w-[63%]   " >
            <AttendanceChart />
          </div>
        </div>
        {/* FINANCE CHART */}
        <div className="h-52 py-4 text-[8px] lg:text-xs  lg:h-80 border-t-2 bg-white mt-4 rounded-lg pr-2 " >
          <FinanceChart/>
        </div>
      </div>
      {/* RIGHT */}
      {/* EVENT CALENDER */}
      <div className="w-full lg:w-1/3 h-ful bg-white rounded-md ">
      <EventCalender/>
      </div>
    </div>
  );
}

export default Admin