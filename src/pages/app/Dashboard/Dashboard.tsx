import DayOrdersAmountCard from "./day-orders-amount-card";
import MonthCanceledOrdersCard from "./month-canceled-orders-card";
import MonthOrdersAmountCard from "./Month-orders-amount-card";
import MonthRevenueCard from "./Month-revenue-card";
import PopularProductsChart from "./popular-products-chart";
import RevenueChart from "./revenue-chart";


export function Dashboard() {
  
  return (
    <div className="flex min-h-screen w-full flex-col gap-4">
      <title>Dashboard</title>
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersCard />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-9">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  );
}
