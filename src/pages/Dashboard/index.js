import ActiveResearchRequests from "components/Dashboard/ActiveResearchRequests";
import IndustryDistribution from "components/Dashboard/IndustryDistribution";
import RecentStories from "components/Dashboard/RecentStories";
import Stats from "components/Dashboard/Stats";
import ValuesToUphold from "components/Dashboard/Values";
import YourActivity from "components/Dashboard/YourActivity";
import YourTeam from "components/Dashboard/YourTeam";
import PageHeader from "components/Layout/PageHeader";
import { getDashboardStats } from "config/APIs/dashboard";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState({});
  const getStats = async () => {
    try {
      let res = await getDashboardStats();
      let data = res?.data?.data;
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className="sticky-thc h-[90vh] lg:h-auto">
      <PageHeader name="Dashboard" />

      <div className="bg-primary-neutral-50">
        <div className="grid lg:grid-cols-2 gap-6 p-2 max-w-7xl mx-auto">
          <RecentStories />
          <ActiveResearchRequests />
          <div className="lg:col-span-2">
            <Stats stats={data?.stats} />
          </div>
          <ValuesToUphold />
          <YourTeam />
          <div className="lg:col-span-2 grid gap-6 lg:flex flex-row items-stretch">
            <YourActivity research={data?.research} />
            <IndustryDistribution industries={data?.industryTypes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
